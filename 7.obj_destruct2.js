// Get name, country and job using destructuring

let person = { name: "Sarah", country: "Armenia", job: "Developer" };

let name, country, job;
({name, country, job} = person);

console.log(name); // "Sarah"
console.log(country); // "Nigeria"
console.log(job); // "Developer"
