import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

const Home = () => {

    const [books, setBooks] = useState([]);

    // 함수 실행 시 최초 한 번 실행되는 것
    useEffect(() => {
        // 비동기 함수 - 다운로드 때문에 컴포넌트를 그릴 수 없으니 일단 그림부터 그리게 도와줌
        fetch("http://localhost:8080/book", {
            method: "GET" // Default가 Get이라 사실 안 적어도 된다.
        }).then(res => res.json()).then(res => {
            setBooks(res);
        }); 
    }, []);

    return (
        <div>
            {books.map((book) => (
                <BookItem key={book.id} book={book}/>
            ))}
        </div>
    );
};

export default Home;