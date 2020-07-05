/* Crea una función llamada longestCountry(), esta función recibirá de parámetro un arreglo con nombres de distintos países, 
la función deberá retornar el país con mayor número de letras.
Por ejemplo, del siguiente arreglo de países:
const paises = ["México", "Panamá", "Guatemala", "El Salvador"]
El Salvador es el país con mayor número de letras. */


function longestCountry(arreglo) {
    var lgth = 0;
    var longest;

    for(var i=0; i < arreglo.length; i++){
        if(arreglo[i].length > lgth){
        var lgth = arreglo[i].length;
        longest = arreglo[i];
        }     
    } 
    return longest;
}
 
console.log(longestCountry(["México", "Panamá", "Guatemala", "El Salvador"]));


