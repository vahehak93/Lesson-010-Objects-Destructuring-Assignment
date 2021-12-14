/*Create a function that takes infinite count of elements, operator and prints their sum. If there's no
operator, then default should be +*/


// ????????????
const printSum = function(oper = "+", ...args) {
    let x = oper.valueOf()
    console.log(x)
    let sum = args.reduce(function(acc,item){
        if (oper === "-") {
            return acc -= item
        } else if (oper === "*") {
            return acc *= item
        } else if (oper === "/") {
            return acc /= item
        } else if (oper === "**") {
            return acc ** item
        } else {
            return acc += item
        }
    });
    return sum
}

console.log(printSum("**",1,2,3,4,5))

