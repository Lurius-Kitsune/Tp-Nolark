const fix = 1100; // Rémunération fixé sans majoration d'anciennet
let nbAncien = parseInt(window.document.querySelector("#num_ancien").value); // Int
let salaire = 0;




function majoration(nbAncien){
        if (nbAncien >= 5){
        for(i = 0; i === nbAncien; i++){
            if (i >= 5 && i < 10){
                salaire += fix * 1.03;
            }
            else if(i >= 10){
                salaire += fix * 1.06;
            }
        }
    }
}




