1. JSON (JavaScript Object Notation)
🔹 What is JSON?

JSON stands for JavaScript Object Notation.
It is a lightweight data format used for storing and exchanging data between a server and a web application.

It is easy for humans to read and write, and easy for machines to parse and generate.

🔹 Syntax

Data is written in key-value pairs

Keys and string values must be in double quotes

Objects are enclosed in {} and arrays in []

{
  "name": "Subasri",
  "age": 21,
  "skills": ["HTML", "CSS", "JavaScript"]
}

🔹 JSON Methods in JavaScript
✅ 1. JSON.stringify()

Converts a JavaScript object into a JSON string.

let student = { name: "Subasri", age: 21 };
let jsonString = JSON.stringify(student);
console.log(jsonString); // {"name":"Subasri","age":21}

✅ 2. JSON.parse()

Converts a JSON string back into a JavaScript object.

let data = '{"name":"Subasri","age":21}';
let obj = JSON.parse(data);
console.log(obj.name); // Subasri

🔹 Deep vs Shallow Copy
🩵 Shallow Copy

Copies only the top-level properties; nested objects share the same reference.

let user = { name: "Subasri", address: { city: "Nagapattinam" } };
let copy = { ...user };

copy.address.city = "Chennai";
console.log(user.address.city); // "Chennai" (affected)

💙 Deep Copy

Creates a completely independent copy, even for nested objects.

let user = { name: "Subasri", address: { city: "Nagapattinam" } };
let deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.address.city = "Chennai";
console.log(user.address.city); // "Nagapattinam" (not affected)

🔹 JSON in APIs

APIs often send or receive data in JSON format.

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

💾 2. Web Storage
📍 Types:

localStorage → Data persists even after the browser is closed.

sessionStorage → Data is cleared when the tab or browser is closed.

Cookies → Data stored with an expiration date and sent with HTTP requests.

🔹 localStorage Example
// Store data
localStorage.setItem("username", "Subasri");

// Get data
let name = localStorage.getItem("username");
console.log(name); // Subasri

// Remove item
localStorage.removeItem("username");

// Clear all
localStorage.clear();


📌 Note: localStorage only stores strings.
If you want to store objects:

let user = { name: "Subasri", age: 21 };
localStorage.setItem("user", JSON.stringify(user));

let data = JSON.parse(localStorage.getItem("user"));
console.log(data.name); // Subasri

🔹 sessionStorage Example
// Store
sessionStorage.setItem("theme", "dark");

// Retrieve
console.log(sessionStorage.getItem("theme")); // dark

// Remove
sessionStorage.removeItem("theme");


🕒 Data is available only during the browser session (tab open).

🔹 Cookies Example
// Set cookie
document.cookie = "username=Subasri; expires=Fri, 31 Dec 2025 12:00:00 UTC; path=/";

// Get cookie
console.log(document.cookie);

// Delete cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

📊 Comparison Table
Feature	localStorage	sessionStorage	Cookies
Storage Limit	~5MB	~5MB	~4KB
Expires	Never (until manually cleared)	On tab close	Based on expiry date
Accessible by	JavaScript only	JavaScript only	JS + Server
Auto sent to server	❌ No	❌ No	✅ Yes
Use Case	Long-term data	Temporary data	Login/session info
