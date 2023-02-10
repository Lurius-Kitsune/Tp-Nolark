/**
 * Tests unitaires du projet Alcoolémie
 *
 */
MesTestsUnitaires = TestCase('AlcoolemieTest');
MesTestsUnitaires.prototype.testsGetAlcoolPur = function () {
    assertEquals('0 verre', 0, getAlcoolPur(0));
    assertEquals('1 verre', 10, getAlcoolPur(1));
};

MesTestsUnitaires.prototype.testGetCoefDiffusion = function () {
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