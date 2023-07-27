/*1- crear un array */
//                 0   1 
const vector = ['casa','perro'];

//tamaño
console.log('tamaño',vector.length)

//posición? 'arrancan' en 0
console.log('edificio[0]',vector[0]); // el valor 1

//último length -1
console.log(vector[vector.length - 1]);

//recorro un array? con un ciclo, for! while,do-while!
for (let piso = 0; piso < vector.length; piso++) {
    const element = vector[piso];
    console.log(element);   
}

/*
Ingresar datos de un alumno:
    - nombre
    - apellido
    - dni 
    - curso
    - edad
La carga finaliza con dni=0
Calcular el promedio de edad de los alumnos
---------------------------
Necesito un objeto alumnos

*/
const alumnos = [];
let nombre,apellido,dni,curso,edad;
dni = Number(prompt("DNI")); //100
while(dni !== 0) { //corte de control!
    nombre = prompt("Nombre");
    apellido = prompt("Apellido");
    curso = prompt("Curso");
    edad = Number(prompt("Edad"));

    //creo mi objeto alumno
    const alumno = {
        dni,
        nombre,
        apellido,
        curso,
        edad
    };

    //agregar el alumno al vector de alumnos
    alumnos.push(alumno);

    dni = Number(prompt("DNI")); //100
}

//Calcular el promedio de edad de los alumnos
let suma = 0;
for (let index = 0; index < alumnos.length; index++) {
    const alumno = alumnos[index];
    suma += alumno.edad;
}
console.log(suma/alumnos.length);


function add() {
    alert('mi primer evento v3');
}