import React, { useState } from 'react';
import './App.css';
import taxInfo from '../lib';

function App() {
const tax = taxInfo;
  const [personalIncome, setPersonalIncome] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
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
    setAnnualIncome(personalIncome);
    setPersonalIncome(0);
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
      <h2>Results</h2>
      <div className='divider'></div>
      <p>Annual Income: <span className='income'>£{annualIncome}</span></p>
      <p>National Insurance: <span className='tax'>£{ni.toFixed(2)}</span></p>
      <p>Income Tax: <span className='tax'>£{incomeTax.toFixed(2)}</span> </p>
      <p>Total Tax including NI: <span className='tax'>£{data.toFixed(2)}</span></p>
      <div className='divider'></div>
      <p>Net Income: <span className='income'>£{netIncome.toFixed(2)}</span></p>
      <p>Net Income per month: <span className='income'>£{monthlyIncome.toFixed(2)}</span></p>
      <p>Net Income per week: <span className='income'>£{weeklyIncome.toFixed(2)}</span></p>
      <div className='no-divider'></div>
      </div>
     

    </div>
  );
}

export default App;
