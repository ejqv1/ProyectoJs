var miAuto = {
    marca: "Toyota",
    modelo: "corolla",
    annio: 2020,
    detalleDelAuto:function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

console.log(miAuto.detalleDelAuto());