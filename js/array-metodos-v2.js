const vector = [10,30,50,60,30,78];

let valorBuscado = 30;
const filtrados = vector.filter( v => v === valorBuscado); //que quiero!

console.log(filtrados);

//MAYORES A 50
valorBuscado = 50;
const filtrados50 = vector.filter( v => v >= valorBuscado); //que quiero!
console.log(filtrados50);

const alumnos = [
    {
        id: Math.random(),
        name: 'carlos',
        age: 37,
        subjects: [
            'algebra','analisis1','progra1'
        ]
    },
    {
        id: Math.random(),
        name: 'juan',
        age: 40,
        subjects: [
            'algebra2','analisis1','progra2'
        ]
    },
    {
        id: Math.random(),
        name: 'martin',
        age: 40,
        subjects: [
            'analisis3','progra1'
        ]
    },
];

const isAlgo = (alumno,materia) => {
    return alumno.subjects.includes(materia) && alumno.age >= 40
}

//filtrar los alumnos que cursan analisis1
const materia = 'analisis1'
const filtroMateria = alumnos.filter(v => v.subjects.includes(materia) && v.age >= 40);
const filtroMateria2 = alumnos.filter(alumno => isAlgo(alumno,materia));
console.log(filtroMateria);

//quiero solo los id de alumnos
//.map
const ids = alumnos.map(x => x.id);
console.log(ids);

//quiero el id y age
const objs = alumnos.map(x => {
    const miObj = {
        id:x.id, age: x.age
    }
    return miObj;
});

console.log(objs);

const recortarAlumno = (alumno) => {
    const miObj = {
        id: alumno.id,
        age: alumno.age
    }
    return miObj;
}
//.map con una funcion
const objsV2 = alumnos.map(x => recortarAlumno(x));

//.findIndex
const idx = alumnos.findIndex(x => x.name === 'carlos'); //
console.log(idx);

//existe alguno que cumpla "tal" condicion
//.some()
//¿existe un alumno con edad > 35 años?
const existe = alumnos.some(x => x.age > 50)
console.log(existe);

//¿todos cursan analisis1?
const todosCumplen = alumnos.every(x => x.subjects.includes('analisis1'));
console.log('todosCumplen',todosCumplen);

//¿son todos mayores de 35?
const todos35 = alumnos.every(x => x.age > 40);
console.log('todos > 35',todos35);

//reduce
//sumar las edades de los alumnos
const sumaEdades = alumnos.reduce((prev,curr) => prev + curr.age ,0);
console.log(sumaEdades);

const materias = alumnos.reduce((prev,curr) => prev.concat(curr.subjects),[]);
console.log(materias);

//filtrar: Set([]) permite filtrar duplicados
const materiasSinDuplicados = new Set(materias);
console.log(materiasSinDuplicados);

const aux = alumnos
    .filter(x => x.age > 10)
    .map(y => y.id)
    .reduce((prev,curr) => prev+curr, 0 );

console.log(aux);

//eliminar un elemento del array (último)

const ultimo = alumnos.pop();
console.log(alumnos);
console.log(ultimo);

//agregar al principio
alumnos.unshift(ultimo);
console.log(alumnos);

//sacar el primer elemento del array
const primero = alumnos.shift();
console.log(primero);

//agrego al final
alumnos.push(primero);

//.splice(startIdx, 1) //quitar de una posicion determinada
console.log('ALUMNOS', JSON.stringify(alumnos));

alumnos.splice(1,1);

console.log('ALUMNOS', alumnos);

//mas!!