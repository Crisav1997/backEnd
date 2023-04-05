// class Usuario{
//     constructor(datos){
//     this.nombre=datos.nombre
//     this.apellido=datos.apellido
//     this.edad=datos.edad
//     this.contador= 0;
//     Usuario.contador++
//     }
//     static contador = 0
// ver(){
//     console.log(this.nombre)
// }
// }
// let Usuario1 =  new Usuario({nombre:"cristian",apellido:"avila",edad:25});
// let Usuario2 =  new Usuario({nombre:"cristian",apellido:"avila",edad:25});
// let Usuario3 =  new Usuario({nombre:"cristian",apellido:"avila",edad:25});
// console.log(Usuario.contador)
// Usuario1.ver()


// //Trim , borra espacios
// let cadena = "           tiene"
// let cadenaTrim= cadena.trim()

// //.flat se usa para array anidados

// //nullish , cambia null o undefined 

// let cero = 0
// let nulo = null
// let no = undefined

// cero = cero ?? "Se reasigna "
// nulo = nulo ?? "si es nulo"
// no= no?? "Si es nulo"

// //Variables privadas
// //#costo unitario ,variable: va antes de lconstructor


// //trabajo

// getEvents(){
//     console.log(this.events)
//     return this.events
// }

// addEvent({name,place,price,capacity,date}){
//     capacity= capacity?? 50
//     date=date?? new Date()

//     let id=1
//     if(this.events.lenght===0){
//         id=1
//     }
//     else{
//         //buscar evento del array
//         this.events[0]//primer elemento
//         let lastEvent=this.events[this.events.lenght-1]//El ultimo elemento
//         lastEvent.id++
//     }
//     price=price + #gain * price//uso variable privadas
//     let event={name,place,price,capacity,date, participants:[]}
    
//     this.events.push(event)
// }

// let ticket = new TicketManager()//guardo en ticket la cracion
// console.log(ticket.gain)
// ticket.addEvent({name:"alice",place:"japon",price:2,capacity:1000,date:new Date("05/30/2023")})
// ticket.getEvent()