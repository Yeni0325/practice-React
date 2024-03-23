import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";
import Movie from "./components/Movie";

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

// ----------------------------------------------------------------------------------------------

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
// function Hello(){
//   // function byFn(){
//   //   console.log("bye :(");
//   // }
//   // function hiFn(){
//   //   console.log("created :)");
//   //   return byFn;
//   // }
//   // useEffect(hiFn, []);
  
//   useEffect(() => {
//     console.log("hi :)");  
//     return () => console.log('bye :(');
//   }, []);
  
//   // useEffect(function(){
//   //   console.log("hi :)");
//   //   return function(){
//   //     console.log("bye :(");
//   //   }  
//   // });
//   return <h1>Hello</h1>;
// }

// function App(){
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing(prev => !prev);
//   return <div>
//     {showing ? <Hello/> : null}
//     <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//   </div>;
// }

// export default App;

// ----------------------------------------------------------------------------------------------

// * To do list 만들기 *
// function App(){
//   const [toDo, setToDo] = useState(""); // setToDo는 toDo 값을 수정하는 함수!
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === '') {
//       return;
//     }
//     // toDos.push(); // state를 직접적으로 수정할 수 없음

//     // Array(toDos)를 직접적으로 수정하지 않으면서 setToDos로 Array에 element를 추가하는 방법
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo('');

//     // 함수를 수정할 때는 두가지 옵션이 있다.
//     // 1. 값을 보낼때 setToDo("") 와 같이 value를 작성하는 방법
//     // 2. 함수를 보내는 방법 (ex. setToDos((currentArray) => [toDo, ...currentArray]))
//     // 함수를 보낼 때 react.js는 첫번째 인자로 현재 state를 보냄
//     // 따라서 현재 state를 계산하거나 새로운 state를 만드는데 사용이 가능!
//   }
//   console.log(toDos);

//   return (
//     <div>
//       <h1>My To Dos ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write your to do..."
//         ></input>
//         <button>App To Do</button>
//       </form>
//       <hr />
//       {/* array.map() : 인자로 함수를 넣을 수 있는데, map은 해당 함수를 array의 모든 item에 실행함 */}
//       {/* map은 함수의 첫번재 인자로 현재 item을 가져올 수 있음 */}
//       <ul>
//         {toDos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------------------------

// * Coin Tracker 만들기 *
// function App(){
//   const [loading, setLoading] = useState(true);
//   const [coin, setCoin] = useState(0);
//   const [coins, setCoins] = useState([]);
//   const [money, setMoney] = useState(0);
//   const [selectedCoinName, setSelectedCoinName] = useState('');
//   const onChange = (event) => setMoney(event.target.value);
//   const selectCoin = (event) => {
//     setCoin(Number(event.target.selectedOptions[0].getAttribute('data-price')));
//     setSelectedCoinName(
//       event.target.selectedOptions[0].getAttribute('data-name')
//     );
//   };
//   useEffect(() => {
//     fetch('https://api.coinpaprika.com/v1/tickers')
//     .then(response => response.json())
//     .then(json => {
//       setCoins(json);
//       setLoading(false);
//     });
//   },[]);
//   useEffect(() => {
//     console.log(money);
//   }, [money]);
//   useEffect(() => {
//     console.log(coin);
//   }, [coin]);
//   return (
//     <div>
//       <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <>
//           <select onChange={selectCoin}>
//             <option>choose some coin!!</option>
//             {coins.map((coin) => (
//               <option
//                 key={coin.id}
//                 data-price={coin.quotes.USD.price}
//                 data-name={coin.name}
//                 value={coin.quotes.USD.price}
//               >
//                 {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
//               </option>
//             ))}
//           </select>
//           <input type="number" onChange={onChange} value={money} />
//           <br />
//           {money !== 0 && coin !== 0
//             ? `너는 ${selectedCoinName}코인을 ${money / coin}만큼 살 수 있다.`
//             : null}
//         </>
//       )}
//     </div>
//   );
// } 

// export default App;

// ----------------------------------------------------------------------------------------------

// 🔔router : URL을 보고 있는 Component
function App(){
  return null;
}

export default App;