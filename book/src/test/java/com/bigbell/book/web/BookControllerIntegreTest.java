package com.bigbell.book.web;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.transaction.annotation.Transactional;

import com.bigbell.book.domain.Book;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.extern.slf4j.Slf4j;

/**
 * 통합테스트 (모든 Bean들을 IoC에 올리고 테스트 하는 것)
 * WebEnvironment.MOCK => 실제 톰캣을 올리는 게 아니라, 다른 톰켓으로 테스트(가짜 톰켓)
 * WebEnvironment.RANDOM_PORT => 실제 톰캣으로 테스트
 * @AutoConfigureMockMvc 가 MockMvc가 IoC에 빈으로 등록해준다.
 * @Transactional 은 각 테스트함수가 종료될 때마다 트랜재겻ㄴ을 rollback해주는 어노테이션
 * Controller 단위테스트에서는 실제 DB에 insert되지 않지만 통합테스트는 insert가 실제로 DB에 실행된다. 
 */

@Slf4j
@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment=WebEnvironment.MOCK)
public class BookControllerIntegreTest {
	
	@Autowired
	private MockMvc mockMvc;	
	
	// BDDMockito 패턴 - given, when, then
		@Test
		public void save_test() throws Exception {
			// given (테스트를 하기 위한 준비가 필요)
			Book book = new Book(null, "cosmos", "park");
			String content = new ObjectMapper().writeValueAsString(book); // json 형태로 만듬
			
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
