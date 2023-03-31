<?php
require_once '../vendor/autoload.php'; // Autochargement des dépendances
try {
    // Requête SQL
    $cnx = new PDO('mysql:host=127.0.0.1;dbname=nolark', 'nolarkuser', 'nolarkpwd');
    $req = 'SELECT * FROM casque INNER JOIN type ON casque.type=type.id';
    $req .= ' INNER JOIN marque ON casque.marque=marque.id';
    $req .= ' WHERE libelle="' . substr($pageActuelle, 0, -4) . '"';
    $res = $cnx->prepare($req);
    $res->execute();
    $res->fetch(PDO::FETCH_OBJ);
    unset($cnx); // Fermeture connexio
    $loader = new Twig_Loader_Filesystem('../tpl'); // Répertoire vers les templates
    // Initialisation de l'environnement Twig
    $twig = new Twig_Environment($loader, array(
        'cache' => '../cache',
    ));
    $template = $twig->loadTemplate('casques.twig'); // Chargemement du template
    // Affectation des variables du template
    echo $template->render(array(
        'casques' => $res
    ));
} catch (PDOException $e) {
    echo 'Erreur: ' . $e->getMessage();
}
