// const functions = require('./functions')
//? importación más antigua
//! desestructuración
//uso LEGACY
/* const { getTitle, getAuthor } = require('./functions');
const { curso } = require('./objects'); */

//? importación ACTUAL
//ES6
import { getAuthor, getTitle } from './functions.js';
import { curso } from './objects.js';

const { nombre, autor } = curso;

console.log(getTitle(), getAuthor(autor));
console.log(curso)
console.log(nombre, autor)

//? variables de entorno..
console.log(process.env.PORT ?? 8080)