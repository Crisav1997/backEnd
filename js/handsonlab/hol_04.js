const fs =require('fs')
class UserManager{
    constructor(path){
        this.users=[]
        this.path=path
        this.init(path)
    }

    init(path){
        let file = fs.existsSync(path)
        if(!file){
            fs.promises.writeFile(path,'[]')
                .then(res=>console.log('file created'))
                .catch(err=>console.log(err))
        }else{
            fs.promises.readFile(path,'utf-8')
                .then(res=>this.users=JSON.parse(res))
                .catch(err=>console.log(err))
        }
    }
    add_user({name,last_name,age,carts}){
        let data ={name,last_name,age,carts}
        data.id=1
        this.users.push(data)//AGREGO USUARIO A MEMORIA PROGRAMA
        let data_json=JSON.stringify(this.users,null,2) //LUEGO LA STINGIFEO
        fs.promises.writeFile(this.path,data_json)
            .then(res=>console.log('User Created'))
            .catch(err=>console.log(err))
        
    }
}

let manager= new UserManager('./users.json')

manager.add_user({name:'cris',last_name:'avila',age:25,carts:[]})
manager.add_user({name:'andres',last_name:'cruz',age:18,carts:[]})