let allButtons = document.querySelectorAll('.buttons');
let screenDisplay = document.querySelector('#calculationField');
let textOnScreen = document.querySelector('#textInField');

allButtons.forEach(button => button.addEventListener('click', () => calculate(button)));

let calculation = [];
let accumlulativeCalculation;

function calculate (button){
    const value = button.textContent;
    if (value == 'Clear'){
        calculation = [];
        textOnScreen.textContent = '.';
    } else if (value == "="){
        textOnScreen.textContent = eval(accumlulativeCalculation);
        //textOnScreen.textContent = accumlulativeCalculation;
    }else {
        calculation.push(value);
        accumlulativeCalculation = calculation.join('');
        textOnScreen.textContent = accumlulativeCalculation;
        console.log(accumlulativeCalculation);
    }

}