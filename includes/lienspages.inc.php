<?php

$scriptName = filter_input(INPUT_SERVER, 'SCRIPT_NAME');
$pageActuelle = substr($scriptName, strrpos($scriptName, '/') + 1);
if ($pageActuelle === 'index.php') {
    $dirIndex = './';
    $dirPages = './pages/';
} else {
    $dirIndex = '../';
    $dirPages = './';
}

$pages = array(''.$dirIndex."index.php" => "Accueil"
    ,''.$dirPages."route.html" => "Route"
    ,''.$dirPages."cross.php" => "Cross"
    ,''.$dirPages."piste.html" => "Piste"
    ,''.$dirPages."enfants.html" => "Enfants"
    ,''.$dirPages."nous-contacter.html" => "Nous contacter");
foreach ($pages as $lienPage => $nomPage) {
    echo '<li><a href="', $lienPage, '">', $nomPage, '</a></li>';
}
