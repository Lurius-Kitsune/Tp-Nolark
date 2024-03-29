<!DOCTYPE html>
<!-- 
     Page web créé dans le cadre du cours de web Dev le 01/09/2018
     Auteur : José GIL
     Email : jgil83000@gmail.com
-->

<html lang="fr-FR">
    <head>
        <title>Casques Nolark : Sécurité et confort, nos priorités !</title>
        <meta charset="UTF-8">
        <meta name="author" content="José GIL">
        <meta name="description" content="Découvrez des casques moto dépassant même les exigences des tests de sécurité. Tous les casques Nolark au meilleur prix et avec en prime la livraison gratuite !">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../css/styles.css" rel="stylesheet" type="text/css">
        <link href="../css/casques.css" rel="stylesheet" type="text/css">
        <link rel="icon" href="../favicon.ico">
    </head>
    <body>
        <?php
        include('../includes/header.html.inc.php');
        ?>
        <p>Formulaire Test site Testform</p>
        <form id="form_contact" name="form_infolettre" action="http://gil83.fr/nolark/testforms.php" method="POST">
            <div><label for="email">Votre e-mail :</label> <input type="email" name="email" id="email" size="35" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></div>
            <input type="submit" id="btn_envoyer" name="sub_envoyer" value="Envoyer votre demande de contact">
        </form>
        <p>Formulaire Test sur script php</p>
        <form id="form_contact" name="form_infolettre" action="../includes/infolettre.inc.php" method="POST">
            <div><label for="email">Votre e-mail :</label> <input type="email" name="email" id="email" size="35" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required></div>
            <input type="submit" id="btn_envoyer" name="sub_envoyer" value="Envoyer votre demande de contact">
        </form>
        <?php
        include('../includes/footer.inc.php');
        ?>
    </body>
</html>