const usuario = () => new Promise((resolve, reject) => {


    setTimeout(() => {

        const informacion = [
            {id: 1, nombre: 'Juan'},
            {id: 2, nombre: 'Ana'},
            {id: 3, nombre: 'Carlos'},
            {id: 4, nombre: 'Alejandra'},
        ];
        
        // resolve(informacion);

        reject('error al resolver la promesa');

    }, 3000);


});

usuario()
    .then((usuario) => {
        console.log(usuario);
    })
    .catch((error) => {
        console.log(error);
    });

