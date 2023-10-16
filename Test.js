// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';

// document.querySelector('form').addEventListener('submit', event => {
//   event.preventDefault();
// });

// // input.disabled = true;

// function handleNumberInput(buttonValue) {
//   input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
//   expression += buttonValue;
//   history.textContent += buttonValue;
// }

// function handleOperatorInput(buttonValue) {
//   input.value = '';
//   expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//   history.textContent = !history.textContent.includes('=') ? `${history.textContent} ${buttonValue} ` : ` ${expression.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;
// }

// function handlePercentInput() {
//   input.value = eval(expression) / 100;
//   history.textContent = `${eval(expression) / 100}% `;
// }

// function handleEqualInput() {
//   if (!history.textContent.includes('=')) {
//     expression = eval(expression);
//     input.value = expression === Infinity ? 'Error' : expression;
//     history.textContent += " = ";
//   } else {
//     expression = eval(`${expression} (${input.value})`);
//   }
// }

// function handleAcInput() {
//   input.value = "";
//   history.textContent = "";
//   expression = "";
// }

// function handleCInput() {
//   input.value = input.value.slice(0, -1);
//   expression = input.value;
//   history.textContent = "";
// }

// function handleNegationInput() {
//   input.value = -input.value;
//   expression = -expression;
//   history.textContent = -history.textContent;
// }

// function handleDecimalInput() {
//   if (!input.value.includes('.')) {
    
//     if (!history.textContent.includes("=") || !history.textContent.includes("+") || !history.textContent.includes("-") || !history.textContent.includes("x")) {
//       history.textContent += '.';
//       input.value += '.';
//     expression += '.';
//     }else{
//       input.value = input.value;
//       history.textContent = history.textContent;
      
//     }
//   }
// }

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const buttonValue = button.textContent;

//     if (input.value.length < 15 && history.textContent.length < 25) {
//       if (buttonValue >= '0' && buttonValue <= '9') {
//         if (!history.textContent.includes("=")) {
//           handleNumberInput(buttonValue);
//         } else {
//           handleAcInput();
//           handleNumberInput(buttonValue);
//         }

//       } else {
//         if (input.value !== '') {
//           switch (buttonValue) {
//             case '+':
//             case '-':
//             case '×':
//             case '÷':
//               handleOperatorInput(buttonValue);
//               break;
//             case '%':
//               handlePercentInput();
//               break;
//             case '=':
//               handleEqualInput();
//               break;
//             case 'AC':
//               handleAcInput();
//               break;
//             case 'C':
//               handleCInput();
//               break;
//             case '+/-':
//               handleNegationInput();
//               break;
//             case '.':
//               handleDecimalInput();
//               break;
//           }
//         }
//       }
//     }
//   });
// });


// document.addEventListener('keydown', event => {
//   event.preventDefault();
// });




























// import { calculate } from './calculator.js';

// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// const currentButton = "";
// const lastnumber = "";
// let expression = '';

// document.querySelector('form').addEventListener('submit', event => {
//   event.preventDefault();
// });

// input.disabled = true;

// function handleNumberInput(buttonValue) {
//   input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
//   expression += buttonValue;
//   // history.textContent += buttonValue;
//   lastnumber += buttonValue;
// }

// function handleOperatorInput(buttonValue) {
//   input.value = '';
//   expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// history.textContent += buttonValue;
//   history.textContent =!history.textContent.includes('=') ? `${history.textContent} ${buttonValue} ` : ` ${expression.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;
//   currentButton = buttonValue;
// }

// function handlePercentInput() {
//   input.value = eval(expression) / 100;
//   history.textContent = `${eval(expression) / 100}% `;
// }

// function handleEqualInput() {
//   if (!history.textContent.includes('=')) {
//     expression = eval(expression);
//     input.value = expression === Infinity  || expression === NaN ? 'Error' : expression;
//     history.textContent += " = ";
//   } else {
//     // expression = eval(`${expression} (${input.value})`);
//     input.value = "";
//     history.textContent = "";
//     console.log(expression = eval(expression + currentButton + lastnumber));
//     input.value = expression === Infinity  || expression === NaN ? 'Error' : expression;
//     history.textContent += expression + currentButton + lastnumber +"4";
//   }

// }

// function handleAcInput() {
//   input.value = "";
//   history.textContent = "";
//   expression = "";
// }

// function handleCInput() {
//   input.value = input.value.slice(0, -1);
//   expression = input.value;
//   history.textContent = "";
// }

// function handleNegationInput() {
//   input.value = -input.value;
//   expression = -expression;
// }

// function handleDecimalInput() {
//   if (!input.value.includes('.')) {
//     input.value += '.';
//     expression += '.';
//     if (!history.textContent.includes("=") || !history.textContent.includes("+") || !history.textContent.includes("-") || !history.textContent.includes("x")) {
//       history.textContent += '.';
//     }
//   }
// }

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const buttonValue = button.textContent;

//     if (input.value.length < 15 && history.textContent.length < 25) {
//       if (buttonValue >= '0' && buttonValue <= '9') {
//         if (!history.textContent.includes("=")) {
//           handleNumberInput(buttonValue);
//         } else {
//           handleAcInput();
//           handleNumberInput(buttonValue);
//         }

//       } else {
//           switch (buttonValue) {
//             case '+':
//             case '-':
//             case '×':
//             case '÷':
//               handleOperatorInput(buttonValue);
//               break;
//             case '%':
//               handlePercentInput();
//               break;
//             case '=':
//               handleEqualInput();
//               break;
//             case 'AC':
//               handleAcInput();
//               break;
//             case 'C':
//               handleCInput();
//               break;
//             case '+/-':
//               handleNegationInput();
//               break;
//             case '.':
//               handleDecimalInput();
//               break;
//           }
//         }
//       }
//   });
// });


// document.addEventListener('keydown', event => {
//   const key = event.key;

//   if (/[0-9]/.test(key)) {
//     handleNumberInput(key);
//   } else if (/[\+\-\*\/]/.test(key)) {
//     handleOperatorInput(key === '*' ? '×' : key === '/' ? '÷' : key);
//   } else if (key === '%') {
//     handlePercentInput();
//   } else if (key === '=' || key === 'Enter') {
//     handleEqualInput();
//   } else if (key === 'Escape') {
//     handleAcInput();
//   } else if (key === 'Backspace') {
//     handleCInput();
//   } else if (key === '.') {
//     handleDecimalInput();
//   }
// });

































const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const calcul = document.querySelector('p');
let expression = '';
let compteur = 0;
let lastoperator = "";
let lastegal = "";


document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
});
var lastvalue = "";
var lastvalue2 = "";
input.disabled = true;
function handleNumberInput(buttonValue) {

  input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
  expression += buttonValue;
  lastvalue += buttonValue;
}

function handleOperatorInput(buttonValue) {
  if (calcul.textContent === "" && input.value === "") {
    input.value = "";
    calcul.textContent = "";
    lastvalue = "";
    expression = expression;
  }
  input.value = '';

  // if (expression.match(/[+/*-.]$/)) {
  //   expression = expression.slice(0,-1); // Supprimer le dernier caractère
  //   lastoperator = lastoperator.slice(0,-1);

  //   expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
  //   console.log("Petit signe :",expression);
  //   lastoperator =buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
  //   console.log("moyen signe :",calcul.textContent);
  //   calcul.textContent = calcul.textContent.slice(0,-2);
  //   console.log("moyen signe :"+calcul.textContent);
  // }else {
  //   console.log("grand signe :",expression);
  //   expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
  //   lastoperator =buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
  // }

  const operator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
  expression = expression.replace(/[+/*-]$/, '') + operator;
  lastoperator = operator;
  if (expression.match(/[+/*-]$/)) {
    calcul.textContent = calcul.textContent.slice(0, -1);
  }
  console.log("moyen signe :", calcul.textContent);
  // lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
  calcul.textContent = !calcul.textContent.includes('=') ? `${calcul.textContent} ${lastvalue} ${operator} ` : ` ${expression.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;

  lastvalue = "";

}
function handlePercentInput() {
  if (expression !== '') {
    const result = eval(expression);
    input.value = result / 100;
    calcul.textContent = `${result} % `;
    expression = `${result / 100}`;
  }
}

function handleEqualInput() {

  if (!calcul.textContent.includes('=')) {
    lastegal = expression;
    expression = eval(expression);
    input.value = expression === Infinity ? 'Erreur' : expression;
    calcul.textContent += ` ${lastvalue} =`;
    lastvalue2 = lastvalue;
    lastvalue = "";
  } else {

    calcul.textContent = `${expression} ${lastoperator} ${lastvalue2} =`;
    expression = eval(`${expression}${lastoperator}${lastvalue2}`);
    input.value = expression;
    console.log("bonjour expression ", expression);
    console.log("bonjour operateur ", lastoperator);
    console.log("bonjour raison ", lastvalue2);
  }
}

function handleAcInput() {
  input.value = "";
  calcul.textContent = "";
  expression = "";
  lastvalue = "";
}

function handleCInput() {
  input.value = input.value.slice(0, -1);
  expression = input.value;
  calcul.textContent = "";
  lastvalue = input.value;
}

function handleNegationInput() {
  input.value = -input.value;
  expression = -expression;
  calcul.textContent = -calcul.textContent;
}

function handleDecimalInput() {
  if (!input.value.includes('.')) {

    if (input.value === "") {
      input.value += '0.';
      expression = "0.";
      lastvalue = "0.";
    } else {
      if (!calcul.textContent.includes("=")) {
        input.value += '.';
        expression += '.';
        lastvalue += ".";
      }
    }
  }
}

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonValue = button.textContent;

    if (input.value.length < 15 && calcul.textContent.length < 25) {
      if (buttonValue >= '0' && buttonValue <= '9') {
        if (!calcul.textContent.includes("=")) {
          handleNumberInput(buttonValue);
        } else {
          handleAcInput();
          handleNumberInput(buttonValue);
        }

      } else {
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
          case 'CA':
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
  });
});

document.addEventListener('keydown', event => {
  event.preventDefault();
});
















































// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const calcul = document.querySelector('p');
// let expression = '';
// let lastoperator = "";
// let lastegal = "";


// document.querySelector('form').addEventListener('submit', event => {
//   event.preventDefault();
// });
// var lastvalue = "";
// var lastvalue2 = "";
// // input.disabled = true;
// function handleNumberInput(buttonValue) {

//   input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
//   expression += buttonValue;
//   lastvalue += buttonValue;
// }

// function handleOperatorInput(buttonValue) {
//   if (calcul.textContent === "" && input.value === "") {
//     if (buttonValue === "-") {
//       input.value = "-";
//       calcul.textContent = "";
//       lastvalue += "-";
//       expression += "-";
//     } else {
//       input.value = "";
//       calcul.textContent = "";
//       lastvalue = "";
//       expression = expression;
//     }

//   } else {
//     // if (expression.match(/[+/*-.]$/)) {
//     //   expression = expression.slice(0, -1); // Supprimer le dernier caractère
//     //   lastoperator = lastoperator.slice(0, -1);

//     //   expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     //   console.log("Petit signe :", expression);
//     //   lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     //   console.log("moyen signe :", calcul.textContent);
//     //   calcul.textContent = calcul.textContent.slice(0, -2);
//     //   console.log("moyen signe :" + calcul.textContent);
//     // } else {
//     //   console.log("grand signe :", expression);
//     //   expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     //   lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     // }

//     // lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     // calcul.textContent = !calcul.textContent.includes('=') ? `${calcul.textContent} ${lastvalue} ${buttonValue} ` : ` ${operator.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;

//     // input.value = '';
//     input.value = '';
//     expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     history.textContent = !history.textContent.includes('=') ? `${history.textContent} ${buttonValue} ` : ` ${expression.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;
//   }

//   // input.value = '';
//   // lastvalue = "";

// }
// function handlePercentInput() {
//   if (expression !== '') {
//     const result = eval(expression);
//     input.value = result / 100;
//     calcul.textContent = `${result} % `;
//     expression = `${result / 100}`;
//   }
// }

// function handleEqualInput() {

//   // if (!calcul.textContent.includes('=')) {
//   //   lastegal = expression;
//   //   expression = eval(expression);
//   //   calcul.textContent += ` ${lastvalue} =`;
//   //   lastvalue2 = lastvalue;
//   //   lastvalue = "";
//   // } else {

//   //   calcul.textContent = `${expression} ${lastoperator} ${lastvalue2} =`;
//   //   expression = eval(`${expression}${lastoperator}${lastvalue2}`);
//   //   // // input.value = expression;
//   //   // console.log("bonjour expression ", expression);
//   //   // console.log("bonjour operateur ", lastoperator);
//   //   // console.log("bonjour raison ", lastvalue2);
//   // }
//   // input.value = expression === Infinity ? "Erreur" : expression;

// if (!history.textContent.includes('=')) {
//         expression = eval(expression);
//         input.value = expression === Infinity ? 'Error' : expression;
//         history.textContent += " = ";
//       } else {
//         expression = eval(`${expression} (${input.value})`);
//       }
// }

// function handleAcInput() {
//   input.value = "";
//   calcul.textContent = "";
//   expression = "";
//   lastvalue = "";
// }

// function handleCInput() {
//   input.value = input.value.slice(0, 0);
//   expression = input.value;
//   calcul.textContent = "";
//   lastvalue = input.value;
// }

// function handleNegationInput() {
//   input.value = -input.value;
//   expression = -expression;
//   calcul.textContent = -calcul.textContent;
// }

// function handleDecimalInput() {
//   if (!input.value.includes('.')) {

//     if (input.value === "") {
//       input.value += '0.';
//       expression = "0.";
//       lastvalue = "0.";
//     } else {
//       if (!calcul.textContent.includes("=")) {
//         input.value += '.';
//         expression += '.';
//         lastvalue += ".";
//       }
//     }
//   }
// }

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const buttonValue = button.textContent;

//     if (input.value.length < 15 && calcul.textContent.length < 25) {
//       if (buttonValue >= '0' && buttonValue <= '9') {
//         if (!calcul.textContent.includes("=")) {
//           handleNumberInput(buttonValue);
//         } else {
//           handleAcInput();
//           handleNumberInput(buttonValue);
//         }

//       } else {
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
//           case 'CA':
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

// document.addEventListener('keydown', event => {
//   event.preventDefault();
// });




















