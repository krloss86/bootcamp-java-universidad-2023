// Calculadora!!!!!
// ingresar dos valores 
// ingresar la operación
// mostrar el resultado
// las operacione posibles son: +,-,/,*
// si la operación no es valida, mostrar un cartel 

const numero1 = Number(prompt('Ingrese numero 1:'));
const numero2 = Number(prompt('Ingrese numero 2:'));
const operacion = prompt('Ingrese la operacion a realizar (+,-,*,/)')

//Guards
//primero todas las validaciones
if(!numero1 || !numero2) {
    alert('Números inválidos');
}

if(operacion !== '+' 
    &&  operacion !== '-' 
        && operacion !== '/' 
            &&  operacion !== '*' ) {
                alert('operación inválida');
}

if (operacion === '/' && numero2 === 0) {
    alert('No se puede dividir entre cero')
}
/*
if (operacion === '+') {
    alert(numero1 + numero2);
} else if (operacion === '-') {
    alert(numero1 - numero2);
} else if (operacion === '*') {
    alert(numero1 * numero2);
} else {
    alert(numero1 / numero2);
}
*/
//switch
switch(operacion) {
    case '+': 
        alert(numero1 + numero2);
        break;
    case '-':
        alert(numero1 - numero2);
        break;
    case '*': 
        alert(numero1 * numero2);
        break;
    default:
        alert(numero1 / numero2);
}