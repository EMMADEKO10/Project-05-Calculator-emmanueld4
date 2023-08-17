

import { calculate } from './calculator.js';

const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const history = document.querySelector('p');
let expression = '';

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
});

input.disabled = true;

function handleNumberInput(buttonValue) {
    input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
    expression += buttonValue;
    history.textContent += buttonValue;
}

function handleOperatorInput(buttonValue) {
    input.value = '';
    expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
    history.textContent = !history.textContent.includes('=') ? `${history.textContent} ${buttonValue} ` : ` ${expression.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;
}

function handlePercentInput() {
    input.value = eval(expression) / 100;
    history.textContent = `${eval(expression) / 100}% `;
}

function handleEqualInput() {
    if (!history.textContent.includes('=')) {
        expression = eval(expression);
        input.value = expression === Infinity ? 'Error' : expression;
        history.textContent += " = ";
    } else {
        expression = eval(`${expression} (${input.value})`);
    }
}

function handleAcInput() {
    input.value = '';
    history.textContent = '';
    expression = '';
}

function handleCInput() {
    input.value = input.value.slice(0, -1);
    expression = input.value;
}

function handleNegationInput() {
    input.value = -input.value;
    expression = -expression;
}

function handleDecimalInput() {
    if (!input.value.includes('.')) {
        input.value += '.';
        expression += '.';
        if (history.textContent !== '') {
            history.textContent += '.';
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const buttonValue = button.textContent;

        if (input.value.length < 15 && history.textContent.length < 25) {
            if (buttonValue >= '0' && buttonValue <= '9') {
                handleNumberInput(buttonValue);
            } else {
                if (input.value !== '') {
                    switch (buttonValue) {
                        case '+':
                        case '-':
                        case '×':
                        case '÷':
                            handleOperatorInput(buttonValue);
                            break;
                        case '%':
                            handlePercentInput();
                            break;
                        case '=':
                            handleEqualInput();
                            break;
                        case 'AC':
                            handleAcInput();
                            break;
                        case 'C':
                            handleCInput();
                            break;
                        case '+/-':
                            handleNegationInput();
                            break;
                        case '.':
                            handleDecimalInput();
                            break;
                    }
                }
            }
        }
    });
});



























// import { calculate } from './calculator.js';

// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';

// document.querySelector('form').addEventListener('submit', event => {
//   event.preventDefault();
// });

// input.disabled = true;

// function handleNumberInput(buttonValue) {
//   if (input.value === '0') {
//     input.value = buttonValue;
//     expression = buttonValue;
//     history.textContent = buttonValue;
//   } else {
//     input.value += buttonValue;
//     expression += buttonValue;
//     history.textContent += buttonValue;
//   }
// }

// function handleOperatorInput(buttonValue) {
//   input.value = '';
//   expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//   history.textContent = !history.textContent.includes('=') ? `${history.textContent} ${buttonValue} ` : `${expression.replace(/\*/g, '×').replace(/\//g, '÷')}  `;
// }

// function handlePercentInput() {
//   input.value = eval(expression) / 100;
//   history.textContent = `${eval(expression) / 100}% `;
// }

// function handleEqualInput() {
//   if (!history.textContent.includes('=')) {
//     expression = eval(expression);
//     input.value = expression === Infinity ? 'Error' : expression.toString();
//     history.textContent += ` = `;
//   } else {
//     expression = eval(`${expression.replace(/\*/g, '×').replace(/\//g, '÷')} ${input.value}`);
//     input.value = expression === Infinity ? 'Error' : expression.toString();
//     history.textContent = `${expression.replace(/\*/g, '×').replace(/\//g, '÷')}  = `;
//   }
// }

// function handleAcInput() {
//   input.value = '0';
//   history.textContent = '';
//   expression = '';
// }

// function handleCInput() {
//   input.value = input.value.slice(0, -1);
//   expression = input.value;
//   history.textContent = history.textContent.slice(0, -1);
// }

// function handleNegationInput() {
//   input.value = -input.value;
//   expression = -expression;
// }

// function handleDecimalInput() {
//   if (!input.value.includes('.')) {
//     input.value += '.';
//     expression += '.';
//     if (history.textContent !== '') {
//       history.textContent += '.';
//     }
//   }
// }

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const buttonValue = button.textContent;

//     if (input.value.length < 15 && history.textContent.length < 25) {
//       if (buttonValue >= '0' && buttonValue <= '9') {
//         handleNumberInput(buttonValue);


  
//       } else {

// if (input.value !== '' || buttonValue === '-'|| buttonValue === '+'|| buttonValue === '×'|| buttonValue === '÷') {
//     handleOperatorInput(buttonValue);
//   }
//         switch (buttonValue) {
//           case '+':
//           case '-':
//           case '×':
//           case '÷':
//             handleOperatorInput(buttonValue);
//             break;
//           case '%':
//             handlePercentInput();
//             break;
//           case '=':
//             handleEqualInput();
//             break;
//           case 'AC':
//             handleAcInput();
//             break;
//           case 'C':
//             handleCInput();
//             break;
//           case '+/-':
//             handleNegationInput();
//             break;
//           case '.':
//             handleDecimalInput();
//             break;
//         }
//       }
//     }
//   });
// });





























// import { calculate } from './calculator.js';

// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';

// document.querySelector('form').addEventListener('submit', event => {
//   event.preventDefault();
// });

// input.disabled = true;

// function handleNumberInput(buttonValue) {
//   if (input.value === '0') {
//     input.value = buttonValue;
//     expression = buttonValue;
//     history.textContent = buttonValue;
//   } else {
//     input.value += buttonValue;
//     expression += buttonValue;
//     history.textContent += buttonValue;
//   }
// }

// function handleOperatorInput(buttonValue) {
//   if (expression.slice(-1) === '+' || expression.slice(-1) === '-' || expression.slice(-1) === '×' || expression.slice(-1) === '÷') {
//     expression = expression.slice(0, -1) + buttonValue;
//     history.textContent = history.textContent.slice(0, -2) + `${buttonValue} `;
//   } else {
//     input.value = '';
//     expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     history.textContent = !history.textContent.includes('=') ? `${history.textContent} ${buttonValue} ` : `${expression.replace(/\*/g, '×').replace(/\//g, '÷')} ${buttonValue} `;
//   }
// }

// function handlePercentInput() {
//   input.value = eval(expression) / 100;
//   history.textContent = `${eval(expression) / 100}% `;
// }

// function handleEqualInput() {
//   if (!history.textContent.includes('=')) {
//     expression = eval(expression);
//     input.value = expression === Infinity ? 'Error' : expression.toString();
//     history.textContent += `= ${input.value}`;
//   } else {
//     expression = eval(`${expression.replace(/\*/g, '×').replace(/\//g, '÷')} ${input.value}`);
//     input.value = expression === Infinity ? 'Error' : expression.toString();
//     history.textContent = `${expression.replace(/\*/g, '×').replace(/\//g, '÷')} = ${input.value}`;
//   }
// }

// function handleAcInput() {
//   input.value = '0';
//   history.textContent = '';
//   expression = '';
// }

// function handleCInput() {
//   input.value = input.value.slice(0, -1);
//   expression = input.value;
// }

// function handleNegationInput() {
//   input.value = -input.value;
//   expression = -expression;
// }

// function handleDecimalInput() {
//   if (!input.value.includes('.')) {
//     input.value += '.';
//     expression += '.';
//     if (history.textContent !== '') {
//       history.textContent += '.';
//     }
//   }
// }

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const buttonValue = button.textContent;

//     if (input.value.length < 15 && history.textContent.length < 25) {
//       if (buttonValue >= '0' && buttonValue <= '9') {
//         handleNumberInput(buttonValue);
//       } else {
//         if (input.value !== '' || buttonValue === '-'|| buttonValue === '+'|| buttonValue === '×'|| buttonValue === '÷') {
//           handleOperatorInput(buttonValue);
//         }
//       }
//     }
    
//     switch (buttonValue) {
//       case '%':
//         handlePercentInput();
//         break;
//       case '=':
//         handleEqualInput();
//         break;
//       case 'AC':
//         handleAcInput();
//         break;
//       case 'C':
//         handleCInput();
//         break;
//       case '+/-':
//         handleNegationInput();
//         break;
//       case '.':
//         handleDecimalInput();
//         break;
//       default:
//         break;
//     }
//   });
// });
