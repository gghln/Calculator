let previousNumber = '';
let currentNumber = '';
let operator ='';
let click = 0;

//Πρόσθεσα window.EventListener για να ξεκινάει η εκτέλεση μετά τη φόρτωση της σελίδας.
window.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll(".numbers");
    let operators = document.querySelectorAll(".operator");
    let clear = document.querySelector("#clear");
    let equal = document.querySelector("#equal");

    buttons.forEach(item => {
        item.addEventListener('click', (e) =>{
            currentScreen.innerText += e.target.innerText;
            currentNumber = Number(currentScreen.innerText);
        })
    })

    operators.forEach(item=>{
        item.addEventListener('click', (e)=>{
            operator = e.target.innerText;
            operatorScreen.innerText = operator;
            previousScreen.innerText = currentNumber
<<<<<<< HEAD
            currentScreen.innerText = ''
            currentNumber = ''
=======
            previousNumber = currentNumber;
            currentScreen.innerText = '';   
>>>>>>> 33d59f04ce21e01c6acbfe486af98f30328b951e
        })
    })

    clear.addEventListener('click', (e) =>{
        clearScreen();
    })

    equal.addEventListener('click', (e)=>{
<<<<<<< HEAD
        operate(currentNumber,previousNumber,operator)
=======
        manageOperator(currentNumber, previousNumber, operator)
>>>>>>> 33d59f04ce21e01c6acbfe486af98f30328b951e
    })

<<<<<<< HEAD
    document.addEventListener('keypress', (e)=>{
        if(e.key in [0,1,2,3,4,5,6,7,8,9]){
            currentScreen.innerText += e.key;
            currentNumber = Number(currentScreen.innerText)
        }
        else if(e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/"){
            operator = e.key;
            operatorScreen.innerText = operator;
            previousNumber = currentNumber;
            previousScreen.innerText = currentNumber
            currentScreen.innerText = ''
            currentNumber = ''
        }
        else if (e.key == "="){
            operate(currentNumber,previousNumber,operator)
        }
   })
});
=======
function manageOperator(a,b,c){
    if(c == "+"){
        operate (a, b, c)
    }else if(c == "-"){
        operate (a, b, oc)
    }else if(c == "*"){
        operate (a, b, c)
    }else if(c == "/"){
        operate (a, b, c)
    }
}
>>>>>>> 33d59f04ce21e01c6acbfe486af98f30328b951e

//choose operator
function operate(a,b,operand){
    if(operand == "+"){
        operatorScreen.innerText = '';
        previousScreen.innerText = '';
        add(a,b);
    }
    else if(operand == "-"){
        operatorScreen.innerText = '';
        previousScreen.innerText = '';
        subtract(a,b);
    }
    else if(operand == "*"){
        operatorScreen.innerText = '';
        previousScreen.innerText = '';
        multiply(a,b);
    }
    else{
        operatorScreen.innerText = '';
        previousScreen.innerText = '';
        divide(a,b);
    }
}

// Add
function add(a,b){
    document.getElementById("currentScreen").innerText = a + b;
}
// Subtract
function subtract(a,b){
    document.getElementById("currentScreen").innerText = a - b;
}
// Multiply
function multiply(a,b){
    document.getElementById("currentScreen").innerText = a * b;
}
// Divide
function divide(a,b){
    document.getElementById("currentScreen").innerText = a / b;
}

// Clear Screen
function clearScreen(){
    previousNumber = '';
    currentNumber = '';
    operator ='';
    currentScreen.innerText = '';
    previousScreen.innerText = '';
    operatorScreen.innerText = '';
}