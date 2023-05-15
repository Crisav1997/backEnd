import { Router} from "express";
import manager from "./../../managers/Product.js"

const router = Router()

router.get('/',
(req,res,next)=>{
    try {
        let products= manager.getProducts().length
        return res.send(`Hay ${products} productos registrados.`) 
    } catch (error) {
        next(error)
    }
    
})
router.get('/:pid',
(req,res,next)=>{
    try {
        let parametros = req.params
        let pid = Number(parametros.pid)
        let one=manager.getProductById(pid)
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
    } catch (error) {
        next(error)
    }
  
}
)

router.post('/', async(req,res,next)=> {
    try {
        let response = await manager.addProduct(req.body)
        if (response===201) {
            return res.json({ status:201,message:'product created'})
        }
        return res.json({ status:400,message:'not created,check data'})
    } catch(error) {
        next(error)
    }
})

router.put('/:pid', async(req,res,next)=> {
    try {
        let id = Number(req.params.pid)
        let data = req.body
        let response = await manager.updateProduct(id,data)
        if (response===200) {
            return res.json({ status:200,message:'product updated'})
        }
        return res.json({ status:404,message:'not found'})
    } catch(error) {
        next(error)
    }
})

router.delete('/:pid', async(req,res,next)=> {
    try {
        let id = Number(req.params.pid)
        let response = await manager.deleteProduct(id)
        if (response===200) {
            return res.json({ status:200,message:'product deleted'})
        }
        return res.json({ status:404,message:'not found'})
    } catch(error) {
        next(error)
    }
})

export default router
