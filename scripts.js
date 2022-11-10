function add(a, b) {
    return a + b; 
}; 

function subtract(a, b) {
    return a - b; 
}; 

function multiply(a, b) {
    return a * b; 
}; 

function divide(a, b) { 
    return a / b; 
}; 

function operator(func, input1, input2) {
    return func(input1, input2); 
}

function clear() {
    input1 = 0; 
    input2 = 0; 
}

let input1 = 0; 
let input2 = 0; 

document.getElementById("num0").addEventListener("click", 0);
document.getElementById("num1").addEventListener("click", 1);
document.getElementById("num2").addEventListener("click", 2);
document.getElementById("num3").addEventListener("click", 3);
document.getElementById("num4").addEventListener("click", 4);
document.getElementById("num5").addEventListener("click", 5);
document.getElementById("num6").addEventListener("click", 6);
document.getElementById("num7").addEventListener("click", 7);
document.getElementById("num8").addEventListener("click", 8);
document.getElementById("num9").addEventListener("click", 9);

document.getElementById("AC").addEventListener("click", clear());
document.getElementById("inv").addEventListener("click", 0);
document.getElementById("perc").addEventListener("click", 0);
document.getElementById("div").addEventListener("click", 0);
document.getElementById("mul").addEventListener("click", 0);
document.getElementById("sub").addEventListener("click", 0);
document.getElementById("plus").addEventListener("click", 0);
document.getElementById("dec").addEventListener("click", 0);

document.getElementById("equals").addEventListener("click", operator(func, input1, input2));
