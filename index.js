class ProductManager {
    constructor(products) {
      this.products = products || this.getProducts();
      this.lastProductId = 0;
    }
  
    getProducts() {
      return [];
    }
  
    addProduct(product) {
      const existingProduct = this.products.find(p => p.code === product.code);
      if (existingProduct) {
        throw new Error(`El producto con código ${product.code} ya existe`)
      }
      product.id = ++this.lastProductId;
      this.products.push(product);
    }
  
    removeProduct(product) {
      const index = this.products.indexOf(product);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        throw new Error(`No se encontró un producto con id ${id}`)
      }
      return product;
    }
  }
  
  const productManager = new ProductManager();
  console.log(productManager.getProducts());
  
  productManager.addProduct({
    title: "producto prueba",
    description: "este es un producto prueba",
    price: 200,
    thumbnail: "sin imagen",
    code: "abc123",
    stock: 25
  });
  
  console.log(productManager.getProducts());
  
  try {
    const product = productManager.getProductById(2);
    console.log(product);
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    const product = productManager.getProductById(1);
    console.log(product);
  } catch (error) {
    console.error(error.message);
  }