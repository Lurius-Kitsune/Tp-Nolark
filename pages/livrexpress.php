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
        <link href="../css/simulateur.css" rel="stylesheet" type="text/css">
        <script src="../js/livrexpress.js" type="module"></script>
        <link rel="icon" href="../favicon.ico">
    </head>
    <body>
        <?php
        include('../includes/header.html.inc.php');
        ?>
        <section id="formulaire">
            <h1>Simulateur de prime annuelle pour les chauffeurs de Livr'Express :</h1>
            <form id="form_simulateur" name="form_simulateur">
                <fieldset id="recueilinfos">
                    <legend>Vos informations : </legend>
                    <p>
                        <label for="nb_accidents">Nombre d'accidents :</label>
                        <input type="range" name="nb_accidents" id="nb_accidents" min="0" max="9" value="0">
                        <output for="nb_accidents" id="o_nb_accidents">0</output>
                    </p>
                    <p>
                        <label for="nb_ancien">Nombre d'années d'ancienneté :</label> 
                        <input type="number" name="nb_ancien" id="nb_ancien" min="0" max="50" value="0">
                    </p>
                    <p>
                        <label for="nb_km">Nombre de kilomètres parcourus :</label>
                        <input type="number" name="nb_km" id="nb_km" min="0" max="999999" value="0">
                    </p>
                </fieldset>
                <p id="controles">
                    <input type="reset" id="btn_annuler" value="Effacer les données">
                </p>
            </form>
        </section>
        <?php
            include('../includes/footer.inc.php');
        ?>
    </body>
</html>
