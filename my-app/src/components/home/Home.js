import React from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap'

const StyledDeleteButton = styled.button`
    color: ${(props) => (props.user.username === "park" ? "green": "red")};
`;

// 상속해 사용할 수 있다.
const StyledAddButton = styled(StyledDeleteButton)`
    background-color: yellow;
`;

// Function 방식 => 컴포넌트로 전달된 속성을 이용할 수 있다.
// 부모로부터 받아온 데이터를 가지고 스타일링을 동적으로 한다.
const Home = (props) => {
    console.log(props);
    
    // 구조분할 할당
    const {boards, setBoards, number, setNumber, user} = props;
    console.log(boards)

    return (
        <div>
            <h1>홈: {number}</h1>
            <Button variant="primary">Primary</Button>{' '}
            <StyledAddButton user={user} onClick={() => setNumber(number+1)}>번호증가</StyledAddButton>
            <StyledDeleteButton user={user} onClick={() => setBoards([])}>전체삭제</StyledDeleteButton>
            {boards.map((board)=>
                <h3 key={board.id}>제목: {board.title},  내용:{board.content}</h3>
            )}
        </div>
    );
};

export default Home;
