import React from 'react';
import "./index.css"

export default function IncomeIn({isDaily, isWeekly, isMonthly, isAnnual, setDaily, setWeekly, 
    setMonthly, setAnnualy, daily, weekly, monthly, annualy, isHrs, setHrsPerWeek, setIncomeByHour, incomeByHour, hrsPerWeek}) {
  return (
    <label>
    <h2>Income Input</h2>
    <label className={isHrs? 'hrsShow':'hrsHide'}>
      Hourly Income:
          <br />
          <input type="number" value={incomeByHour} step=".01" onChange={(e)=>setIncomeByHour(e.target.value)} placeholder='Per hour pay here...' />
          <input type='number' value={hrsPerWeek} step=".01"  onChange={(e)=>setHrsPerWeek(e.target.value)} placeholder='Hours per week here...'/>
      </label>
    <label className={isDaily? 'dailyShow':'dailyHide'}>
    Daily Income:
        <input type="number" step='.01' placeholder='Enter here...' value={daily} onChange={(e)=> setDaily(e.target.value)} />
    </label>
    <label className={isWeekly? 'weeklyShow':'weeklyHide'}>
    Weekly Income:
        <input type="number" step='.01' placeholder='Enter here...' value={weekly} onChange={(e)=> setWeekly(e.target.value)} />
    </label>
    <label className={isMonthly? 'monthlyShow':'monthlyHide'}>
    Monthly Income:
        <input type="number" step='.01' placeholder='Enter here...' value={monthly} onChange={(e)=>setMonthly(e.target.value)} />
    </label>
    <label className={isAnnual? 'annualShow': 'annualHide'}>
    Annual Income:
        <input type="number" step='.01' placeholder='Enter here...' value={annualy} onChange={(e)=>setAnnualy(e.target.value)} />
    </label>
    </label>
  )
}
