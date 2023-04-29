import express from 'express'
import manager from "./js/sprint-2.js"

const server = express()

const PORT = 8080
const ready = ()=> console.log('server ready on port '+PORT)

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.listen(PORT,ready)

//FUNCIONA -en ruta "/" , lee cuantos usuarios hay cargados
let index_route ="/"
let index_function =(req,res)=>{
    let users= manager.getProducts().length
    console.log(users)
    return res.send(`hola, hay ${users} usuarios`)
}
server.get(index_route,index_function)
