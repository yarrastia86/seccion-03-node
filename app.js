const argv = require('./config/yargs').argv
const { crearArchivo } = require('./multiplicar/multiplicar')
const colors = require('colors');


let comando = argv._[0];
let base = 0;
switch (comando) {
    case 'listar':
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(base).then(archivo => {
                console.log(archivo);
            })
            .catch(err => {
                console.log(err);
            })
        break;
    case 'limite':
        console.log('Limite'.blue);
        break;

    default:
        console.log('Default'.red);
        break;
}







// console.log(base);