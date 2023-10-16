const inputElement = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const displayOperation = document.querySelector('p');
let expression = '';
let lastOperator = "";
let lastExpressionWhileEgalClicked = "";
let lastValue = "";

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
});

function isInputElementEmpty(){
  if(!inputElement.value || inputElement.value === " ")return true;
  return false;
}
function addNumberToInputElement(value){
  if(isInputElementEmpty()){
    inputElement.value = value;
  }else{
    inputElement.value += value;
  }
}
function handleNumberInput(buttonValue) {
  addNumberToInputElement(buttonValue);
  expression += buttonValue;
  lastValue += buttonValue;
}

function isDisplayElementEmpty(){
  if (!displayOperation.textContent && displayOperation.textContent === " ")return true; 
    return false;
}

function recuperationButtonValue(value){
 return value = value === '×' ? '*' : value === '÷' ? '/' : value;
}

function delecteEndCaractere(){
  expression = expression.slice(0, -1); 
  lastOperator = lastOperator.slice(0, -1);
}

function emptyInputInitialisation(){
  inputElement.value = '';
  lastValue = "";  
}

function lastEgalVerification(){
  lastValue = expression.slice(0, -1);
  displayOperation.textContent = "";
}

function affichDisplay(value){
  if(!isDisplayContentOperator() && expression !== eval(expression.slice(0,-1))){
    expression = eval(expression.slice(0,-1));
    displayOperation.textContent = ` ${expression} ${lastOperator} `
    expression += lastOperator;
  }else{
    displayOperation.textContent = !displayOperation.textContent.includes('=') ? 
  `${displayOperation.textContent} ${lastValue} ${value} ` : 
  ` ${operator.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;

  }
}

function verificationExpressionLast(value){
  if (expression == lastExpressionWhileEgalClicked) {
    expression += recuperationButtonValue(value);
    lastEgalVerification();
    lastExpressionWhileEgalClicked = "";
  }
}

function isDisplayContentOperator(){
  if(!/[+\-/*]/.test(displayOperation.textContent)) return true;
  return false
}

function handleOperatorInput(buttonValue) {
//Condition pour verifier si l'egalité a été cliqué pour la nième fois. C'est-à-dire, 
//si l'expression est toujours egale à l'ancienne expression

if (displayOperation.textContent === "" && inputElement.value === "" && buttonValue === "-") {
  inputElement.value += "-";
  displayOperation.textContent = "";
  lastValue = "-";
  expression = expression;
} else if (displayOperation.textContent === "" && inputElement.value === "" && buttonValue !== "-") {
  displayOperation.textContent = "";
  lastValue = "";
  expression = expression;
}
  
 verificationExpressionLast(buttonValue);

    if (expression.match(/[+/*-.]$/)) {  
      delecteEndCaractere();
      displayOperation.textContent = displayOperation.textContent.slice(0, -2);
    }
    expression += recuperationButtonValue(buttonValue);
    lastOperator = recuperationButtonValue(buttonValue);

     affichDisplay(buttonValue);    
    
  
    console.log("2.  Voici l'expression : ", expression);
    console.log("40.  Voici le butttonValue : ", buttonValue);
    emptyInputInitialisation();
  }

function handlePercentInput() {
  if (isDisplayContentOperator()){
    inputElement.value = inputElement.value / 100;
    expression = `${result / 100}`;
  } else {
    inputElement.value = eval(expression);
    expression = eval(expression);
  }
}

function handleEqualInput() {

  if (!displayOperation.textContent.includes('=')) {
    lastExpressionWhileEgalClicked = expression;
    expression = eval(expression);
    displayOperation.textContent += `${lastValue} =`;
  } else {
    displayOperation.textContent = `${eval(expression)} ${lastOperator.replace(/\*/g, '×').replace(/\//g, ' ÷')} ${lastValue} =`;
    expression = eval(`${expression}${lastOperator}${lastValue}`);
  }

  inputElement.value = expression === Infinity ? "Erreur" : expression;
  lastExpressionWhileEgalClicked = expression;
}

function handleAcInput() {
  inputElement.value = "";
  displayOperation.textContent = "";
  expression = "";
  lastValue = "";
  lastOperator = "";
  lastExpressionWhileEgalClicked = "";
}


function handleCInput() {
  inputElement.value = inputElement.value.slice(0, 0);
  expression = inputElement.value;
  displayOperation.textContent = "";
  lastValue = inputElement.value;
}

function handleNegationInput() {
  if (inputElement.value === "") {
    inputElement.value = "";
  } else {
    inputElement.value = -inputElement.value;
    expression = -expression;
    displayOperation.textContent = -displayOperation.textContent;
  }
}

function handleDecimalInput() {
  if (!inputElement.value.includes('.')) {

    if (inputElement.value === "") {
      inputElement.value += '0.';
      expression = "0.";
      lastValue = "0.";
    } else {
      if (!displayOperation.textContent.includes("=")) {
        inputElement.value += '.';
        expression += '.';
        lastValue += ".";
      }
    }
  }
}

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonValue = button.textContent;

    if (inputElement.value.length < 15 && displayOperation.textContent.length < 25) {
      if (buttonValue >= '0' && buttonValue <= '9') {
        if (!displayOperation.textContent.includes("=")) {
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
          case '÷': handleOperatorInput(buttonValue);
            break;
          case '%':handlePercentInput();
            break;
          case '=':handleEqualInput();
            break;
          case 'AC':handleAcInput();
            break;
          case 'CA':handleAcInput();
            break;
          case 'C':handleCInput();
            break;
          case '+/-':handleNegationInput();
            break;
          case '.':handleDecimalInput();
            break;
        }
      }
    }
  });
});

document.addEventListener('keydown', event => {
  event.preventDefault();
});













































// 
// const inputElement = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const displayOperation = document.querySelector('p');
// let expression = '';
// let lastOperator = "";
// let lastExpressionWhileEgalClick = "";
// let lastValue = "";
// 
// document.querySelector('form').addEventListener('submit', event => {
  // event.preventDefault();
// });
// 
// function isInputElementEmpty(){
  // if(!inputElement.value || inputElement.value === " ")return true;
  // return false;
// }
// function addNumberToInputElement(value){
  // if(isInputElementEmpty()){
    // inputElement.value = value;
  // }else{
    // inputElement.value += value;
  // }
// }
// function handleNumberInput(buttonValue) {
  // 
  // addNumberToInputElement(buttonValue);
  // expression += buttonValue;
  // lastValue += buttonValue;
// }
// function isDisplayElementEmpty(){
  // if (!displayOperation.textContent && displayOperation.textContent === " ")return true; 
// 
    // return false;
// }
// function recuperationButtonValue(value){
//  return value = value === '×' ? '*' : value === '÷' ? '/' : value;
// }
// 
// function delecteEndCaractere(){
  // expression = expression.slice(0, -1); // Supprimer le dernier caractère
  // lastOperator = lastOperator.slice(0, -1);
// }
// 
// function emptyInputInitialisation(){
  // inputElement.value = '';
  // lastValue = "";  
// }
// 
// function handleOperatorInput(buttonValue) {
// Condition pour verifier si l'egalité a été cliqué pour la nième fois. C'est-à-dire, si l'expression est toujours egale à l'ancienne expression
// 
  // if (expression == lastExpressionWhileEgalClick) {
    // expression += recuperationButtonValue(buttonValue);
    // lastValue = expression.slice(0, -1);
    // displayOperation.textContent = "";
// 
  // }
  // lastExpressionWhileEgalClick = "";
    // 
    // if (expression.match(/[+/*-.]$/)) {  
      // delecteEndCaractere();
      // displayOperation.textContent = displayOperation.textContent.slice(0, -2);
    // }
    // 
    // expression += recuperationButtonValue(buttonValue);
    // lastOperator = recuperationButtonValue(buttonValue);
    // displayOperation.textContent = !displayOperation.textContent.includes('=') ? `${displayOperation.textContent} ${lastValue} ${buttonValue} ` : 
    // emptyInputInitialisation();
// 
  // }
// function handlePercentInput() {
  // if (!displayOperation.textContent.includes('+') || !displayOperation.textContent.includes('-') || !displayOperation.textContent.includes('/') ||
// 
    // inputElement.value = inputElement.value / 100;
    // expression = `${result / 100}`;
  // } else {
    // inputElement.value = eval(expression);
    // expression = eval(expression);
  // }
// }
// 
// function handleEqualInput() {
// 
  // if (!displayOperation.textContent.includes('=')) {
    // lastExpressionWhileEgalClick = expression;
    // expression = eval(expression);
    // displayOperation.textContent += `${lastValue} =`;
  // } else {
    // 
    // displayOperation.textContent = `${expression} ${lastOperator.replace(/\*/g, '×').replace(/\//g, ' ÷')} ${lastValue} =`;
    // expression = eval(`${expression}${lastOperator}${lastValue}`);
  // }
// 
  // inputElement.value = expression === Infinity ? "Erreur" : expression;
  // lastExpressionWhileEgalClick = expression;
// }
// 
// function handleAcInput() {
  // inputElement.value = "";
  // displayOperation.textContent = "";
  // expression = "";
  // lastValue = "";
  // lastOperator = "";
  // lastExpressionWhileEgalClick = "";
// 
// 
// }
// 
// function handleCInput() {
  // inputElement.value = inputElement.value.slice(0, 0);
  // expression = inputElement.value;
  // displayOperation.textContent = "";
  // lastValue = inputElement.value;
// }
// 
// function handleNegationInput() {
  // if (inputElement.value === "") {
    // inputElement.value = "";
  // } else {
    // inputElement.value = -inputElement.value;
    // expression = -expression;
    // displayOperation.textContent = -displayOperation.textContent;
  // }
// }
// 
// function handleDecimalInput() {
  // if (!inputElement.value.includes('.')) {
// 
    // if (inputElement.value === "") {
      // inputElement.value += '0.';
      // expression = "0.";
      // lastValue = "0.";
    // } else {
      // if (!displayOperation.textContent.includes("=")) {
        // inputElement.value += '.';
        // expression += '.';
        // lastValue += ".";
      // }
    // }
  // }
// }
// 
// buttons.forEach(button => {
  // button.addEventListener('click', event => {
    // const buttonValue = button.textContent;
// 
    // if (inputElement.value.length < 15 && displayOperation.textContent.length < 25) {
      // if (buttonValue >= '0' && buttonValue <= '9') {
        // if (!displayOperation.textContent.includes("=")) {
          // handleNumberInput(buttonValue);
        // } else {
          // handleAcInput();
          // handleNumberInput(buttonValue);
        // }
// 
      // } else {
        // switch (buttonValue) {
          // case '+':
          // case '-':
          // case '×':
          // case '÷':
            // handleOperatorInput(buttonValue);
            // break;
          // case '%':
            // handlePercentInput();
            // break;
          // case '=':
            // handleEqualInput();
            // break;
          // case 'AC':
            // handleAcInput();
// 
            // break;
          // case 'CA':
            // handleAcInput();
// 
            // break;
          // case 'C':
            // handleCInput();
            // break;
          // case '+/-':
            // handleNegationInput();
            // break;
          // case '.':
            // handleDecimalInput();
            // break;
        // }
      // }
    // }
  // });
// });
// 
// document.addEventListener('keydown', event => {
  // event.preventDefault();
// });
// 
// 












































// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const calcul = document.querySelector('p');
// let expression = '';
// let lastoperator = "";
// let lastegal = "";
// calcul.textContent =""

// document.querySelector('form').addEventListener('submit', event => {
//   event.preventDefault();
// });
// var lastvalue = "";
// var lastvalue2 = "";
// input.disabled = true;

// function handleNumberInput(buttonValue) {
//   input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
//   expression += buttonValue;
//   lastvalue += buttonValue;
// }

// function handleOperatorInput(buttonValue) {
  
//   if(expression === lastegal) {
//     expression += buttonValue;
//     lastvalue ="";
//     lastvalue = expression.slice(0,-1);
//     calcul.textContent = "";
//     console.log("Voici the handleOperatorInput expression : ",lastoperator);

//   } 

//  lastegal = "";
  
//     if (calcul.textContent === "" && input.value === "" && buttonValue === "-") {
//     input.value += "-";
//     calcul.textContent = "";
//     lastvalue = "-";
//     expression = expression;
//   } else if (calcul.textContent === "" && input.value === "" && buttonValue !== "-") {
//     calcul.textContent = "";
//     lastvalue = "";
//     expression = expression;
//   } else {
      
//     if (expression.match(/[+/*-.÷×]$/)) {
//       expression = expression.slice(0, -1); 
//       lastoperator = lastoperator.slice(0, -1);
      
//       calcul.textContent = calcul.textContent.slice(0, -2);
   
//     } else {
//         }
//     expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
//     calcul.textContent = !calcul.textContent.includes('=') ? `${calcul.textContent} ${lastvalue} ${buttonValue} ` : ` ${expression.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;
    
//   }

//   input.value = '';
//   lastvalue = "";
       
// }

// // function handleOperatorInput(buttonValue) {
//   // if (expression == lastegal) {
//     // expression = handleLastEgal(buttonValue);
//   // }
//   // lastegal = "";

//   // if (isInputEmpty() && buttonValue === "-") {
//     // handleMinusInput();
//   // } else if (isInputEmpty() && buttonValue !== "-") {
//     // handleNonMinusInput();
//   // } else {
//     // if (endsWithOperator()) {
//       // handleOperatorEnd();
//     // }
//     // expression += getButtonValue(buttonValue);
//     // lastoperator = getButtonValue(buttonValue);
//     // lastoperator = lastoperator.replace(/\*/g, "×");
//     // updateCalculTextContent();
//   // }

//   // clearInputAndLastvalue();
// // }

// // function handleLastEgal(buttonValue) {
//   // expression += buttonValue;
//   // lastvalue = "";
//   // lastvalue = expression.slice(0, -1);
//   // calcul.textContent = "";
//   // return expression;
// // }

// // function isInputEmpty() {
//   // return calcul.textContent === "" && input.value === "";
// // }

// // function handleMinusInput() {
//   // input.value += "-";
//   // calcul.textContent = "";
//   // lastvalue = "-";
//   // expression = expression;
// // }

// // function handleNonMinusInput() {
//   // calcul.textContent = "";
//   // lastvalue = "";
//   // expression = expression;
// // }

// // function endsWithOperator() {
//   // return expression.match(/[+/*-.]$/);
// // }

// // function handleOperatorEnd() {
//   // expression = removeLastCharacterFromExpression();
//   // lastoperator = removeLastCharacterFromLastOperator();
//   // calcul.textContent = removeLastTwoCharactersFromCalculTextContent();
// // }

// // function removeLastCharacterFromExpression() {
//   // return expression.slice(0, -1);
// // }

// // function removeLastCharacterFromLastOperator() {
//   // return lastoperator.slice(0, -1);
// // }

// // function removeLastTwoCharactersFromCalculTextContent() {
//   // return calcul.textContent.slice(0, -2);
// // }

// // function getButtonValue(buttonValue) {
//   // return buttonValue === "×" ? "*" : buttonValue === "÷" ? "/" : buttonValue;
// // }

// // function updateCalculTextContent() {
//   // if (!calcul.textContent.includes("=")) {
//     // calcul.textContent = `${calcul.textContent} ${lastvalue} ${lastoperator} `;
//   // } else {
//     // calcul.textContent = ` ${expression.replace(/\*/g, "×")} ${lastoperator} `;
//   // }
// // }

// // function clearInputAndLastvalue() {
//   // input.value = "";
//   // lastvalue = "";
// // }

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
    
//     expression = calculatExpression(expression);
//       } else {

//     calcul.textContent = `${expression} ${lastoperator.replace(/\*/g, "×").replace(/\//g, "÷")} ${lastvalue2} =`;
//     console.log("Voici the lastoperator : ",lastoperator);
//     expression = eval(`${expression}${lastoperator}${lastvalue2}`);
//     console.log("Voici the lastoperator XX : ",lastoperator);

//     lastvalue = "";

//   }
//   input.value = expression === Infinity ? "Erreur" : expression;
//   lastegal = expression;

//   function calculatExpression (expression){
  
//     calcul.textContent += ` ${lastvalue} =`
//     lastvalue2 = lastvalue;
//     lastvalue = "";
//     console.log("Voici the lastoperator expression : ",expression);
//     return eval(expression);
    
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

























































// // const input = document.getElementById('input');
// // const buttons = document.querySelectorAll('button');
// // const calcul = document.querySelector('p');
// // let expression = '';
// // let compteur = 0;
// // let lastoperator = "";
// // let lastegal = "";


// // document.querySelector('form').addEventListener('submit', event => {
// //   event.preventDefault();
// // });
// // var lastvalue = "";
// // var lastvalue2 = "";
// // input.disabled = true;
// // function handleNumberInput(buttonValue) {

// //   input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
// //   expression += buttonValue;
// //   lastvalue += buttonValue;
// // }

// // function handleOperatorInput(buttonValue) {
// //   if (calcul.textContent === "" && input.value === "" && buttonValue === "-") {
// //     input.value = "-";
// //     calcul.textContent = "";
// //     lastvalue = "";
// //     expression = expression;
// //   } else if (calcul.textContent === "" && input.value === "") {
// //     input.value = "-";
// //     calcul.textContent = "";
// //     lastvalue = "";
// //     expression = expression;
// //   }

// //   input.value = '';

// //   if (expression.match(/[+/*-.]$/)) {
// //     expression = expression.slice(0, -1); // Supprimer le dernier caractère
// //     lastoperator = lastoperator.slice(0, -1);

// //     expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //     console.log("Petit signe :", expression);
// //     lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //     console.log("moyen signe :", calcul.textContent);
// //     calcul.textContent = calcul.textContent.slice(0, -2);
// //     console.log("moyen signe :" + calcul.textContent);
// //   } else {
// //     console.log("grand signe :", expression);
// //     expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //     lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //   }
  
// //   lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //   calcul.textContent = !calcul.textContent.includes('=') ? `${calcul.textContent} ${lastvalue} ${buttonValue} ` : ` ${operator.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;

// //   lastvalue = "";

// // }
// // function handlePercentInput() {
// //   if (expression !== '') {
// //     const result = eval(expression);
// //     input.value = result / 100;
// //     calcul.textContent = `${result} % `;
// //     expression = `${result / 100}`;
// //   }
// // }

// // function handleEqualInput() {

// //   if (!calcul.textContent.includes('=')) {
// //     lastegal = expression;
// //     expression = eval(expression);
// //     input.value = expression === Infinity ? 'Erreur' : expression;
// //     // input.value = expression === -Infinity ? 'Erreur' : expression;
// //     calcul.textContent += ` ${lastvalue} =`;
// //     lastvalue2 = lastvalue;
// //     lastvalue = "";
// //   } else {

// //     calcul.textContent = `${expression} ${lastoperator} ${lastvalue2} =`;
// //     expression = eval(`${expression}${lastoperator}${lastvalue2}`);
// //     input.value = expression === Infinity ? 'Erreur' : expression;
// //     // input.value = expression === -Infinity ? 'Erreur' : expression;
// //     // console.log("bonjour expression ", expression);
// //     // console.log("bonjour operateur ", lastoperator);
// //     // console.log("bonjour raison ", lastvalue2);
// //   }
// // }

// // function handleAcInput() {
// //   input.value = "";
// //   calcul.textContent = "";
// //   expression = "";
// //   lastvalue = "";
// // }

// // function handleCInput() {
// //   input.value = input.value.slice(0, -1);
// //   expression = input.value;
// //   calcul.textContent = "";
// //   lastvalue = input.value;
// // }

// // function handleNegationInput() {
// //   input.value = -input.value;
// //   expression = -expression;
// //   calcul.textContent = -calcul.textContent;
// // }

// // function handleDecimalInput() {
// //   if (!input.value.includes('.')) {

// //     if (input.value === "") {
// //       input.value += '0.';
// //       expression = "0.";
// //       lastvalue = "0.";
// //     } else {
// //       if (!calcul.textContent.includes("=")) {
// //         input.value += '.';
// //         expression += '.';
// //         lastvalue += ".";
// //       }
// //     }
// //   }
// // }

// // buttons.forEach(button => {
// //   button.addEventListener('click', event => {
// //     const buttonValue = button.textContent;

// //     if (input.value.length < 15 && calcul.textContent.length < 25) {
// //       if (buttonValue >= '0' && buttonValue <= '9') {
// //         if (!calcul.textContent.includes("=")) {
// //           handleNumberInput(buttonValue);
// //         } else {
// //           handleAcInput();
// //           handleNumberInput(buttonValue);
// //         }

// //       } else {
// //         switch (buttonValue) {
// //           case '+':
// //           case '-':
// //           case '×':
// //           case '÷':
// //             handleOperatorInput(buttonValue);
// //             break;
// //           case '%':
// //             handlePercentInput();
// //             break;
// //           case '=':
// //             handleEqualInput();
// //             break;
// //           case 'AC':
// //             handleAcInput();

// //             break;
// //           case 'CA':
// //             handleAcInput();

// //             break;
// //           case 'C':
// //             handleCInput();
// //             break;
// //           case '+/-':
// //             handleNegationInput();
// //             break;
// //           case '.':
// //             handleDecimalInput();
// //             break;
// //         }
// //       }
// //     }
// //   });
// // });

// // document.addEventListener('keydown', event => {
// //   event.preventDefault();
// // });


















// // const input = document.getElementById('input');
// // const buttons = document.querySelectorAll('button');
// // const calcul = document.querySelector('p');
// // let expression = '';
// // let lastoperator = "";
// // let lastegal = "";


// // document.querySelector('form').addEventListener('submit', event => {
// //   event.preventDefault();
// // });
// // var lastvalue = "";
// // var lastvalue2 = "";
// // input.disabled = true;
// // function handleNumberInput(buttonValue) {

// //   input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
// //   expression += buttonValue;
// //   lastvalue += buttonValue;
// // }

// // function handleOperatorInput(buttonValue) {
// //   if (calcul.textContent === "" && input.value === "" && buttonValue === "-") {
// //     input.value = "-";
// //     calcul.textContent = "";
// //     lastvalue = "";
// //     expression = expression;
// //   } else if (calcul.textContent === "" && input.value === "") {
// //     input.value = "-";
// //     calcul.textContent = "";
// //     lastvalue = "";
// //     expression = expression;
// //   } 

// //     input.value = '';

// //     if (expression.match(/[+/*-.]$/)) {
// //       expression = expression.slice(0, -1); // Supprimer le dernier caractère
// //       lastoperator = lastoperator.slice(0, -1);

// //       expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //       console.log("Petit signe :", expression);
// //       lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //       console.log("moyen signe :", calcul.textContent);
// //       calcul.textContent = calcul.textContent.slice(0, -2);
// //       console.log("moyen signe :" + calcul.textContent);
// //     } else {
// //       console.log("grand signe :", expression);
// //       expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //       lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //     }

// //     console.log("moyen signe :", calcul.textContent);
// //     lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //     calcul.textContent = !calcul.textContent.includes('=') ? `${calcul.textContent} ${lastvalue} ${buttonValue} ` : ` ${operator.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;

// //     lastvalue = "";
  
// // }
// // function handlePercentInput() {
// //   if (expression !== '') {
// //     const result = eval(expression);
// //     input.value = result / 100;
// //     calcul.textContent = `${result} % `;
// //     expression = `${result / 100}`;
// //   }
// // }

// // function handleEqualInput() {

// //   if (!calcul.textContent.includes('=')) {
// //     lastegal = expression;
// //     expression = eval(expression);
// //     input.value = expression === Infinity ? 'Erreur' : expression;
// //     input.value = expression === -Infinity ? 'Erreur' : expression;
// //     calcul.textContent += ` ${lastvalue} =`;
// //     lastvalue2 = lastvalue;
// //     lastvalue = "";
// //   } else(buttonValue === "=") {

// //     calcul.textContent = `${expression} ${lastoperator} ${lastvalue2} =`;
// //     expression = eval(`${expression}${lastoperator}${lastvalue2}`);
// //     input.value = expression;
// //     console.log("bonjour expression ", expression);
// //     console.log("bonjour operateur ", lastoperator);
// //     console.log("bonjour raison ", lastvalue2);
// //   } 
// // }

// // function handleAcInput() {
// //   input.value = "";
// //   calcul.textContent = "";
// //   expression = "";
// //   lastvalue = "";
// // }

// // function handleCInput() {
// //   input.value = input.value.slice(0, -1);
// //   expression = input.value;
// //   calcul.textContent = "";
// //   lastvalue = input.value;
// // }

// // function handleNegationInput() {
// //   input.value = -input.value;
// //   expression = -expression;
// //   calcul.textContent = -calcul.textContent;
// // }

// // function handleDecimalInput() {
// //   if (!input.value.includes('.')) {

// //     if (input.value === "") {
// //       input.value += '0.';
// //       expression = "0.";
// //       lastvalue = "0.";
// //     } else {
// //       if (!calcul.textContent.includes("=")) {
// //         input.value += '.';
// //         expression += '.';
// //         lastvalue += ".";
// //       }
// //     }
// //   }
// // }

// // buttons.forEach(button => {
// //   button.addEventListener('click', event => {
// //     const buttonValue = button.textContent;

// //     if (input.value.length < 15 && calcul.textContent.length < 25) {
// //       if (buttonValue >= '0' && buttonValue <= '9') {
// //         if (!calcul.textContent.includes("=")) {
// //           handleNumberInput(buttonValue);
// //         } else {
// //           handleAcInput();
// //           handleNumberInput(buttonValue);
// //         }

// //       } else {
// //         switch (buttonValue) {
// //           case '+':
// //           case '-':
// //           case '×':
// //           case '÷':
// //             handleOperatorInput(buttonValue);
// //             break;
// //           case '%':
// //             handlePercentInput();
// //             break;
// //           case '=':
// //             handleEqualInput();
// //             break;
// //           case 'AC':
// //             handleAcInput();

// //             break;
// //           case 'CA':
// //             handleAcInput();

// //             break;
// //           case 'C':
// //             handleCInput();
// //             break;
// //           case '+/-':
// //             handleNegationInput();
// //             break;
// //           case '.':
// //             handleDecimalInput();
// //             break;
// //         }
// //       }
// //     }
// //   });
// // });

// // document.addEventListener('keydown', event => {
// //   event.preventDefault();
// // });




















// // const input = document.getElementById('input');
// // const buttons = document.querySelectorAll('button');
// // const calcul = document.querySelector('p');
// // let expression = '';
// // let lastoperator = "";
// // let lastegal = "";


// // document.querySelector('form').addEventListener('submit', event => {
// //   event.preventDefault();
// // });
// // var lastvalue = "";
// // var lastvalue2 = "";
// // // input.disabled = true;
// // function handleNumberInput(buttonValue) {

// //   input.value = input.value === '0' ? buttonValue : input.value + buttonValue;
// //   expression += buttonValue;
// //   lastvalue += buttonValue;
// // }

// // function handleOperatorInput(buttonValue) {
// //   if (calcul.textContent === "" && input.value === "" && buttonValue === "-") {
// //     input.value += "-";
// //     calcul.textContent = "";
// //     lastvalue = "-";
// //     expression = expression;
// //   } else if (calcul.textContent === "" && input.value === "" && buttonValue !== "-") {
// //     calcul.textContent = "";
// //     lastvalue = "";
// //     expression = expression;
// //   } else {
// //     if (expression.match(/[+/*-.]$/)) {
// //       expression = expression.slice(0, -1); // Supprimer le dernier caractère
// //       lastoperator = lastoperator.slice(0, -1);

// //       expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //       console.log("Petit signe :", expression);
// //       lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //       console.log("moyen signe :", calcul.textContent);
// //       calcul.textContent = calcul.textContent.slice(0, -2);
// //       console.log("moyen signe :" + calcul.textContent);
// //     } else {
// //       console.log("grand signe :", expression);
// //       expression += buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //       lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //     }

// //     lastoperator = buttonValue === '×' ? '*' : buttonValue === '÷' ? '/' : buttonValue;
// //     calcul.textContent = !calcul.textContent.includes('=') ? `${calcul.textContent} ${lastvalue} ${buttonValue} ` : ` ${operator.replace(/\*/g, '×').replace(/\//g, ' ÷')} `;
// //   }

// //   input.value = '';



// //   lastvalue = "";

// // }
// // function handlePercentInput() {
// //   if (expression !== '') {
// //     const result = eval(expression);
// //     input.value = result / 100;
// //     calcul.textContent = `${result} % `;
// //     expression = `${result / 100}`;
// //   }
// // }

// // function handleEqualInput() {

// //   if (!calcul.textContent.includes('=')) {
// //     lastegal = expression;
// //     expression = eval(expression);
// //     calcul.textContent += ` ${lastvalue} =`;
// //     lastvalue2 = lastvalue;
// //     lastvalue = "";
// //   } else {

// //     calcul.textContent = `${expression} ${lastoperator} ${lastvalue2} =`;
// //     expression = eval(`${expression}${lastoperator}${lastvalue2}`);
// //     // input.value = expression;
// //     console.log("bonjour expression ", expression);
// //     console.log("bonjour operateur ", lastoperator);
// //     console.log("bonjour raison ", lastvalue2);
// //   }
// //   input.value = expression === Infinity ? "Erreur" : expression;

// // }

// // function handleAcInput() {
// //   input.value = "";
// //   calcul.textContent = "";
// //   expression = "";
// //   lastvalue = "";
// // }

// // function handleCInput() {
// //   input.value = input.value.slice(0, -1);
// //   expression = input.value;
// //   calcul.textContent = "";
// //   lastvalue = input.value;
// // }

// // function handleNegationInput() {
// //   input.value = -input.value;
// //   expression = -expression;
// //   calcul.textContent = -calcul.textContent;
// // }

// // function handleDecimalInput() {
// //   if (!input.value.includes('.')) {

// //     if (input.value === "") {
// //       input.value += '0.';
// //       expression = "0.";
// //       lastvalue = "0.";
// //     } else {
// //       if (!calcul.textContent.includes("=")) {
// //         input.value += '.';
// //         expression += '.';
// //         lastvalue += ".";
// //       }
// //     }
// //   }
// // }

// // buttons.forEach(button => {
// //   button.addEventListener('click', event => {
// //     const buttonValue = button.textContent;

// //     if (input.value.length < 15 && calcul.textContent.length < 25) {
// //       if (buttonValue >= '0' && buttonValue <= '9') {
// //         if (!calcul.textContent.includes("=")) {
// //           handleNumberInput(buttonValue);
// //         } else {
// //           handleAcInput();
// //           handleNumberInput(buttonValue);
// //         }

// //       } else {
// //         switch (buttonValue) {
// //           case '+':
// //           case '-':
// //           case '×':
// //           case '÷':
// //             handleOperatorInput(buttonValue);
// //             break;
// //           case '%':
// //             handlePercentInput();
// //             break;
// //           case '=':
// //             handleEqualInput();
// //             break;
// //           case 'AC':
// //             handleAcInput();

// //             break;
// //           case 'CA':
// //             handleAcInput();

// //             break;
// //           case 'C':
// //             handleCInput();
// //             break;
// //           case '+/-':
// //             handleNegationInput();
// //             break;
// //           case '.':
// //             handleDecimalInput();
// //             break;
// //         }
// //       }
// //     }
// //   });
// // });

// // document.addEventListener('keydown', event => {
// //   event.preventDefault();
// // });