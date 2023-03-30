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
        <link href="../css/video.css" rel="stylesheet" type="text/css">
        <link rel="icon" href="../favicon.ico">
    </head>
    <body>
        <?php
            include('../includes/header.html.inc.php');
        ?>
        <section id="video">
            <article>
                <img src="../images/attention.png" alt="Post-It : Penser à rentrer en vie">
                <p>
                    On est tous d'accord pour dire que la sécurité est primordiale lorsqu'on 
                    roule à deux roues. Personne n'envisagerait de rouler sans casque !
                </p>
                <p>
                    Et pourtant, certains omettent l'essentiel : <span>Attacher son casque !</span>
                </p>
                <p>
                    C'est pourquoi Nolark vous présente cette vidéo conçue par 
                    "<a href="http://scootxperience.com" target="_blank">ScootXperience</a>" qui 
                    vous démontre que le fait d'attacher son casque peut tout changer...
                </p>
                <p>Rappelons l'essentiel à nos enfants et donnons leurs de bonnes habitudes.</p>
            </article>
            <iframe frameborder="0" width="480" height="270" 
                    src="http://www.dailymotion.com/embed/video/xdl390">
            </iframe>
        </section>
        <?php include('../includes/casques.inc.php'); ?>
        <?php
            include('../includes/footer.inc.php');
        ?>
    </body>
</html>
