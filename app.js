document.addEventListener('DOMContentLoaded', ()=> { 
  

// function loadScript(src) {
//   return new Promise(function(resolve, reject){
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = resolve(script);
//     script.onerror = reject(new Error('Script load error'));

//     document.head.append(script);
//   })  
// }

// let loader = loadScript('script.js');
// loader.then(
//   result => alertF(),
//   error => console.log(error)
// )

function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}

let callbackF = function() {
  alertF()
}
loadScript('script.js', callbackF);
})
