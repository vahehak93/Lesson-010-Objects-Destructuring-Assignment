/*Create a function that takes an object as an argument and returns a string with facts about the city. The city
facts will need to be extracted from the object's three properties:
The string should have the following format: X has a population of Y and is situated in Z (where X is the city
name, Y is the population and Z is the continent the city is situated in).
cityFacts({
name: "Paris",
population: "2,140,526",
continent: "Europe",
}); // ➞ "Paris has a population of 2,140,526 and is situated in Europe"*/


let cityFacts = function(city) {
    const {name : X, population: Y, continent : Z} = city;

    let facts = `${X} has a population of ${Y} and is situated in ${Z}`
    return facts
}

const city = {
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
};

console.log(cityFacts(city))

