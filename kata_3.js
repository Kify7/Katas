// Crea una función llamada decimalToBinary() que reciba como parámetro un número entero decimal
//  y lo convierta en un número binario retornando su resultado.


let binario = numero =>{
    let binarioArray = [];
    while(numero > 1){
        binarioArray.push(numero % 2);
        numero = Math.floor(numero /2);
    }
    binarioArray.push(numero);
    return parseInt(binarioArray.reverse().join(""));
}

console.log(binario(91));


function decimalToBinary(numero) {
    var arrayBin = [];
    while(numero > 1){
        arrayBin.push(numero % 2);
        numero = Math.floor(numero / 2);
    }
    arrayBin.push(numero);
    return parseInt(arrayBin.reverse().join(""));
}
console.log(decimalToBinary(5));
console.log(decimalToBinary(67));
console.log(decimalToBinary(181));

