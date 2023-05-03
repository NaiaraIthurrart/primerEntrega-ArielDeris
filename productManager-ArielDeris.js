
class ProductManager {
    constructor() {
      this.products = [];
      this.nextId = 1;
    }
  
    addProduct(product) {

      if (this.products.some(p => p.code === product.code)) {
        console.log(`Error: El producto con código ${product.code} ya existe`);
        return;
      }
  
      const newProduct = { id: this.nextId++, ...product };
      this.products.push(newProduct);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        return product;
      } else {
        console.log("Error: Producto no encontrado");
        return null;
      }
    }
  }
  
  const manager = new ProductManager();
  
  manager.addProduct({
    title: "Televisor",
    description: "Televisor de 42 pulgadas",
    price: 40000,
    thumbnail: "/",
    code: "PRO1",
    stock: 20
  });
  
  manager.addProduct({
    title: "Licuadora",
    description: "Licuadora y procesadora multifunsion",
    price: 30000,
    thumbnail: "/",
    code: "PRO2",
    stock: 20
  });
  
  const products = manager.getProducts();
  console.log(products);
  
  const product = manager.getProductById(1);
  console.log(product);