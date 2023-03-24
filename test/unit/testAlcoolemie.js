/**
 * Tests unitaires du projet Alcoolémie
 * 
 */
MesTestsUnitaires = TestCase('AlcoolemieTest');
MesTestsUnitaires.prototype.testsGetAlcoolPur = function () {
    assertEquals('0 verre', 0, getAlcoolPur(0));
    assertEquals('1 verre', 10, getAlcoolPur(1));
};
MesTestsUnitaires.prototype.testsGetCoefDiffusion = function () {
    assertEquals('Homme', 0.7, getCoefDiffusion('homme'));
    assertEquals('Femme', 0.6, getCoefDiffusion('femme'));
};
MesTestsUnitaires.prototype.testsGetAlcoolemie = function () {
    assertEquals('Homme 100 kg 1 verre', 0.14, getAlcoolemie('homme', 100, 1));
    assertEquals('Femme 100 kg 1 verre', 0.17, getAlcoolemie('femme', 100, 1));
};
MesTestsUnitaires.prototype.testsGetAmende = function () {
    assertEquals('Moins de 0,8 g/l de sang', 'Minorée : 90 € / Forfaitaire : 135 € / Majorée : 375 €', getAmende(0.4));
    assertEquals('A partir de 0,8 g/l', '4500 €', getAmende(0.8));
};
MesTestsUnitaires.prototype.testsGetSanction = function () {
    assertEquals('Moins de 0,8 g/l de sang', '6 points + suspension 3 ans', getSanction(0.4));
    assertEquals('A partir de 0,8 g/l de sang', '6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation', getSanction(0.8));
};
MesTestsUnitaires.prototype.testsGetInt = function () {
    /*:DOC += 
     <input type="number" id="num_verre" value="1">
     <input type="number" id="num_poids" value="100">
     */
    assertTrue('Test poids 100 Kg', 100 === getInt('#num_poids'));
    assertTrue('Test 1 verre', 1 === getInt('#num_verre'));
    window.document.querySelector('#num_verre').value = 'texte';
    assertTrue('Test erreur saisie verre', 0 === getInt('#num_verre'));
};
MesTestsUnitaires.prototype.testsGetString = function () {
    /*:DOC += 
     <fieldset id="sexe">
     <input type="radio" name="rd_sexe" id="rd_sexehomme" value="homme" 
     checked="checked">
     <input type="radio" name="rd_sexe" id="rd_sexefemme" value="femme">
     </fieldset>
     */
    assertTrue('Test bouton radio Homme', 'homme' === getString('#sexe input[type="radio"]:checked'));
    // Changement de sexe
    window.document.querySelector('#rd_sexehomme').removeAttribute('checked');
    window.document.querySelector('#rd_sexefemme').setAttribute('checked', 'checked');
    assertTrue('Test bouton radio Femme', 'femme' === getString('#sexe input[type="radio"]:checked'));
};
MesTestsUnitaires.prototype.testsGestionAlcoolemie = function () {
    /*:DOC +=
     <section id="formulaire">
     <h1>Simulateur de calcul pour la force de vente :</h1>
     <form id="form_simulateur" name="form_simulateur">
     <fieldset id="simulation">
     <legend>Votre simulation : </legend>
     <p><label for="num_poids">Votre poids :</label> <input type="number" name="num_poids" id="num_poids" min="0" max="200" value="0" /></p>
     <fieldset id="sexe">
     <legend>Votre sexe : </legend>
     <p><input type="radio" name="rd_sexe" value="homme" id="rd_sexehomme" checked="checked" /> <label for="rd_sexehomme">Homme</label></p>
     <p><input type="radio" name="rd_sexe" value="femme" id="rd_sexefemme" /> <label for="rd_sexefemme">Femme</label></p>
     </fieldset>
     <p><label for="num_verre">Nombre de verres bus :</label> <input type="number" name="num_verre" id="num_verre" min="0" max="25" value="0" /></p>
     </fieldset>
     <p id="controles"><input type="reset" name="rst_annuler" id="btn_annuler" value="Effacer les données"></p>
     </form>
     </section> 
     */
    window.document.querySelector('#num_poids').setAttribute('value', 100);
    window.document.querySelector('#num_verre').setAttribute('value', 3);
    // Alcoolémie = 0.43
    gestionAlcoolemie();
    let elH3Alcoolemie = window.document.querySelector('#alcoolemie');
    assertTagName('Le h3 alcoolemie a bien été créé', 'h3', elH3Alcoolemie);
    assertElementId('L\'id est bien alcoolemie', 'alcoolemie', elH3Alcoolemie);
    assertEquals('C\'est le bon message 0.43', 'Alcoolémie : 0.43 g/l de sang', elH3Alcoolemie.innerHTML);
    assertEquals('C\'est la bonne couleur noire', 'black', elH3Alcoolemie.style.getPropertyValue('color'));
    window.document.querySelector('#num_verre').setAttribute('value', 4);
    // Alcoolémie = 0.57
    gestionAlcoolemie();
    assertEquals('C\'est le bon message 0.57', 'Alcoolémie : 0.57 g/l de sang', elH3Alcoolemie.innerHTML);
    assertEquals('C\'est la bonne couleur rouge', 'red', elH3Alcoolemie.style.getPropertyValue('color'));
    let elH3Amende = window.document.querySelector('#amende');
    assertTagName('Le h3 amende a bien été créé', 'h3', elH3Amende);
    assertElementId('L\'id est bien amende', 'amende', elH3Amende);
    assertEquals('C\'est le bon message amende 0.57', 'Amende : Minorée : 90 € / Forfaitaire : 135 € / Majorée : 375 €', elH3Amende.innerHTML);
    let elH3Sanction = window.document.querySelector('#sanction');
    assertTagName('Le h3 sanction a bien été créé', 'h3', elH3Sanction);
    assertElementId('L\'id est bien amende', 'sanction', elH3Sanction);
    assertEquals('C\'est le bon message sanction 0.57', 'Sanction : 6 points + suspension 3 ans', elH3Sanction.innerHTML);
    window.document.querySelector('#num_verre').setAttribute('value', 4);
    // Changement de sexe
    window.document.querySelector('#rd_sexehomme').removeAttribute('checked');
    window.document.querySelector('#rd_sexefemme').setAttribute('checked', 'checked');
    // Alcoolémie = 0.67
    gestionAlcoolemie();
    assertEquals('C\'est le bon message 0.67', 'Alcoolémie : 0.67 g/l de sang', elH3Alcoolemie.innerHTML);
    window.document.querySelector('#num_verre').setAttribute('value', 5);
    // Alcoolémie = 0.83
    gestionAlcoolemie();
    assertEquals('C\'est le bon message 0.83', 'Alcoolémie : 0.83 g/l de sang', elH3Alcoolemie.innerHTML);
    assertEquals('C\'est le bon message amende 0.83', 'Amende : 4500 €', elH3Amende.innerHTML);
    assertEquals('C\'est le bon message sanction 0.83', 'Sanction : 6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation', elH3Sanction.innerHTML);
    window.document.querySelector('#num_verre').setAttribute('value', 2);
    // Alcoolémie = 0.33
    gestionAlcoolemie();
    assertEquals('C\'est la bonne couleur de retour au noir', 'black', elH3Alcoolemie.style.getPropertyValue('color'));
    assertNull('L\'amende est supprimée 0.33',window.document.querySelector('#amende'));
    assertNull('La sanction est supprimée 0.33',window.document.querySelector('#sanction'));
};
