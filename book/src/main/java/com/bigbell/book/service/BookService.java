package com.bigbell.book.service;

import java.util.List;
import java.util.function.Supplier;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bigbell.book.domain.Book;
import com.bigbell.book.domain.BookRepository;

import lombok.RequiredArgsConstructor;

// Service로 등록되면 기능을 정의할 수 있고 트랜잭션 관리가 가능

@RequiredArgsConstructor
@Service
public class BookService {

	private final BookRepository bookRepository;
	
	@Transactional // 서비스 함수 종료될 때 commit할 지 rollback할 지 트랜잭션 관리하겠다.
	public Book save(Book book) {
		return bookRepository.save(book);
	}
	
	// readOnly: JPA는 '변경감지'라는 내부 기능을 비활성화함 - 효율성 굳. update 시의 정합성을 유지해줌 
	@Transactional(readOnly=true) // 그러나 insert의 유령데이터현상(팬텀현상)을 막지 못한다.
	public Book read(Long id) {
		return bookRepository.findById(id) // 람다식 사용
				.orElseThrow(()->new IllegalArgumentException("id를 확인해주세요"));
	}
	
	@Transactional(readOnly=true)
	public List<Book> read_all() {
		return bookRepository.findAll();
	}
	
	@Transactional
	public Book revise(Long id, Book book) {
		// 더티체킹으로 업데이트하기
		Book bookEntity = bookRepository.findById(id) // 영속화 -> 영속성 컨텍스트 보관
				.orElseThrow(()->new IllegalArgumentException("id를 확인해주세요")); 
		
		bookEntity.setTitle(book.getTitle());
		bookEntity.setAuthor(book.getAuthor());
		return bookEntity;
	} // 함수가 종료되면 트랜잭션도 종료되고 영속화 되어있는 데이터를 DB로 갱신(Flush)한다.
	// 그러면 commit이 진행된다. 이것을 더티체킹이라고 한다.
	
	@Transactional
	public String delete(Long id) {
		bookRepository.deleteById(id); // 오류가 발생하면 Exception을 자동으로 들어감
		return "OK";
	}
}













