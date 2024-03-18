import { Link } from "react-router-dom";
import useFetch from '../hook/useFetch';

export default function DayList(){
  const days = useFetch("http://localhost:3001/days");
  // const [days, setDays] = useState([]);
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

  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setDays(data);
  //   });
  // }, []);

  if(days.length === 0){
    return <span>Loading...</span>;
  }

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