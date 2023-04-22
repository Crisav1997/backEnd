const fs = require('fs')

class ProductManager{
    constructor(path){
        this.products=[]
        this.path=path
        this.init(path)
    }

    init(path){
        let file = fs.existsSync(path)
        if(!file){
            fs.writeFileSync(path,'[]')
                console.log('file created at path: '+this.path)
                return 'file created at path: '+this.path
        }else{
            this.products = JSON.parse(fs.readFileSync(path,'UTF-8'))
            console.log('data recovered')
            return 'data recovered'
        }
    }
    async addProduct({title,description,price,thumbnail,stock}){
        try {
            let data = { title,description,price,thumbnail,stock }
           
            if (this.products.length>0) {
                let next_id = this.products[this.products.length-1].id+1
                data.id = next_id
            } else {
                data.id = 1
            }
            this.products.push(data)
            let data_json = JSON.stringify(this.products,null,2)
            await fs.promises.writeFile(this.path,data_json)
            console.log('id´s created user: '+data.id)
            return 'id´s user: '+data.id
        } catch(error) {
            console.log(error)
            return 'error: creating user'
        }
    }
    async getProducts() {
        try{
           if(this.products.length){
            return this.products
           }else{
            return 'Not found' 
           }     
        }catch(error){
            return 'getProducts:error'
        }  
    }
    async getProductById(id) {
        try{
        let search = this.products.find(each=>each.id===id)
        if(search){
            return search
        }else{
            return "Not found"
        }}
        catch(error){
            return 'getProductById: error'
        }
    }
    async updateProduct(id,data) {
        try {
            let search =await this.getProductById(id)
             if(search==="Not found"){
                console.log("No existe ID")
             }else{
                 for (let prop in data) {
                     search[prop] = data[prop]
                 }
                 let data_json = JSON.stringify(this.products,null,2)
                 await fs.promises.writeFile(this.path,data_json)
                 console.log('updateProduct: done , '+id)
                 return 'updated user: '+id
             }} 
             catch(error) {
                console.log(error)
                return 'updateProduct: error'
            }
         }
    async deleteProduct(id) {
        try {
            let search =await this.getProductById(id)
            if(search==="Not found"){
                console.log("No existe ID")
                return "Not found"
             }else{
            this.products = this.products.filter(each=>each.id!==id)
            console.log(this.products)
            let data_json = JSON.stringify(this.products,null,2)
           await fs.promises.writeFile(this.path,data_json)
            console.log('delete user: '+id)
            return 'delete user: '+id
        } }catch(error) {
            console.log(error)
            return 'error: deleting user'
        }
    }
    
}
async function manager() {
    let manager = new ProductManager('./products.json')
   // await manager.addProduct({ title:'igna',description:'borraz',price:32,thumbnail:[],stock:0 });
    await manager.getProducts()
    //await manager.getProductById(1)
   // await manager.addProduct({ title:'cris',description:'avila',price:12,thumbnail:[],stock:41})
    // await manager.add_user({ name:'igna',last_name:'chapero',age:100,carts:[] })
    // await manager.add_user({ name:'mario',last_name:'castro',age:35,carts:[] })
    // await manager.add_user({ name:'luis',last_name:'aguilar',age:35,carts:[] })
    //await manager.updateProduct(2,{ title:'probando' })
    // await manager.update_user(2,{ name:'nicolas', carts: ['celular'] })
    // await manager.update_user(3,{ age:30 })
    //await manager.deleteProduct(2)
    // await manager.deleteProduct(4)
}
manager()