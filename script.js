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
var expreChar = "";
var value = "";

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
            if(historique.textContent.includes("+")||historique.textContent.includes("-")||historique.textContent.includes("÷") ||historique.textContent.includes("*")){
                value += buttonValue;
            }
            
            if (inputcontenairs.value === '0' && buttonValue === '0') {
                inputcontenairs.value = inputcontenairs.value;
                affichageHist = buttonValue;
                verifSigne = false;
                value = buttonValue;
            } else if(inputcontenairs.value === '0'){
                inputcontenairs.value = buttonValue;
                // historique.textContent = buttonValue;
                affichageHist = buttonValue;
                value = buttonValue;
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
                    expreChar +=buttonValue; 
                    inputcontenairs.value = '';
                    historique.textContent = '';
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
                        if (Number.isNaN(Number(buttonValue))) {

                            // La chaîne n'est pas un nombre, remplacer le dernier caractère
                            expression = expression.slice(0, -1) + "+";
                            expreChar = "+";
                            // event.preventDefault();
                          }
            
                        
                        inputcontenairs.value = '';
                        verifSigne = true;
                        if (!historique.textContent.includes('=')) {
                            historique.textContent = affichageHist + " + ";
                        } else {
                            historique.textContent = expression + ' + ';
                            inputcontenairs.value = value;
                        }
                        affichageHist = "";
                        expression += '+';
                        expreChar += "+";  
                
                        event.preventDefault();
                        break;
                    case '-':
                        expreChar +=buttonValue; 
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
                        expreChar +="*"; 
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
                        expreChar +="/"; 
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
                        if(historique.textContent != ''){
                            if (!historique.textContent.includes('=')) {
                                //// Évaluer l'expression mathématique et afficher le résultat
                                if(!verifSigne) {
                                    historique.textContent = "";
                                }else{
                                    historique.textContent += affichageHist + " = "
                                    // historique.insertAdjacentHTML('beforeend', '<br>');
                                    inputcontenairs.value = eval(expression);
                                    // const valeurAdd = eval(expression);
                                    expression = eval(expression);
                                    
                                }
                               
                                event.preventDefault();
                                break;
                            } else {
                                // expression = eval(valeurAdd + expression);
                                historique.textContent =expression + " "+expreChar + " " + value + " = "
                                expression = eval(expression + expreChar+ value);
                                inputcontenairs.value = eval(expression); 
                                event.preventDefault();
                                break;
                            }
                        }else{
                            inputcontenairs.value =inputcontenairs.value ;
                            // historique.textContent = "";
                            // inputcontenairs.value = "";
                            event.preventDefault();
                                break;
                        }   

                    case 'AC':
                        //Effacer le champ de saisie
                        value = "";
                        expreChar = "";
                        inputcontenairs.value = '';
                        historique.textContent = " ";
                        expression = '';
                        affichageHist = "";
                        event.preventDefault();
                        break;
                    case 'C':
                        // Supprimer le dernier caractère du champ de saisie
                        affichageHist = affichageHist.slice(0, -1);
                        inputcontenairs.value = inputcontenairs.value.slice(0, -1);
                        expression = expression.slice(0, -1);
                        
                        event.preventDefault();
                        break;
                    case '+/-':
                        // Inverser le signe du nombre dans le champ de saisie
                        inputcontenairs.value = -inputcontenairs.value;
                        expression = -expression;
                        affichageHist = -affichageHist;
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
                expression += buttonValue;

            }
           
        }





        console.log(expression);
    });
    // format.addEventListener("submit",function(event){
    //     event.preventDefault();
    // });
});


