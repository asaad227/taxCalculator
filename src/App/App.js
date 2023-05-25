import React, { useState } from 'react';
import './App.css';
import libary from '../lib';

function App() {
const tax = libary;
  const [personalIncome, setPersonalIncome] = useState(0);
  const [ni, setNi] = useState(0);
  const [incomeTax, setIncomeTax] = useState(0);
  const [netIncome, setNetIncome] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [weeklyIncome, setWeeklyIncome] = useState(0);
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
    let netIncome = personalIncome - totalTax;
    let monthlyIncome = netIncome/ 12;
    let weeklyIncome = netIncome / 52;
    setNetIncome(netIncome);
    setMonthlyIncome(monthlyIncome);
    setWeeklyIncome(weeklyIncome);
    setNi(nationalInsurance);
    setIncomeTax(incomeTax);
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
        Annual Employment Income:
          <br />
          <input type="number" value={personalIncome} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className='flex-container result'>
      <p>National Insurance: {ni.toFixed(2)}</p>
      <p>Income Tax: {incomeTax.toFixed(2)}</p>
      <p>Total Tax: {data.toFixed(2)}</p>
      <p>Take Home payment: {netIncome.toFixed(2)}</p>
      <p>Take Home payment per month: {monthlyIncome.toFixed(2)}</p>
      <p>Take Home payment per week: {weeklyIncome.toFixed(2)}</p>
      </div>
     

    </div>
  );
}

export default App;
