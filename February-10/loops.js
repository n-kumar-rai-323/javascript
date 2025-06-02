const products = [
  {
    name: "iPhone",
    price: 200000,
    discount: 5,
  },
  {
    name: "iPhone 14",
    price: 220000,
    discount: 7,
  },

  {
    name: "iPhone 14 pro",
    price: 230000,
    discount: 10,
  },
];

// for (let i = 0; i < products.length; i++) {
  //   let disAmount = (products[i].price * products[i].discount) / 100;
  //   products[i].disAmt = disAmount;
//   products[i].disAmt = (products[i].price * products[i].discount) / 100;

  //   let afterDis = products[i].price - disAmount;
  //   products[i].afterDis = afterDis;

//   products[i].afterDis = products[i].price - products[i].disAmt;
// }
// console.log(products);

// for-in

// for (let i in products) {
//   // i => index of all element in products
//   let prod = products[i];
//   prod.disAmt = (prod.price * prod.discount) / 100;
//   prod.afterDis = prod.price - prod.disAmt;
// }
// console.log(products);
// // for-of

for (let prod of products) {
  prod.disAmt = (prod.price * prod.discount) / 100;
  prod.afterDis = prod.price - prod.disAmt;
}
console.log(products);