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
        } 
    });
});






















