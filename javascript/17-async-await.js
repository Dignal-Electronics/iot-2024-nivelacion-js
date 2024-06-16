const usuarios = () => new Promise((resolve, reject) => {
    
    setTimeout(() => {
        const informacion = [
            {id: 1, nombre: "Juan"},
            {id: 2, nombre: "ana"}
        ];

        resolve(informacion);
    }, 3000);
});


// llamado con async / await
const informacion = async () => {
    console.log(usuarios());
    console.log(await usuarios());
}

informacion();
