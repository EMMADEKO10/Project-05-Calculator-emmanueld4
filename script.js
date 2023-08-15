import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

// Récupérer les éléments de la calculatrice
const inputcontenairs = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const historique = document.querySelector('p');
let expression = '';
let affichageHist = "";
let operator = "";
var verifSigne = false;

//Bloquer le display pour n'entrer que les valeurs via les bouttons.
inputcontenairs.disabled = true;
// historique.style.display = none;

// Ajouter un gestionnaire d'événement pour chaque bouton
buttons.forEach(button => {
    button.addEventListener('click', event => {
        const buttonValue = button.textContent;
        // const number1 = "";
        // const number2 = "";
       
        // verifSigne = false;
        

        // Vérifier si le bouton est un chiffre ou un opérateur

        if (buttonValue >= '0' && buttonValue <= '9') {
            // Ajouter le chiffre au champ de saisie
            if (inputcontenairs.value === '0' && buttonValue === '0') {
                inputcontenairs.value = inputcontenairs.value;
                affichageHist = buttonValue;
                verifSigne = false;
            } else if(inputcontenairs.value === '0'){
                inputcontenairs.value = buttonValue;
                // historique.textContent = buttonValue;
                affichageHist = buttonValue;
            }
            else{
                // Gérer lorsque l'utilisateur veut entre un autre exercice.

                if (!historique.textContent.includes('=')) {
                    expression += buttonValue;
                    inputcontenairs.value += buttonValue;
                    // affichageHist += buttonValue;
                    // historique.textContent += buttonValue;
                    affichageHist += buttonValue;
                     operator += buttonValue;
                } else {
                    inputcontenairs.value = '';
                    // historique.textContent = '';
                    affichageHist = ""
                    expression = '';
                    inputcontenairs.value += buttonValue;
                    // historique.textContent += buttonValue;
                    affichageHist += buttonValue;
                    expression += buttonValue;
                     operator += buttonValue;
                }
                // affichageHist += buttonValue;
            }


        } else {
            // Vérifier si le champ de saisie n'est pas vide
            
            operator += buttonValue;
            if (inputcontenairs.value !== '') {
                //  Vérifier l'opérateur et effectuer le calcul correspondant
                switch (buttonValue) {
                    case '+':
                        inputcontenairs.value = '';
                        verifSigne = true;
                        if (!historique.textContent.includes('=')) {
                            historique.textContent = affichageHist + " + "
                        } else {
                            historique.textContent = expression + ' + ';
                        }
                        affichageHist = "";
                        expression += '+';
                        event.preventDefault();
                        break;
                    case '-':
                        verifSigne = true;
                        inputcontenairs.value = '';
                        if (!historique.textContent.includes('=')) {
                            historique.textContent = affichageHist +  " - "
                        } else {
                            historique.textContent = expression + ' - '
                        }
                        affichageHist = "";
                        expression += '-';
                        event.preventDefault();
                        break;
                    case '×':
                        verifSigne = true;
                        inputcontenairs.value = '';
                        if (!historique.textContent.includes('=')) {
                            historique.textContent = affichageHist + " * "
                        } else {
                            historique.textContent = expression + ' * '
                        }
                        affichageHist = "";
                        expression += '*';
                        event.preventDefault();
                        break;
                    case '÷':
                        verifSigne = true;
                        inputcontenairs.value = '';
                        if (!historique.textContent.includes('=')) {
                            historique.textContent = affichageHist + " ÷ "
                        } else {
                            historique.textContent = expression + ' ÷ '
                        }
                        affichageHist = "";
                        expression += '/';
                        event.preventDefault();
                        break;
                    case '%':
                        inputcontenairs.value = eval(expression) / 100;
                        historique.textContent = inputcontenairs.value + " % "
                        event.preventDefault();
                        break;

                    case '=':
                        if (!historique.textContent.includes('=')) {
                            //// Évaluer l'expression mathématique et afficher le résultat
                            if(!verifSigne) {
                                historique.textContent = "";
                            }else{
                                historique.textContent += affichageHist + " = "
                                // historique.insertAdjacentHTML('beforeend', '<br>');
                                inputcontenairs.value = eval(expression);
                                const valeurAdd = eval(expression);
                                expression = eval(expression);
                            }
                           
                            event.preventDefault();
                            break;
                        } else {
                            expression = eval(valeurAdd + expression);
                            break;
                        }


                    case 'AC':
                        //Effacer le champ de saisie
                        inputcontenairs.value = '';
                        historique.textContent = " ";
                        expression = '';
                        affichageHist = "";
                        event.preventDefault();
                        break;
                    case 'C':
                        // Supprimer le dernier caractère du champ de saisie
                        affichageHist = "";
                        inputcontenairs.value = inputcontenairs.value.slice(0, -1);
                        expression = inputcontenairs.value;
                        event.preventDefault();
                        break;
                    case '+/-':
                        // Inverser le signe du nombre dans le champ de saisie
                        inputcontenairs.value = -inputcontenairs.value;
                        expression = -expression;
                        event.preventDefault();
                        break;

                    case '.':

                        if (!inputcontenairs.value.includes('.')) {
                            inputcontenairs.value += '.';
                           affichageHist += ".";
                            expression += '.';
                        }
                }
            } else if (buttonValue === 'AC') {
                inputcontenairs.value = '';
                historique.textContent = " ";
                expression = '';
                affichageHist = "";
            } else if (buttonValue >= '0' && buttonValue <= '9' && historique.textContent.includes('=')) {
                affichageHist = "";
                expression = calculate(expression);
                historique.textContent = expression;

            }
            else if (inputcontenairs.textContent === "" && isNaN(historique.textContent.slice(-1))){
                    historique.textContent = historique.textContent.slice(0, -1) + "+";
                    operator = operator.slice(0, -1) + "+";
                    affichageHist = "";
                    // event.preventDefault();
                    }
        }
        console.log(expression);
    });
});

