const frutas = ["uva", "banana", "manzana", "sandia", "melon"];
/*
frutas.forEach(elemento => {
    console.log(elemento);
});
*/

// Las variables de tipo array "pueden hacer uso" de la función "foreach".
// La funcion foreach me permite iterar en cada elemento de un array.
frutas.forEach((element, indice) => {
    console.log(`La fruta ${element} se encuentra en la posición: ${indice}.`);
});

frutas[20] = "Cereza";

frutas.forEach((fruta, indice) => {
    console.log(`La fruta ${fruta} se encuentra en la posición: ${indice}.`);
});