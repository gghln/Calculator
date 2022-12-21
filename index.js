//Πρόσθεσα window.EventListener για να ξεκινάει η εκτέλεση μετά τη φόρτωση της σελίδας.
window.addEventListener('DOMContentLoaded', () => {
    //Επιλέγει όλα τα elements με class numbers και operator. το buttons είναι array.
    let buttons = document.querySelectorAll(".numbers, .operator")
    // For each element in the array
    buttons.forEach(item =>
        //Eventlisterne για click σε κάθε κουμπί
        item.addEventListener('click',(e)=>{
            //το value παίρνει την τιμή του κουμιού.
            //και το προσθέτει στο πεδίο display της οθόνης.
            let value = e.target.innerText;
            document.getElementById("display").innerText += value;

            if(value == "+"){
                //Ο πρώτος αριθμός της οθόνης αποθηκεύεται ως string.
                firstNumber = document.getElementById("display").innerText;
                //Αφαιρούμε τα σύμβολα των πράξεων από το string
                firstNumber = firstNumber.replace(/\D/g,'')
                //Μετατρέπουμε σε integer
                firstNumber = parseInt(firstNumber);
                //Αποθήκευση του operator
                operator = value;
                //Αδειάζουμε την οθόνη
                document.getElementById("display").innerText = "";
                document.getElementById("firstNumber").innerText = firstNumber;
                document.getElementById("operator").innerText = operator;
                
            }else if(value == "-"){
                firstNumber = document.getElementById("display").innerText;

                firstNumber = firstNumber.replace(/\D/g,'')

                firstNumber = parseInt(firstNumber);

                operator = value;
                document.getElementById("display").innerText = "";
                document.getElementById("firstNumber").innerText = firstNumber;
                document.getElementById("operator").innerText = operator;
            }else if(value == "*"){
                firstNumber = document.getElementById("display").innerText;

                firstNumber = firstNumber.replace(/\D/g,'')

                firstNumber = parseInt(firstNumber);

                operator = value;
                document.getElementById("display").innerText = "";
                document.getElementById("firstNumber").innerText = firstNumber;
                document.getElementById("operator").innerText = operator;
            }else if(value == "/"){
                firstNumber = document.getElementById("display").innerText;

                firstNumber = firstNumber.replace(/\D/g,'')

                firstNumber = parseInt(firstNumber);

                operator = value;
                document.getElementById("display").innerText = "";
                document.getElementById("firstNumber").innerText = firstNumber;
                document.getElementById("operator").innerText = operator;
            }
            else if(value == "="){
                //αποθηκεύουμε τον δεύτερο αριθμό
                secondNumber = document.getElementById("display").innerText;
                //αφαιρούμε τα σύμβολα από το string
                secondNumber = secondNumber.replace(/\D/g,'')
                //μετατροπή σε integer
                secondNumber = parseInt(secondNumber);
                //κλήση συνάρτηση με τον πρώτο αριθμό, τον δεύτερο και το σύμβολο της πράξης
                operate(firstNumber, secondNumber, operator);
            }
        })
    )
});

//choose operator
function operate(a,b,operand){
    if(operand == "+"){
        add(a,b);
    }
    else if(operand == "-"){
        subtract(a,b);
    }
    else if(operand == "*"){
        multiply(a,b);
    }
    else{
        divide(a,b);
    }
}

// Add
function add(a,b){
    document.getElementById("display").innerText = a + b;
}
// Subtract
function subtract(a,b){
    document.getElementById("display").innerText = a - b;
}
// Multiply
function multiply(a,b){
    document.getElementById("display").innerText = a * b;
}
// Divide
function divide(a,b){
    document.getElementById("display").innerText = a / b;
}