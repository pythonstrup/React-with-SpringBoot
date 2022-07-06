# React & Spring Boot 연동 프로젝트

## Spring Boot

### 의존성

- Spring Boot
- JPA
- MySQL(H2)
- Maven
- Lombok
- JUnit5
- hancrest 1.3

<br/>

### Directory

- book-backend

<br/>

<hr/>

## React

### Installation

- yarn add react-router-dom
- yarn add redux react-redux
- yarn add react-bootstrap bootstrap

<br/>

#### index.js에 import

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

<br/>

### Directory

- book-frontend

<br/>

### Project Setting

- .prettierrc

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80
}
```

### 추가

- react를 빌드하고 Nginx를 이용해 spring boot 서버로 배포해야함.
