/*let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
let name, country, job;
const { name, country, job } = person;
console.log(name);*/

let person = { name: "Sarah", country: "Nigeria", job: "Developer" };
let name, country, job;
({ name, country, job } = person);
console.log(name);