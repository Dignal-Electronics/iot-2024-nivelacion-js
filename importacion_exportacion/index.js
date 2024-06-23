/**
 * Se indica la importación mediante las palabras "import" y "from"
 * para indicar la variable o funcion que se desea importar y de que archivo
 * debe importarse respectivamente.
 */
import {magicNumber} from "./export.js"

console.log(magicNumber);

/**
 * Para poder usar la importación y exportación con archivos JS
 * se debe indicar en el archivo "package.json" la propiedad
 * "type" con un valor "modular" para indicar que en este proyecto se trabajará
 * de ese modo.
 * 
 * O como segunda opción, también se puede cambiar la extensión de los archivos js
 * por mjs.
 */