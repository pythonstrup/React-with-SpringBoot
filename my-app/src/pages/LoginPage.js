import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Login from '../components/login/Login';

// v6가 되면서 props로 받을 수 있던 것들이 Hooks로 넘어갔다.
// Document 참조: https://reactrouter.com/docs/en/v6
const LoginPage = () => {
    const username = useParams(); // match
    const navigate = useNavigate(); // history와 useHistory 통합됨
    const location = useLocation(); // location 불러오기
    console.log(username)
    console.log(navigate)
    console.log(location) 
    
    // 뒤로가기
	// 인덱스로 처리, 두번 뒤로 가고싶으면 -2
	const goBack = () => {
		navigate(-1);
	}

    // 앞으로 가기
    const go = () => {
		navigate(1);
	}

	// 원하는 위치로 가기: 홈으로 가기
	const goHome = () => {
		navigate('/');
	}

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={()=>navigate('/')}>홈으로 가기</button>
            <Login/>
        </div>
    );
};

export default LoginPage;