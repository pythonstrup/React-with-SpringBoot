package com.bigbell.book.domain;

import org.springframework.data.jpa.repository.JpaRepository;

// @Repository를 적어야 스프링 IoC의 빈으로 등록이 되는데 
// JpaRepository를 extends하면 생략 가능
// JpaRepository는 CRUD 함수를 들고 있다.
public interface BookRepository extends JpaRepository<Book, Long> {

}
