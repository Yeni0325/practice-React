// import './App.css';
import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord';
import Day from './component/Day';
import DayList from './component/DayList';
import EmptyPage from './component/EmptyPage';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Hello from './component/Hello';
// import Welcome from './component/Welcome';
// import styles from "./App.module.css";


function App() {
  // const name = "Tom";
  // const naver = {
  //   name : '네이버' ,
  //   url : 'https://naver.com' ,
  // };
  return (
    // <div className="App">
    //   <h3>props : properties</h3>
    //   <Hello age={10}/>
    //   <Hello age={20}/>
    //   <Hello age={30}/>
    //   {/* <div className={styles.box}>App</div> */}
    // </div>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<DayList />} />
              <Route path="/day/:day" element={<Day />} />
              <Route path="/create_word" element={<CreateWord />} />
              <Route path="/create_day" element={<CreateDay />} />
              <Route path="*" element={<EmptyPage/>}/>
            </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
