import React,{useState} from 'react';
import "./index.css"
import { taxCalculator, nationalInsurance, studentLoan } from '../lib';


export default function TotalTax() {
const [tax, setTax] = useState(0);
const [ni, setNi] = useState(0);
const [hrsIncome, setHrsIncome] = useState("");
const [hrsPerWeek, setHrsPerWeek] = useState("");
const[totalTax, setTotalTax] = useState(0);
const [educationLoan, setEducationLoan] = useState(0);
const [netIncome, setNetIncome] = useState(0);
const [monthlyIncome, setMonthlyIncome] = useState("");
const [weeklyIncome, setWeeklyIncome] = useState("");
const [annualIncome, setAnnualIncome] = useState(0);
const [year, setYear] = useState(1);


function handleTotalIncome(event){
   if(annualIncome > 0 && monthlyIncome > 0 && weeklyIncome > 0 && hrsIncome > 0) {
        alert('Please enter either weekly or monthly or annual income, not all three.');
    }
    else if(annualIncome > 0 && annualIncome < 1000000) {
            setAnnualIncome(annualIncome);   
    } else if (monthlyIncome > 0 && monthlyIncome < 1000000) {
            setAnnualIncome((monthlyIncome * 12).toFixed(2));
            setMonthlyIncome(0);
   
    } else if (weeklyIncome > 0 && weeklyIncome < 1000000) {
        setAnnualIncome((weeklyIncome * 52).toFixed(2));
        setWeeklyIncome(0);
    }else if (hrsIncome > 0 && hrsIncome < 1000000 && hrsPerWeek > 0 && hrsPerWeek < 168) {
        setAnnualIncome((hrsIncome * 52 * hrsPerWeek).toFixed(2));
        setHrsIncome(0);
        setHrsPerWeek(0);
    }
   
    event.preventDefault();
}

function handleTax(event){
    let totalIncome = annualIncome;
    let totalTax = taxCalculator(1, totalIncome);
    let totalNi = nationalInsurance(1, totalIncome);
    let totalStudentLoan = studentLoan(1, totalIncome);
    let netIncome = annualIncome - totalTax - totalNi - totalStudentLoan;
    setTax(totalTax);
    setNi(totalNi);
    setTotalTax(totalTax + totalNi);
    setEducationLoan(totalStudentLoan);
    setNetIncome(netIncome);
    event.preventDefault();

}




  return (
    <div className='main'>
        <h1>UK Tax Calculator</h1>
        <h2>Enter your annual income below</h2>
        <form onSubmit={handleTotalIncome}>
        <label>
        Tax Year:
            <select onChange={(e)=>setYear(e.target.value)} value={year}>
            <option value="1">2023/24</option>
            <option value="2">2024/25</option>
            </select>
        </label>
        
        <label>
        Weekly Hours:
        <br />
            <input type="number" placeholder="Enter Weekly Hours..." onChange={(e)=>setHrsPerWeek(e.target.value)} value={hrsPerWeek} />
           
        </label>
        <label>
            Hourly Rate:
            <br />
            <input type="number" placeholder="Enter Hourly Income..." onChange={(e)=>setHrsIncome(e.target.value)} value={hrsIncome} />
        </label>
        Or
        <label>Weekly Income: 
        <br />
        <input type="number" placeholder="Enter Weekly Income..." onChange={(e)=>setWeeklyIncome(e.target.value)} value={weeklyIncome} />
        </label>
        Or
        <label>Monthly Income:
        <br /> 
        <input type="number" placeholder="Enter Monthly Income..." onChange={(e)=>setMonthlyIncome(e.target.value)} value={monthlyIncome} />
        </label>
        Or
        <label>Annual Income: 
        <br />
        <input type="number" placeholder="Enter Annual Income..." onChange={(e)=>setAnnualIncome(e.target.value)} value={annualIncome} />
        </label>
       
        <input type="submit" value="Calculate" />
        </form>
       
        <div className='flex-container result'>
        <h2>Results</h2>
        <p>Total Annual Income: <span className='income'>£{annualIncome}</span></p>
       
 
        <p>Income Tax: <span className='total-tax'>£{tax.toFixed(2)}</span></p>
        <p>National Insurance: <span className='total-tax'>£{ni.toFixed(2)}</span></p>
        <div className='small-divider'></div>
        <p>Total Tax: <span className='tax'>£{totalTax.toFixed(2)}</span></p>
        <p>Student Loan: <span>£{educationLoan.toFixed(2)}</span></p>
        <div className='divider'></div>
        <p>Net Income: <span className='income'>£{netIncome.toFixed(2)}</span></p>
        <p>Net Monthly Income: <span className='income'>£{(netIncome/12).toFixed(2)}</span></p>
        <p>Net Weekly Income: <span className='income'>£{(netIncome/52).toFixed(2)}</span></p>
        
        <div className='divider'></div>
        <input type='button' value='Calculate Tax' onClick={handleTax} />
        </div>
     
    </div>
  )
}
