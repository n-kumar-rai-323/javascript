let product1={
    name:"Nishan Rai",
    price:1234,
    discount:10
}

let product2={
    ...product1,
    store:"nepal",
    stock:10
}
let product3 ={
    ...product2
}

product3.name="Nishan Kumar Rai"

console.log(product3)
console.log(product2)
console.log(product1)