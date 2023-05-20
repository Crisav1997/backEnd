import { Router } from "express";

const router=Router()

router.get(
    '/vista_de_prueba',
    async(req,res,next)=>{
        try{
            return res.render(
                'index', //nombre de la vista
                {
                    name:'igna',
                    alumnos: [
                        "hola","como","estas"
                    ],
                    title:'index',
                    last_name: 'avila'

                } //Datos dinamicos que puede llegar a renderizar
            )
        }catch(error){
            next(error)
        }
    }
)

export default router