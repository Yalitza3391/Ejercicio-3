
const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
         desc:'desc '
    }
}

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc:'marca la desc'
    },
    completado: {
        alias: 'c',
        default: true,
        desc:'marca completado'
    }
}


const opts3 = {
    descripcion: {
        demand: true,
        alias: 'b',
         desc:'desc'
    }
}

const argv = require('yargs')
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .command('actualizar', 'Genera un archivo con la tabla de multiplicar', opts2)
    .command('borrar', 'Genera un archivo con la tabla de multiplicar', opts3)
    .help()
    .argv;


    module.exports = {
        argv
    }