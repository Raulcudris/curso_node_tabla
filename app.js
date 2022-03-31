    const { crearArchivo} = require('./helpers/multiplicar');   
    const  argv  = require('./config/yargs');

    console.clear();

    crearArchivo(argv.b, argv.l , argv.h)
    .then( nombreArchivo => console.log(nombreArchivo))
    .catch(err => console.log(err));
    //console.log(process.argv);
    //console.log(argv);

    //Option('l')
    //Listar
    //boolean 
    //default: false

    //console.log('la base:yargs',argv.base);

    //const [ , , arg3='base=5' ] = process.argv;
    //const [ ,base = 5]= arg3.split('=');
    //console.log(base);

    //const base =1994;   

    
      






