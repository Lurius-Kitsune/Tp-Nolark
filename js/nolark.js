function validEnvoi() {
 if (window.document.querySelector("#i_nom").value === "" &&
 window.document.querySelector("#i_prenom").value === "" ) {
 alert("Le nom ou le prénom doivent être remplis"); // On affiche un message
 }
 else {
 window.document.querySelector("#form_contact").submit(); // On peut envoyer
 }
}
window.addEventListener("load", function() {
 window.document.querySelector("#btn_envoyer").addEventListener("click", validEnvoi);
});