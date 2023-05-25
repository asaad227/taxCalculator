const libary = {
    nationalInsurance: function (year, income) {
        let nationalInsurance = 0;
        if (year === 1) {
            if (income <= 9500) {
                nationalInsurance = 0;
            } else if (income > 9500 && income <= 50000) {
                nationalInsurance = (income - 9500) * 0.12;
            } else if (income > 50000) {
                nationalInsurance = (income - 50000) * 0.02 + (50000 - 9500) * 0.12;
            }
        }
        return nationalInsurance;
    }
    ,
    allowance: function (year) {
        if (year === 1) {
            return 12570;
        } else {
            return 0;
        }
    }
    ,
    basicRate: function (year) {
        if (year === 1) {
            return 50000;
        } else {
            return 0;
        }
    }
    ,
    higherRate: function (year) {
        if (year === 1) {
            return 150000;
        } else {
            return 0;
        }
    }
    ,
    additionalRate: function (year) {
        if (year === 1) {
            return 0;
        }
    }
    ,
    percentageBasicRate: function (year) {
        if (year === 1) {
            return 20;
        } else {
            return 0;
        }
    }
    ,
    percentageHigherRate: function (year) {
        if (year === 1) {
            return 40;
        } else {
            return 0;
        }
    }
    ,
    percentageAdditionalRate: function (year) {
        if (year === 1) {
            return 45;
        } else {
            return 0;
        }
    },
    totalTax: function (year, income) {
        let allowance = this.allowance(year);
        let basicRate = this.basicRate(year);
        let higherRate = this.higherRate(year);
        let additionalRate = this.additionalRate(year);
        let taxBasicRate = (income - allowance) * (this.percentageBasicRate(year) / 100);
        let taxHigherRate = (income - basicRate) * (this.percentageHigherRate(year) / 100);
        let taxAdditionalRate = (income - higherRate) * (this.percentageAdditionalRate(year) / 100);
        let totalTax = 0;
        if (income <= allowance) {
            totalTax = 0;
        } else if (income > allowance && income <= basicRate) {
            totalTax = taxBasicRate;
        } else if (income > basicRate && income <= higherRate) {
            totalTax = taxBasicRate + taxHigherRate;
        } else if (income > higherRate && income <= additionalRate) {
            totalTax = taxBasicRate + taxHigherRate + taxAdditionalRate;
        } else if (income > additionalRate) {
            totalTax = taxBasicRate + taxHigherRate + taxAdditionalRate;
        }
        return totalTax;
    }


};

export default libary;