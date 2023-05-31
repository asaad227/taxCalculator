export function taxCalculator(year, income){
    const rates = {
         basicRate: 0.2,
         higherRate: 0.4,
         additionalRate: 0.45
     }
         let totalTax = 0;
         if (year === 1) {
             if (income > 12570 && income <= 50270) {
                 totalTax = (income - 12570) * rates.basicRate;
             } else if (income > 50270 && income < 125140) {
                 totalTax = (income - 50270) * rates.higherRate + 37700 * rates.basicRate;
             } else if (income >= 125140) {
                 totalTax = (income - 125140) * rates.additionalRate + 74870 * rates.higherRate + 37700 * rates.basicRate;
             }
         }
         return totalTax;
     
 }
 
export function nationalInsurance(year, income){
     const rates = {
         basicRate: 0.12,
         higherRate: 0.02,
     }
         let totalNi = 0;
         if (year === 1) {
             if (income > 12576 && income <= 50268) {
                 totalNi = (income - 12576) * rates.basicRate;
             } else if (income > 50268) {
                 totalNi = (income - 50250) * rates.higherRate + 37692 * rates.basicRate;
             } 
         }
         return totalNi;
 
 }
 
 export function statutoryPension(year, income){
        const rates = {
            basicRate: 0.05,
            higherRate: 0.09,
        }
            let totalPension = 0;
            if (year === 1) {
                if (income > 12576 && income <= 50268) {
                    totalPension = (income - 12576) * rates.basicRate;
                } else if (income > 50268) {
                    totalPension = (income - 50250) * rates.higherRate + 37692 * rates.basicRate;
                }
            }
            return totalPension;

    }
    
export function studentLoan(year, income){
        let studentLoan = 0;
        if (year === 1) {
            if (income > 19535 && income <= 26575) {
                studentLoan = (income - 19535) * 0.09;
            } else if (income > 26575) {
                studentLoan = (income - 26575) * 0.09 + 7010 * 0.09;
            } 
        }
        return studentLoan;
    
    }

export function taxCalculatorScotland(year, income){

    const rates = {
        starterRate: 0.19,
        basicRate: 0.2,
        intermediateRate: 0.21,
        higherRate: 0.41,
        topRate: 0.46
    }
        let totalTax = 0;
        if (year === 1) {
            if (income > 12570 && income <= 14585) {
                totalTax = (income - 12570) * rates.starterRate;
            } else if (income > 14585 && income <= 25158) {
                totalTax = (income - 14585) * rates.basicRate + 2000 * rates.starterRate;
            } else if (income > 25158 && income <= 43430) {
                totalTax = (income - 25158) * rates.intermediateRate + 10573 * rates.basicRate + 2000 * rates.starterRate;
            } else if (income > 43430 && income <= 150000) {
                totalTax = (income - 43430) * rates.higherRate + 18272 * rates.intermediateRate + 10573 * rates.basicRate + 2000 * rates.starterRate;
            } else if (income > 150000) {
                totalTax = (income - 150000) * rates.topRate + 106570 * rates.higherRate + 18272 * rates.intermediateRate + 10573 * rates.basicRate + 2000 * rates.starterRate;
            }
        }
        return totalTax;
    
}

export function nationalInsuranceScotland(year, income){
    const rates = {
        basicRate: 0.12,
        higherRate: 0.02,
    }
        let totalNi = 0;
        if (year === 1) {
            if (income > 12576 && income <= 50268) {
                totalNi = (income - 12576) * rates.basicRate;
            } else if (income > 50268) {
                totalNi = (income - 50250) * rates.higherRate + 37692 * rates.basicRate;
            } 
        }
        return totalNi;

}

export function studentLoanScotland(year, income){
    let studentLoan = 0;
    if (year === 1) {
        if (income > 19535 && income <= 26575) {
            studentLoan = (income - 19535) * 0.09;
        } else if (income > 26575) {
            studentLoan = (income - 26575) * 0.09 + 7010 * 0.09;
        } 
    }
    return studentLoan;

}

export function taxCalculatorWales(year, income){

    const rates = {
        starterRate: 0.2,
        basicRate: 0.4,
        higherRate: 0.45,
    }
        let totalTax = 0;
        if (year === 1) {
            if (income > 12570 && income <= 14585) {
                totalTax = (income - 12570) * rates.starterRate;
            } else if (income > 14585 && income <= 25158) {
                totalTax = (income - 14585) * rates.basicRate + 2000 * rates.starterRate;
            } else if (income > 25158 && income <= 43430) {
                totalTax = (income - 25158) * rates.higherRate + 10573 * rates.basicRate + 2000 * rates.starterRate;
            } else if (income > 43430) {
                totalTax = (income - 43430) * rates.higherRate + 18272 * rates.basicRate + 10573 * rates.basicRate + 2000 * rates.starterRate;
            } 
        }
        return totalTax;
    
}

export function nationalInsuranceWales(year, income){
    const rates = {
        basicRate: 0.12,
        higherRate: 0.02,
    }
        let totalNi = 0;
        if (year === 1) {
            if (income > 12576 && income <= 50268) {
                totalNi = (income - 12576) * rates.basicRate;
            } else if (income > 50268) {
                totalNi = (income - 50250) * rates.higherRate + 37692 * rates.basicRate;
            } 
        }
        return totalNi;

}

export function studentLoanWales(year, income){
    let studentLoan = 0;
    if (year === 1) {
        if (income > 19535 && income <= 26575) {
            studentLoan = (income - 19535) * 0.09;
        } else if (income > 26575) {
            studentLoan = (income - 26575) * 0.09 + 7010 * 0.09;
        } 
    }
    return studentLoan;

}

