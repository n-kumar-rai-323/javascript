class Product {
  name = "";
  price = 0;
  productId = "";
  stockQuantity = 0;

  setProductDetails(_name, _price, _productId, _initialStock) {
    this.name = _name;
    this.price = _price;
    this.productId = _productId;
    this.stockQuantity = _initialStock;
    console.log(`Product "${this.name}" (ID: ${this.productId}) details set.`);
  }
  increaseStock(amount) {
    if (amount <= 0) {
      console.log(
        `Cannot increase stock by non-positive amount for "${this.name}"`
      );
      return;
    }
    this.stockQuantity += amount;
    console.log(
      ` "${this.name}" stock increased by ${amount}. New stock: ${this.stockQuantity}.`
    );
  }
  decreaseStock(amount) {
    if (amount <= 0) {
      console.warn(
        `Cannot decrease stock by non-positive amount for "${this.name}". Amount: ${amount}`
      );
      return;
    }
    if (this.stockQuantity >= amount) {
      this.stockQuantity -= amount;
      console.log(
        `"${this.name}" stock decreased by ${amount}. Remaining stock: ${this.stockQuantity}.`
      );
    } else {
      console.error(
        `Not enough stock for "${this.name}". Current stock: ${this.stockQuantity}, tried to decrease by ${amount}.`
      );
    }
  }
  getProductInfo() {
    return {
      name: this.name,
      price: this.price,
      productId: this.productId,
      stockQuantity: this.stockQuantity,
    };
  }
}

console.log("---- Creating Product Instances -----");

const laptop = new Product();

laptop.setProductDetails("Gamming Laptop", 12000, "PROD001", 50);
console.log("Laptop Info:", laptop.getProductInfo());

laptop.increaseStock(0);
console.log("Laptop Info after increase:", laptop.getProductInfo());

a
laptop.decreaseStock(5);
console.log("Laptop Info after another decrease:", laptop.getProductInfo());

console.log("\n--- Final Product Information ---");
console.log("Final Laptop Info:", laptop.getProductInfo());
