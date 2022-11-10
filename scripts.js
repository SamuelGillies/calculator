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

function invert(a) {
    return a * -1; 
}

function percentage(a) {
    return a * 100; 
}

function operate(func, input1, input2) {
    displayValue = func(input1, input2); 
}

function clear() {
    input1 = 0; 
    input2 = 0; 
}

function inputVal(a) { 
    value = value + a.toString(); 
    return value; 
}

let value = ""; 
let input1 = 0; 
let input2 = 0; 
let func = ""; 



document.getElementById("0").addEventListener("click", function(e) {inputVal(0)});
document.getElementById("1").addEventListener("click", function(e) {inputVal(1)});
document.getElementById("2").addEventListener("click", function(e) {inputVal(2)});
document.getElementById("3").addEventListener("click", function(e) {inputVal(3)});
document.getElementById("4").addEventListener("click", function(e) {inputVal(4)});
document.getElementById("5").addEventListener("click", function(e) {inputVal(5)});
document.getElementById("6").addEventListener("click", function(e) {inputVal(6)});
document.getElementById("7").addEventListener("click", function(e) {inputVal(7)});
document.getElementById("8").addEventListener("click", function(e) {inputVal(8)});
document.getElementById("9").addEventListener("click", function(e) {inputVal(9)});

document.getElementById("AC").addEventListener("click", clear());
document.getElementById("inv").addEventListener("click", 0);
document.getElementById("perc").addEventListener("click", 0);
document.getElementById("div").addEventListener("click", function(e) {func = divide()});
document.getElementById("mul").addEventListener("click", function(e) {func = multiply()});
document.getElementById("sub").addEventListener("click", function(e) {func = subtract()});
document.getElementById("plus").addEventListener("click", function(e) {func = plus()});
document.getElementById("dec").addEventListener("click", function(e) {console.log(".")});

document.getElementById("equals").addEventListener("click", function(e) {console.log(value)});

// operate(func, input1, input2)