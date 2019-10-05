const fs= require('fs');
const guardarDB=()=>{

    let data=JSON.stringify(listadoporhacer);
    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw new err('no se pudo grabar', err)
    });
}


const cargarDB=()=>{
    try {
        listadoporhacer=require('../db/data.json');
    } catch (error) {
     listadoporhacer=[];   
    }
}

let listadoporhacer=[];

const crear= (descripcion) => {
cargarDB();
    let porhacer={
        descripcion:descripcion,
        completado:false
        
    };


    listadoporhacer.push(porhacer);
   guardarDB();
    return porhacer;

    
}

const getlistado=()=>{

   cargarDB();
   return listadoporhacer;
}


const actualizar=(descripcion, completado= "true")=>{
cargarDB();
let index = listadoporhacer.findIndex(tarea=> tarea.descripcion===descripcion)

if (index >= 0){

    listadoporhacer[index].completado=completado;
    guardarDB();
    return true
}
else{

    return false;
}

}

const borrar=(descripcion)=>{

    cargarDB();
    let index = listadoporhacer.findIndex(tarea=> tarea.descripcion===descripcion)

    if (index >=0){

        listadoporhacer.splice(index,1);
        return listadoporhacer
    }
   
 }

 


module.exports = {
    crear,
    getlistado,
    actualizar,
    borrar
}