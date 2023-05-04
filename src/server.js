import express, { response } from 'express'
import manager from "./js/sprint-2.js"
import cart from "./js/carts.js"
//Clase8
import { Engine } from 'express-handlebars/types/index.js'
import { __dirname } from './utils.js'


const server = express()
const PORT = 8080
const ready = ()=> console.log('server ready on port '+PORT)

server.listen(PORT,ready)
server.use(express.json())
server.use(express.urlencoded({extended:true}))
//Clase8
server.engine('handlebars',engine())
server.set("view engine","handlebars")
server.set("views",__dirname+'/views')//dirname se configura manual en utilks

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

let cart_route="/api/carts"
let cart_function=(req,res)=>{
    let carrito= cart.getCarts()
    console.log(carrito)
    return res.send({
        succes:true,
        response:carrito

    })

}
server.get(cart_route,cart_function)

let cid_route= "/api/carts/:cid"
let cid_function=(req,res)=>{
    let parametros = req.params
    let id = Number(parametros.cid)
    let one=cart.getCartsById(id)
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
server.get(cid_route,cid_function)

server.post(
    '/products',
   async (req,res)=>{
    try{
        let title= req.body.title ?? null
        let description=req.body.description ?? null
        let price =req.body.price ?? 0
        let thumbnail = req.body.thumbnail ?? []
        let stock = req.body.stock ?? 0
        console.log(title)
        if(title&&description&&price){
            let user= await manager.addProduct({title,description,price,thumbnail,stock})
            return res.json({
                status: 201,
                user_id:user.id,
                message: 'created!'
            })
        }else{
            return res.json({
                status: 400,
                message:'check data!'
            })
        }
    }catch(error){
        return res.json({
            status:500,
            message: 'error'
        })
    }
    }
)

server.put(
    '/products/:uid',
    (req,res)=>{
        if(req.params.uid&&req.body){
        let id =Number(req.params.uid)
        let data=req.body
        manager.updateProduct(id,data)
        return res.json({
            status:200,
            message:"update user"
        })
        }else{
            return res.json({
                status:400,
                message: "checkdata!"
            })

        }
        
    }
)