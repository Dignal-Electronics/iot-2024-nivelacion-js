// Ejemplo sin desestructuración de un array
/*
const numeros = [1, 2, 4];

let uno = numeros[0];
let dos = numeros[1];
let cuatro = numeros[2];


console.log(dos); // mostrará -> 2
*/

// Ejemplo de desestructuración de un array
let [uno, dos, cuatro] = [1, 2, 4];

console.log(uno);


console.log('******* objeto');

// Ejemplo de un objeto sin desestructuración
let numeros2 = {
    cinco: 5,
    seis: 6,
    siete: 7
};

console.log(numeros2.cuatro);

// Ejemplo de desestructuración de un objeto
let {cinco, seis, siete} = {
    cinco: 5,
    seis: 6,
    siete: 7
};

console.log(seis);