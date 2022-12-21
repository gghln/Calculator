//Eventlistener gia to click tou koumpiou kai emfanisi tou ari8mou sthn o8oni.
addEventListener('click',(e)=>{
    let value = e.target.innerText;
    document.getElementById("display").innerText += value;
    if(value == "+"){
        //pairnw to string, afairw to sumvolo tis praxis, to metatrepw se int
        firstNumber = document.getElementById("display").innerText;
        firstNumber = firstNumber.replace(/\D/g,'')
        firstNumber = parseInt(firstNumber);
        operator = value;
        document.getElementById("display").innerText = "";
    }else if(value == "="){
        secondNumber = document.getElementById("display").innerText;
        secondNumber = secondNumber.replace(/\D/g,'')
        secondNumber = parseInt(secondNumber);
        operate(firstNumber, secondNumber, operator);
    }
});    

//choose operator
function operate(a,b,operand){
    if(operand == "+"){
        add(a,b);
    }
    else if(operand == "-"){
        subtract(a,b);
        console.log(subtract(a,b));
    }
    else if(operand == "*"){
        multiply(a,b);
        console.log(multiply(a,b));
    }
    else{
        divide(a,b);
        console.log(divide(a,b));
    }
}

// +
function add(a,b){
    document.getElementById("display").innerText = a + b;
}
// -
function subtract(a,b){
    return a - b;
}
// *
function multiply(a,b){
    return a * b;
}
// /
function divide(a,b){
    return a + b;
}