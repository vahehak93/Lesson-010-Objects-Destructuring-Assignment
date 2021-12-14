/*Write a function that creates an object with each (key, value) pair being the (lower case, upper case)
versions of a letter, respectively.*/


const lower_upper = function(...args) {
    let obj = {};
    for (let i in args) {
        let x = args[i].toUpperCase();
        let y = args[i].toLowerCase();
        obj[y] = x
    }
    return obj
}

console.log(lower_upper("a", "b", "c"))