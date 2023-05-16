import { Router } from "express";
import product_router from "./products.js";

const router=Router()

// router.get(
//     '/',
//     async(req,res,next)=>{
//         try{
//             return res.render(
//                 'index',
//                 {
//                     name:'igna',
//                     alumnos: [
//                         {name:"Producto 1" ,img:"https://www.roydisa.es/wp-content/uploads/2016/05/Motor-electrico-corriente-alterna-asincr%C3%B3nico-WEG.jpg" ,description: "Antiexplosivo"},
//                         {name:"Producto 2",img:"https://www.roydisa.es/wp-content/uploads/2016/05/Motor-electrico-corriente-alterna-asincr%C3%B3nico-WEG.jpg"},
//                         {name: "Producto 3",img:"https://www.roydisa.es/wp-content/uploads/2016/05/Motor-electrico-corriente-alterna-asincr%C3%B3nico-WEG.jpg"},
//                        { name:"Producto 4",img:"https://www.roydisa.es/wp-content/uploads/2016/05/Motor-electrico-corriente-alterna-asincr%C3%B3nico-WEG.jpg"}
//                     ],
//                     title:'probando',
//                     last_name: 'avila'

//                 } 
//             )
//         }catch(error){
//             next(error)
//         }
//     }
// )

router.use('/test',product_router)

export default router
