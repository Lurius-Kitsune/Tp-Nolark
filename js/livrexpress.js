function primeAnnées(){
    
}

function primeDist(dist){
    const plafond = 900, centpKm = 0.1;
    let i, result = 0;
    result += centpKm*dist;
        if (result >= plafond){
            result = plafond;
        }
    return result;
}