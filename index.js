function quantVitDerrota(numA, numB){
    return numA - numB
}

let vitorias = quantVitDerrota(200, 30);

if (vitorias < 10){
    ranque = "Ferro"
}else if (vitorias >= 11 && vitorias <= 20 ){
    ranque = "Bronze"
}else if (vitorias >= 21 && vitorias <= 50 ){
    ranque = "Prata"
}else if (vitorias >= 51 && vitorias <= 80 ){
    ranque = "Ouro"
}else if (vitorias >= 81 && vitorias <= 90 ){
    ranque = "Diamante"
}else if (vitorias >= 91 && vitorias <= 100 ){
    ranque = "Lendário"
}else if (vitorias >= 101){
    ranque = "Imortal"
}else{
    
}

console.log("O heroi tem saldo de " + vitorias + ", e está no ranque " + ranque)