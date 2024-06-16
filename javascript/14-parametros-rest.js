// función con dos parametros definidos.
function suma(numeroA, numeroB) {
    return numeroA + numeroB;
}

console.log(`El resultado de suma(): ${suma(3, 5)}`);

// función con "...numeros" como parametro REST
function sumar(...numeros) {
    let total = 0;

    // [ 4, 5, 2, 9 ]
    numeros.forEach(n => {
        total += n; // total = total + n
    });

    return total;
}

console.log(sumar(4, 5, 2, 9));


function obtenerNumeroMayor(...numeros) {
    // [5, 32, 4, 72, 36]

    // numeroMayor -> 0
    let numeroMayor = 0;

    numeros.forEach(n => {
        //  36        72
        if (n > numeroMayor) {
            // -> 72
            numeroMayor = n;
        }
    });

    return numeroMayor;
}

console.log(`El número mayor es: ${obtenerNumeroMayor(5, 32, 4, 72, 36, 55, 201, 45, 4)}`);