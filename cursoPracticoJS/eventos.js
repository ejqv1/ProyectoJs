const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalculo');
const result = document.querySelector('#result');

const form = document.querySelector('#form');

form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    //console.log({event});
    //preventDefault no deja que se recargue la pagina
    event.preventDefault();
     const sumaInput = parseInt(input1.value) + parseInt(input2.value);
     result.innerHTML = 'Resultado: ' + sumaInput;
}