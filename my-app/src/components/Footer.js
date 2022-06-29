import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용)

// styled-components => js파일과 css파일이 하나로 합쳐지기 때문에 관리가 편하다.
const FooterList = styled.div`
    border: 1px solid black;
    height: 300px;
`;

const Footer = () => {
    return (
        <FooterList>
            <ul>
                <li>오시는 길: 서울</li>
                <li>전화번호: 0000</li>
            </ul>
        </FooterList>
    );
};

export default Footer;