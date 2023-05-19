import fs from "fs"

class CartManager{
    constructor(path){
        this.carts=[]
        this.path=path
        this.init(path)
    }
    init(path){
        let file = fs.existsSync(path)
        if(!file){
            fs.writeFileSync(path,'[]')
                console.log('file created at path: '+this.path)
                return 201
        }else{
            this.carts = JSON.parse(fs.readFileSync(path,'UTF-8'))
            return 200
        }
    }
    async addCart() {
        try {
            let data = { products: [] }
            if (this.carts.length>0) {
                let next_id = this.carts[this.carts.length-1].id+1
                data.id = next_id
            } else {
                data.id = 1
            }
            this.carts.push(data)
            let data_json = JSON.stringify(this.carts,null,2)
            await fs.promises.writeFile(this.path,data_json)
            console.log('id´s created cart: '+data.id)
            return 201
        } catch(error) {
            console.log(error)
            return null
        }
    }
     getCarts() {
        return this.carts
    }
    getCart(idC) {
        let search = this.carts.find(each=>each.idC===idC)
        if(search){
            console.log(search)
            return search
         }else{
             return "Not found"
            }
        
    }

     async update_cart(idC,idP,units) {
         try {
            let data={idP,units}
            let one = await this.getCart(idC)
            //Carrito nuevo
            if(one==="Not found"){ 
                this.carts.push({idC,productos:[{idP,units}]})
            }
             else{ //Actualizar
                const found= one.productos.find(e=>e.idP===idP)
                if(found){
                 for(let prop in data){
                    found[prop]= data[prop]
                 }
                 console.log(found)
             }else{
                one.productos.push(data)
             }
             let data_json = JSON.stringify(this.carts,null,2)
                await fs.promises.writeFile(this.path,data_json)
                console.log('updated cart: '+ idC)
                return 200
         }} catch(error) {
             console.log(error)
             return null
       }
     }
    async destroy_cart(idC,idP,units) {
        try {
            let data={idP,units}
            let one = await this.getCart(idC)
            //Carrito nuevo
            if(one==="Not found"){ 
                return "No existe carrito"
            }
             else{ //Actualizar
                const found= one.productos.find(e=>e.idP===idP)

                
                 if(found){
                    console.log("hau")
                    console.log(found[units])
                //  for(let prop in data){
                //     found[prop]= data[prop]
                //  }
                 console.log(found)
              }else{
                console.log("NO HAY PRODUTOS")
            //     one.productos.push(data)
              }
             let data_json = JSON.stringify(this.carts,null,2)
                await fs.promises.writeFile(this.path,data_json)
                console.log('updated cart: '+ idC)
                return 200
         }} catch(error) {
             console.log(error)
             return null
       }

        // try {
        //     let one = this.carts.find(each=>each.id===id)
        //     if (one) {
        //         this.carts = this.carts.filter(each=>each.id!==id)
        //         let data_json = JSON.stringify(this.carts,null,2)
        //         await fs.promises.writeFile(this.path,data_json)
        //         console.log('delete cart: '+id)
        //         return 200
        //     }
        //     console.log('not found')
        //     return null
        // } catch(error) {
        //     console.log(error)
        //     return null
        // }
    }

}
let cart_manager =new CartManager('./src/data/carts.json')

export default cart_manager