import React from 'react'
import "./index.css"
import IncomeIn from '../IncomeIn'

export default function Form({year, setYear, handleSubmit, isDaily, setIsDaily, isWeekly, setIsWeekly, 
  isMonthly, setIsMonthly, isAnnual, setIsAnnual, 
  daily, setDaily, weekly, setWeekly, monthly, setMonthly, annualy, setAnnualy, isLoan, setIsLoan, isPension, setIsPension}) {

  return (
    <form onSubmit={handleSubmit}>
    <h2>Year</h2>
    <label>
    Tax Year:
        <select value={year} onChange={(e)=>setYear(e.target.value)}>
            <option value="1">2023/24</option>
            <option value="2">2024/25</option>
            </select>
    </label>
   
    
    <h2>Income Selection</h2>
    <label>
    Daily: 
    <span><input type="checkbox" onChange={(e)=>setIsDaily(e.target.checked)} value={isDaily} /></span>
    </label>
    <label>
    Weekly:
    <span><input type="checkbox" onChange={(e)=>setIsWeekly(e.target.checked)} value={isWeekly} /></span>
    </label>
    <label>
    Monthly: 
    <span><input type="checkbox" onChange={(e)=>setIsMonthly(e.target.checked)} value={isMonthly} /></span>
    </label>
    <label>
    Annualy:    
    <span><input type="checkbox" onChange={(e)=>setIsAnnual(e.target.checked)} value={isAnnual} defaultChecked/></span>
    </label>
    <IncomeIn isDaily={isDaily} isWeekly={isWeekly} 
    isMonthly={isMonthly} isAnnual={isAnnual} daily={daily} 
    weekly={weekly} monthly={monthly} annualy={annualy} setAnnualy={setAnnualy} 
    setDaily={setDaily} setMonthly={setMonthly} setWeekly={setWeekly} />
    <div>
    <h2>Deductions</h2>
    <label>
    Student Loan:    
    <span><input type="checkbox" onChange={(e)=>setIsLoan(e.target.checked)} value={isLoan} /></span>
    </label>
    <label>
    Workplace Pension:    
    <span><input type="checkbox" onChange={(e)=>setIsPension(e.target.checked)} value={isPension} /></span>
    </label>
</div>
    <input type="submit" value="Calculate" />
   
    </form>
   
  
  )
}
