const fix = 1100; // Rémunération fixé sans majoration d'anciennet
let nbAncien = parseInt(window.document.querySelector("#num_ancien").value); // Int
let salaire = 0;

let S20 = 140;
let Multi = 180;
let XSp = 350;

let T1s20 = 0.04;
let T2s20 = 0.06;
let T3s20 = 0.1;




function majoration(nbAncien, total){
        if (nbAncien >= 5){
        for(i = 0; i === nbAncien; i++){
            if (i >= 5 && i < 10){
                total += fix * 1.03;
            }
            else if(i >= 10){
                total += fix * 1.06;
            }
        }
    }
}

/*
 * Renvoie le total du casque
 * total :  Le salaire total
 */
function commissionProgressive(total, qte){
    for (i=0; i === qte; i++){
        if(i <= 20){
            total += S20*0.04;
        }
    }
}




