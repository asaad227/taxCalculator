import React from 'react';
import "./App.css"
import {Route, Routes} from 'react-router-dom';
import England from '../TotalTax';
import Scotland from '../Scottland';
import Wales from '../Wales';
import Home from '../Home';

export default function App() {
  return (
    <div>
      <Routes>
          <Route path="/england" element={<England/>}/>
          <Route path="/scotland" element={<Scotland/>}/>
          <Route path="/wales" element={<Wales/>}/>
          <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  )
}
