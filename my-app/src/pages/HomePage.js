import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from '../components/home/Home'

const HomePage = () => {

    // Http 요청 (fetch, axios(다운))
    // 변수는 웬만하면 컴포넌트가 아닌 페이지가 들고 있게 하자
    const [boards, setBoards] = useState([]);
    const [number, setNumber] = useState(0);
    const [user, setUser] = useState({})
    
    useEffect(() => {
        // 다운로드를 가정한 테스트
        // fetch(), axios(), ajax()
        let data = [
            {id:1, title:"제목1", content:"내용1"},
            {id:2, title:"제목2", content:"내용2"},
            {id:3, title:"제목3", content:"내용3"},
        ]
        
        // 다운로드가 완료되지 않은 처음에는 빈데이터가 들어간다.
        // 다운로드가 완료된 후 새로 그림을 그린다. => 상태값으로 넣어줘야하는 이유
        // 상태값이 아닌 변수로 넣으면 다운로드 완료된 값이 새로 들어가지 않는다!!!
        setBoards([...data]);
        setUser({id:1, username:"park"})
    }, []);

    // 컴포넌트 태그에 속성으로 넘길 수 있다.
    return (
        <Home boards={boards} setBoards={setBoards} 
        number={number} setNumber={setNumber}
        user={user}/> 
    );
};

export default HomePage;