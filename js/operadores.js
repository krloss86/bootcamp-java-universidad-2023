/*
    OPERADORES RELACIONALES
    > mayor
    < menor
    >= mayor o igual
    <= menor o igual
    != distinto (ESTE EN REALIDAD ES LÓGICO)
    !== distinto (ESTE EN REALIDAD ES LÓGICO)

    todos retornan un boolean
*/
const a = 10;
const b = 10;

let cmp = a > b;
console.log('RELACIONALES Y DOS LÓGICOS'); 
console.log('>', cmp); 
console.log('<', a < b); 
console.log('>=', a >= b); 
console.log('<=', a <= b); 
console.log('!=', a != b); 
console.log('!==', a !== b); 

/*
    LÓGICOS 
    también  retornan un boolean (true|false)
    and y ==> && 
    or o ==> ||
    not ==> !
    xor  ==> ^ // alt+94
*/
const username = 'root';
const password = '1235';

// alert(true && false); //&& solo da true si son los dos true
let valido = username === 'root' && password === '1234';
console.log('&&', username, password, valido);
console.log('! (&&)', username, password, !valido);

valido = username === 'root' || password === '1234';
console.log('||', username, password, valido);
console.log('! (||)', username, password, !valido);

valido = username === 'root' ^ password === '1234';
console.log('^', username, password, valido===1);
console.log('! (^)', username, password, !(valido===1));

//sistema de numeración
const aux = 17;// como un número binario
const aux2 = 2;
console.log(aux & aux2);

/*
  evaluar varias condiciones
*/
const d = -1;
const valorVerdad = aux > 15 && aux2 < 5 || d >= 0;

