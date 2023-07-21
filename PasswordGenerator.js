//DOM ELEMENTS
let resultEl = document.querySelector('#result');
let lengthEl = document.querySelector('#length');
let uppercaseEl = document.querySelector('#uppercase');
let lowercaseEl = document.querySelector('#lowercase');
let numbersEl = document.querySelector('#numbers');
let symbolsEl = document.querySelector('#symbols');
let generateEl = document.querySelector('#generate');
let clickboardEl = document.querySelector('#generate');

//Generate Event Listener
generateEl.addEventListener('click',()=> {
 let length =  +lengthEl.value;
 let hasUpper = uppercaseEl.checked;
 let hasLower = lowercaseEl.checked;
 let hasNumber = numbersEl.checked;
 let hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(length,hasLower,hasUpper,hasNumber,hasSymbol);
  

})


//Object with Each functions
let RandomFunc = {
 lower : getRandomLower,
 upper : getRandomUpper,
 number : getRandomNumber,
 symbol : getRandomSymbol
};

//Generator Functions(https://net-comber.com/charset.html)

function getRandomLower(){
return String.fromCharCode(Math.floor(Math.random()*26) + 97) ;
}

function getRandomUpper(){
return String.fromCharCode(Math.floor(Math.random()*26) + 65) ;
}

function getRandomNumber(){
return String.fromCharCode(Math.floor(Math.random()*10) + 48) ;
}

function getRandomSymbol(){
let symbols = '!@#$%^&*+(){}[]=<>/,.'
return symbols[Math.floor(Math.random()* symbols.length)];
}
// console.log(getRandomSymbol());
