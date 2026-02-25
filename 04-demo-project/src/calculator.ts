type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number;
    duration: number;
}

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInterestEarned: number;
}

type CalculationResult = InvestmentResult[] | string;

const calculateInvestment = function(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;
    if (initialAmount < 0) 
        return 'Initial investment amount must be >= 0.'

    if(duration <= 0) 
        return "Duration must be > 0"

    if(expectedReturn < 0)
        return 'Expected return must be >= 0'

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for(let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmount;
        totalContributions += annualContribution;
        total += annualContribution;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
            })
    }

    return annualResults;

};
const printResults = function(results: CalculationResult): void {
    if(typeof results === 'string') {
        console.log(results);
        return; 
    }

    for(const yearResults of results){
        console.log(yearResults.year);
        console.log(`Total: ${yearResults.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearResults.totalContributions.toFixed(0)}`);
        console.log(`Total Earned Interest: ${yearResults.totalInterestEarned.toFixed(0)}`);
        console.log('----------------');
    }
}

const investmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
}

const results = calculateInvestment(investmentData);
printResults(results);