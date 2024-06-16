//Variables "var"
// var -> define una variable con alcance global.
var numero = 10;
//console.log(); -> Me permite visualizar salidas de texto a la consola.
console.log(numero);

// function -> Me permite definir una función.
function foo() {
    numero = 20;
}

foo();
console.log(numero);