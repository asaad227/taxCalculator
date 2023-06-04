import React,{useState} from 'react';
import "./App.css"
import {Route, Routes} from 'react-router-dom';
import England from '../TotalTax';
import Scotland from '../Scottland';
import Wales from '../Wales';
import Home from '../Home';
import ErrorPage from '../ErrorPage/errorPage';
import DarkMode from '../DarkMode';

export default function App() {
 const [toggle, setToggle] = useState(false);
  return (
    <div>
      <DarkMode toggle={toggle} setToggle={setToggle}/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/england" element={<England/>}/>
          <Route path="/scotland" element={<Scotland/>}/>
          <Route path="/wales" element={<Wales/>}/>
      </Routes>
      
    </div>
  )
}
