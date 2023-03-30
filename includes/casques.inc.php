<?php

//COnnexion au SGBD
$cnx = new PDO('mysql:host=127.0.0.1;dbname=nolark', 'nolarkuser', 'nolarkpwd');

// Creation de la requête
$req = 'SELECT casque.id, nom, modele, libelle, prix, classement, image, stock';
$req .= ' FROM casque INNER JOIN type ON casque.type=type.id';
$req .= ' INNER JOIN marque ON casque.marque=marque.id';

// Envoie de la requête
$res = $cnx->query($req);

// Affichage du resultat
echo '<section id="casques">';
while ($ligne = $res->fetch(PDO::FETCH_OBJ)) {
    echo '<article>';
    echo '<img src="../images/casques/', $ligne->libelle, '/', $ligne->image,
    '" alt="', $ligne->modele, '">';
    echo '<p class="prix">', $ligne->prix, ' €</p>';
    if ($ligne->stock <= 0){
        echo'<p class="stockko"><abbr data-tip="Sur commande uniquement">stock</abbr></p>';
    }
    else if ($ligne->stock <= 5){
        echo'<p class="stockok"><abbr data-tip="Plus que ', $ligne->stock,' casques en stock...">stock</abbr></p>';
    }
    else {
        echo'<p class="stockok"><abbr data-tip="', $ligne->stock,' casques en stock">stock</abbr></p>';
    }
    echo '<p class="marque">', $ligne->nom, '</p>';
    echo '<p class="modele">', $ligne->modele, '</p>';
    echo '</article>';
}
echo '</section>';
