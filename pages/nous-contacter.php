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
        <link href="../css/carto.css" rel="stylesheet" type="text/css">
        <link href="../css/contact.css" rel="stylesheet" type="text/css">
        <link rel="icon" href="../favicon.ico">
        <script src="../js/nolark.js" type="text/javascript"></script>
    </head>
    <body>
        <?php
            include('../includes/header.html.inc.php');
        ?>
        <section id="carto">
            <h1>Nous localiser :</h1>
            <img src="https://open.mapquestapi.com/staticmap/v5/map?key=bZNXQieHCY65xphzmzAPLTH1EQSKUDq0&locations=Toulon,Var,France|http://gil83.fr/nolark/marqueur_nolark.png&center=Châteauroux,Indre,France&zoom=6&size=600,610" alt="Carte OpenStreetMap statique avec le pays de Nolark">
            <img src="https://open.mapquestapi.com/staticmap/v5/map?key=bZNXQieHCY65xphzmzAPLTH1EQSKUDq0&locations=Rond-Point Bir-Hackeim, La Rode, Toulon, Var, Provence-Alpes-Côte d'Azur, France métropolitaine, 83041, France|http://gil83.fr/nolark/marqueur_nolark.png&zoom=13&size=306,300" alt="Carte OpenStreetMap statique avec la ville de Nolark">
            <img src="https://open.mapquestapi.com/staticmap/v5/map?key=bZNXQieHCY65xphzmzAPLTH1EQSKUDq0&locations=43.12115, 5.94037|http://gil83.fr/nolark/marqueur_nolark.png&zoom=18&size=306,300" alt="Carte OpenStreetMap statique avec l'emplacement de Nolark">
        </section>
        <section id="contact">
            <h1>Nous contacter :</h1>
            <form id="form_contact" name="form_contact" action="http://gil83.fr/nolark/testforms.php" method="POST">
                <fieldset id="coordo">
                    <legend>Pour mieux vous connaître</legend>
                    <div><label for="i_nom">Votre nom :</label> <input type="text" name="i_nom" id="i_nom" size="35" pattern="^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s\-]+$" required><div class="input-validation"></div></div>
                    <div><label for="i_prenom">Votre prénom :</label> <input type="text" name="i_prenom" id="i_prenom" size="35" pattern="^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\s\-]+$" required><div class="input-validation"></div></div>
                    <div><label for="i_email">Votre e-mail :</label> <input type="email" name="i_email" id="i_email" size="35" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required><div class="input-validation"></div></div>
                    <div><label for="i_url">Votre url :</label> <input type="url" name="i_url" id="i_url" size="35" pattern="https?://.+[a-z0-9.-]+\.[a-z]{2,}$"></div>
                    <div>
                        <label for="lst_typeclient">Vous êtes : </label>
                        <select name="lst_typeclient" id="lst_typeclient">
                            <option value="1">Étudiant</option>
                            <option value="2">Salarié du privé</option>
                            <option value="3">Salarié du public</option>
                            <option value="4">Chef d'entreprise</option>
                            <option value="5">Journaliste</option>
                            <option value="6">Professionnel(le) du casque</option>
                            <option value="99">Autre statut</option>
                        </select>
                    </div>
                    <div>
                        <label>Date de naissance : </label>
                        <input type="number" name="num_jour" id="num_jour" min="1" max="31"> / <input type="number" name="num_mois" id="num_mois" min="1" max="12"> / <input type="number" name="num_annee" id="num_annee" min="1900" max="2016">
                    </div>
                    <fieldset id="marques">
                        <legend>Vos marques préférés</legend>
                        <table>
                            <tr>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_agv" value="agv"><label for="chk_agv">agv</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_airoh" value="airoh"><label for="chk_airoh">airoh</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_arai" value="arai"><label for="chk_arai">araï</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_bell" value="bell"><label for="chk_bell">bell</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_bering" value="bering"><label for="chk_bering">bering</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_bultaco" value="bultaco"><label for="chk_bultaco">bultaco</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_caberg" value="caberg"><label for="chk_caberg">caberg</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_cameron" value="cameron"><label for="chk_cameron">cameron</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_chaft" value="chaft"><label for="chk_chaft">chaft</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_darts" value="darts"><label for="chk_darts">darts</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_dg" value="dg"><label for="chk_dg">dg</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_diesel" value="diesel"><label for="chk_diesel">diesel</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_falco" value="falco"><label for="chk_falco">falco</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_fox" value="fox"><label for="chk_fox">fox</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_furygan" value="furygan"><label for="chk_furygan">furygan</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_givi" value="givi"><label for="chk_givi">givi</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_gpa" value="gpa"><label for="chk_gpa">gpa</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_grex" value="grex"><label for="chk_grex">grex</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_helstons" value="helstons"><label for="chk_helstons">helstons</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_hjc" value="hjc"><label for="chk_hjc">hjc</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_hokkey" value="hokkey"><label for="chk_hokkey">hokkey</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_ica" value="ica"><label for="chk_ica">ica</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_icon" value="icon"><label for="chk_icon">icon</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_ixon" value="ixon"><label for="chk_ixon">ixon</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_kenny" value="kenny"><label for="chk_kenny">kenny</label></td>
                                <td><input type="checkbox" name="chk_marques[]" id="chk_knox" value="knox"><label for="chk_icon">knox</label></td>
                                <td></td>
                            </tr>     
                        </table>
                    </fieldset>
                    <div>
                        <label>Votre couleur préférée : </label>
                        <input type="color" name="col_couleur" id="col_couleur" value="#0055A4">
                    </div>
                </fieldset>
                <fieldset id="motif">
                    <legend>Motif du contact</legend>
                    <div><input type="radio" name="rd_motif" value="deminfo" id="rd_deminfo"> <label for="rd_deminfo">Demande d'information</label></div>
                    <div><input type="radio" name="rd_motif" value="reclam" id="rd_reclam"> <label for="rd_reclam">Réclamation</label></div>
                    <div><input type="radio" name="rd_motif" value="satis" id="rd_satis"> <label for="rd_satis">Satisfaction</label></div>
                    <div><input type="radio" name="rd_motif" value="suivi" id="rd_suivi"> <label for="rd_suivi">Suivi de commande</label></div>
                    <div><input type="radio" name="rd_motif" value="pub" id="rd_pub"> <label for="rd_pub">Publicité</label></div>
                    <div><input type="radio" name="rd_motif" value="autre" id="rd_autre"> <label for="rd_autre">Autre...</label></div>
                    <div><label for="area_precisions">Si "Autre", veuillez préciser :</label><br><textarea name="area_precisions" id="area_precisions" cols="35" rows="10"></textarea></div>
                </fieldset>
                <div id="controles"><input type="button" id="btn_envoyer" name="sub_envoyer" value="Envoyer votre demande de contact"> <input type="reset" name="rst_annuler" value="Effacer les réponses"></div>
            </form>
        </section>
        <?php
            include('../includes/footer.inc.php');
        ?>
    </body>
</html>
