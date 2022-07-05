package com.bigbell.book.web;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import com.bigbell.book.domain.Book;
import com.bigbell.book.service.BookService;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

/**
 * 단위 테스트 (Controller 관련 로직만 테스트 -> Controller, Filter, ControllerAdvice)
 * @ExtendWith(SpringExtension.class) 스프링 환경으로 확장해 테스트해준다. @WebMvcTest에 이미 붙어있다.
 * @AutoConfigureMockMvc는 @WebMvcTest가 포함되어 있다.
 */

@Slf4j
@WebMvcTest  // Controller를 위한 객체를 띄워줌
public class BookControllerUnitTest {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean // IoC 환경에 가짜 빈이 등록됨
	private BookService bookService;
	
	// BDDMockito 패턴 - given, when, then
	@Test
	public void save_test() throws Exception {
		// given (테스트를 하기 위한 준비가 필요)
		Book book = new Book(null, "cosmos", "park");
		String content = new ObjectMapper().writeValueAsString(book); // json 형태로 만듬
		when(bookService.save(book)).thenReturn(new Book(1L, "cosmos", "park"));
		
		// when (테스트 실행)
		ResultActions resultAction = mockMvc.perform(post("/book")
				.contentType(MediaType.APPLICATION_JSON_UTF8)
				.content(content)
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		// then (검증)
		resultAction
			.andExpect(status().isCreated())
			.andExpect(jsonPath("$.title").value("cosmos"))
			.andDo(MockMvcResultHandlers.print());
	}
}
