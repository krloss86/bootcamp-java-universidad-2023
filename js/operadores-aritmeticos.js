/*
    operadores : relacionales, lógicos, artiméticos:

    +
    -
    /
    *
    mod (%) RESTO
    **
    --
    ++
*/
const valor1 = 10;
const valor2 = 100;

// suma +
const suma = valor1 + Number(valor2);
console.log(suma);

// con strings
const palabra1 = 'hola';
const palabra2 = "chau";

const saludo = palabra1 + ' ' +palabra2;
const saludo2 = `${palabra1} ${palabra2}`; //alt+96
console.log(`${saludo} ${saludo2}`);

// resta -
const resta =  valor1 - valor2;
console.log(resta);

//Math.  de fabrica
console.log(Math.random());

// * 
const multiplicacion = valor1 * valor2;
console.log(multiplicacion);

//división
const division = valor1 / valor2;
console.log(division);

/*
 D |_d___
 r   C
----------
 10 / 5
  0   2 
*/

const D = 10;
const d = 5;
const C = D/d;
const r = D % d;

console.log(D,d,C,r)

/* exponencial */
const base = 2;
const exp = 3;
const res = base ** exp; // 8
console.log('**', res);

/* post-decremento */
let sueldo = 1000;
sueldo = sueldo - 1; 
console.log('sueldo', sueldo);
//por --
sueldo--;
console.log('sueldo', sueldo);

// NO, decrementar de mas de 1
sueldo -= 10;
console.log('sueldo-=10', sueldo);

//pre / post
let a = 1000;
console.log('a',a);
const b = --a;
console.log('b',b); 

