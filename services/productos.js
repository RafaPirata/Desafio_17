// class porductos with constructor and methods
const productos = []
class Products {
    constructor() {
        this.productos = productos;
    }
    
    getProducts() {
        return this.productos 
        
    }
    
    getProductById(id) {
        return this.productos.find((producto) => producto.id === id) || {error: 'producto no encontrado'};
    }
    
    //add product and create id with timestamp
    
    addProduct(producto) {
        const newProduct = { id: `${Date.now()}`, ...producto };
        this.productos.push(newProduct);
        return newProduct;
    }
    
    updateProduct(id, producto) {
        const index = this.productos.findIndex((producto) => producto.id === id);
        this.productos[index] = producto;
    }
    
    deleteProduct(id) {
        const index = this.productos.findIndex((producto) => producto.id === id);
        if (index === -1) {
            return { error: 'producto no encontrado' };
        }
        this.productos.splice(index, 1);
        return {msg: 'producto eliminado'};
    }

    // delte all products
    deleteAllProducts() {
        this.productos = [];
    }

}

module.exports = Products;
