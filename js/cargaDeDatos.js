/*para ingresar datos desde teclado */
const nombre = prompt('ingrese nombre');
const apellido = prompt('ingrese apellido');
const edad = prompt('ingrese edad');

//ARMAR UN JSON CON LOS DATOS QUE CARGUE
const datos = {
    nombre,
    apellido,
    edad
}
console.log('ingreso:',JSON.stringify(datos));