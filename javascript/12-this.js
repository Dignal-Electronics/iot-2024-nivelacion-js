function saludar() {
    console.log(this);
}

// saludar();

let obj = {
    edad: 24,
    accion: function () {
        console.log(this);
    }
}

// obj.accion();

let color = 'El color es azul';
/**
 * this toma el valor  del propietario donde se encuentra la función en la que
 * fue definido.
 * 
 * En este ejemplo:
 * - this se definio dentro de la función "accion".
 * - this toma el valor del propietario de la funcion "accion".
 * - el propietario de la funcion "accion" es el objeto "animal".
 */
let animal = {
    tipo: 'Perro',
    color: 'Gris',
    accion: function () {
        // this.color hace referencia a la propiedad "color" que se encuentra dentro
        // del objeto "animal"
        console.log(this.color); // -> Gris
        // colo hace referencia a la variable que se definio en la linea 16
        console.log(color); // -> El color es azul
    }
}

animal.accion();

console.log(globalThis);