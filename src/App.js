import { createRef, useRef, useState } from "react";


function App() {
  
  const myRef = useRef(null);

  const [list, setList] = useState([
    {id:1, name:"Hong"},
    {id:2, name:"Park"},
  ])

  // 여러 개를 처리할 때는 배열로 만들어야 한다.
  // createRef: Ref를 동적으로 생성해준다.
  const myRefs = Array.from({length: list.length}).map(() => createRef());

  return (
    <div>
      <button onClick={() => {
        console.log(myRef);
        myRef.current.style.backgroundColor='red';

        myRefs[0].current.style.backgroundColor='green';
        myRefs[1].current.style.backgroundColor='blue';
        }}>
          색 변경
      </button>
      <div ref={myRef}>박스</div>

      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
};

export default App;
