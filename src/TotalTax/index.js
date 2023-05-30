import React,{useState} from 'react';
import "./index.css"
import { taxCalculator, nationalInsurance, studentLoan, statutoryPension } from '../lib';
import Form from '../Form';
import NavBar from '../Nav-bar';


export default function England() {
const [isChecked, setIsChecked] = useState(false);
const [incomeByHour, setIncomeByHour] = useState("");
const [hrsPerWeek, setHrsPerWeek] = useState("");
const [daily, setDaily] = useState("");
const [monthlyIncome, setMonthlyIncome] = useState("");
const [weeklyIncome, setWeeklyIncome] = useState("");
const [annualIncome, setAnnualIncome] = useState("");
const [educationLoan, setEducationLoan] = useState(0);
const[pension, setPension] = useState(0);
const [isHrs, setIsHrs] = useState(false);
const[isPension, setIsPension] = useState(false);
const [isLoan, setIsLoan] = useState(false);
const[isDaily, setIsDaily] = useState(false);
const[isWeekly, setIsWeekly] = useState(false);
const[isMonthly, setIsMonthly] = useState(false);
const[isAnnual, setIsAnnual] = useState(true);

const [year, setYear] = useState(1);
const [tax, setTax] = useState(0);
const [ni, setNi] = useState(0);
const[totalTax, setTotalTax] = useState(0);
const [netIncome, setNetIncome] = useState(0);






function handleSubmit(event){
    event.preventDefault();
   if(annualIncome > 0 && monthlyIncome > 0 && weeklyIncome > 0 && daily > 0 && incomeByHour > 0 && hrsPerWeek > 0) {
        alert('Please enter either weekly or monthly or annual income, not all three.');
    }
    else if(annualIncome > 0 && annualIncome < 1000000) {
            setAnnualIncome(annualIncome);   
    } else if (monthlyIncome > 0 && monthlyIncome < 1000000) {
            setAnnualIncome((monthlyIncome * 12).toFixed(2));
            setMonthlyIncome("");
   
    } else if (weeklyIncome > 0 && weeklyIncome < 1000000) {
        setAnnualIncome((weeklyIncome * 52).toFixed(2));
        setWeeklyIncome("");
    }else if (daily > 0 && daily < 1000000) {
        setAnnualIncome((daily * 5 * 52).toFixed(2));
        setDaily("");
    }else if (incomeByHour > 0 && incomeByHour < 1000000 && hrsPerWeek > 0 && hrsPerWeek < 168) {
        setAnnualIncome((incomeByHour * hrsPerWeek * 52).toFixed(2));
        setIncomeByHour("");
        setHrsPerWeek("");
    }
   
   
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
    setDaily("");
    setIncomeByHour("");
    setHrsPerWeek("");
    setYear(1);
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
    setIsAnnual(true)
    setIsHrs(false);
    setNetIncome(0);
    event.preventDefault();
}



  return (
    <div>
    <NavBar/>
    <div className='main'>
        <h1>UK Personal tax calculator (England)</h1>
        
        <Form year={year} setYear={setYear} isLoan={isLoan} setIsLoan={setIsLoan} isPension={isPension} setIsPension={setIsPension}
        handleSubmit={handleSubmit} isDaily={isDaily}
         isWeekly={isWeekly} isMonthly={isMonthly} isAnnual={isAnnual} 
         setIsAnnual={setIsAnnual} setIsDaily={setIsDaily} setIsMonthly={setIsMonthly} setIsWeekly={setIsWeekly}
            setPension={setPension} pension={pension} setStd={setEducationLoan} std={educationLoan}
            setAnnualy={setAnnualIncome} setMonthly={setMonthlyIncome} setWeekly={setWeeklyIncome} setDaily={setDaily}
            daily={daily} 
            weekly={weeklyIncome} monthly={monthlyIncome} 
            annualy={annualIncome} setIsChecked={setIsChecked} isChecked={isChecked}
            setHrsPerWeek={setHrsPerWeek} setIncomeByHour={setIncomeByHour} incomeByHour={incomeByHour} hrsPerWeek={hrsPerWeek}
            isHrs={isHrs} setIsHrs={setIsHrs}
        
             />
        <div className='flex-container result'>
        <h2>Gross Income</h2>
        <p>Total Annual Income: <span className='income'>£{(annualIncome/1).toFixed(2)}</span></p>
        <p>Total Monthly Income: <span className='income'>£{(annualIncome/12).toFixed(2)}</span></p>
        <p>Total Weekly Income: <span className='income'>£{(annualIncome/52).toFixed(2)}</span></p>
       <div className='divider'></div>
       <h2>Deductions</h2>
      
        <p>Tax(Yearly): <span className='total-tax'>£{tax.toFixed(2)}</span></p>
        <p>NI(Yearly): <span className='total-tax'>£{ni.toFixed(2)}</span></p>
       <div className='small-divider'></div>
        <p>Total Tax(Yearly): <span className='total-tax'>£{totalTax.toFixed(2)}</span></p>
        <p className={isPension? 'pension':'pensionHide'}>Pension: <span className='total-tax'>£{pension.toFixed(2)}</span></p>
        <p className={isLoan? 'loan':'loanHide'}>Std Loan: <span className='total-tax'>£{educationLoan.toFixed(2)}</span></p>
        <div className='divider'></div>
        <h2>Net Income</h2>
        <p>Net Yearly Income: <span className='income'>£{netIncome.toFixed(2)}</span></p>
        <p>Net Monthly Income: <span className='income'>£{(netIncome/12).toFixed(2)}</span></p>
        <p>Net Weekly Income: <span className='income'>£{(netIncome/52).toFixed(2)}</span></p>
        
        <div className='divider'></div>
        <span>
        <input type='button' value='Calculate Tax' onClick={handleTax} />
        <input type='button' value='Reset' onClick={handleReset} />
    </span>
        </div>
        </div>
        <aside>
            <h2>How to use this calculator:</h2>
            <div className='divider'></div>
            <p>Enter your income in the input field and select the tax year. You can enter your income in hourly, daily, weekly, monthly or annualy. 
            If you enter your income in hourly, you will also need to enter the number of hours you work per week. 
            If you enter your income in daily, by default 5 days per week. If you enter your income in weekly, 
            by default 52 week per year. If you enter your income in monthly, by default 12 months you work per year. 
            If you enter your income in annualy, you will not need to enter any other information. 
            You can also select whether you want to include student loan and pension in your calculation. If you select student loan, it will take default rate into calculation. 
            
            If you select pension, it will take default amount into calculation.</p>
        </aside>
        <footer>
            <p>Disclaimer: This is a simple tax calculator and should not be used for any official purposes.</p>
            <p>Created by <a href='https://www.linkedin.com/in/ahammed-saad-5341b3231/'>Ahammed Saad</a></p>
            <p>Source code available on <a href="https://github.com/asaad227/taxCalculator.git">Github</a></p>
            <p>© 2023</p>
           
        </footer>
    </div>
  )
}
