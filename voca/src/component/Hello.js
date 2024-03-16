// 방법1.
// const Hello = () => {
//   <p>Hello</p>;
// };

// export default Hello;

import World from './World';

// 방법2.
export default function Hello(){
  return (
    <div>
      <h1>Hello</h1>
      <World/>
      <World/>
    </div>
  );
}