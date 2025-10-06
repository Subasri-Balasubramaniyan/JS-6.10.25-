// Shallow copy
let person = { name: "Subasri", address: { city: "Nagapattinam" } };
let shallowCopy = { ...person };

shallowCopy.address.city = "Chennai";

console.log(person.address.city); // ❗ Output: Chennai (changed!)
