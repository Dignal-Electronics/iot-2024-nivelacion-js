const sumar = () => new Promise((resolve, reject) => {
    let numeros = [3, 23, 12, 54, 3];
    let total = 0;

    numeros.forEach(n => {
        total += n;
    });

    if (total > 100) {
        resolve("Has ganado.");
    } else {
        reject("No has alcanzado la meta.");
    }
});


sumar()
    .then((respuesta) => {
        console.log("Respuesta then:");
        console.log(respuesta);
    })
    .catch((error) => {
        console.log("Respuesta del catch:");
        console.log(error);
    });
