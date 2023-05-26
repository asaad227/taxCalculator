import React, { useState } from 'react';
import './App.css';
import { taxCalculator, nationalInsurance } from '../lib';



function App() {

  const [personalIncome, setPersonalIncome] = useState("");
  const [annualIncome, setAnnualIncome] = useState(0);
  const [ni, setNi] = useState(0);
  const [incomeTax, setIncomeTax] = useState(0);
  const [netIncome, setNetIncome] = useState(0);
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState("");
  const [incomeByHour, setIncomeByHour] = useState("");
  const [hrsPerWeek, setHrsPerWeek] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [weeklyIncome, setWeeklyIncome] = useState(0);
  const [year, setYear] = useState(1);
  const[data, setData] = useState(0);

  function handleChange(event) {
    setPersonalIncome(event.target.value);
    setYear(event.target.value);
  }
function incomeTotal(event) {
  if(totalMonthlyIncome > 0 && incomeByHour > 0 && hrsPerWeek > 0) {
    alert('Please enter either monthly income or hourly income, not both');
  }
  if(totalMonthlyIncome > 0 && totalMonthlyIncome < 1000000) {
    setPersonalIncome((totalMonthlyIncome * 12).toFixed(2));
  } else if (incomeByHour > 0 && incomeByHour < 1000000 && hrsPerWeek > 0 && hrsPerWeek < 168) {
    setPersonalIncome((incomeByHour * hrsPerWeek * 52).toFixed(2));
  }
setHrsPerWeek("");
setIncomeByHour("");
setTotalMonthlyIncome("");
  event.preventDefault();
}


 
  function handleSubmit(event) {
    let nationalInsuranceAm = nationalInsurance(1, personalIncome);
    let incomeTax = taxCalculator(1, personalIncome);
    let totalTax = nationalInsuranceAm + incomeTax;
    let netIncome = personalIncome - totalTax;
    let monthlyIncome = netIncome/ 12;
    let weeklyIncome = netIncome / 52;
    
    setNetIncome(netIncome);
    setMonthlyIncome(monthlyIncome);
    setWeeklyIncome(weeklyIncome);
    setNi(nationalInsuranceAm);
    setIncomeTax(incomeTax);
    setData(totalTax);
    setAnnualIncome(personalIncome);
    setPersonalIncome("");
  event.preventDefault();
  }



  
  
  return (
    <div className="App">
     <h1>Tax Calculator UK</h1>
     <form onSubmit={incomeTotal}>
      <h2>Income</h2>
     <label>
      Hourly Income:
          <br />
          <input type="number" value={incomeByHour} step=".01" onChange={(e)=>setIncomeByHour(e.target.value)} placeholder='Per hour pay here...' />
          <input type='number' value={hrsPerWeek}  onChange={(e)=>setHrsPerWeek(e.target.value)} placeholder='Hours per week here...'/>
      </label>
      <label>
      OR
      </label>
      <label>
      Monthly Income:
          <br />
          <input type="number" step='.01' value={totalMonthlyIncome} onChange={(e)=> setTotalMonthlyIncome(e.target.value)} placeholder='Monthly income here...' />
  
      </label>
     
     
      <input type="submit" value="Total Income" />
      </form>
     
      <form onSubmit={handleSubmit}>
      <h2>Annual Income</h2>
     
      <label>
          Tax Year:
                    <select value={year} onChange={handleChange}>
          
            <option value="1">2023/24</option>
            <option value="2">2024/25</option>
          </select>
        </label>
    
        <label>
          <br />
          <input type="number" step='.01' value={personalIncome} onChange={handleChange} placeholder='Annual income here...'/>
        </label>
        <input type="submit" value="Calculate" />
      </form>
      <div className='flex-container result'>
      <h2>Results</h2>
      <div className='divider'></div>
      <p>Income Before Tax & NI: <span className='income'>£{ annualIncome}</span></p>
      <div className='total'>
      <p>NI: <span className='tax'>£{ni.toFixed(2)}</span></p>
      <p>Income Tax: <span className='tax'>£{incomeTax.toFixed(2)}</span>
       </p>
       <div className='small-divider'></div>
      <p>Total Tax: <span className='tax total-tax'>-£{data.toFixed(2)}</span></p>
      </div>
      

      
      <div className='divider'></div>
      <p>Take home pay: <span className='income'>£{netIncome.toFixed(2)}</span></p>
      <p>Take home pay per month: <span className='income'>£{monthlyIncome.toFixed(2)}</span></p>
      <p>Take home pay per week: <span className='income'>£{weeklyIncome.toFixed(2)}</span></p>
      <div className='no-divider'></div>
      </div>
     

    </div>
  );
}

export default App;
