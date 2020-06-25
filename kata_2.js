// Crea una función llamada evaluateLetter() que reciba como parámetro cualquier letra del alfabeto y verifique si es vocal o consonante.
// En caso de ser vocal, devolver "Vocal"
// En caso de ser consonante, devolver "Consonante"

evaluateLetter = (letter) => {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    if(vocales.includes(letter)){
        return'Vocal'
    } else{
        return'Consonante'
    }
}
evaluateLetter('m')