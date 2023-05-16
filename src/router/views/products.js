import { Router } from "express";

const product_router = Router()

product_router.get(
    '/products',
    async(req,res,next)=>{
        try {
            return res.render(
                'index',
                {
                    name:'igna',
                    alumnos: [
                        {name:"Producto 1" ,img:"https://www.roydisa.es/wp-content/uploads/2016/05/Motor-electrico-corriente-alterna-asincr%C3%B3nico-WEG.jpg" ,description: "Antiexplosivo"},
                        {name:"Producto 2",img:"https://www.roydisa.es/wp-content/uploads/2016/05/Motor-electrico-corriente-alterna-asincr%C3%B3nico-WEG.jpg"},
                        {name: "Producto 3",img:"https://www.roydisa.es/wp-content/uploads/2016/05/Motor-electrico-corriente-alterna-asincr%C3%B3nico-WEG.jpg"},
                       { name:"Producto 4",img:"https://www.roydisa.es/wp-content/uploads/2016/05/Motor-electrico-corriente-alterna-asincr%C3%B3nico-WEG.jpg"}
                    ],
                    title:'probando',
                    last_name: 'avila'
                } 
            )  
        } catch (error) {
            next(error)
        }
    }
)

export default product_router