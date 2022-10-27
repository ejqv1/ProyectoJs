var articulos = [
  {
    nombre: "bici",
    costo: 800,
  },
  {
    nombre: "televisor",
    costo: 200,
  },
  {
    nombre: "celular",
    costo: 500,
  },
  {
    nombre: "libro",
    costo: 50,
  },
  {
    nombre: "laptop",
    costo: 2000,
  },
  {
    nombre: "audifonos",
    costo: 800,
  },
];

// metodo filter.- nos ayuda a filtrar cosas especificas y cargar a un nuevo array
//*************** */
// var articulosFiltrados = articulos.filter(function (articulos) {
//   return articulos.costo <= 500;
// });
// console.log(articulosFiltrados);


//Metodo map .- nos trae solo lo que estamos buscando en el array
//*********** */
// var nombreArticulos = articulos.map(function(articulo){
//     return articulo.nombre;
// });
// console.log(nombreArticulos);


//Metodo find .- Busca un articulo en el array

// var buscaArticulo = articulos.find(function(articulo){
//     return articulo.nombre === "laptop";
// });
// console.log(buscaArticulo);

//Metodo ForEch .- filtra sobre el array original

// articulos.forEach(function(articulo){
//     console.log(articulo.nombre+" "+articulo.costo+" Bs");
// });


//Metodo Some

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos);