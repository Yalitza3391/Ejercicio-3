const argv= require ('./config/yargs').argv;
const porhacer= require('./por-hacer/por-hacer');
const colors=require('colors')
let comando=argv._[0];

switch(comando){

    case 'crear':
         let tarea= porhacer.crear(argv.descripcion);
         console.log(tarea);
    break;
    case 'listar':
           listado=porhacer.getlistado();
           for (let tarea of listado){
                console.log("-------");
                console.log(tarea.descripcion .green);
                console.log(`status ${tarea.completado}`);
            }
    break;
    case 'actualizar':
            let actualizado=porhacer.actualizar(argv.descripcion, argv.completado);
            console.log(actualizado);
    break;

   case 'borrar':
           let borrado= porhacer.borrar(argv.descripcion);
           console.log(borrado);
   break;
   
    default:
            console.log('comando no reconocido')
}