/*variables globales: pueden cambiar su valor*/
var miNombre = `carlos`;//alt+96
var miApellido = "lópez";
var miSegundoNombre = 'horacio';

/*constantes */
const altura = 175;
const colorDeOjos = "marrones";
const fechaNacimiento = "14/02/1980";

/*variables de bloque: pueden cambiar su valor */
let colorDePelo = "castaño";
let peso = 80;

/*saber el tipo de variable */
//guardar el tipo de dato en una variable
let tipoMiApellido = typeof(miApellido);
// break point
console.log(tipoMiApellido);//console.log es un método/función de console

tipoMiApellido = typeof(altura);
console.log(tipoMiApellido);

/*definir una variable tipo objetct */
const maite = {
    name: 'maite',
    edad: 25
};
const matias = {
    name: 'matias',
    fechaNacimiento: Date.now(),
    trabaja: true
};

// a un objeto le puedo agregar atributos "on the fly"
matias.altura = 200;

console.log('matias', matias);

//obtengo las claves del objeto matias
console.log('keys',Object.keys(matias)); // de fabrica!

maite.hairColor =  colorDePelo;
console.log('keys',Object.keys(maite)); // de fabrica!

// obtener la fecha de nacimiento de matias (que son milisegundos) y lo voy a convertir 
// a un Date
const fechaNacMatias = Date(matias.fechaNacimiento); //Date es de fabrica!

console.log('fecha nac matias', fechaNacMatias);

//escribir desde este js en el hhtml...
//document.write(`los datos de matias son:${Object.keys(matias)}`)

//JSON.stringify()//esto es de fabrica
document.write(`los datos de matias son:${JSON.stringify(matias)}`)
