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
 
  
