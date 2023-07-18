let productManager=[];
class product{
    constructor(product){
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

    addProduct(title, description, price,thumbnail,code, stock){
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
}

productManager.getProducts()={
    forEach(product){
    console.log(product);
    }
}

productManager.getProductById(id)={
    let 
}