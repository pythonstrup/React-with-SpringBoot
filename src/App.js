import logo from './logo.svg';
import './App.css';

let a = 10;  // 변수
const b= 20; // 상수

function App() {
  let list = [1, 2, 3];

  return (
    <div>
      <div>
        {list.map((n)=><h1>{n}</h1>)}
      </div>
    </div>
  );
}

export default App;
