//Definir la clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
// La clase debe contar con una variable privada “gain”, que será la ganancia de un ticket (15%)
// Debe contar con el método “getEvents” que mostrará los eventos guardados.
// Debe contar con el método “addEvent” que recibirá los siguientes parámetros:
// name
// place
// price (al cual hay que agregarle la ganancia adicional)
// capacity (si no se da: 50 por defecto)
// date (si no se da: hoy por defecto)
// El método deberá crear además el campo id autoincrementable y el campo “participants” que siempre iniciará con un arreglo vacío.

class TicketManager{
    #gain
    constructor(){
        this.events=[]
        this.#gain=0.15
    }
    
    getEvents(){
        console.log(this.events)
        return this.events
    }
    addEvent({name,place,price,capacity,date}){
        let id = 0
        if(this.events.length===0){
            id = 1 
        }else{
            let lastEvent = this.events[this.events.length-1]
            id=lastEvent.id + 1
        }
        price= price + price * this.#gain
        capacity=capacity?? 50
        let event={ name,place,price,capacity,date,id }
        this.events.push(event)
    }
}

let ticket = new TicketManager()
//console.log(ticket.gain)
ticket.addEvent({name:"cris",place:"rosario",price:10,capacity:null,date: new Date('05/30/2023')})
ticket.addEvent({name:"andres",place:"rosario",price:120,capacity:1010,date: new Date('08/30/2023')})
ticket.addEvent({name:"andreasds",place:"rosario",price:120,capacity:1010,date: new Date('08/30/2023')})
ticket.getEvents()