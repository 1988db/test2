document.addEventListener('DOMContentLoaded', ()=> {


const narodziny = new Date(1983,6,25)
const teraz = new Date();

let wiek = teraz - narodziny;
console.log(wiek/1000/60/60/24/365)
  

  
 });

