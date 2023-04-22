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
            console.log(this.products.length)
            return this.products
           }else{
            //console.log("Not found")
            return 'Not found' 
           }     
        }catch(error){
            console.log(error)
            return 'getProducts: error'
        }  
    }
    async getProductById(id) {
        try{
        let search = this.products.find(each=>each.id===id)
        if(search){
            console.log(search)
            return search
        }else{
            //console.log("Not found")
            return "Not found"
        }}
        catch(error){
            console.log("erros")
        }
    }
    async update_user(id,data) {
    
        try {
            let search =await this.getProductById(id)
        

             if(search==="Not found"){
                 console.log("No existe ID")
             }else{
             console.log("sigamos")
                 for (let prop in data) {
                     search[prop] = data[prop]
                 }
                 //convierto a texto plano el array
                 let data_json = JSON.stringify(this.products,null,2)
                 //sobre-escribo el archivo
                 await fs.promises.writeFile(this.path,data_json)
                 console.log('updated user: '+id)
                 return 'updated user: '+id
             }
            
        } catch(error) {
            console.log(error)
            return 'error: updating user'
        }
    }
    async destroy_user(id) {
        try {
            let search =await this.getProductById(id)
            if(search==="Not found"){
                console.log("No existe ID")
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
    //await manager.addProduct({ title:'igna',description:'borraz',price:32,thumbnail:[],stock:0 });
    await manager.getProducts()
    //await manager.getProductById(1)
   // await manager.addProduct({ title:'cris',description:'avila',price:12,thumbnail:[],stock:41})
    // await manager.add_user({ name:'igna',last_name:'chapero',age:100,carts:[] })
    // await manager.add_user({ name:'mario',last_name:'castro',age:35,carts:[] })
    // await manager.add_user({ name:'luis',last_name:'aguilar',age:35,carts:[] })
    //await manager.update_user(2,{ title:'andrew' })
    // await manager.update_user(2,{ name:'nicolas', carts: ['celular'] })
    // await manager.update_user(3,{ age:30 })
    //await manager.destroy_user(2)
    // await manager.destroy_user(4)
}
manager()