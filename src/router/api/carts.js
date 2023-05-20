import { Router} from "express";
import manager from "../../managers/Carts.js";
import productManager from "../../managers/Product.js"
import { Console } from "console";
const router = Router()


router.get('/',
(req,res,next)=>{
    try {
        let carts= manager.getCarts().length
        return res.send(`Hay ${carts} productos registrados.`) 
    } catch (error) {
        next(error)
    }   
})
router.get('/:cid',
(req,res,next)=>{
    try {
        let parametros = req.params
        let pid = Number(parametros.cid)
        let one=manager.getCart(pid)
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
      let response = await manager.addCart(req.body)
      if (response===201) {
          return res.json({ status:201,message:'cart created'})
      }
      return res.json({ status:400,message:'not created'})
  } catch(error) {
      next(error)
  }
})

router.put('/:cid/product/:pid/:units', async(req,res,next)=> {
  try {
      let idP = Number(req.params.pid)
      let idC = Number(req.params.cid)
      let units= Number(req.params.units)
      let product= productManager.getProductById(idP)
      
       if(units<product.stock){units=units}
      else{units=product.stock}
      console.log (units)
        
      let response = await manager.update_cart(idC,idP,units)
      if (response===200) {
          return res.json({ status:200,message:'cart updated'})
      }
      return res.json({ status:404,message:'not found'})
  } catch(error) {
      next(error)
  }
})


export default router