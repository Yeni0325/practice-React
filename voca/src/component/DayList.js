import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function DayList(){
  const [days, setDays] = useState([]);
  // const [count, setCount] = useState(0);

  // function onClick(){
  //   setCount(count + 1);
  // }

  // function onClick2(){
  //   setDays([
  //     ...days,
  //     {
  //       id : Math.random() ,
  //       day : 1
  //     } ,
  //   ]);
  // }

  useEffect(() => {
    fetch("http://localhost:3001/days")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setDays(data);
    });
  }, []);

  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
        <li></li>
      </ul>
      {/* <button onClick={onClick}>{count}</button>
      <button onClick={onClick2}>Day change</button> */}
    </>
  );
}