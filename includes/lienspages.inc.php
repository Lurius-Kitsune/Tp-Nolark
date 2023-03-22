<?php

$pages = array("index.php" => "Accueil"
    , "route.html" => "Route"
    , "cross.html" => "Cross"
    , "piste.html" => "Piste"
    , "enfants.html" => "Enfants"
    , "nous-contacter.html" => "Nous contacter");
foreach ($pages as $lienPage => $nomPage) {
    echo '<li><a href="pages/', $lienPage, '">', $nomPage, '</a></li>';
}
