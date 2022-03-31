const argv = require('yargs')
.option('b',{
   alias:'base',
   type:'number',
   demandOption: true,
   describe:'Es la base de la tabla de Multiplicar ' 
})
.option('l',{
    alias:'listar',
    type :'boolean',
    demandOption: true ,
    default:false,
    describe:'Muestra la tabla en consola'
})
.option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'Es el limite hasta donde llegara la tabla de Multiplicar'
})
.check((argv , options)=>{
    if(isNaN(argv.b))
    {
        throw 'La base tiene que ser un Numero';
    }
    return true;
})
.argv;
module.exports = argv;