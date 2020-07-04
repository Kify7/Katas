evaluateNumber = (numero) => {
    if (numero % 5 == 0 || numero % 11 == 0){
        return true;
    } else{
        return false;
    }
}

console.log(evaluateNumber(55));