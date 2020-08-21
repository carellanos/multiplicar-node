const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


/*
 * 1. Concatenamos un metodo (command)
 * 2. Nommbre del comando: 'listar' 
 * 3. El segundo argumento  es una informacion o una ayuda que vamos a mostrar a el usuario
 * 4. El tercer argumento es un Objeto. Este objeto (opts) va recibir la configuracion de parametros o de flats que ese comando 
 * puede recibir. en este caso queremos que se pueda introducir la base. hacemos que sea un comando obligatorio (demand: true).
 */
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}