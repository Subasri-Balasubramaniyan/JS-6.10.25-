const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

localStorage.setItem('username', 'Subasri');
console.log(localStorage.getItem('username'));
