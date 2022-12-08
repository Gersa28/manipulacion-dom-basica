// console.log('Hello, world')
// const h1 = document.querySelector('h1');
// //const h1b = document.querySelector('h1');
// const p = document.querySelectorAll('p'); // Lista De párrafos
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const input = document.querySelector('input');


// console.log(p);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// }); // lo imprimo dentro de un Objeto

// console.log(input.value); // solo funcionó por consola, por?

// h1.innerHTML = "Patito </br> FEO"; //Ejecuta HTML
// h1.innerText = "Patito </br> FEO 2"; //NO ejecuta código

// //console.log(h1.getAttribute('pantalla'));
// //console.log(h1.getAttribute('class'));
// //console.log(h1b.getAttribute('verde'));
// h1.setAttribute('class','rojo');
// //console.log(h1.getAttribute('class'));

// h1.classList.add('rojo'); //Agregamos una clase
// h1.classList.remove('verde'); //Quitamos una clase
// console.log(h1.getAttribute('class'));

// //input.value = "79616"; //

//  //
// //document.createElement(); //Nos ayuda a crear HTML element
// console.log(document.createElement('img'));

// console.log(document.createElement('span'));

// const img = document.createElement('img');
// img.setAttribute('src', 'https://http2.mlstatic.com/D_NQ_NP_710623-MLA49094640346_022022-O.webp');

// console.log(img);

// //ahora tenemos que insertar la imagen en el HTML

// pid.append(img);


// // -------------------CALCULADORA------------------
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');


// // function btnONclick(){
// //     console.log(Number(input1.value) + Number(input2.value)); 
// // }
// function btnONclick(){
//     console.log(+(input1.value) + +(input2.value) ); 
//     const suma = +input1.value + +input2.value;
//     result.innerHTML = "Resultado: " + suma;

// }

// -----------------add event Listener------------------

 // Se mantiene escuchando

// function btnONclick(){
//     console.log(+(input1.value) + +(input2.value) ); 
//     const suma = +input1.value + +input2.value;
//     result.innerHTML = "Resultado: " + suma;

//}
function sumarFORM(event){
    // console.log(+(input1.value) + +(input2.value) );
    console.log(event); 
    event.preventDefault();
    const suma = +input1.value + +input2.value;
    result.innerHTML = "Resultado: " + suma;

}
// -----------------add event Listener------------------

//btn.addEventListener('click', btnONclick); // Se mantiene escuchando
form.addEventListener('submit', sumarFORM);

