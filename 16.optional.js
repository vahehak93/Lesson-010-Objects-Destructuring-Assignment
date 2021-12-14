/* Create a function that returns the frequency distribution of an array. This function should return an object,
where the keys are the unique elements and the values are the frequency in which those elements occur.*/


let getFrequencies = function(...args) {
    let count = 0;
    let obj = {};
    for (let i in args) {
        
        obj[args[i]] = count++
    }
    return obj

};

console.log(getFrequencies("A", "B", "A", "A", "A"))
