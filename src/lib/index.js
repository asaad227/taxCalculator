const taxInfo = {
   allowances: {
        personalAllowance: 12570,
        basicRate: 37570,
        higherRate: 150000,
        additionalRate: 150000,
       
   },
    rates: {
        basicRate: 0.2,
        higherRate: 0.4,
        additionalRate: 0.45,
        nationalInsurance: 0.12,
        higherRateNationalInsurance: 0.02,
        additionalRateNationalInsurance: 0.02,  
    },
    nationalInsurance: function (year, income) {
        let ni = 0;
        if (year === 1) {
            if (income > 9500) {
                ni = (income - 9500) * this.rates.nationalInsurance;
            }
        }
        return ni;
    },
    totalTax: function (year, income) {
        let totalTax = 0;
        if (year === 1) {
            if (income > 12570 && income < 50000) {
                totalTax = (income - 12570) * this.rates.basicRate;
            } else if (income > 50000 && income < 150000) {
                totalTax = (income - 50000) * this.rates.higherRate + 37430;
            } else if (income > 150000) {
                totalTax = (income - 150000) * this.rates.additionalRate + 50000;
            }
        }
        return totalTax;
    },
   
};

export default taxInfo;