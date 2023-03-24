/**
 * Fichier JS pour l'exercice sur la prime des chauffeurs.
 * GUI : pages/livrexpress.html
 * 
 */
import {recupValeur} from './remuneration.js';

/**
 * Listeners sur les inputs
 * 
 */
window.addEventListener('load', function () {
    // tabEvents est une collection d'évenements
    let tabEvents = ['keyup', 'click'];

    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll('input[type="number"]');

    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (let i = 0; i < tabInputs.length; i++) {
        for (let j = 0; j < tabEvents.length; j++) {
            // Ajout d'un Listener sur tous les <input> sur les évènements listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], calculerPrime);
        }
    }

    // Gestion de l'input de type range (recopie de la valeur dans l'output)
    window.document.querySelector('#nb_accidents').addEventListener('change', function () {
        window.document.querySelector('#o_nb_accidents').value = recupValeur('#nb_accidents');
        calculerPrime();
    });

});

/**
 * Procédure qui s'occupe du recueil des paramètres de calcul de la prime ainsi que de l'affichage
 * 
 * @returns {void}
 */
function calculerPrime() {
    // Déclaration et affectation des variables
    let nbAccidents = recupValeur('#nb_accidents');
    let nbAncien = recupValeur('#nb_ancien');
    let nbKm = recupValeur('#nb_km');
    let primeAnnuelleSansAccident = recupPrimeAnnuelle(recupPrimeDist(nbKm), recupPrimeAncien(nbAncien),0);
    let primeAnnuelle = recupPrimeAnnuelle(recupPrimeDist(nbKm), recupPrimeAncien(nbAncien),nbAccidents);
    
    // Gestion de l'affichage de la prime en fonction du nombre d'accidents
    gestionNbAccidents(nbAccidents, primeAnnuelleSansAccident, primeAnnuelle);
}

/**
 * Fonction qui retourne la prime de distance
 * 
 * @param {integer} nb
 * @returns {float}
 */
function recupPrimeDist(nb) {
    const primeMax = 900, primeKm = 0.01;
    let indem = nb * primeKm;
    if (indem > primeMax) {
        return primeMax;
    } else {
        return indem;
    }
}

/**
 * Fonction qui retourne la prime d'ancienneté
 * 
 * @param {integer} nb
 * @returns {float}
 */
function recupPrimeAncien(nb) {
    const nbMin = 4, primeMin = 300, primeSupp = 30;
    if (nb >= nbMin) {
        return primeMin + (nb - nbMin) * primeSupp;
    } else {
        return 0.0;
    }
}

/**
 * Fonction qui retourne la prime annuelle
 * 
 * @param {float} primeDist
 * @param {float} primeAncien
 * @param {integer} nbAccidents
 * @returns {float}
 */
function recupPrimeAnnuelle(primeDist, primeAncien, nbAccidents) {
    if (nbAccidents > 3) {
        return 0;
    } else {
        return Number(((primeDist + primeAncien) / (1 + nbAccidents)).toFixed(2));
    }
}

/**
 * Procédure qui gère l'affichage en fonction du nombre d'accidents
 * 
 * @param {integer} nbAccidents
 * @param {float} primeAnnuelleSansAccident
 * @param {float} primeAnnuelle
 * @returns {void}
 */
function gestionNbAccidents(nbAccidents, primeAnnuelleSansAccident, primeAnnuelle) {  
    let elH2 = window.document.querySelector('#remuneration');
    /* utilisation de #remuneration au lieu de #prime pour réutiliser les règles
     * CSS définie dans simulateur.css
     * Si #remuneration (<h2 id='remuneration'></h2>) n'existe pas, on le créé */
    if (!elH2) {
        elH2 = window.document.createElement('h2');
        elH2.id = 'remuneration';
        window.document.querySelector('#recueilinfos').appendChild(elH2);
    }
    
    // Gestion de l'affichage avec gestion particulière pour 0 et 1 accident
    if (nbAccidents === 0) {
        elH2.innerHTML = 'Votre prime sera de ' + primeAnnuelle + ' €';
    } else if (nbAccidents === 1) {
        elH2.innerHTML = 'Votre prime sera de ' + primeAnnuelle + ' € alors qu\'elle aurait pu être de ' + primeAnnuelleSansAccident + ' € sans ' + nbAccidents + ' accident responsable...';
    } else {
        elH2.innerHTML = 'Votre prime sera de ' + primeAnnuelle + ' € alors qu\'elle aurait pu être de ' + primeAnnuelleSansAccident + ' € sans ' + nbAccidents + ' accidents responsables...';
    }
}
