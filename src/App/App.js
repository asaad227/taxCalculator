import React, { useState } from 'react';
import './App.css';
import libary from '../lib';

function App() {
const tax = libary;
  const [personalIncome, setPersonalIncome] = useState(0);
  const [year, setYear] = useState(1);
  const[data, setData] = useState(0);

  function handleChange(event) {
    setPersonalIncome(event.target.value);
    setYear(event.target.value);
  }
 
  function handleSubmit(event) {
    let nationalInsurance = tax.nationalInsurance(1, personalIncome);
    let incomeTax = tax.totalTax(1, personalIncome);
    let totalTax = nationalInsurance + incomeTax;
    setData(totalTax);
  event.preventDefault();
  }



  
  
  return (
    <div className="App">
      <h1>Tax Calculator UK</h1>
      <form onSubmit={handleSubmit}>
      <label>
          Tax Year:
          <select value={year} onChange={handleChange}>
            <option value="1">2022/23</option>
            <option value="2">2023/24</option>
            <option value="3">2024/25</option>
          </select>
        </label>
    
        <label>
          Personal Income:
          <br />
          <input type="number" value={personalIncome} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <p>Personal Income: {personalIncome}</p>
      <p>National Insurance: {tax.nationalInsurance(1, personalIncome)}</p>
      <p>Income Tax: {tax.totalTax(1, personalIncome)}</p>
      <p>Total Tax: {data}</p>
    </div>
  );
}

export default App;
