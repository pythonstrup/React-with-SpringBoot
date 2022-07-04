package com.bigbell.book.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bigbell.book.domain.Book;
import com.bigbell.book.service.BookService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class BookController {

	private final BookService bookService;
	
	@PostMapping("/book") // @RequestBody를 통해 Json으로 데이터를 받음
	public ResponseEntity<?> save(@RequestBody Book book) {
		return new ResponseEntity<>(bookService.save(book), HttpStatus.OK); // 200
	}
	
	@GetMapping("/book")
	public ResponseEntity<?> findAll() {
		return new ResponseEntity<>(bookService.read_all(), HttpStatus.OK); // 200
	}
	
	@GetMapping("/book/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id) {
		return new ResponseEntity<>(bookService.read(id), HttpStatus.OK); // 200
	}
	
	@PutMapping("/book/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book) {
		return new ResponseEntity<>(bookService.revise(id, book), HttpStatus.OK); // 200
	}
	
	@DeleteMapping("/book/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		return new ResponseEntity<>(bookService.delete(id), HttpStatus.OK); // 200
	}
}


// 제네릭에서의 "?"는 와일드카드(wildcard)로 이름에 제한을 두지 않음을 표현하는 데 사용되는 기호를 의미한다.
// 링크: https://lordofkangs.tistory.com/32










