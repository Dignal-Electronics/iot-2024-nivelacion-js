const yo = {
    nombre: "Juan Carlos",
    apellido: "Landero",
    edad: 31,
    peso: "80 kg",
    altura: "1.64 m",
    programar: function() {
       return "Tick tick"; 
    },
    descansar: function() {
        return "Dormir... zzzzZZ";
    },
    calcular: function() {
        return 1 + 1;
    }
};

/*
console.log(yo.nombre);
console.log(`Mi nombre es ${yo.nombre} ${yo.apellido}`);
console.log(yo.programar());*/

console.log(`Hola, mi nombres es ${yo.nombre} y voy a ${yo.descansar()}`);
