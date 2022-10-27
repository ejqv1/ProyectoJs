var frutas = ["Manzana","platano","cereza","Fresa"];

console.log(frutas[0]);

//poner mas elementos al array
var masFrutas = frutas.push("uvas");

console.log(frutas);
//Borra el ultimo elemento del array

var ultimo=frutas.pop();
console.log(frutas);

//pone un elemento al inicio del array en la posicion 0

var nuevaLongitud=frutas.unshift("uvas");
console.log(frutas);

//borra el primer elemento del array de la posicion 0

var borrarFruta = frutas.shift();
console.log(frutas);

//obtener posicion de un elemento array
var position = frutas.indexOf("cereza");
console.log(position);
