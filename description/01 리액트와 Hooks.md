## React 개요

- React 엔진 - 데이터 변경 감지에서 UI를 그려줌!!
- 실행과정 (index.html) - SPA(Single Page Application): <a>태그를 사용X 대체태그 사용해야함
- JSX 문법
- 바벨(자바스크립트 ES5) -> ES6

1. return 시에 하나의 Dom만 리턴할 수 있다.
2. 변수선언은 let 혹은 const로만 해야함.
3. if 사용 불가능 대신 삼항연산자 사용 가능 (조건 ? 값 : 값)
4. 조건부 렌더링
5. css디자인
   - 내부에 적는 방법
   - 외부 파일에 적는 방법
   - 라이브러리 사용(부트스트랩, component-styled)

<br/>

- 아래와 같이 삼항연산자와 연산자를 사용해 나타낼 수 있다.

```javascript
function App() {
  const mystyle = { color: 'red', fontSize: '50px' };
  return (
    <div>
      <div style="{mystyle}">
        this is react program {a === 10 ? 'and very good' : 'and bad'}
      </div>
      <h1 className="mystyle">title {b === 10 && '20입니다.'}</h1>
    </div>
  );
}
```

### 불변성 이용

```javascript
function App() {
  let list = [1, 2, 3];

  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}
```

<br/>

<hr/>

## React Hooks

### useState

- `import React, { useEffect, useState } from "react";` 를 통해 import한다.

- 함수를 onClick 이벤트에 넣을 때는 괄호없이 함수명만 넣어야한다.(바인딩만 해야한다.)

- `rsc` 단축키를 이용하면 Sub 함수를 쉽게 만들 수 있다.

- 컴포넌트를 잘 설계해야한다. 독립적인 컴포넌트를 만들어야한다.

```javascript
function App() {
  //let number = 1; // 상태값이 아니기 때문에 페이지에 업데이트가 안된다.
  const [number, setNumber] = useState(1); // React 안의 hooks 라이브러리 상태값이 됨.

  const add = () => {
    setNumber(number + 1); // React에 number 값 변경 요청
    console.log('add', number);
  };

  // 렌더링 시점 = 상태값 변경
  return (
    <div>
      <h1>숫자: {number}</h1>
      <button onClick={add}>더하기</button>
      <Sub />
    </div>
  );
}
```

- 다운로드 예시

```javascript
function App() {
  console.log('앱 실행됨');

  const [num, setNum] = useState(5);

  let sample = [
    { id: 1, name: 'Hong' },
    { id: 2, name: 'Park' },
    { id: 3, name: 'Kim' },
    { id: 4, name: 'Jang' },
  ];

  // 다운로드 받음
  const [users, setUsers] = useState(sample);

  const download = () => {
    // fetch().then().then(); // AJAX 사용

    // 레퍼런스가 변경되어야 동작한다.
    // setUsers(sample); // 레퍼런스 참조, 데이터가 바뀌어도 업데이트가 안된다는 단점이 있다. 불변성 유지됨.

    // const a = sample.concat({id: 5, name:"조자룡"});
    // setUsers(a); // 레퍼런스 하지만 concat으로 인해 새 레퍼런스가 생성돼 업데이트가 된다.

    setUsers([...sample, { id: num, name: '조자룡' }]); // 레퍼런스가 변경되므로 무조건 다시 그려진다.
    setNum(num + 1); // users가 불변성을 가져 num만 바뀌게 된다.
  };

  // 렌더링 시점 = 상태값 변경
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((u) => (
        <h1>
          {u.id}. {u.name}
        </h1>
      ))}
    </div>
  );
}
```

### useEffect

```javascript
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Third from './aa/Third';
import Sub from './Sub';
import { num } from './Sub';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // 다운로드 받고 (통신)
    let downloadData = 5;
    setData(downloadData);
  };

  // useEffect 실행 시점은?
  // 1. App() 함수가 최초 실행될 때 (App 그림이 그려질 때)
  // 2. dependencyList에 등록되어 있는 상태 변수가 변경될 때
  // 3. 의존리스트로 실행시점 관리 가능
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);
  // 뒤의 배열을 비워두면 의존성을 없애 최초에만 실행된다.

  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터: {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
}
```

### useMemo

- 메모라이제이션(기억)

```javascript
import { useMemo, useState } from 'react';

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  // 만약 아래 함수가 오래 걸리는 함수라면 되도록 호출되지 않는 것이 좋을 것이다.
  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('getAddResult 함수 실행됨:', sum);
    return sum;
  };

  // 해당 함수를 언제만 실행할 것인지 기록하는 함수 - 순서가 중요하다
  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자 변경
      </button>

      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트값 추가
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str}: {addResult}
      </div>
    </div>
  );
}

export default App;
```

### UseRef

- 디자인
- Dom을 변경할 때 사용한다.

```javascript
import { createRef, useRef, useState } from 'react';

function App() {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: 'Hong' },
    { id: 2, name: 'Park' },
  ]);

  // 여러 개를 처리할 때는 배열로 만들어야 한다.
  // createRef: Ref를 동적으로 생성해준다.
  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          myRef.current.style.backgroundColor = 'red';

          myRefs[0].current.style.backgroundColor = 'green';
          myRefs[1].current.style.backgroundColor = 'blue';
        }}
      >
        색 변경
      </button>
      <div ref={myRef}>박스</div>

      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default App;
```

<br/>

<hr/>
