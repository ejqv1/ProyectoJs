const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const description = document.getElementsByClassName("description");
const parrafo = document.getElementById("parrafo");
const input = document.querySelector("input");

// console.log(h1);
// console.log({
//     h1,
//     p,
//     description,
//     parrafo,
//     input
// });

//se puede agregar mas codigo html con innerHtml
h1.innerText = "NUEVO TEXTO <br> salto";
// con innerText solo se agrega texto y no acepta etiquetas html
h1.innerText = "NUEVO TEXTO <br> salto";

//modifica los atributos de nuestros elementos del html
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','subtitulo');

//con classList se pueden borrar o agregar los atributos de nuestros elementos

// h1.classList.add("subtitulo");
// h1.classList.remove("titulo");
// h1.classList.toggle('titulo');
// h1.classList.contains('titulo');

//nos agrega el valor al value del html
input.value="72779572";

const img = document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/14103314/pexels-photo-14103314.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load')
console.log(img);

//se esta remplazando el texto del p con un caracter blanco
parrafo.innerHTML = "";
//appendChild esta agregando img a la etiqueta
parrafo.appendChild(img);