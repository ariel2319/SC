# SC
Back End practice - NodeJS


# package.json
  build => para construir nuestra versión de distribución de nuestro proyecto
  console =>   "console": "echo 'Hola mundo desde script' && npm run dev" => puedo mandar un msj por consola con "echo" y a la vez tirar un npm para correr un script a continuación

# Importar / Exportar 
+ ACTUAL FORMA
module.exports = {
  getAuthor,
  getTitle
}

+ ANTIGUA FORMA
const functions = require('./functions')