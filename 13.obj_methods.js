// Write object.keys, object.values and object.entries methods using for..in

const obj = {
    name: "Vahe",
    surname: "Hakobyan",
    age: 28,
    country: "Armenia"
};

// object.keys

for (let key in obj) {
    console.log(key)
}

// object.values

for (let value in obj) {
    console.log(obj[value])
}

// object.entries

let arr = [];
for (let key_value in obj) {
    arr.push([key_value,obj[key_value]]) 
}
console.log(arr)

// console.log(Object.entries(obj))