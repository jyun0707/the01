import './App.css';
import {useState} from 'react';

//useState : 변수를 감시하면서 변경되는 내용이 바로 적용되도록
const MyComponent = () => {
  //let count = 0;
  //const [현재 상태값 담은 변수, 상태 업데이트하는 함수]=useState(초기값);
  const [count,setCount]=useState(0);
  const increment = () => {
    //count = count + 1;
    setCount(count+1);
    console.log(count);
  }

  return (
    <div className="App">
      <p>Count : {count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}


function App() {
  return (
    <MyComponent></MyComponent>
  );
}

export default App;
