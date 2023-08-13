// import { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier


// Récupérer les éléments de la calculatrice
const inputcontenairs = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const historique = document.querySelector('p');
let expression = '';

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
            inputcontenairs.value += buttonValue;
        } else {
            // Vérifier si le champ de saisie n'est pas vide
            if (inputcontenairs.value !== '') {
                //  Vérifier l'opérateur et effectuer le calcul correspondant
                switch (buttonValue) {
                    case '+':
                        inputcontenairs.value += '+';
                        event.preventDefault();
                        break;
                    case '-':
                        inputcontenairs.value += '-';
                        event.preventDefault();
                        break;
                    case '×':
                        inputcontenairs.value += '*';
                        event.preventDefault();
                        break;
                    case '÷':
                        inputcontenairs.value += '/';
                        event.preventDefault();
                        break;
                    case '%':
                        inputcontenairs.value = eval(inputcontenairs.value) / 100;;
                        event.preventDefault();
                        break;
                    case 'x²':
                        inputcontenairs.value = inputcontenairs.value * inputcontenairs.value;
                        event.preventDefault();
                        break;
                    case '=':
                        //// Évaluer l'expression mathématique et afficher le résultat
                        historique.textContent = inputcontenairs.value + "=" + eval(inputcontenairs.value) + "\n";
                        // historique.insertAdjacentHTML('beforeend', '<br>');
                        inputcontenairs.value = eval(inputcontenairs.value);


                        event.preventDefault();


                        break;
                    case 'AC':
                        //Effacer le champ de saisie
                        inputcontenairs.value = '';
                        event.preventDefault();
                        break;
                    case 'C':
                        // Supprimer le dernier caractère du champ de saisie
                        inputcontenairs.value = inputcontenairs.value.slice(0, -1);
                        event.preventDefault();
                        break;
                    case '+/-':
                        // Inverser le signe du nombre dans le champ de saisie
                        inputcontenairs.value = -inputcontenairs.value;
                        event.preventDefault();
                        break;

                    case '.':
                        // Vérifier si le point-virgule n'est pas déjà présent dans l'affichage
                        // if (! inputcontenairs.includes(".")) {
                            validateInput() ;
                        // if (!/\.\d*$/.test(inputcontenairs)) {
                        //     inputcontenairs.value += '.';
                        //     event.preventDefault();
                            
                        if(inputcontenairs){
                            inputcontenairs.value += '.';
                            event.preventDefault();
                            break;
                        }

                            
                        
                    //else{
                    //     break;
                    //     inputcontenairs.disabled = true;
                    // }
                }
            }
        }
    });
});

function validateInput(inputcontenairs) {
    // Vérifier si l'entrée commence ou se termine par un point
    if (inputcontenairs.value.startsWith('.') || inputcontenairs.value.endsWith('.')) {
      return false;
    }
  
    // Vérifier si l'entrée contient plusieurs points consécutifs
    if (inputcontenairs.includes('..')) {
      return false;
    }
  
    // Vérifier si l'entrée contient plusieurs points non consécutifs
    const dotCount = inputcontenairs.split('.').length - 1;
    if (dotCount > 1) {
      return false;
    }
  
    return true;
  }






















