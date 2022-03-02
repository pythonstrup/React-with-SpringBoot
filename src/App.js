import logo from './logo.svg';
import './App.css';

// 0. React 엔진 - 데이터 변경 감지에서 UI를 그려줌!!
// 1. 실행과정 (index.html) - SPA(Single Page Application)
// 2. JSX 문법
// 3. 바벨(자바스크립트 ES5) -> ES6

// (1) return 시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수선언은 let 혹은 const로만 해야함.
// (3) if 사용 불가능 대신 삼항연산자 사용 가능 (조건 ? 값 : 값)
// (4) 조건부 렌더링
// (5) css디자인
//   - 내부에 적는 방법
//   - 외부 파일에 적는 방법
//   - 라이브러리 사용(부트스트랩, component-styled)

let a = 10;  // 변수
const b= 20; // 상수

function App() {
  let c;
  let d = undefined;
  console.log(c, d)

  const mystyle = {
    color: "red",
    fontSize: "50px",
  };

  return (
    <div>
      <div style={mystyle}>this is react program {a === 10 ? "and very good":"and bad"}</div>
      <h1 className='mystyle'>title {b === 10 && "20입니다."}</h1>
      <hr/>
    </div>
    
  );
}

export default App;
