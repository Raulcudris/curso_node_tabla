const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

const crearArchivo = async (base=1 ,listar=false, hasta=10)=>{

    try {
        console.clear();
        let salida ='';  
        for( let a=1; a<=hasta; a++)
        {
             salida += `${base} x ${a} = ${a*base}\n`;
        }      
        if (listar)
        {               
            console.log('===================');
            console.log(' Tabla del ',base);
            console.log('===================');      
            console.log(salida);        
         }     
        /*fs.writeFile('Archivo.txt', salida, (err)=>{
            if (err) throw err;
            console.log(`Archivo  de la tabla ${base} se ha guardado Exitosamente!!`);
        })*/        

        fs.writeFileSync(`./salida/Archivo de la tabla-${base}.txt`,salida);
        
        return (`Archivo creado exitosamente!!`)

    } catch (error) {
        throw error;
    }      
}

module.exports={
    crearArchivo
}

