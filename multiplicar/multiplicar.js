//------------ Requireds ------------------
//hay tres tipos de require:
//const fs = require('fs'); // 1. Libreria o proyecto propio de node
//const fs = require('express'); 2. Esta no existe en la documentacion de node. Es un paquete que se instala.
//const fs = require('./fs'); 3. archivos que nosotros mismos escribimos 


//Vamos a grabar nuestra tabla de multiplicar en un archivo de texto.
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(` ${ base } * ${i} = ${ base * i} \n`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (` ${ base } * ${i} = ${ base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)

        });

    });

}

/* Primer ejempo Tabla de multiplicar sin limite
let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += (` ${ base } * ${i} = ${ base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`)

        });

    });

}*/

//Module es un objeto global. Aca le estamos agregando el metodo crearArchivo para usarlo en app.js
module.exports = {
    crearArchivo,
    listarTabla
}