const fs = require('fs');

//uso el readFileSync xq el archivo está local en la pc..
const poema = fs.readFileSync('poema.txt', 'utf-8');
fs.writeFileSync('poema-copy.txt', poema);

//puedo modificar el archivo original...y reemplazar palabras dentro
const poemaModified = poema.replace(/Node.JS/ig, 'NodeJS');
fs.writeFileSync('poema-modified.txt', poemaModified);