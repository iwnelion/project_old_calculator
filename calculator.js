let operatorOption='';
let nm1='';
let nm2='';

function add(n1, n2){
    return (n1+n2);
}
function subtract(n1, n2){
    return n1-n2;
}
function multiply(n1, n2){
    return n1*n2;
}
function divide(n1, n2){
    if(n2!==0){
        return n1/n2;
    }else{
        alert("can't divide by zero");
    }
}

function handleButton(value){
    const display=document.getElementById('display');
    if(isOperator(value)){
        operatorOption=value;
        display.textContent+=value;
    }else if(value==='='){
        const result=calc(parseFloat(nm1), operatorOption, parseFloat(nm2));
        display.textContent=result;
        nm1='';
        operatorOption='';
        nm2='';
    }else{
        if(!operatorOption){
            nm1+=value;
        }else{
            nm2+=value;
        }
        display.textContent+=value;
    }
}

function isOperator(value){
    return ['+','-','*','/'].includes(value);
}

function calc(nm1, operatorOption, nm2){
    switch(operatorOption){
        case '+':
            return add(nm1, nm2);
        case '-':
            return subtract(nm1, nm2);
        case '*':
            return multiply(nm1, nm2);
        case '/':
            return divide(nm1, nm2);
        default:
            alert('wrong operator');
    }
}

const buttons=document.querySelectorAll('.num, .oper');
for(let i=0;i<buttons.length;i++){
    const button=buttons[i];
    button.addEventListener('click', ()=>{
        handleButton(button.textContent);
    });
}
const clear=document.getElementById('clr');
clear.addEventListener('click', ()=>{
    const display=document.getElementById('display');
    display.textContent='';
    nm1='';
    nm2='';
    operatorOption='';
});