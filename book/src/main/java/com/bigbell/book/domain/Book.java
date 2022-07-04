package com.bigbell.book.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
//서버 실행 시에 Object Relation Mapping이 된다.
@Entity // 즉 h2에 테이블이 생성된다는 의미
public class Book {
	@Id // PK를 해당 변수로 매칭
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 해당 데이터베이스 번호증가 전략을 따라감
	private Long id;
	
	private String title;
	private String author;
	
}
