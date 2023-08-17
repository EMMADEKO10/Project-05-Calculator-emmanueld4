// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';
// let result = null;
// let isEqualClicked = false;

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
//     expression += input.value;
//     result = eval(expression.trim()); // évaluer l'expression sans les espaces inutiles
//     input.value = result.toString();
//     history.textContent += ' ' + input.value;
//     isEqualClicked = true;
//   }
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//         history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//         isEqualClicked = false;
//       }
//       if (input.value.length < 10) { // limiter le nombre de caractères saisis dans le champ de saisie à 10
//         if (input.value === '0') {
//           input.value = value;
//           history.textContent += value;
//         } else {
//           input.value += value;
//           history.textContent += value;
//         }
//         expression += value;
//       }
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
//         if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//           expression = result.toString(); // utiliser le résultat précédent comme premier opérande
//           history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//           isEqualClicked = false;
//         }
//         switch (value) {
//           case '+':
//             history.textContent += ' + ';
//             break;
//           case '-':
//             history.textContent += ' - ';
//             break;
//           case '*':
//             history.textContent += ' × ';
//             break;
//           case '/':
//             history.textContent += ' ÷ ';
//             break;
//         }
//         operator = value;
//         expression += value;
//       }
//     } else if (value === 'C') {
//       input.value = '0';
//       history.textContent = '';
//       expression = '';
//       operator = '';
//       result = null;
//       isEqualClicked = false;
//     } else if (value === '=') {
//     //   form.dispatchEvent(new Event('submit'));
    
//   if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
//     expression += input.value;
//     result = eval(expression.trim()); // évaluer l'expression sans les espaces inutiles
//     input.value = result.toString();
//     history.textContent += ' ' + input.value;
//     isEqualClicked = true;
//   }
//     }
//   });
// });





































// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';
// let result = null;
// let isEqualClicked = false;

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//         history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//         isEqualClicked = false;
//       }
//       if (input.value.length < 10) { // limiter le nombre de caractères saisis dans le champ de saisie à 10
//         if (input.value === '0') {
//           input.value = value;
//           history.textContent += value;
//         } else {
//           input.value += value;
//           history.textContent += value;
//         }
//         expression += value;
//       }
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
//         if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//           expression = result.toString(); // utiliser le résultat précédent comme premier opérande
//           history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//           isEqualClicked = false;
//         }
//         switch (value) {
//           case '+':
//             history.textContent += ' + ';
//             break;
//           case '-':
//             history.textContent += ' - ';
//             break;
//           case '*':
//             history.textContent += ' × ';
//             break;
//           case '/':
//             history.textContent += ' ÷ ';
//             break;
//         }
//         operator = value;
//         expression += ' ' + value + ' '; // ajouter des espaces autour de l'opérateur pour éviter les problèmes d'évaluation
//       }
//     } else if (value === 'C') {
//       input.value = '0';
//       history.textContent = '';
//       expression = '';
//       operator = '';
//       result = null;
//     } else if (value === '=') {
//       if (operator !== '' && input.value !== '') {
//         const operands = expression.trim().split(/\s+/); // supprimer les espaces inutiles et diviser l'expression en opérandes
//         const firstOperand = parseFloat(operands[0]);
//         const secondOperand = parseFloat(operands[2]);
//         switch (operator) {
//           case '+':
//             result = firstOperand + secondOperand;
//             break;
//           case '-':
//             result = firstOperand - secondOperand;
//             break;
//           case '*':
//             result = firstOperand * secondOperand;
//             break;
//           case '/':
//             result = firstOperand / secondOperand;
//             break;
//         }
//         input.value = result.toString();
//         history.textContent += ' = ' + result.toString();
//         isEqualClicked = true;
//       }
//     }
//   });
// });






























// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';
// let result = null;
// let isEqualClicked = false;

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//         history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//         isEqualClicked = false;
//       }
//       if (input.value.length < 10) { // limiter le nombre de caractères saisis dans le champ de saisie à 10
//         if (input.value === '0') {
//           input.value = value;
//           history.textContent += value;
//         } else {
//           input.value += value;
//           history.textContent += value;
//         }
//         expression += value;
//       }
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
//         if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//           expression = result.toString(); // utiliser le résultat précédent comme premier opérande
//           history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//           isEqualClicked = false;
//         }
//         switch (value) {
//           case '+':
//             history.textContent += ' + ';
//             break;
//           case '-':
//             history.textContent += ' - ';
//             break;
//           case '*':
//             history.textContent += ' × ';
//             break;
//           case '/':
//             history.textContent += ' ÷ ';
//             break;
//         }
//         input.value = '';
//         expression += value;
//         operator = value;
//       }
//     } else if (value === '.') {
//       if (!input.value.includes('.') && input.value.length < 9) { // ne pas permettre plus d'un point décimal et limiter le nombre de chiffres après la décimale à 8
//         input.value += '.';
//         history.textContent += '.';
//         expression += '.';
//       }
//     } else if (value === '=') {
//       if (!isEqualClicked && operator !== '' && input.value !== '') { // ne pas permettre de cliquer sur le bouton égal deux fois de suite et s'assurer qu'il y a un opérateur et un deuxième opérande
//         const secondOperand = parseFloat(input.value);
//         switch (operator) {
//           case '+':
//             result = parseFloat(expression) + secondOperand;
//             break;
//           case '-':
//             result = parseFloat(expression) - secondOperand;
//             break;
//           case '*':
//             result = parseFloat(expression) * secondOperand;
//             break;
//           case '/':
//             result = parseFloat(expression) / secondOperand;
//             break;
//         }
//         input.value = result.toFixed(8); // limiter le nombre de chiffres après la décimale à 8
//         history.textContent += ' = ' + input.value;
//         expression = result.toString();
//         operator = '';
//         isEqualClicked = true;
//       }
//     } else if (value === 'C') {
//       input.value = '0';
//       history.textContent = '';
//       expression = '';
//       operator = '';
//       result = null;
//       isEqualClicked = false;
//     }
//   });
// });
































// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';
// let result = null;
// let isEqualClicked = false;

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//         history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//         isEqualClicked = false;
//       }
//       if (input.value.length < 10) { // limiter le nombre de caractères saisis dans le champ de saisie à 10
//         if (input.value === '0') {
//           input.value = value;
//           history.textContent += value;
//         } else {
//           input.value += value;
//           history.textContent += value;
//         }
//         expression += value;
//       }
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
//         if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//           expression = result.toString(); // utiliser le résultat précédent comme premier opérande
//           history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//           isEqualClicked = false;
//         }
//         switch (value) {
//           case '+':
//             history.textContent += ' + ';
//             break;
//           case '-':
//             history.textContent += ' - ';
//             break;
//           case '*':
//             history.textContent += ' × ';
//             break;
//           case '/':
//             history.textContent += ' ÷ ';
//             break;
//         }
//         input.value = '';
//         expression += value;
//         operator = value;
//       }
//     } else if (value === '.') {
//       if (!input.value.includes('.') && input.value.length < 9) { // ne pas permettre plus d'un point décimal et limiter le nombre de chiffres après la décimale à 8
//         input.value += '.';
//         history.textContent += '.';
//         expression += '.';
//       }
//     } else if (value === '=') {
//       if (!isEqualClicked && operator !== '' && input.value !== '') { // ne pas permettre de cliquer sur le bouton égal deux fois de suite et s'assurer qu'il y a un opérateur et un deuxième opérande
//         const secondOperand = parseFloat(input.value);
//         switch (operator) {
//           case '+':
//             result = parseFloat(expression) + secondOperand;
//             break;
//           case '-':
//             result = parseFloat(expression) - secondOperand;
//             break;
//           case '*':
//             result = parseFloat(expression) * secondOperand;
//             break;
//           case '/':
//             result = parseFloat(expression) / secondOperand;
//             break;
//         }
//         input.value = result.toFixed(8); // limiter le nombre de chiffres après la décimale à 8
//         history.textContent += ' = ' + input.value;
//         expression = result.toString();
//         operator = '';
//         isEqualClicked = true;
//       }
//     } else if (value === 'C') {
//       input.value = '0';
//       history.textContent = '';
//       expression = '';
//       operator = '';
//       result = null;
//       isEqualClicked = false;
//     }
//   });
// });




































// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';
// let result = null;
// let isEqualClicked = false;

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//         history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//         isEqualClicked = false;
//       }
//       if (input.value.length < 10) { // limiter le nombre de caractères saisis dans le champ de saisie à 10
//         if (input.value === '0') {
//           input.value = value;
//           history.textContent += value;
//         } else {
//           input.value += value;
//           history.textContent += value;
//         }
//         expression += value;
//       }
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
//         if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//           expression = result.toString(); // utiliser le résultat précédent comme premier opérande
//           history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//           isEqualClicked = false;
//         }
//         switch (value) {
//           case '+':
//             history.textContent += ' + ';
//             break;
//           case '-':
//             history.textContent += ' - ';
//             break;
//           case '*':
//             history.textContent += ' × ';
//             break;
//           case '/':
//             history.textContent += ' ÷ ';
//             break;
//         }
//         input.value = '';
//         expression += value;
//         operator = value;
//       }
//     } else if (value === '.') {
//       if (!input.value.includes('.') && input.value.length < 9) { // si le champ de saisie ne contient pas déjà un point et que sa longueur est inférieure à 9
//         if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//           history.textContent = result + operator; // afficher le résultat précédent suivi de l'opérateur
//           isEqualClicked = false;
//         }
//         input.value += '.';
//         history.textContent += '.';
//         expression += '.';
//       }
//     } else if (value === 'C') { // effacer tout
//       input.value = '0';
//       history.textContent = '';
//       expression = '';
//       operator = '';
//       result = null;
//       isEqualClicked = false;
//     } else if (value === '←') { // effacer le dernier caractère
//       if (input.value !== '' && !isEqualClicked) { // si le champ de saisie n'est pas vide et que le bouton égal n'a pas été cliqué précédemment
//         input.value = input.value.slice(0, -1);
//         history.textContent = history.textContent.slice(0, -1);
//         expression = expression.slice(0, -1);
//       }
//     } else if (value === '=') {
//       if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
//         const operands = expression.split(/[\+\-\*\/]/); // séparer l'expression en opérandes
//         const firstOperand = parseFloat(operands[0]);
//         const secondOperand = parseFloat(operands[1]);
//         switch (operator) {
//           case '+':
//             result = firstOperand + secondOperand;
//             break;
//           case '-':
//             result = firstOperand - secondOperand;
//             break;
//           case '*':
//             result = firstOperand * secondOperand;
//             break;
//           case '/':
//             result = firstOperand / secondOperand;
//             break;
//         }
//         input.value = result.toFixed(2); // afficher le résultat avec deux décimales
//         history.textContent += ' = ' + result.toFixed(2); // afficher le résultat avec deux décimales
//         expression = result.toString();
//         operator = '';
//         isEqualClicked = true;
//       }
//     }
//   });
// });
































































// import { calculate } from './calculator.js';

// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';
// let result = null;
// let isEqualClicked = false;

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//         history.textContent = '';
//         isEqualClicked = false;
//       }
//       if (input.value.length < 10) { // limiter le nombre de caractères saisis dans le champ de saisie à 10
//         if (input.value === '0') {
//           input.value = value;
//           history.textContent = value;
//         } else {
//           input.value += value;
//           history.textContent += value;
//         }
//         expression += value;
//       }
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
//         if (isEqualClicked) { // si le bouton égal a été cliqué précédemment
//           expression = result.toString(); // utiliser le résultat précédent comme premier opérande
//           history.textContent = expression;
//           isEqualClicked = false;
//         }
//         switch (value) {
//           case '+':
//             history.textContent += ' + ';
//             break;
//           case '-':
//             history.textContent += ' - ';
//             break;
//           case '*':
//             history.textContent += ' × ';
//             break;
//           case '/':
//             history.textContent += ' ÷ ';
//             break;
//         }
//         input.value = '';
//         expression += value;
//         operator = value;
//       }
//     } else if (value === '.') {
//       if (!input.value.includes('.') && input.value.length < 9) { // limiter le nombre de caractères saisis dans le champ de saisie à 10 et n'autoriser qu'un seul point décimal
//         input.value += '.';
//         history.textContent += '.';
//         expression += '.';
//       }
//     } else if (value === 'C') {
//       input.value = '0';
//       history.textContent = '';
//       expression = '';
//       operator = '';
//       result = null;
//     } else if (value === '=') {
//       if (operator !== '' && input.value !== '') { // si l'opérateur et la deuxième opérande sont définis
//         const operand2 = parseFloat(input.value);
//         result = calculate(parseFloat(expression), operator, operand2);
//         input.value = result.toString();
//         history.textContent += ` ${operand2} = ${result}`;
//         expression = result.toString();
//         operator = '';
//         isEqualClicked = true;
//       }
//     }
//   });
// });
































import { calculate } from './calculator.js';

const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const history = document.querySelector('p');
let expression = '';
let operator = '';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Votre code de traitement ici
});

input.disabled = true;

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const value = button.textContent;

    if (/[0-9]/.test(value)) {
      if (input.value.length < 16) { // limiter le nombre de caractères saisis dans le champ de saisie à 10
        if (input.value === '0') {
        //   input.value = value;
          history.textContent = value;
         } 
        // else {
        
        // }
        if(history.textContent.includes('=')) {
            input.value = "";
            history.textContent = "";
        }
        //initialisation lorsque l'utilisateur entre une valeur après une operation.
        expression += value;
        // input.value += value;
        input.value += value;
          history.textContent += value;
      }
    } else if (/[\+\-\*\/]/.test(value)) {
      if (input.value !== '' && !/[\+\-\*\/]/.test(expression.slice(-1))) { // si le champ de saisie n'est pas vide et que le dernier caractère de l'expression n'est pas déjà un opérateur
        switch (value) {
          case '+':
            history.textContent += ' + ';
            break;
          case '-':
            history.textContent += ' - ';
            break;
          case '*':
            history.textContent += ' × ';
            break;
          case '/':
            history.textContent += ' ÷ ';
            break;
        }

        input.value = '';
        expression += value;
        operator = value;
      }
    } else if (value === '.') {
      if (!input.value.includes('.') && input.value.length < 9) { // limiter le nombre de caractères saisis dans le champ de saisie à 10 et n'autoriser qu'un seul "."
        if (input.value === '') {
          input.value = '0.';
          history.textContent += '0.';
          expression += '0.';
        } else {
          input.value += '.';
          history.textContent += '.';
          expression += '.';
        }
      }
    } else if (value === '=') {
      if (operator !== '' && input.value !== '') {
        // history.textContent += input.value;
        expression = eval(expression);
        input.value = expression;
        // history.textContent += ` = ${expression.slice(0, 14)}`; // limiter le nombre de caractères affichés dans l'historique à 14
       
        history.textContent += " = "+ expression;
        operator = '';
      }
    } else if (value === 'C') {
      input.value = '0';
      history.textContent = '';
      expression = '';
      operator = '';
    }
  });
});






















































// import { calculate } from './calculator.js';

// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (input.value === '0') {
//         input.value = value;
//         history.textContent = value;
//       } else {
//         input.value += value;
//         history.textContent += value;
//       }
//       expression += value;
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '') {
//         if (/[\+\-\*\/]/.test(expression.slice(-1))) { // si le dernier caractère de l'expression est déjà un opérateur
//           expression = expression.slice(0, -1); // remplacer le dernier opérateur par le nouvel opérateur
//           operator = value; // mettre à jour l'opérateur
//           history.textContent = history.textContent.slice(0, -2) + ` ${value} `; // remplacer le dernier opérateur par le nouvel opérateur dans l'historique
//         } else { // sinon
//           switch (value) {
//             case '+':
//               history.textContent += ' + ';
//               break;
//             case '-':
//               history.textContent += ' - ';
//               break;
//             case '*':
//               history.textContent += ' × ';
//               break;
//             case '/':
//               history.textContent += ' ÷ ';
//               break;
//           }
//           input.value = '';
//           expression += value;
//           operator = value;
//         }
//       } else if (value === '-') {
//         history.textContent += '-';
//         operator += '-';
//       } else if (value === '.') {
//         if (!input.value.includes('.')) {
//           input.value += '.';
//           history.textContent += '.';
//           expression += '.';
//         }
//       }
//     } else {
//       switch (value) {
//         case '=':
//           if (input.value !== '') {
//             expression = calculate(expression);
//             input.value = expression;
//             history.textContent += ` = ${expression}`;
//             operator = '';
//           }
//           break;
//         case 'AC':
//           input.value = '';
//           history.textContent = '';
//           expression = '';
//           operator = '';
//           break;
//         case 'C':
//           input.value = input.value.slice(0, -1);
//           expression = input.value;
//           history.textContent = history.textContent.slice(0, -1);
//           break;
//         case '%':
//           input.value = eval(expression) / 100;
//           history.textContent += '%';
//           break;
//         case '+/-':
//           input.value = -input.value;
//           expression = -expression;
//           break;
//       }
//     }
//   });
// });






























// import { calculate } from './calculator.js';

// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (input.value === '0') {
//         input.value = value;
//         history.textContent = value;
//       } else {
//         input.value += value;
//         history.textContent += value;
//       }
//       expression += value;
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '') {
//         if (/[\+\-\*\/]/.test(expression.slice(-1))) { // si le dernier caractère de l'expression est déjà un opérateur
//           expression = expression.slice(0, -1); // remplacer le dernier opérateur par le nouvel opérateur
//           operator = value; // mettre à jour l'opérateur
//           history.textContent = history.textContent.slice(0, -2) + ` ${value} `; // remplacer le dernier opérateur par le nouvel opérateur dans l'historique
//         } else { // sinon
//           switch (value) {
//             case '+':
//               history.textContent += ' + ';
//               break;
//             case '-':
//               history.textContent += ' - ';
//               break;
//             case '*':
//               history.textContent += ' × ';
//               break;
//             case '/':
//               history.textContent += ' ÷ ';
//               break;
//           }
//           input.value = '';
//           expression += value;
//           operator = value;
//         }
//       } else if (value === '-') {
//         history.textContent += '-';
//         operator += '-';
//       } else if (value === '.') {
//         if (!input.value.includes('.')) {
//           input.value += '.';
//           history.textContent += '.';
//           expression += '.';
//         }
//       }
//     } else {
//       switch (value) {
//         case '=':
//           if (input.value !== '') {
//             expression = calculate(expression);
//             input.value = expression;
//             history.textContent += ` = ${expression}`;
//             operator = '';
//           }
//           break;
//         case 'AC':
//           input.value = '';
//           history.textContent = '';
//           expression = '';
//           operator = '';
//           break;
//         case 'C':
//           input.value = input.value.slice(0, -1);
//           expression = input.value;
//           history.textContent = history.textContent.slice(0, -1);
//           break;
//         case '%':
//           input.value = eval(expression) / 100;
//           history.textContent += '%';
//           break;
//         case '+/-':
//           input.value = -input.value;
//           expression = -expression;
//           break;
//       }
//     }
//   });
// });





















































// // Importer la fonction calculate depuis le fichier calculator.js
// import { calculate } from './calculator.js';

// // Récupérer les éléments HTML nécessaires
// const input = document.getElementById('input'); // champ de saisie
// const buttons = document.querySelectorAll('button'); // tous les boutons
// const history = document.querySelector('p'); // zone d'affichage de l'historique

// // Initialiser les variables nécessaires
// let expression = ''; // l'expression mathématique saisie par l'utilisateur
// let operator = ''; // le dernier opérateur saisi par l'utilisateur

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true; // désactiver la saisie directe dans le champ de saisie

// // Ajouter un gestionnaire d'événement pour chaque bouton
// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent; // récupérer la valeur du bouton cliqué

//     if (/[0-9]/.test(value)) { // si le bouton cliqué est un chiffre
//       if (input.value === '0') { // si le champ de saisie ne contient que 0
//         input.value = value; // remplacer le 0 par le chiffre cliqué
//         history.textContent = value; // afficher le chiffre dans l'historique
//       } else { // sinon
//         input.value += value; // ajouter le chiffre cliqué à la fin du champ de saisie
//         history.textContent += value; // ajouter le chiffre à la fin de l'historique
//       }
//       expression += value; // ajouter le chiffre à la fin de l'expression mathématique
//     } else if (/[\+\-\*\/]/.test(value)) { // sinon, si le bouton cliqué est un opérateur
//       if (input.value !== '') { // si le champ de saisie n'est pas vide
//         switch (value) { // ajouter le symbole de l'opérateur correspondant à l'historique
//           case '+':
//             history.textContent += ' + ';
//             break;
//           case '-':
//             history.textContent += ' - ';
//             break;
//           case '*':
//             history.textContent += ' × ';
//             break;
//           case '/':
//             history.textContent += ' ÷ ';
//             break;
//         }
//         input.value = ''; // vider le champ de saisie pour une nouvelle entrée utilisateur
//         expression += value; // ajouter l'opérateur à la fin de l'expression mathématique
//         operator += value; // stocker l'opérateur saisi par l'utilisateur pour une utilisation ultérieure
//       } else if (value === '-') { // sinon, si l'opérateur est un signe négatif
//         history.textContent += '-'; // ajouter le signe négatif à l'historique
//         operator += '-'; // stocker le signe négatif pour une utilisation ultérieure
//       }
//     } else { // sinon, si le bouton cliqué est autre chose qu'un chiffre ou un opérateur
//       switch (value) {
//         case '=':
//           if (input.value !== '') { // si le champ de saisie n'est pas vide
//             expression = calculate(expression); // calculer le résultat de l'expression mathématique saisie par l'utilisateur
//             input.value = expression; // afficher le résultat dans le champ de saisie
//             history.textContent += ` = ${expression}`; // ajouter le résultat à la fin de l'historique
//             operator = ''; // réinitialiser l'opérateur stocké pour une nouvelle entrée utilisateur
//           }
//           break;
//         case 'AC':
//           input.value = ''; // vider le champ de saisie
//           history.textContent = ''; // vider l'historique
//           expression = ''; // réinitialiser l'expression mathématique saisie par l'utilisateur
//           operator = ''; // réinitialiser l'opérateur stocké pour une nouvelle entrée utilisateur
//           break;
//         case 'C':
//           input.value = input.value.slice(0, -1); // supprimer le dernier caractère saisi dans le champ de saisie
//           expression = input.value; // mettre à jour l'expression mathématique en conséquence
//           history.textContent = history.textContent.slice(0, -1); // supprimer le dernier caractère saisi dans l'historique
//           break;
//         case '%':
//           input.value = eval(expression) / 100; // calculer le pourcentage de l'expression mathématique saisie par l'utilisateur et afficher le résultat dans le champ de saisie
//           history.textContent += '%'; // ajouter le symbole du pourcentage à la fin de l'historique
//           break;
//         case '+/-':
//           input.value = -input.value; // inverser le signe du nombre affiché dans le champ de saisie
//           expression = -expression; // inverser le signe du nombre dans l'expression mathématique saisie par l'utilisateur
//           break;
//         case '.':
//           if (!input.value.includes('.')) { // si le champ de saisie ne contient pas déjà un point décimal
//             input.value += '.'; // ajouter un point décimal à la fin du champ de saisie
//             history.textContent += '.'; // ajouter un point décimal à la fin de l'historique
//             expression += '.'; // ajouter un point décimal à la fin de l'expression mathématique saisie par l'utilisateur
//           }
//           break;
//       }
//     }
//   });
// });




































// import { calculate } from './calculator.js';

// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (input.value === '0') {
//         input.value = value;
//         history.textContent = value;
//       } else {
//         input.value += value;
//         history.textContent += value;
//       }
//       expression += value;
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '') {
//         switch (value) {
//           case '+':
//             history.textContent += ' + ';
//             break;
//           case '-':
//             history.textContent += ' - ';
//             break;
//           case '*':
//             history.textContent += ' × ';
//             break;
//           case '/':
//             history.textContent += ' ÷ ';
//             break;
//         }
//         input.value = '';
//         expression += value;
//         operator += value;
//       } else if (value === '-') {
//         history.textContent += '-';
//         operator += '-';
//       } else if (value === '.') {
//         if (!input.value.includes('.')) {
//           input.value += '.';
//           history.textContent += '.';
//           expression += '.';
//         }
//       }
//     } else {
//       switch (value) {
//         case '=':
//           if (input.value !== '') {
//             expression = calculate(expression);
//             input.value = expression;
//             history.textContent += ` = ${expression}`;
//             operator = '';
//           }
//           break;
//         case 'AC':
//           input.value = '';
//           history.textContent = '';
//           expression = '';
//           operator = '';
//           break;
//         case 'C':
//           input.value = input.value.slice(0, -1);
//           expression = input.value;
//           history.textContent = history.textContent.slice(0, -1);
//           break;
//         case '%':
//           input.value = eval(expression) / 100;
//           history.textContent += '%';
//           break;
//         case '+/-':
//           input.value = -input.value;
//           expression = -expression;
//           break;
//       }
//     }
//     console.log(expression);
//   });
// });































// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
// });

// const inputcontenairs = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const historique = document.querySelector('p');
// let expression = '';
// let affichageHist = '';
// let operator = '';

// inputcontenairs.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     event.preventDefault();

//     const buttonValue = button.textContent;

//     if (buttonValue >= '0' && buttonValue <= '9') {
//       if (inputcontenairs.value === '0' && buttonValue === '0') {
//         inputcontenairs.value = inputcontenairs.value;
//       } else if (inputcontenairs.value === '0') {
//         inputcontenairs.value = buttonValue;
//         historique.textContent = buttonValue;
//       } else {
//         if (!historique.textContent.includes('=')) {
//           expression += buttonValue;
//           inputcontenairs.value += buttonValue;
//           affichageHist += buttonValue;
//           historique.textContent += buttonValue;
//           operator += buttonValue;
//         } else {
//           inputcontenairs.value = buttonValue;
//           historique.textContent = buttonValue;
//           expression = buttonValue;
//           operator = '';
//         }
//       }
//     } else if (buttonValue === '.') {
//       if (!inputcontenairs.value.includes('.')) {
//         inputcontenairs.value += '.';
//         historique.textContent += '.';
//         expression += '.';
//       }
//     } else if (buttonValue === '+/-') {
//       inputcontenairs.value = -inputcontenairs.value;
//       expression = -expression;
//     } else if (buttonValue === '%') {
//       inputcontenairs.value = eval(expression) / 100;
//       historique.textContent += '%';
//     } else if (buttonValue === 'AC') {
//       inputcontenairs.value = '';
//       historique.textContent = '';
//       expression = '';
//       operator = '';
//     } else if (buttonValue === 'C') {
//       inputcontenairs.value = inputcontenairs.value.slice(0, -1);
//       expression = inputcontenairs.value;
//       historique.textContent = historique.textContent.slice(0, -1);
//     } else {
//       if (inputcontenairs.value !== '') {
//         switch (buttonValue) {
//           case '+':
//             if (!operator.includes('+')) {
//               historique.textContent += ' + ';
//               operator += '+';
//               expression += '+';
//             }
//             break;
//           case '-':
//             if (!operator.includes('-')) {
//               historique.textContent += ' - ';
//               operator += '-';
//               expression += '-';
//             }
//             break;
//           case '*':
//             if (!operator.includes('*')) {
//               historique.textContent += ' × ';
//               operator += '*';
//               expression += '*';
//             }
//             break;
//           case '/':
//             if (!operator.includes('/')) {
//               historique.textContent += ' ÷ ';
//               operator += '/';
//               expression += '/';
//             }
//             break;
//           case '=':
//             if (!operator.includes('=')) {
//               expression = eval(expression);
//               inputcontenairs.value = expression;
//               historique.textContent += ` = ${expression}`;
//               operator = '=';
//             }
//             break;
//         }
//         inputcontenairs.focus();
//       } else if (buttonValue === '-') {
//         inputcontenairs.value = '-';
//         historique.textContent += '-';
//         operator += '-';
//       }
//     }
//   });
// });

// function calculate(expression) {
//   let result;

//   try {
//     result = eval(expression);
//   } catch (error) {
//     result = 'Error';
//   }

//   return result;
// }

























// import { calculate } from './calculator.js';

// const input = document.getElementById('input');
// const buttons = document.querySelectorAll('button');
// const history = document.querySelector('p');
// let expression = '';
// let operator = '';

// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();

//   // Votre code de traitement ici
// });

// input.disabled = true;

// buttons.forEach(button => {
//   button.addEventListener('click', event => {
//     const value = button.textContent;

//     if (/[0-9]/.test(value)) {
//       if (input.value === '0') {
//         input.value = value;
//         history.textContent = value;
//       } else {
//         input.value += value;
//         history.textContent += value;
//       }
//       expression += value;
//     } else if (/[\+\-\*\/]/.test(value)) {
//       if (input.value !== '') {
//         switch (value) {
//           case '+':
//             history.textContent += ' + ';
//             break;
//           case '-':
//             history.textContent += ' - ';
//             break;
//           case '*':
//             history.textContent += ' × ';
//             break;
//           case '/':
//             history.textContent += ' ÷ ';
//             break;
//         }
//         input.value = '';
//         expression += value;
//         operator += value;
//       } else if (value === '-') {
//         history.textContent += '-';
//         operator += '-';
//       } else if (value === '.') {
//         if (!input.value.includes('.')) {
//           input.value += '.';
//           history.textContent += '.';
//           expression += '.';
//         }
//       }
//     } else {
//       switch (value) {
//         case '=':
//           if (input.value !== '') {
//             expression = calculate(expression);
//             input.value = expression;
//             history.textContent += ` = ${expression}`;
//             operator = '';
//           }
//           break;
//         case 'AC':
//           input.value = '';
//           history.textContent = '';
//           expression = '';
//           operator = '';
//           break;
//         case 'C':
//           input.value = input.value.slice(0, -1);
//           expression = input.value;
//           history.textContent = history.textContent.slice(0, -1);
//           break;
//         case '%':
//           input.value = eval(expression) / 100;
//           history.textContent += '%';
//           break;
//         case '+/-':
//           input.value = -input.value;
//           expression = -expression;
//           break;
//       }
//     }
//     console.log(expression);
//   });
// });






































// import { calculate } from './calculator.js';

// // TODO: Faire la manipulation du DOM dans ce fichier

// // Récupérer les éléments de la calculatrice


// const form = document.querySelector('form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
// });

// const inputcontenairs = document.getElementById('input'); //Variable d'input
// const buttons = document.querySelectorAll('button');   // Tous les boutons sont stockés dans cette variable
// const historique = document.querySelector('p');       // Variable qui recupère "p" pour les affichage et nous avons beaucoup géré des conditions avec
// let expression = '';             // Variable qui contient tous les types buttons pour le calcul
// let affichageHist = '';          //Affichage, gestion de clique repetitif
// let operator = "";

// //Bloquer le display pour n'entrer que les valeurs via les bouttons.
// inputcontenairs.disabled = true;

// // Ajouter un gestionnaire d'événement pour chaque bouton avec tous les événements,
// buttons.forEach(button => {
//     button.addEventListener('click', event => {

//         const buttonValue = button.textContent;    //Variable qui contient le contenu des chaque button. 
       

//         // Vérifier si le bouton est un chiffre ou un opérateur.

//         if (buttonValue >= '0' && buttonValue <= '9') {

//             // Ajouter le chiffre au champ de saisie

//             if (inputcontenairs.value === '0' && buttonValue === '0') {
//                 inputcontenairs.value = inputcontenairs.value;

//                 //S'il egale à la valeur 0, le remplace par le button entré.
                
//             } else if(inputcontenairs.value === '0'){
//                 inputcontenairs.value = buttonValue;
//                 historique.textContent = buttonValue;
//             }
//             else{
//                 // Les condition lorsque l'utilisateur veut entrer ou clique sur égal pour la deuxième fois(un autre exercice).

//                 if (!historique.textContent.includes('=')) {
//                     expression += buttonValue;         
//                     inputcontenairs.value += buttonValue;
//                     affichageHist += buttonValue;
//                     historique.textContent += buttonValue; 
//                      operator += buttonValue;
//                 } else {
//                     inputcontenairs.value = '';
//                     historique.textContent = '';
//                     expression = '';
//                     inputcontenairs.value += buttonValue;
//                     historique.textContent += buttonValue;
//                     expression += buttonValue;
//                      operator += buttonValue;
//                 }
//                 affichageHist += buttonValue;
//             }


//         } else { 
            
//             //Gestion des operations et autres :

//             // Vérifier si le champ de saisie n'est pas vide
//             operator += buttonValue;
//             if (inputcontenairs.value !== '') {
//                 //  Vérifier l'opérateur et effectuer le calcul correspondant
//                 switch (buttonValue) {
//                     case '+':
//                         inputcontenairs.value = '';
                        
//                         if (!historique.textContent.includes('=')) {
//                             historique.textContent += " + "
//                         } else {
//                             historique.textContent = expression + ' + ';
//                         }

//                         expression += '+';
//                         event.preventDefault();
//                         break;
//                     case '-':
//                         inputcontenairs.value = '';
//                         if (!historique.textContent.includes('=')) {
//                             historique.textContent += " - "
//                         } else {
//                             historique.textContent = expression + '-'
//                         }

//                         expression += '-';
//                         event.preventDefault();
//                         break;
//                     case '×':
//                         inputcontenairs.value = '';
//                         if (!historique.textContent.includes('=')) {
//                             historique.textContent += " * "
//                         } else {
//                             historique.textContent = expression + '*'
//                         }

//                         expression += '*';
//                         event.preventDefault();
//                         break;
//                     case '÷':
//                         inputcontenairs.value = '';
//                         if (!historique.textContent.includes('=')) {
//                             historique.textContent += " ÷ "
//                         } else {
//                             historique.textContent = expression + '/'
//                         }

//                         expression += '/';
//                         event.preventDefault();
//                         break;
//                     case '%':
//                         inputcontenairs.value = eval(expression) / 100;
//                         historique.textContent += "% "
//                         event.preventDefault();
//                         break;

//                     case '=':
//                         if (!historique.textContent.includes('=')) {
//                             //// Évaluer l'expression mathématique et afficher le résultat
//                             historique.textContent += " = "
//                             // historique.insertAdjacentHTML('beforeend', '<br>');
//                             inputcontenairs.value = eval(expression);
//                             const valeurAdd = eval(expression);
//                             expression = eval(expression);
//                             event.preventDefault();
//                             break;
//                         } else {
//                             expression = eval(valeurAdd + expression);
//                             break;
//                         }


//                     case 'AC':
//                         //Effacer le champ de saisie
//                         inputcontenairs.value = '';
//                         historique.textContent = " ";
//                         expression = '';
//                         event.preventDefault();
//                         break;
//                     case 'C':
//                         // Supprimer le dernier caractère du champ de saisie

//                         inputcontenairs.value = inputcontenairs.value.slice(0, -1);
//                         expression = inputcontenairs.value;
//                         event.preventDefault();
//                         break;
//                     case '+/-':
//                         // Inverser le signe du nombre dans le champ de saisie
//                         inputcontenairs.value = -inputcontenairs.value;
//                         expression = -expression;
//                         event.preventDefault();
//                         break;

//                     case '.':

//                         if (!inputcontenairs.value.includes('.')) {
//                             inputcontenairs.value += '.';
//                             historique.textContent += ".";
//                             expression += '.';

//                         }
//                 }
//             } else if (buttonValue === 'AC') {
//                 inputcontenairs.value = '';
//                 historique.textContent = " ";
//                 expression = '';
//             } else if (buttonValue >= '0' && buttonValue <= '9' && historique.textContent.includes('=')) {

//                 expression = calculate(expression);
//                 historique.textContent = expression;

//             }
//             else if (inputcontenairs.textContent === "" && isNaN(historique.textContent.slice(-1))){
//                     historique.textContent = historique.textContent.slice(0, -1) + "+";
//                     operator = operator.slice(0, -1) + "+";
//                     // event.preventDefault();
//                     }
//         }
//         console.log(expression);
//     });
// });































// // Récupérer les éléments de la calculatrice
// const inputField = document.getElementById('input');
// const equalButton = document.getElementById('equal');
// // const clearButton = document.getElementById('clear');
// const deleteButton = document.getElementById('delete');
// const buttons = document.querySelectorAll('#operators button, #numbers button');



// import { Calculator } from './calculator.js';

// const calculator = new Calculator();

// const input = document.getElementById('input');
// const clearButton = document.getElementById('clear');
// const plusMinusButton = document.getElementById('plusoumoins');
// const percentageButton = document.getElementById('percentage');
// const divideByButton = document.getElementById('divideby');
// const timesButton = document.getElementById('times');
// const minusButton = document.getElementById('minus');
// const plusButton = document.getElementById('plus');
// const equalsButton = document.getElementById('equals');
// const dotButton = document.querySelector('.dot');
// const digitButtons = document.querySelectorAll('.digit');

// digitButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });

// dotButton.addEventListener('click', () => {
//   calculator.appendNumber('.');
//   calculator.updateDisplay();
// });

// clearButton.addEventListener('click', () => {
//   calculator.clear();
//   calculator.updateDisplay();
// });

// plusMinusButton.addEventListener('click', () => {
//   calculator.toggleSign();
//   calculator.updateDisplay();
// });

// percentageButton.addEventListener('click', () => {
//   calculator.computePercentage();
//   calculator.updateDisplay();
// });

// divideByButton.addEventListener('click', () => {
//   calculator.chooseOperation('÷');
//   calculator.updateDisplay();
// });

// timesButton.addEventListener('click', () => {
//   calculator.chooseOperation('*');
//   calculator.updateDisplay();
// });

// minusButton.addEventListener('click', () => {
//   calculator.chooseOperation('-');
//   calculator.updateDisplay();
// });

// plusButton.addEventListener('click', () => {
//   calculator.chooseOperation('+');
//   calculator.updateDisplay();
// });

// equalsButton.addEventListener('click', () => {
//   calculator.compute();
//   calculator.updateDisplay();
// });

