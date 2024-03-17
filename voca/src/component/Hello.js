// 방법1.
// const Hello = () => {
//   <p>Hello</p>;
// };

// export default Hello;

// import World from './World';
// import styles from "./Hello.module.css";

// 방법2.
// export default function Hello(){
//   function showName(){
//     console.log("Mike");
//   }

//   function showAge(age){
//     console.log(age);
//   }
  
//   function showText(txt){
//     console.log(txt);
//   }

//   return (
//     <div>
//       <h1>Hello</h1>
//       <button onClick={showName}>Show name</button>
//       <button
//         onClick={() => {
//           showAge(30);
//         }}
//       >
//         Show age
//       </button>
//       {/* <input type="text" onChange={showText} /> */}
//       <input type="text" onChange={(e)=>{
//         //console.log(e.target.value);
//         const txt = e.target.value;
//         showText(txt);
//       }} />
//     </div>
//   );
// }
import {useState} from "react";
import UserName from "./UserName";

export default function Hello({age}){
  // let name = "Mike"
  const [name, setName] = useState('Mike');
  const msg = age > 19 ? "성인 입니다" : "미성년자 입니다.";

  function chageName(){
    // const newName = name === 'Mike' ? 'Jane' : 'Mike';
    // console.log(name);
    // document.getElementById("name").innerText = name;
    setName(name === 'Mike' ? 'Jane' : 'Mike');
  }

  return (
    <div>
      <h2 id="name">
        {name}({age} : {msg})
      </h2>
      <UserName name={name}/>
      <button
        onClick={() => {
          setName(name === 'Mike' ? 'Jane' : 'Mike');
        }}
      >
        Change
      </button>
    </div>
  );
}