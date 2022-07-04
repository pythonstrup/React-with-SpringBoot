import './App.css';
import React from 'react';
import Top from './components/Top';
import Bottom from './components/Bottom';

function App() {

  // 아래를 redux로 대체하면?
  // const [number, setNumber] = useState(1);

  // // Bottom에 setNumber를 넘기면 더하기 빼기 등 모든 게 가능하기 때문에 함수형으로 넘겨주는 것이 좋다.
  // const addNumber = () => {
  //   setNumber(number+1);
  // };
  // return (
  //   <div className='container'>
  //     <h1>최상단 화면</h1>
  //     <Top number={number} />
  //     <Bottom addNumber={addNumber}/>
  //   </div>
  // );

  return (
    <div className='container'>
      <h1>최상단 화면</h1>
      <Top/>
      <Bottom/>
    </div>
  );
}

export default App;
