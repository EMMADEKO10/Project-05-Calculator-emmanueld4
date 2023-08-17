import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

// Récupérer les éléments de la calculatrice
const inputcontenairs = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const historique = document.querySelector('p');
let expression = '';

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    // Votre code de traitement ici
});

//Bloquer le display pour n'entrer que les valeurs via les bouttons.
inputcontenairs.disabled = true;
// historique.style.display = none;

// Ajouter un gestionnaire d'événement pour chaque bouton
buttons.forEach(button => {
    button.addEventListener('click', event => {
        const buttonValue = button.textContent;

        // Vérifier si le bouton est un chiffre ou un opérateur

        if (buttonValue >= '0' && buttonValue <= '9') {
            // Ajouter le chiffre au champ de saisie
            if (inputcontenairs.value.length < 16) { // limiter le nombre de caractères saisis dans le champ de saisie à 10
                if (inputcontenairs.value === '0' && buttonValue === '0') {
                    inputcontenairs.value = inputcontenairs.value;
                } else {
                    if (!historique.textContent.includes('=')) {
                        expression += buttonValue;
                        inputcontenairs.value += buttonValue;
                        historique.textContent += buttonValue;
                    } else {
                        inputcontenairs.value = '';
                        historique.textContent = '';
                        expression = '';
                        inputcontenairs.value += buttonValue;
                        historique.textContent += buttonValue;
                        expression += buttonValue;
                    }

                }

            }
        } else {
            // Vérifier si le champ de saisie n'est pas vide

            if (inputcontenairs.value !== '') {
                //  Vérifier l'opérateur et effectuer le calcul correspondant
                switch (buttonValue) {
                    case '+':
                        // if(inputcontenairs.value.includes(':','*', '+', ))
                        inputcontenairs.value = '';
                        if (!historique.textContent.includes('=')) {
                            historique.textContent += " + "
                        } else {
                            historique.textContent = expression + '+'
                        }

                        expression += '+';
                        event.preventDefault();
                        break;
                    case '-':
                        inputcontenairs.value = '';
                        if (!historique.textContent.includes('=')) {
                            historique.textContent += " - "
                        } else {
                            historique.textContent = expression + '-'
                        }

                        expression += '-';
                        event.preventDefault();
                        break;
                    case '×':
                        inputcontenairs.value = '';
                        if (!historique.textContent.includes('=')) {
                            historique.textContent += " * "
                        } else {
                            historique.textContent = expression + '*'
                        }

                        expression += '*';
                        event.preventDefault();
                        break;
                    case '÷':
                        inputcontenairs.value = '';
                        if (!historique.textContent.includes('=')) {
                            historique.textContent += " ÷ "
                        } else {
                            historique.textContent = expression + '/'
                        }

                        expression += '/';
                        event.preventDefault();
                        break;
                    case '%':
                        inputcontenairs.value = eval(expression) / 100;
                        historique.textContent += "% "
                        event.preventDefault();
                        break;

                    case '=':
                        if (!historique.textContent.includes('=')) {
                            //// Évaluer l'expression mathématique et afficher le résultat
                            historique.textContent += " = "
                            // historique.insertAdjacentHTML('beforeend', '<br>');
                            inputcontenairs.value = eval(expression);
                            const valeurAdd = eval(expression);
                            expression = eval(expression);
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
                        event.preventDefault();
                        break;
                    case 'C':
                        // Supprimer le dernier caractère du champ de saisie

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
                            // historique.textContent += ".";
                            expression += '.';

                        }
                }
            } else if (buttonValue === 'AC') {
                inputcontenairs.value = '';
                historique.textContent = " ";
                expression = '';
            } else if (buttonValue >= '0' && buttonValue <= '9' && historique.textContent.includes('=')) {

                expression = calculate(expression);
                historique.textContent = expression;

            }
        }
        console.log(expression);
    });
});


