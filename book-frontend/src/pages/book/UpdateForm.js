import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {

    const {id} = useParams();

    const [book, setBook] = useState({
        title: "",
        author: "",
    });

    useEffect(() => {
        fetch("http://localhost:8080/book/"+id)
        .then(res=>res.json())
        .then(res => {
            setBook(res);
        });
    }, []);

    const changeValue = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        });
    };

    // 이제 useHistory()와 props.history.push()를 사용할 수 없다.
    const navigate = useNavigate();

    const submitBook = (e) => {
        e.preventDefault(); // submit이 action을 안 타고 자기 할 일을 그만한다.
        fetch("http://localhost:8080/book/"+id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(book)
        }).then(res => {
            console.log("정상", res);
            return res.json();
        }).then(res => { // catch를 넣을 시, 여기서 오류가 발생해야 실행된다.
            if (res !== null) {
                navigate("/book/"+id);
            } else {
                alert("책 수정에 실패했습니다.")
            }
        });
    }

    return (
        <Form onSubmit={submitBook}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Title" 
                    onChange={changeValue} 
                    name="title"
                    value={book.title} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter Author" 
                    onChange={changeValue} 
                    name="author"
                    value={book.author} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default UpdateForm;