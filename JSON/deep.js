let person = { name: "Subasri", address: { city: "Nagapattinam" } };
let deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = "Chennai";

console.log(person.address.city); // ✅ Output: Nagapattinam