import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용)

// styled-components => js파일과 css파일이 하나로 합쳐지기 때문에 관리가 편하다.
const HeaderList = styled.div`
    border: 1px solid black;
    height: 300px;
    background-color: ${(props) => props.backgroudcolor};
    color: white;
`;

// Link는 styled에 포함되지 않기 때문에 상속받아서 처리해준다.
const StyledHeadLink = styled(Link)`
    color: yellow;
`;

// <a>태그를 사용하면 전체가 새로고침 되지만
// router와 <Link>태그 사용하면 <Routes>에 포함된 컴포넌트만 바꿔치기 된다.
const Header = () => {
    return (
        <HeaderList backgroudcolor={"blue"}>
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                        <Link to="/" className='nav-link'>홈</Link>
                        <Link to="/Login" className='nav-link'>로그인</Link>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        </Container>
                    </Navbar>
                </>
            </div>

            <ul>
                <li><StyledHeadLink to="/">메뉴: 홈페이지</StyledHeadLink></li>
                <li><StyledHeadLink to="/login/10">메뉴: 로그인</StyledHeadLink></li>
            </ul>
        </HeaderList>
    );
};

export default Header;