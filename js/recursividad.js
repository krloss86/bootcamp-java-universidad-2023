/*
    Calcular el factorial de un número
*/
function calcularFactorial() {
    const input = document.getElementById('numero');//?
    const n = +input.value;

    const resultado = factorial(n);
    document.getElementById('resultado').innerHTML = resultado;
}

/*  
    - Factorial de 0 es 1
    - Factorial de n = n * n -1 
    3 => 3 * (3-1)
    ----------------
    2 => 2 * (2-1)
    ----------------
    1 => 1 * (1-1)
    ----------------
    0 => 1
 */
function factorial(n) {
    //CASO BASE
    if(n === 0) {
        return 1;
    }
    //ahora si sigo con mi logica de factorial
    return n * factorial(n-1);
}

const menu = [
    {
        title: 'nivel1',
        items: [
            {
                title: 'subnivel 1',
                items: [
                    {
                        title: 'submenu 1.1',
                        items: []
                    }
                ]
            }
        ]
    },
    {
        title: 'nivel2',
        items:[
          {
            title: 'subm 2',
            items:[
               {
                  title:'submenu 2.2',
                  items:[
                    {
                        title: 'submenu 2',
                        items:[
                           {
                              title:'submenu 2.2',
                              items:[ ]
                           }
                        ]
                       }          
                   ]
               }
            ]
           }
        ]
     }
];
/*menu */
/*
 - lista vacia es caso base
 - 
*/
function dibujarMenu(menu) {
    if(menu.length === 0) {
        console.log('menu vacio') ;
        return;
    }

    //iterar sobre cada menu
    for(let unMenu of menu) {
        console.log(unMenu.title);
        dibujarMenu(unMenu.items);
    }
}

const btn = document.getElementById('btnFactorial');
btn.addEventListener('click',calcularFactorial);

dibujarMenu(menu);