/**
* Tests unitaires du projet Alcoolémie
*
*/
MesTestsUnitaires = TestCase('AlcoolemieTest');
MesTestsUnitaires.prototype.testsGetAlcoolPur = function() {
 assertEquals('0 verre', 0, getAlcoolPur(0));
 assertEquals('1 verre', 10, getAlcoolPur(1));
};
