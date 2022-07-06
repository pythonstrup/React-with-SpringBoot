import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = (props) => {

    // const id = props.match.params.id; 사용불가
    const {id} = useParams();

    const [book, setBook] = useState({
        id: "",
        title: "",
        author: ""
    });

    useEffect(() => {
        fetch("http://localhost:8080/book/"+id).then(res=>res.json())
        .then(res => {
            setBook(res);
        });
    }, []);

    const navigate = useNavigate();
    const deleteBook = () => {
        fetch("http://localhost:8080/book/"+id, {
            method: "DELETE",
        }).then(res=>res.text()).then(res=>{
            if (res==="ok") {
                alert("삭제 완료");
                navigate("/");
            } else {
                alert("삭제 실패!");
            }
        });
    }

    const updateBook = () => {
        navigate("/updateForm/"+id);
    }

    return (
        <div>
            <h1>책 상세보기</h1>
            <Button variant="warning" onClick={updateBook}>수정</Button>{' '}
            <Button variant="danger" onClick={deleteBook}>삭제</Button> 
            <hr/>
            <h3>{book.author}</h3>
            <h1>{book.title}</h1>
        </div>
    );
};

export default Detail;