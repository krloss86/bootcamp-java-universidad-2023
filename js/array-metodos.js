//defino una lista global
/**
 * 
 * @returns listado de string guardados en localStorage
 */
const listFromStorage = () => {
    return JSON.parse(localStorage.getItem('miListado')) || [];  
}
/**
 * 
 * @param {list of strings} list 
 */
const saveInStorage = (list) => {
    localStorage.setItem('miListado',JSON.stringify(list));
}

const clearList = () => {
    removeFromStorage('miListado');
}

const removeFromStorage = (key) => {
    localStorage.removeItem(key);
}

const clearStorage = () => {
    localStorage.clear();
}

const list = listFromStorage();  

/*
arrow function
*/
const add = () => {
    const htmlElement = document.getElementById('txt');
    const value = htmlElement.value;//porque es un input
    
    if(value.trim() === ''){
        console.log('vacio');
        return;
    }

    list.push(value);//0,1,2,3,4,...N-1 N
    
    //limpie la caja
    htmlElement.value='';

    //invoke de la funcion
    dibujar(list);

    //guardar la lista en el localStorage|JSON =>existen de fabrica
    saveInStorage(list);
}

const dibujar = (list) => {
    //guars
    if(list.length === 0) {
        return;
    }
    addLiToUl(list[list.length-1]);
}

const dibujarV2 = (list) => {
    //guars
    if(list.length === 0) {
        return;
    }
    //appendChild: agrega un hijo al elemento padre
    for(let i=0;i<list.length;i++) {
        addLiToUl(list[i]);
    }
}

const addLiToUl = (text) =>{
    const li = document.createElement('li');
    li.innerText = text;

    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'X';
    btnRemove.addEventListener('click',remove)

    //agrego como hijo de li a btnRemove
    li.appendChild(btnRemove);

    const ulElement = document.getElementById('list');
    ulElement.appendChild(li); //porque es un div
}

//  OJO!!!! NO ANDA BIEN
const remove = (btn) => {
    const li = btn.target.parentNode;
    //const ulElement = document.getElementById('list');
    const ulElement = li.parentNode;
    
    ulElement.removeChild(li);

    //eliminar del listado original
    //removeFromList(list,li.innerText);

    const existe = list.find(el => el === li.innerText);

    console.log(existe);
    
    //actualizar el localSorage
    //saveInStorage();//;
}

//MAIN
dibujarV2(list);

//ARRAYS METODOS
//CREAR GITHUB PARA SUBIR LA PAGE!
//RECURSIVIDAD