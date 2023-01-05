// initialisation

let input1 = ""; 
let input2 = ""; 
let func = ""; 
let funcSet = false; 
let result = ''; 

// functions

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

// calculation

function operate(func, input1, input2) {
    a = Number(input1); 
    b = Number(input2); 
    
    switch (func) {
        case 'add': 
            result = add(a, b);
            break;
        case 'subtract': 
            result = subtract(a,b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break; 
        case 'divide': 
            result = divide(a,b);
            break;
    }

    if (result.toString().length <= 10) {
        document.getElementById("displayResult").textContent = result; 
        document.getElementById("extra-info").textContent = ""; 
    } else {
        let large = result.toExponential().split("e"); 
        document.getElementById("displayResult").textContent = large[0]; 
        document.getElementById("extra-info").textContent = "e" + large[1]; 

    }

    subsequentMath();
}

// subsequent processing 

function subsequentMath() {
    input1 = result; 
    input2 = ""; 
    func = ""; 
    funcSet = true; 
}

// reset values

function clear() {
    input1 = ""; 
    input2 = ""; 
    func = "";
    funcSet = false; 
    document.getElementById("displayResult").textContent = 0; 
    document.getElementById("extra-info").textContent = ""; 

}

// input values

function inputVal(a) { 
    if (funcSet == false) { 
        if (input1.length < 10) {
            input1 = input1 + a.toString(); 
            document.getElementById("displayResult").textContent = input1; 
       } else {
            input1 = input1; 
            document.getElementById("displayResult").textContent = input1; 

       }

    } else if (funcSet == true) {
        if (input2.length < 10) {
            input2 = input2 + a.toString(); 
            document.getElementById("displayResult").textContent = input2; 
        } else {
            input2 = input2; 
            document.getElementById("displayResult").textContent = input2; 

        }
    } 
}

// event listeners on all calculator buttons

//document.getElementsByClassName("key").forEach()
document.getElementById("0").addEventListener("click", function(e) {inputVal(0)});          // number buttons, sends the appropriate number to the inputVal function
document.getElementById("1").addEventListener("click", function(e) {inputVal(1)});
document.getElementById("2").addEventListener("click", function(e) {inputVal(2)});
document.getElementById("3").addEventListener("click", function(e) {inputVal(3)});
document.getElementById("4").addEventListener("click", function(e) {inputVal(4)});
document.getElementById("5").addEventListener("click", function(e) {inputVal(5)});
document.getElementById("6").addEventListener("click", function(e) {inputVal(6)});
document.getElementById("7").addEventListener("click", function(e) {inputVal(7)});
document.getElementById("8").addEventListener("click", function(e) {inputVal(8)});
document.getElementById("9").addEventListener("click", function(e) {inputVal(9)});
document.getElementById("AC").addEventListener("click", function(e) {clear()});                           // clear button, runs clear function
//document.getElementById("inv").addEventListener("click", 0);
//document.getElementById("perc").addEventListener("click", 0);
document.getElementById("div").addEventListener("click", function(e) {func = 'divide'; funcSet = true;});    // function buttons, assigns the function to the func variable for the operate function
document.getElementById("mul").addEventListener("click", function(e) {func = 'multiply'; funcSet = true;});
document.getElementById("sub").addEventListener("click", function(e) {func = 'subtract'; funcSet = true;});
document.getElementById("plus").addEventListener("click", function(e) {func = 'add'; funcSet = true;});
document.getElementById("dec").addEventListener("click", function(e) {inputVal('.')});      // add deciman point character to the input val string
document.getElementById("equals").addEventListener("click", function(e) {operate(func, input1, input2)});   // takes the two numbers and processes them according to the selected function

