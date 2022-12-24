let previousNumber = '';
let currentNumber = '';
let previousOperator = '';
let currentOperator = '';
let total = 0;
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
            if(currentNumber == '' || previousNumber == ''){
                currentOperator = e.target.innerText;
                previousScreen.innerText = currentNumber + currentOperator
                previousNumber = currentNumber;
                previousOperator = currentOperator
                currentScreen.innerText = ''
            }else {
                currentOperator = e.target.innerText;
                if(previousOperator == "+"){
                    total = previousNumber + currentNumber
                    previousScreen.innerText = total + currentOperator
                    console.log(previousNumber, currentNumber, total)
                } else if(previousOperator == "-"){
                    total = previousNumber - currentNumber
                    previousScreen.innerText = total + currentOperator
                    console.log(previousNumber, currentNumber, total)
                }else if(previousOperator == "*"){
                    total = previousNumber * currentNumber
                    previousScreen.innerText = total + currentOperator
                    console.log(previousNumber, currentNumber,total)
                }else if(previousOperator == "/"){
                    total = previousNumber / currentNumber
                    previousScreen.innerText = total + currentOperator
                    console.log(previousNumber, currentNumber, total)
                }
                previousNumber = total
                previousOperator = currentOperator
                currentScreen.innerText = ''
            }   
        })
    })

    clear.addEventListener('click', () =>{
        clearScreen();
    })

    equal.addEventListener('click', ()=>{
        operate(previousNumber, currentNumber, currentOperator)
    })


    document.addEventListener('keypress', (e)=>{
        if(e.key in [0,1,2,3,4,5,6,7,8,9]){
            currentScreen.innerText += e.key;
            currentNumber = Number(currentScreen.innerText)
        }
         else if(e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/"){
            if(e.key == "/"){
                e.preventDefault()
            }
            if(currentNumber == '' || previousNumber == ''){
                currentOperator = e.key;
                previousScreen.innerText = currentNumber + currentOperator
                previousNumber = currentNumber;
                previousOperator = currentOperator
                currentScreen.innerText = ''
            }else {
                currentOperator = e.key;
                if(previousOperator == "+"){
                    total = previousNumber + currentNumber
                    previousScreen.innerText = total + currentOperator
                    console.log(previousNumber, currentNumber, total)
                } else if(previousOperator == "-"){
                    total = previousNumber - currentNumber
                    previousScreen.innerText = total + currentOperator
                    console.log(previousNumber, currentNumber, total)
                }else if(previousOperator == "*"){
                    total = previousNumber * currentNumber
                    previousScreen.innerText = total + currentOperator
                    console.log(previousNumber, currentNumber,total)
                }else if(previousOperator == "/"){
                    total = previousNumber / currentNumber
                    previousScreen.innerText = total + currentOperator
                    console.log(previousNumber, currentNumber, total)
                }
                previousNumber = total
                previousOperator = currentOperator
                currentScreen.innerText = ''
            }
        }
         else if (e.key == "="){
            operate(previousNumber,currentNumber,currentOperator)
        }
    })
});

function operate(a,b,operand){
    if(operand == "+"){
        previousScreen.innerText = a + operand + b
        currentScreen.innerText = a + b;
        currentNumber = a + b
        currentNumber = parseInt(currentNumber)
    }
    else if(operand == "-"){
        previousScreen.innerText = a + operand + b
        currentScreen.innerText = a - b;
        currentNumber = a - b
        currentNumber = parseInt(currentNumber)
    }
    else if(operand == "*"){
        previousScreen.innerText = a + operand + b
        currentScreen.innerText = a * b;
        currentNumber = a * b
        currentNumber = parseInt(currentNumber)
    }
    else{
        previousScreen.innerText = a + operand + b
        currentScreen.innerText = a / b;
        currentNumber = a / b
        currentNumber = parseInt(currentNumber)
    }
}


// Clear Screen
function clearScreen(){
    previousNumber = '';
    currentNumber = '';
    currentOperator = '';
    currentScreen.innerText = '';
    previousScreen.innerText = '';
    total = 0;
}