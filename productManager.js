
//Se agregó File System

const fs= require(fs);

//Primer Código Actualizado

alert('¡Vamos a empezar!')
class product{
    constructor(){
        this.product=[];
        this.id=0
    }
    
    addProduct(newProduct){
        const {title, description, price, thumbnail, code, stock} = newProduct;
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Error: product is incomplete');
        }

        const codeExists = this.product.find( prod => prod.code === code );
        if(codeExists) throw new Error('Code already exists')

        newProduct.id=this.id++;
        this.product.push(newProduct);
        console.log('New product has been added:', title)

    }

    getProducts(){
        return this.product
    }

    getProductById(id){
        const findProduct = this.product.find(find=> product.id === id)
        if (findProduct==true){
            return findProduct
        } 
        else {
            throw new Error ('Product not found')
        }         
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

//Agregar segunda entrega