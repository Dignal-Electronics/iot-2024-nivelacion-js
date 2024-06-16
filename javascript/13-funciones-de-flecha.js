// función convencional.
function suma(numeroA, numeroB) {
    return numeroA + numeroB;
}

// función de flecha.
// La función de flecha me permite cambiar las llaves por parentesis
// y eliminar la palabra reservada "return", la función de flecha "entiende"
// que el contenido dentro de los parentesis a la derecha de "=>" debe ser retornado.
const suma2 = (numeroA, numeroB) => (numeroA + numeroB);

console.log(suma2(44, 32));
