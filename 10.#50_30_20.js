/*The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on
needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
Given the after-tax income as ati, what you are supposed to do is to make a function that will return an
object that shows how much a person needs to spend on needs, wants, and savings.*/

let fiftyThirtyTwenty = function(ati) {
    if (isNaN (ati) || null) {
        console.log("Enter only number")
    } else if (ati <= 0) {
        console.log("No income for distribution")
    } else {
        const atiDistr = {
            Needs: ati*0.5,
            Wants: ati*0.3,
            Savings: ati*0.2
        };
        return atiDistr
    }
};

let ati = 35000;

console.log(fiftyThirtyTwenty(ati))
