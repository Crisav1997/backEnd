class Usuario{
    constructor(datos){
    this.nombre=datos.nombre
    this.apellido=datos.apellido
    this.edad=datos.edad
    this.contador= 0;
    Usuario.contador++
    }
    static contador = 0
ver(){
    console.log(this.nombre)
}
}
let Usuario1 =  new Usuario({nombre:"cristian",apellido:"avila",edad:25});
let Usuario2 =  new Usuario({nombre:"cristian",apellido:"avila",edad:25});
let Usuario3 =  new Usuario({nombre:"cristian",apellido:"avila",edad:25});
console.log(Usuario.contador)
Usuario1.ver()