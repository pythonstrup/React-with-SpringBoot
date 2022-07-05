package com.bigbell.book.service;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.bigbell.book.domain.BookRepository;

/**
 * 단위테스트 (Service와 관련된 애들만 메모리에 가져오 => ex) BookRepository)
 * BookRepository => @ExtendWith(MockitoExtension.class)를 이용해 가짜 객체로 만들 수 있다.
 *
 */

@ExtendWith(MockitoExtension.class)
public class BookServiceUnitTest {

	@InjectMocks // BookService 객체가 만들어질 때 해당 파일에 @Mock로 등록된 모든 애들을 주입받는다.
	private BookService bookService;
	
	@Mock
	private BookRepository bookRepository;
}
