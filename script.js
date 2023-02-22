
/* inputs */
let userInput1 = 4;
let userInput2 = 4;
let userOperator = '/';


/* functions for calculations with operators */
function multiply (numb1, numb2){
    let calculation = numb1 * numb2;
    return calculation;
}

function add (numb1, numb2){
    let calculation = numb1 + numb2;
    return calculation;
}

function substract (numb1, numb2){
    let calculation = numb1 - numb2;
    return calculation;
}

function divide (numb1, numb2){
    let calculation = numb1 / numb2;
    return calculation;
}

/* Main operate function */
function operate (operator, numb1, numb2){
    if (operator == '*'){
        finalCalculation =multiply(numb1, numb2);
    } 
    else if (operator == '+'){
        finalCalculation = add(numb1, numb2);
    }
    else if (operator == '-'){
        finalCalculation = substract(numb1, numb2);
    }
    else if (operator == '/'){
        finalCalculation = divide(numb1, numb2);
    }
    return finalCalculation;
}

/* output */
console.log(operate(userOperator, userInput1, userInput2));
console.log(finalCalculation);




let digitOne = document.querySelector('.digitOne');

digitOne.addEventListener('click', function(){
    displayValue += "1";
    console.log(displayValue);
    return displayValue;
})

let displayValue = "0";


let fieldNumber = document.querySelector('#textInField');
fieldNumber.textContent = displayValue;

//**note to self = arrays? */