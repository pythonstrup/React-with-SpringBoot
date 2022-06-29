import React, { useState } from 'react';
import styled from "styled-components";

const ListPage = () => {

    const [no, setNo] = useState(6);

    const StyledItemBoxDiv = styled.div`
        display: flex;
        justify-content: space-between;
        border: 1px solid black;
        padding: 10px;
        height: 100px;
        margin: 20px;
        align-items: center;
    `;

    const [post, setPost] = useState({
        id: no,
        title: "",
        content: "",
    })

    const [posts, setPosts] = useState([
        {id:1, title:"제목1", content:"내용1"},
        {id:2, title:"제목2", content:"내용2"},
        {id:3, title:"제목3", content:"내용3"},
        {id:4, title:"제목4", content:"내용4"},
        {id:5, title:"제목5", content:"내용5"},
    ]);

    const handleWrite = () => {
        setPosts([...posts, {...post, id: no}]);
        setNo(no+1);
    }

    const handleForm = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        // computed property names문법 (키값 동적할당)
        setPost({
            ...post,  // 기존값을 spread를 해줘야 덮어쓰기된다. 안써주면 해당 값만 있는 객체가 되버림
            [e.target.name]: e.target.value

        });
        console.log(post.title);
        console.log(post.content);
    }

    return (
        <div>
            <h1>글목록 페이지</h1>
            <hr/>
            <form>
                <input type="text" placeholder="제목을 입력하세요" 
                    value={post.title} onChange={handleForm} name="title"/>
                <input type="text" placeholder="내용을 입력하세요" 
                    value={post.content} onChange={handleForm} name="content"/>

                <button type="button" onClick={handleWrite}>글쓰기</button>
            </form>
            <hr/>
            {posts.map((post) => 
                <StyledItemBoxDiv>
                    <div>
                        번호: {post.id} / 제목: {post.title} / 내용: {post.content}
                    </div>
                    <button onClick={1}>삭제</button>
                </StyledItemBoxDiv>)}
        </div>
    );
};

export default ListPage;