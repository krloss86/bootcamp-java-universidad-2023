/*
 Ingresar usuario y password
 si el usuario es root y la password es 1234
  > mostrar un alerta 'login ok'
  > de lo contrario 'login fail'
*/
const username = prompt('username');
const password = prompt('password');

const usernameValid = username === 'root';
const passwordValid = Number(password) === 1234;

//single line responsability

if (usernameValid && passwordValid) {
    alert('login ok');
}else {
    //false
    alert('login fail');
}

// operador ternario
//cond ? true : false
usernameValid && passwordValid ? alert('login ok') : alert('login fail');

const valorA = 'c';
if(valorA === 'A') {

}else if(valorA === 'B') {

} else if(valorA === 'c'){

} else {

}

