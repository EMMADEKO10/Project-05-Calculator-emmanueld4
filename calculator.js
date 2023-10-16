// //Do not remove this function definition and its export
// // this function should return the result of the current operation


// function calculate(expression) {
//   return expression;
// }

// export { calculate };



// // function calculate(expression) {
// //   return eval(expression);
// // }

// // export { calculate };



// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const calcul = document.querySelector('p');
// let expression = '';

// document.querySelector('form').addEventListener('submit', event => {
//   event.preventDefault();
// });
// var lastvalue = "";
// input.disabled = true;
// function handleNumberInput(buttonValue) {

//   input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
//   expression += buttonValue;
//   lastvalue += buttonValue;
// }

// function handleOperatorInput(buttonValue) {
//   if (calcul.textContent === "" && input.value === "") {
//     input.value = "";
//     calcul.textContent = "";
//     lastvalue = "";
//     expression = expression;
//     if (buttonValue === "-") {
//       input.value = "-";
//       expression = "-";
//       lastvalue = "-";
//     }
//   } else{
//     input.value = '';
//     expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     calcul.textContent = !calcul.textContent.includes('=') ? `${calcul.textContent} ${lastvalue} ${buttonValue} ` : ` ${expression.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;
//     // input.value = lastvalue;
//     lastvalue = "";
//   }
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
//   if (!calcul.textContent.includes('=')) {
//     expression = eval(expression);
//     input.value = expression === Infinity ? 'Erreur' : expression;
//     calcul.textContent += ` ${lastvalue} =`;
//     lastvalue = "";
//   } else {
//     expression = eval(`${expression} (${input.value})`);
//     input.value = expression === Infinity ? 'Erreur' : expression;
//   }
// }

// function handleAcInput() {
//   input.value = "";
//   calcul.textContent = "";
//   expression = "";
//   lastvalue = "";
// }

// function handleCInput() {
//   input.value = input.value.slice(0, -1);
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
















const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const calcul = document.querySelector('p');
let expression = '';

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
});
var lastvalue = "";
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
    if (buttonValue === "-") {
      input.value = "-";
      expression = "-";
      lastvalue = "-";
    }
  } else{
    input.value = '';
    expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
    calcul.textContent = !calcul.textContent.includes('=') ? `${calcul.textContent} ${lastvalue} ${buttonValue} ` : ` ${expression.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;
    // input.value = lastvalue;
    lastvalue = "";
  }
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
    expression = eval(expression);
    input.value = expression === Infinity ? 'Erreur' : expression;
    calcul.textContent += ` ${lastvalue} =`;
    lastvalue ="";
  } else {
    expression = eval(`${expression} (${input.value})`);
    input.value = expression === Infinity ? 'Erreur' : expression;
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
    
    if(input.value === ""){
      input.value += '0.';
      expression = "0.";
      lastvalue = "0.";
    }else{
      if (!calcul.textContent.includes("=") ){
        input.value += '.';
        expression += '.';
        lastvalue +=".";
      }
    }
  }
}

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonValue = button.textContent;
    // const lastvalue =  button.textContent;

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
            // handleCInput();
            break;
            case 'CA':
            handleAcInput();
            // handleCInput();
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
