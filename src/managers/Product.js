import fs from "fs"

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
            let flag=0;
            let data = { title,description,price,thumbnail,stock }
            for(const value in data){
                if(data[value]===""){
                flag=1;} 
                }
            if(flag===0){
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
            return 201
        }else{
            console.log('Campos incompletos')
            return null
        }
        } catch(error) {
            console.log(error)
            return null
        }
    }
    getProducts() {
        return this.products
    }
    getProductById(id) {
        let search = this.products.find(each=>each.id===id)
        if(search){
            return search
        }else{
            return "Not found"
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
                 return 200
             }} 
             catch(error) {
                console.log(error)
                return null
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
            return 200
        } }catch(error) {
            console.log(error)
            return null
        }
    }
    
}  
let manager = new ProductManager('./src/data/products.json')

export default manager
