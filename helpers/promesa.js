const crearArchivo = (base=5)=>{
    const promesa = new Promise((resolve,reject)=>{
        console.log('===================');
        console.log(' Tabla del    ',base);
        console.log('===================');
        let salida ='';        
        for( let a=1; a<=10; a++){
            salida += `${base} x ${a} = ${a*base}\n`;
        }
        console.log(salida)
        /*fs.writeFile('Archivo.txt', salida, (err)=>{
            if (err) throw err;
            console.log(`Archivo  de la tabla ${base} se ha guardado Exitosamente!!`);
        })*/        
        fs.writeFileSync(`Archivo de la tabla-${base}.txt`,salida);
        
        resolve(`Archivo creado exitosamente!!`)

    });
    return promesa;      
}