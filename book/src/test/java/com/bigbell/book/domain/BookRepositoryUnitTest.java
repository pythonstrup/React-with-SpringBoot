package com.bigbell.book.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.transaction.annotation.Transactional;

// 단위테스트 (DB 관련된 Bean만 IoC에 등록되면 된다.)

@Transactional
@AutoConfigureTestDatabase(replace=Replace.ANY) // Replace.ANY는 가짜 DB로 테스트 / Replace.NONE은 실제 DB 사용
@DataJpaTest // Repository들을 모두 IoC에 등록해주기 때문에 밑에서 @Mock이 아닌 @Autowired가 가능
public class BookRepositoryUnitTest {

	@Autowired
	private BookRepository bookRepository;
}
