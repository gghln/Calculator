let previousNumber = '';
let currentNumber = '';
let previousOperator = '';
let currentOperator = '';
let total = 0;
let float =''

//Πρόσθεσα window.EventListener για να ξεκινάει η εκτέλεση μετά τη φόρτωση της σελίδας.
window.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll(".numbers");
    let operators = document.querySelectorAll(".operator");
    let clear = document.querySelector("#clear");
    let equal = document.querySelector("#equal");
    let backspace = document.querySelector("#backspace")
    let float = document.querySelector("#float")

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
                } else if(previousOperator == "-"){
                    total = previousNumber - currentNumber
                    previousScreen.innerText = total + currentOperator
                }else if(previousOperator == "*"){
                    total = previousNumber * currentNumber
                    previousScreen.innerText = total + currentOperator
                }else if(previousOperator == "/"){
                    total = previousNumber / currentNumber
                    previousScreen.innerText = total + currentOperator
                }
                previousNumber = total
                previousOperator = currentOperator
                currentScreen.innerText = ''
            }   
        })
    })

    float.addEventListener('click',(e)=>{
        if(currentScreen.innerText.includes(".")){
            
        }
        else{
            currentScreen.innerText += e.target.innerText;
        }
    })

    backspace.addEventListener('click', () =>{
        var value = currentScreen.innerText;
        currentScreen.innerText = value.substr(0, value.length - 1); 
    })

    clear.addEventListener('click', () =>{
        clearScreen();
    })

    equal.addEventListener('click', ()=>{
        operate(previousNumber, currentNumber, currentOperator)
    })




    document.addEventListener('keydown', (e)=>{
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
                } else if(previousOperator == "-"){
                    total = previousNumber - currentNumber
                    previousScreen.innerText = total + currentOperator
                }else if(previousOperator == "*"){
                    total = previousNumber * currentNumber
                    previousScreen.innerText = total + currentOperator
                }else if(previousOperator == "/"){
                    total = previousNumber / currentNumber
                    previousScreen.innerText = total + currentOperator
                }
                previousNumber = total
                previousOperator = currentOperator
                currentScreen.innerText = ''
            }
        }
        else if (e.key == "="){
            operate(previousNumber,currentNumber,currentOperator)
        }else if (e.key == "Backspace"){
            var value = currentScreen.innerText;
            currentScreen.innerText = value.substr(0, value.length - 1); 
        }else if(e.key == "Enter"){
            clearScreen()
        }else if(e.key == "."){
            if(currentScreen.innerText.includes(".")){
                
            }
            else{
                currentScreen.innerText += e.key;
            }
        }
    })
});

function operate(a,b,operand){
    if(operand == "+"){
        previousScreen.innerText = a + operand + b
        currentScreen.innerText = (a + b).toFixed(2);
        currentNumber = (a / b).toFixed(2);
        currentNumber = parseInt(currentNumber)
    }
    else if(operand == "-"){
        previousScreen.innerText = a + operand + b
        currentScreen.innerText = (a - b).toFixed(2);
        currentNumber = (a - b).toFixed(2);
        currentNumber = parseInt(currentNumber)
    }
    else if(operand == "*"){
        previousScreen.innerText = a + operand + b
        currentScreen.innerText = (a * b).toFixed(2);
        currentNumber = (a * b).toFixed(2);
        currentNumber = parseInt(currentNumber)
    }
    else if(operand == "/"){
        if( b != 0){
            previousScreen.innerText = a + operand + b
            currentScreen.innerText = (a / b).toFixed(2);
            currentNumber = (a / b).toFixed(2);
            currentNumber = parseInt(currentNumber)
        }else{
            currentScreen.innerText = "NO! DON'T!"
            previousScreen.innerText = ''
        }
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