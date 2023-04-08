class ProductManager{
    constructor(){
        this.products=[]
    }
    getProducts(){
        console.log(this.products)
        return this.products
    }
    getProductById(IdFind){
        let get = this.products.find(e => e.id === IdFind);
        if(get===undefined)console.error("no existe ID")
        else{console.log(get)}
    }
    addProduct({title,description,price,thumbnail,code,stock}){
    let flag=0;
    let codeIn=this.products.find(e=> e.code===code)
    if(codeIn===undefined){
        let id = 0
        if(this.products.length===0){
            id = 1 
            }
            else{
            let lastProducts = this.products[this.products.length-1]
            id=lastProducts.id + 1
            }
        let product={ title,description,price,thumbnail,code,stock,id }
        for(const value in product){
            if((product[value]==null)||(product[value]=="")){
            flag=1;} 
            }
        if(flag===0){this.products.push(product)}
        else{console.log("Hay algun elemento sin completar")}
        }
    else{
        console.error("ID existente")
        }
    }
}
let product= new ProductManager()
product.addProduct({title:"Agua",description:"100% Natural",price: 150,thumbnail:"img1",code:"123456789",stock:100 })
product.addProduct({title:"CocaCola",description:"sin azucar",price:25,thumbnail:"img2",code:"987654321",stock:150 })
product.addProduct({title:"speed",description:"Energizante",price: 100,thumbnail:"img3",code:"123789456",stock:80 })
product.getProducts()
product.getProductById(3)