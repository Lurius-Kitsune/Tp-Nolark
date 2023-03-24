/**
 * Listeners sur les inputs
 * 
 */
window.addEventListener('load', function () {
    // tabEvents est une collection d'évenements
    let tabEvents = ['keyup', 'click'];

    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll('input:not([id="btn_annuler"])');

    // Parcours de tabInputs en s'appuyant sur le nombre de <input> et sur tabEvents
    for (let i = 0; i < tabInputs.length; i++) {
        for (let j = 0; j < tabEvents.length; j++) {
            // Ajout d'un Listener sur tous les <input> sur les évènements listés dans tabEvents
            tabInputs[i].addEventListener(tabEvents[j], gestionAlcoolemie);
        }
    }
    
    // Suppression du bug du bouton reset
    window.document.querySelector('#btn_annuler').addEventListener('click', function () {
        window.document.querySelector('#btn_annuler').form.reset();
        gestionAlcoolemie();
    });
});

/**
 * Procédure qui s'occupe du recueil des paramètres de calcul de l'acoolémie
 * ainsi que de son affichage
 * 
 * @returns {void}
 */
function gestionAlcoolemie() {
    // Déclaration et affectation des variables
    let poids = getInt('#num_poids');
    let sexe = getString('#sexe input[type="radio"]:checked');
    let nbVerres = getInt('#num_verre');
    let alcoolemie = getAlcoolemie(sexe, poids, nbVerres);

    // Gestion des affichages
    if(alcoolemie >= 0.5) {
        affiche('h3','#simulation','alcoolemie','Alcoolémie : ' + alcoolemie + ' g/l de sang','red');
        affiche('h3','#simulation','amende','Amende : ' + getAmende(alcoolemie),'black');
        affiche('h3','#simulation','sanction','Sanction : ' + getSanction(alcoolemie),'black');
    } else {
        affiche('h3','#simulation','alcoolemie','Alcoolémie : ' + alcoolemie + ' g/l de sang','black');
        supprime('amende');
        supprime('sanction');
    }
}

/**
 * Fonction générique qui un crée ou met à jour un élément HTML de type typeEl
 * dans un élément HTML cible, en renseignant un id, un contenu et une couleur
 * 
 * @param {String} typeEl
 * @param {String} cible
 * @param {String} id
 * @param {String} contenu
 * @param {String} couleur
 * @returns {void}
 */
function affiche(typeEl, cible, id, contenu, couleur) {
    let elH3 = window.document.querySelector('#' + id);
    if (!elH3) {
        elH3 = window.document.createElement(typeEl);
        elH3.id = id;
        window.document.querySelector(cible).appendChild(elH3);
    }
    // Affichage de l'élément dans la couleur demandée
    elH3.style.setProperty('color',couleur);
    elH3.innerHTML = contenu;
}

/**
 * Fonction générique qui supprime un élément HTML à partir de son id
 * 
 * @param {String} id
 * @returns {void}
 */
function supprime(id) {
    let el = window.document.querySelector('#' + id);
    if (el) {
        el.remove();
    }
}

/**
 * Fonction qui retourne l'alcool pur ingéré en fonction du nombre 
 * de verre
 * 
 * @param {int} nbVerres
 * @returns {int}
 */
function getAlcoolPur(nbVerres) {
    const uniteAlcool = 10;
    return uniteAlcool * nbVerres;
}

/**
 * Fonction qui retourne le coefficient de diffusion en fonction du sexe
 * 
 * @param {string} sexe
 * @returns {float}
 */
function getCoefDiffusion(sexe) {
    const coefDiffuH = 0.7, coefDiffuF = 0.6;
    if (sexe === 'homme') {
        return coefDiffuH;
    } else {
        return coefDiffuF;
    }
}

/**
 * Fonction qui retourne l'alcoolémie en fonction du sexe, du poids et du 
 * nombre de verres ingérés
 * 
 * @param {string} sexe
 * @param {int} poids
 * @param {int} nbVerres
 * @returns {float}
 */
function getAlcoolemie(sexe, poids, nbVerres) {
    // /!\ division par 0, on ne veut pas provoquer la destruction de l'univers ;o)
    if (poids > 0) {
        return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
    } else {
        return 0;
    }
}

/**
 * Fonction qui retourne l'amende encourue en fonction de l'alcoolémie
 * 
 * @param {float} alcoolemie
 * @returns {string}
 */
function getAmende(alcoolemie) {
    const seuil = 0.8;
    if (alcoolemie < seuil) {
        return 'Minorée : 90 € / Forfaitaire : 135 € / Majorée : 375 €';
    } else {
        return '4500 €';
    }
}

/**
 * Fonction qui retourne la sanction encourue en fonction de l'alcoolémie
 * 
 * @param {float} alcoolemie
 * @returns {string}
 */
function getSanction(alcoolemie) {
    const seuil = 0.8;
    if (alcoolemie < seuil) {
        return '6 points + suspension 3 ans';
    } else {
        return '6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation';
    }
}

/**
 * Fonction qui retourne une valeur entière récupérée via 
 * window.document.querySelector(id)
 * 
 * @param {string} id
 * @returns {integer}
 */
function getInt(id) {
    let valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}

/**
 * Fonction qui retourne un string récupéré dans un champ via son id
 * 
 * @param {string} id
 * @returns {string}
 */
function getString(id) {
    return window.document.querySelector(id).value;
}

