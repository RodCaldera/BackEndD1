alert('¡Vamos a empezar!')
let productManager=[];
class product{
    constructor(title, description, price, thumbnail, code, stock){
        this.title=title;
        this.description=description;
        this.price=price;
        this.thumbnail=thumbnail;
        this.code=code;
        this.stock=stock;
        this.id=product.newId();
    }
    static lastId=0;

    static newId(){
        product.lastId ++;
        return product.lastId;
    }
}

productManager.addProduct= function (title, description, price,thumbnail,code, stock){
    const newProduct= new product(title, description, price,thumbnail,code, stock)
    if(!title || !description || !price || !thumbnail || !code || !stock){
        console.log('Error: product is incomplete');
    }
    else if (productManager.includes(this.code)){
        console.log('Error: the code already exists');
    }
    else{
        productManager.push(newProduct);
    }
}

productManager.getProducts= function(){
    productManager.forEach((product)=>{
        console.log(product.title);
        console.log(product.description);
        console.log(product.price);
        console.log(product.thumbnail);
        console.log(product.code);
        console.log(product.stock);
        console.log(product.id);
    });
}

productManager.getProductById= function(id){
    const searchProduct=productManager.find((product)=>product.id===id);
    if(searchProduct==true){
        console.log(searchProduct);
    } 
    else{
        console.log('Error: Not found');
    }
}

productManager.getProducts();

const newProduct= new product('producto de prueba','Este es un producto de prueba',200,"sin imagen","abc123",25);

productManager.addProduct(newProduct.title, newProduct.description, newProduct.price, newProduct.thumbnail, newProduct.code, newProduct.stock)
productManager.getProducts();