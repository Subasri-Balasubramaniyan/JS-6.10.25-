// JSON parse- Used when receiving data from APIs or files.

let jsonString = '{"name":"Subasri","age":21}';
let obj = JSON.parse(jsonString);   /* JSON.parse() reads the JSON string and converts it into a JavaScript object. */

console.log(obj.name); // Output: Subasri


// JSON stringify-Used before sending data to servers or saving to local storage.
let student = {
  name: "Subasri",
  age: 21,
  department: "MCA"
};

let jsonData = JSON.stringify(student);  /* JSON.stringify() converts a JavaScript object into a JSON string. */
console.log(jsonData);
// Output: {"name":"Subasri","age":21,"department":"MCA"}


// fetch()
fetch("https://jsonplaceholder.typicode.com/users/1")  /* Fetch() is built-in javascript funcion used to make HTTp requests which returns promises(future value) that  is response from the server */
                                                    /* request data from the above free test API it returns fake data */ 
                                                    /* When the fetch() request completes, it gives a Response object.

                                                    That object has a method called .json() which also returns a Promise — it parses the raw response into a JavaScript object. */ 
.then(response => response.json())  // Parse JSON data

                                                        /* Here, data is the JavaScript object that was parsed from JSON.

                                                            You access its properties (like data.name) and print them. */
  .then(data => {
    console.log("User Name:", data.name);
  })
                                                        /* This runs only if there’s a network or parsing error (e.g., no internet connection, invalid JSON, or wrong URL).

                                                        It prevents your code from crashing.

                                                        Example output if something fails:

                                                        Error: TypeError: Failed to fetch
                                                                    */
  .catch(error => console.log("Error:", error));

  