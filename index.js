let operand = prompt("Choose an operation");
let a = 1;
let b = 2;

//choose operator
function operate(a,b,operand){
    if(operand == "+"){
        add(a,b);
        console.log(add(a,b));
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

//call of function
operate(a,b,operand);

// +
function add(a,b){
    return a + b;
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

