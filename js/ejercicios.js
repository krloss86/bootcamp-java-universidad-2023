/*
    Ingresar 3 notas: calcular el promedio.
*/
let cantidad = ingresarCantidadNotas();

let sumaNotas = 0;
for (let i = 0; i < cantidad; i++){   
    const nota = ingresarNota(i);
    sumaNotas += nota;
}

mostrarPromedio(sumaNotas,cantidad);

function ingresarCantidadNotas() {
    let cantidad;
    do {
        cantidad = Number(prompt('Ingrese la cantida de notas de alumno'));
    } while (!validarRango(3, 3, cantidad));
    return cantidad;
}

//funciones
function validarRango(inf, sup, valor) {
    return valor >= inf && valor <= sup;
}

function ingresarNota(nro) {
    let nota = Number(prompt(`Ingrese la Nota ${nro}`));
    while(!validarRango(0,10,nota)){
        nota = prompt(`Nota ${nro} inválida`);
    }
    return nota;
}

function ingresarNumber(texto, inf, sup) {
    let variable;
    do {
        variable = Number(prompt(texto))
    } while (!validarRango(inf, sup, variable));
    return variable;
}

//Arrow function
const mostrarPromedio = (suma,cantidad) => {
    console.log('PROMEDIO:', suma / cantidad);
}
