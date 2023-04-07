<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    SetInfoLettre($_POST["email"]);
}

function SetInfoLettre($mail) {
    $req = "INSERT INTO NEWSLETTER  (mail)"
            . " VALUES (:mail)";
    try {
        $nolarkBD = new PDO(
                'mysql:host=localhost;dbname=nolark;charset=utf8',
                'nolarkadmin',
                'nolarkadmin'
        );

        $resultat = $nolarkBD->prepare($req);
        $resultat->execute([
            'mail' => $mail,
        ]);
    } catch (Exception $ex) {
        die('Erreur : ' . $ex->getMessage());
    }
}

function SetConsentement($mail) {
    $req = "UPDATE NEWSLETTER"
            . " SET consentement = True, datereceuil = CURRENT_TIMESTAMP()"
            . " where mail = :mail";
    try {
        $nolarkBD = new PDO(
                'mysql:host=localhost;dbname=nolark;charset=utf8',
                'nolarkadmin',
                'nolarkadmin'
        );

        $resultat = $nolarkBD->prepare($req);
        $resultat->execute([
            'mail' => $mail,
        ]);
        if ($resultat->rowCount() == 0) {
            throw 'Mail non-présent dans la bd';
        }
        echo 'Ligne modifier';
    } catch (Exception $ex) {
        die('Erreur : ' . $ex->getMessage());
    }
}

function RemoveConsentement($mail) {
    $req = "DELETE FROM NEWSLETTER"
            . " where mail = :mail";
    try {
        $nolarkBD = new PDO(
                'mysql:host=localhost;dbname=nolark;charset=utf8',
                'nolarkadmin',
                'nolarkadmin'
        );

        $resultat = $nolarkBD->prepare($req);
        $resultat->execute([
            'mail' => $mail,
        ]);
        if ($resultat->rowCount() == 0) {
            throw 'Mail non-présent dans la bd';
        }
        echo 'Ligne modifier';
    } catch (Exception $ex) {
        die('Erreur : ' . $ex->getMessage());
    }
}
