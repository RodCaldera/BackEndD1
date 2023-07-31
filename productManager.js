
//Se agregó File System

const fs= require(fs);

//Creamos el archivo
fs.writeFileSync('products.json')     

//Primer Código Actualizado

alert('¡Vamos a empezar!')
class product{
    constructor(){
        this.product=[];
        this.id=0
        this.path=this.id.json
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

        //El producto va al archivo
        let stringifiedProduct= JSON.stringify(newProduct, undefined, 2)
        fs.appendFileSync(this.path, stringifiedProduct,'utf-8')
    }

    getProducts(){
        let products = JSON.parse(fs.readFileSync(this.path, 'utf-8'))

        /*return this.product*/
        console.log(products)   
    }

    getProductById(id){
        const checkFile=fs.fileExistsSync(this.path)
            if (checkFile==true){
            const foundFile= JSON.parse(checkFile, 'utf-8')
            console.log(foundFile)
            } 
            else {
                throw new Error ('Product not found')
        }         
    }

    deleteProduct(id){
        const checkFile=fs.fileExistsSync(this.path)
            if (checkFile==true){
                fs.unlinkSync(checkfile)            } 
            else {
                throw new Error ('Product not found')
        }         
    }

    updateProduct(id){
        const {title, description, price, thumbnail, code, stock} = newProduct;
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log('Error: product is incomplete');
        }

        
        this.product.push(newProduct);
        console.log('Product has been updated:', title)

        //El producto va al archivo
        let stringifiedProduct= JSON.stringify(newProduct, undefined, 2)
        fs.writeFileSync(this.path, stringifiedProduct,'utf-8')
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
