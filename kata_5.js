// Crea una función llamada palindrome() que reciba como parametro una oración,
//  si la oración es un palíndromo la función deberá devolver true en otro caso, devolver false

const palindrome = (oracion) => {
    var texto = oracion.toLowerCase();
    var str = texto.replace(/ /g, "");
    console.log(str);
    
    var strReverse = str.split('').reverse().join(''); 
    console.log(strReverse);
    

    if(str == strReverse ){
        return true;
    }
    return false;
}
console.log( palindrome("Anita Lava La Tina"));
console.log( palindrome("Soy Karla"));