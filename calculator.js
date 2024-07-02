let n1=parseFloat(prompt("enter a number"));
let operator=prompt("enter an operator");
let n2=parseFloat(prompt("enter a number"));

function add(n1, n2){
    console.log(n1+n2);
}
function subtract(n1, n2){
    return n1-n2;
}
function multiply(n1, n2){
    return n1*n2;
}
function divide(n1, n2){
    if(n2!=0){
        return n1/n2;
    }else{
        return "can't divide by zero";
    }
}
function operate(op, num1, num2){
    if(operator=='+'){
        console.log(add(num1, num2));
    }else if(operator=='-'){
        console.log(subtract(num1, num2));
    }else if(operator=='*'){
        console.log(multiply(num1, num2));
    }else if(operator=='/'){
        console.log(divide(num1, num2));
    }else{
        console.log("wrong operator");
    }
}
operate(operator, n1, n2);