import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

// 기본적으로 state를 변화할 때 모든 코드들은 항상 다시 실행됨,
// 그러나 처음에 한번만 렌더링 되고 다시 실행시키지 않길 원할 수 있음!!

// 🔔useEffect : 코드가 딱 한번만 실행될 수 있도록 보호해준다. 
// 첫번째 인자는 우리가 딱 한번만 실행하고 싶은 코드
// 두번째 인자는 명시된 변수나 값이 변경될 때마다 첫 번째 인자로 전달된 코드가 실행. 
// 배열이 비어있으면 ([]), 콜백 함수는 컴포넌트가 처음 렌더링될 때 딱 한 번만 실행되고, 그 후에는 실행되지 않음!

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState('');
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);

//   useEffect(() => {
//     console.log('I run only once.');
//   }, []);
//   useEffect(() => {
//     // if(keyword !== "" && keyword.length > 5){
//     //   console.log("SEARCH FOR", keyword);
//     // }
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]); // keyword가 변화할 때 코드를 실행
//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]); // counter가 변화할 때 코드를 실행
//   useEffect(() => {
//     console.log("I run when keyword & counter change");
//   }, [keyword, counter]);
//   return (
//     <div>
//       {/* <h1 className={styles.title}>Welcome back!!!</h1> */}
//       {/* <Button text={'Continue'} /> */}
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search here..."
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// 🔔cleanup function
// 컴포넌트가 삭제(destroy)될 때도 코드를 실행할 수 있는 방법이 있음!

// useEffect(() => {
//   // mount 시점, deps update 시점에 실행할 작업 (componentDidMount)
//   return () => {
//     //unmount 시점, deps update 직전에 실행할 작업 (componentWillUnmount)
//   };
// }, [deps]);

// useEffect는 function을 받고, 이 function은 [dependency]가 변화할 때 호출됨
// 컴포넌트가 파괴될 때, react는 받았던 function의 return한 function을 실행함
function Hello(){
  // function byFn(){
  //   console.log("bye :(");
  // }
  // function hiFn(){
  //   console.log("created :)");
  //   return byFn;
  // }
  // useEffect(hiFn, []);
  
  useEffect(() => {
    console.log("hi :)");  
    return () => console.log('bye :(');
  }, []);
  
  // useEffect(function(){
  //   console.log("hi :)");
  //   return function(){
  //     console.log("bye :(");
  //   }  
  // });
  return <h1>Hello</h1>;
}

function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return <div>
    {showing ? <Hello/> : null}
    <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
  </div>;
}

export default App;
