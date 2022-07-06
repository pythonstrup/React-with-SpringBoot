import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to="/" className='navbar-brand'>Home</Link>
                <Nav className="me-auto">
                    <Link to="/joinForm" className='nav-link'>회원가입</Link>
                    <Link to="/loginForm" className='nav-link'>로그인</Link>
                    <Link to="/saveForm" className='nav-link'>글쓰기</Link>
                </Nav>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
            <br/>
        </Navbar>
    </>
    );
};

export default Header;