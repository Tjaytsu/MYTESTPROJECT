//DOM ELEMENTS
let resultEl = document.querySelector('#result');
let lengthEl = document.querySelector('#length');
let uppercaseEl = document.querySelector('#uppercase');
let lowercaseEl = document.querySelector('#lowercase');
let numbersEl = document.querySelector('#numbers');
let symbolsEl = document.querySelector('#symbols');
let generateEl = document.querySelector('#generate');
let clipboardEl = document.querySelector('#clipboard');

//Generate Event Listener
generateEl.addEventListener('click',()=> {
 let length =  +lengthEl.value;
 let hasUpper = uppercaseEl.checked;
 let hasLower = lowercaseEl.checked;
 let hasNumber = numbersEl.checked;
 let hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(length,hasLower,hasUpper,hasNumber,hasSymbol);
});


//Copy password to clipboard

clipboardEl.addEventListener('click', () =>{
 let textarea = document.createElement('textarea');
 let password = resultEl.innerText;

 if(!password){
     return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    textarea.remove();
    alert('password copied to clipboard!');
});

//Generate Password Function
function generatePassword (length,lower,upper,number,symbol){
// 1. Init pass Var
// 2. Filter out unchecked types
// 3. Loop over length and call generator function for each type
// 4. Add final pass to pass var and return it which get put into the resultEl.innerText


   let generatedPassword = '';

   let typesCount = lower + upper + number + symbol ;
   // console.log('typesCount: ', typesCount);

   let typeArr = [{lower},{upper},{number},{symbol}].filter(item => Object.values(item)[0]);
    // console.log('typesArr: ', typeArr);

    if(typesCount === 0){
     return '';
    }

    for(let i =0; i<length; i+= typesCount){
      typeArr.forEach(type =>{
       let funcName = Object.keys(type)[0];

       // console.log('funcName', funcName);

       generatedPassword += randomFunc[funcName]();
      })
    }

    let finalPassword = generatedPassword.slice(0,length) ;

    return finalPassword;
}





//Object with Each functions
let randomFunc = {
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
