## Styled Components

- 사이트 링크: https://styled-components.com/

- 디자인을 동적으로 할 수 있다는 장점

0. 사이트 접속
1. "Installation"에서 npm을 통해 설치 진행
2. document "Getting Started" 확인하기

<br/>

### React Router Dom

<a> 태그를 사용할 수 없기 때문에 다른 도구를 사용해야한다.

- 사이트링크: [react-router-dom v6 업데이트 변경 사항](https://kyung-a.tistory.com/36)

### React Bootstrap

아래 둘 중 하나의 방법을 사용하면 된다.

- src/App.js에 `import 'bootstrap/dist/css/bootstrap.min.css';` 하기

- public/index.html의 <head>태그에 아래 코드 추가하기

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
```

<br/>

#### Navbar

- Nav.Link는 전체페이지가 갱신되어 버린다.
- Link에 className을 부여하면 Nav.Link와 같은 디자인으로 해당 컴포넌트만 갱신할 수 있다.
