import fetch from 'node-fetch';
const response = await fetch("http://localhost:8000");
const data = await response.text();
console.log(data);
