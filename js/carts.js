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
                return 'file created at path: '+this.path
        }else{
            this.carts = JSON.parse(fs.readFileSync(path,'UTF-8'))
            console.log('recuperando')
            return 'data recovered'
        }
    }
    async addCart({pid,quantity}){
        try {
            let flag=0;
            let data = {pid,quantity}
            for(const value in data){
                if(data[value]===""){
                flag=1;} 
                }
            if(flag===0){
                if (this.carts.length>0) {
                    let next_id = this.carts[this.carts.length-1].id+1
                    console.log(next_id)
                    data.id = next_id
                } else {
                data.id = 1
                }
            this.carts.push(data)
            let data_json = JSON.stringify(this.carts,null,2)
            await fs.promises.writeFile(this.path,data_json)
            console.log('id´s created user: '+data.id)
            return 'id´s user: '+data.id
        }else{
            console.log('Campos incompletos')
            return 'Campos Incompletos'
        }
        } catch(error) {
            console.log(error)
            return 'error: creating user'
        }
    }
    getCarts() {
        console.log(this.carts)
        return this.carts
    }
    getCartsById(id) {
        let search = this.carts.find(each=>each.id===id)
        if(search){
            console.log(search)
            return search
        }else{
            return "Not found"
        }
        
    }

}
let cart =new CartManager('./data/carts.json')
async function carrito(){
    //await cart.addCart({pid:5,quantity:5})
    await cart.getCarts()
    await cart.getCartsById(2)
}
//carrito()

export default cart