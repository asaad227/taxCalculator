import React,{useState} from 'react';
import "./index.css"
import { taxCalculator, nationalInsurance, studentLoan, statutoryPension } from '../lib';


export default function TotalTax() {
const [hrsIncome, setHrsIncome] = useState("");
const [hrsPerWeek, setHrsPerWeek] = useState("");
const [monthlyIncome, setMonthlyIncome] = useState("");
const [weeklyIncome, setWeeklyIncome] = useState("");
const [annualIncome, setAnnualIncome] = useState("");
const [educationLoan, setEducationLoan] = useState(0);
const[pension, setPension] = useState(0);
const[isPension, setIsPension] = useState(false);
const [isLoan, setIsLoan] = useState(false);
const[isDaily, setIsDaily] = useState(false);
const[isWeekly, setIsWeekly] = useState(false);
const[isMonthly, setIsMonthly] = useState(false);
const[isAnnual, setIsAnnual] = useState(false);

const [year, setYear] = useState(1);
const [tax, setTax] = useState(0);
const [ni, setNi] = useState(0);
const[totalTax, setTotalTax] = useState(0);
const [netIncome, setNetIncome] = useState(0);






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
    let totalPension = statutoryPension(1, totalIncome);
    if(!isPension){
        totalPension = 0;
    }
    if(!isLoan){
        totalStudentLoan = 0;
    }

    let netIncome = annualIncome - totalTax - totalNi - totalStudentLoan - totalPension;
    setTax(totalTax);
    setNi(totalNi);
    setTotalTax(totalTax + totalNi);
    setEducationLoan(totalStudentLoan);
    setPension(totalPension);
    setNetIncome(netIncome);
    event.preventDefault();

}

function handleReset(event){
    setAnnualIncome("");
    setMonthlyIncome("");
    setWeeklyIncome("");
    setHrsIncome("");
    setHrsPerWeek("");
    setTax(0);
    setNi(0);
    setTotalTax(0);
    setEducationLoan(0);
    setPension(0)
    setIsPension(false)
    setIsLoan(false)
    setIsDaily(false)
    setIsWeekly(false)
    setIsMonthly(false)
    setIsAnnual(false)
    setNetIncome(0);
    event.preventDefault();
}



  return (
    <div className='main'>
        <h1>England Personal Tax Calculator</h1>
        <form onSubmit={handleTotalIncome}>
        <label>
        Tax Year:
            <select onChange={(e)=>setYear(e.target.value)} value={year}>
            <option value="1">2023/24</option>
            <option value="2">2024/25</option>
            </select>
        </label>
       
        <div className='extra-option'>
        <label>
        Workplace Pension:
            <select onChange={(e)=>setIsPension(e.target.value)} value={isPension}>
                <option value="false">No</option>
                <option value="true">Yes</option>
                </select>
                </label> 
        <label>
        Student Loan:
        <select onChange={(e)=>setIsLoan(e.target.value)} value={isLoan}>
        <option value="false">No</option>
            <option value="true">Yes</option>

            </select>
            </label>
                </div>
                <h5>Choose your Income Input</h5>
                <div className='extra-option'>
                <label>
        Daily Income:
        <select onChange={(e)=>setIsDaily(e.target.value)} value={isDaily}>
        <option value="false">No</option>
            <option value="true">Yes</option>
            </select>
            </label>
            <label>
        Weekly Income:
        <select onChange={(e)=>setIsWeekly(e.target.value)} value={isWeekly}>
        <option value="false">No</option>
            <option value="true">Yes</option>
            </select>
            </label>
            <label>
       Monthly Income:
        <select onChange={(e)=>setIsMonthly(e.target.value)} value={isMonthly}>
        <option value="false">No</option>
            <option value="true">Yes</option>
            </select>
            </label>
            <label>
        Annual Income:
        <select onChange={(e)=>setIsAnnual(e.target.value)} value={isAnnual}>
        <option value="false">No</option>
            <option value="true">Yes</option>
            </select>
            </label>
                </div>  
                <label className={isDaily? 'dailyShow': 'dailyHide'}>
           
    
           <input type="number" placeholder="Enter Hourly Rate..." onChange={(e)=>setHrsIncome(e.target.value)} value={hrsIncome} />
       </label>     
        <label className={isDaily? 'dailyShow': 'dailyHide'}>
       
      
            <input type="number" placeholder="Enter Weekly Hours..." onChange={(e)=>setHrsPerWeek(e.target.value)} value={hrsPerWeek} />
           
        </label>
       
      
        <label className={isWeekly? 'weeklyShow': 'weeklyHide'}> 
     
        <input type="number" placeholder="Enter Weekly Income..." onChange={(e)=>setWeeklyIncome(e.target.value)} value={weeklyIncome} />
        </label>
     
        <label className={isMonthly? 'monthlyShow':'monthlyHide'}>
    
        <input type="number" placeholder="Enter Monthly Income..." onChange={(e)=>setMonthlyIncome(e.target.value)} value={monthlyIncome} />
        </label>
   
        <label className={isAnnual? 'annualShow':'annualHide'}>
    
        <input type="number" placeholder="Enter Annual Income..." onChange={(e)=>setAnnualIncome(e.target.value)} value={annualIncome} />
        </label>
       
        <input type="submit" value="Calculate" />
        </form>
       
        <div className='flex-container result'>
        <h2>Results</h2>
        <p>Total Annual Income: <span className='income'>£{(annualIncome/1).toFixed(2)}</span></p>
        <p>Total Monthly Income: <span className='income'>£{(annualIncome/12).toFixed(2)}</span></p>
        <p>Total Weekly Income: <span className='income'>£{(annualIncome/52).toFixed(2)}</span></p>
       
 
        <p>Tax: <span className='total-tax'>£{tax.toFixed(2)}</span></p>
        <p>NI: <span className='total-tax'>£{ni.toFixed(2)}</span></p>
        <div className='small-divider'></div>
        <p>Total Tax: <span className='tax'>£{totalTax.toFixed(2)}</span></p>
        <p className={isPension? 'pension':'pensionHide'}>Statutory Pension: <span>£{pension.toFixed(2)}</span></p>
        <p className={isLoan? 'loan':'loanHide'}>Student Loan: <span>£{educationLoan.toFixed(2)}</span></p>
        <div className='divider'></div>
        <p>Net Income: <span className='income'>£{netIncome.toFixed(2)}</span></p>
        <p>Net Monthly Income: <span className='income'>£{(netIncome/12).toFixed(2)}</span></p>
        <p>Net Weekly Income: <span className='income'>£{(netIncome/52).toFixed(2)}</span></p>
        
        <div className='divider'></div>
        <span>
        <input type='button' value='Calculate Tax' onClick={handleTax} />
        <input type='button' value='Reset' onClick={handleReset} />
    </span>
        </div>
     
    </div>
  )
}
