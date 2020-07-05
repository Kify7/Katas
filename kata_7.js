/* Crea una función llamada time() que calcule el tiempo necesario
 para que un automóvil que se mueve con una velocidad de 73000 m/h 
 recorra una distancia de 120 km. 
(Tiempo = distancia/velocidad) */


const time = (d, v) => console.log(Number((d/v)*1000).toFixed(2));
time(120, 73000)


const time3 = () => {console.log( Number(((120/73000)*1000).toFixed(2)))}
time3();

function time2(){
    var d = 120;
    var v = 73000;
    return Number((d/v*1000).toFixed(2))
}

console.log(time2());
