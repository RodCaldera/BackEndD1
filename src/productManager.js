
const express = require("express")
const fs= require("fs")

//Creamos el archivo
fs.writeFileSync('products.json')     

//Primer Código Actualizado

//alert('¡Vamos a empezar!')
class product{
    constructor(path){
        this.product=[];
        this.id=1;
        this.path=path;
    }
    
   async addProduct(newProduct){
        const {title, description, price, thumbnail, code, stock} = newProduct;
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Error: product is incomplete');
        }

        const codeExists = this.product.find( prod => prod.code === code );
        if(codeExists) throw new Error('Code already exists')

        newProduct.id=this.id++;
        this.product.push(newProduct);
        console.log('New product has been added:', title)

        //El producto va al archivo
        let stringifiedProduct= JSON.stringify(newProduct, undefined, 2)
        await fs.promises.writeFile(this.path, stringifiedProduct,'utf-8')
    }

    async getProducts(){
        let products =JSON.parse(await fs.promises.readFile(this.path, 'utf-8'))
        return (products)
        console.log(products)   
    }

    async getProductById(id){
        const checkFile= 
            fs.fileExistsSync(this.path)
                if (!checkFile) throw new Error ('File not found')

        const productFile=  fs.readFileSync(this.path)
        const productList= JSON.parse(productFile, "utf-8") 
        const findProduct= productList.find((prod)=> prod.id === id)
        if (!findProduct) throw new Error (`ID: ${id} not found`)         
        return findProduct
        console.log(findProduct) 
        }

    async deleteProduct(id) {
        const checkFile= fs.existsSync(this.path)
            if (!checkFile) throw new Error ('Product file not found')
        const productFile= fs.readFileSync(this.path)
        const productList= JSON.parse(productFile,"utf-8")
        const productFiltered= productList.filter((prod)=>prod !==id)
        if (!productFiltered) throw new Error (`ID: ${id} not found`)
        await fs.writeFileSync(this.path,JSON.stringify(productFiltered))      
    }

   async updateProduct(id){
        const {title, description, price, thumbnail, code, stock} = newProduct;
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Error: product is incomplete');
        }
        const checkFile= fs.existsSync(this.path)
            if (!checkFile) throw new Error ('Product file not found')
        const productFile= fs.readFileSync(this.path)
        const productList= JSON.parse(productFile,"utf-8")
        const findProduct= productList.find((prod)=> prod.id === id)
        if (!findProduct) throw new Error (`ID: ${id} not found`)
        findProduct.title=newProduct.title;
        findProduct.description=newProduct.description;
        findProduct.price=newProduct.price;
        findProduct.thumbnail=newProduct.thumbnail;
        findProduct.code=newProduct.code;
        findProduct.stock=newProduct.stock;
        
        await fs.writeFileSync(this.path, JSON.stringify(productList))
        
    }
    }
    
const newProduct= new product();
const showProducts= newProduct.getProducts()
console.log('Product List:', showProducts)    

newProduct.addProduct({title:"Producto de Prueba", description: "Prueba", price: 200, thumbnail:"Sin Imagen", code: "abc123", stock: 25})

console.log('Product List:', showProducts)

newProduct.getProductById(1)
console.log('Product found:', newProduct)

newProduct.getProductById(4)
console.log('Product found:', newProduct)
