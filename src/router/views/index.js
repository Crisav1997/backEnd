import { Router } from "express";
const router=Router()

router.get(
    '/',
    async(req,res,next)=>{
        try{
            return res.render(
                'index',
                {
                    name:'igna',
                    alumnos: [
                        "hola","como","estas"
                    ],
                    title:'probando',
                    last_name: 'avila'

                } 
            )
        }catch(error){
            next(error)
        }
    }
)

export default router