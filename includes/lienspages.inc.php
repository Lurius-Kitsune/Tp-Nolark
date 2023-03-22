<?php

include 'getFileRoot.inc.php';

$pages = array(''.$rootPage."index.php" => "Accueil"
    ,''.$otherPage."route.html" => "Route"
    ,''.$otherPage."cross.php" => "Cross"
    ,''.$otherPage."piste.html" => "Piste"
    ,''.$otherPage."enfants.html" => "Enfants"
    ,''.$otherPage."nous-contacter.html" => "Nous contacter");
foreach ($pages as $lienPage => $nomPage) {
    echo '<li><a href="', $lienPage, '">', $nomPage, '</a></li>';
}
