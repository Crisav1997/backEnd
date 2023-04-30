import express from 'express'
import manager from "./js/sprint-2.js"

const server = express()

const PORT = 8080
const ready = ()=> console.log('server ready on port '+PORT)

server.listen(PORT,ready)
server.use(express.json())
server.use(express.urlencoded({extended:true}))


//FUNCIONA -en ruta "/" , lee cuantos usuarios hay cargados
let index_route ="/"
let index_function =(req,res)=>{
    let products= manager.getProducts().length
    console.log(products)
    return res.send(`hola, hay ${products} usuarios`)
}
server.get(index_route,index_function)

let products_route =  "/api/products"
let products_function=(req,res)=>{
    let limit=req.query.limit
    console.log(limit)
    if(limit){
        let products = manager.getProducts().slice(0,limit)
    if(products.length>0){
        return res.send({
            succes: true,
            products: products
        })
    }else{
    return res.send({
        succes: false,
        products: "not found"
    })}
    }else{
        let products = manager.getProducts()
        if(products.length>0){
            return res.send({
                succes: true,
                products: products
            })
        }else{
        return res.send({
            succes: false,
            products: "not found"
        })}  
    }
    
}
server.get(products_route,products_function)

let id_route= "/api/products/:id"
let id_function=(req,res)=>{
    let parametros = req.params
    let id = Number(parametros.id)
    let one=manager.getProductById(id)
    console.log(one)
    if(one){
        return res.send({
            succes: true,
            user : one
        })
    }else{
        return res.send({
            succes: false,
            user : "not found"
        })
    }
}

server.get(id_route,id_function)
