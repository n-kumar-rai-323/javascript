

// .map() array data type
let data = [
  { productName: "Product Name", price: 1000, discount: 10 },
  { productName: "Product Name", price: 1100, discount: 6 },
  { productName: "Product Name", price: 1200, discount: 5 },
];


let result =data.map((value, index)=>{
// if(index !== 0){
//     console.log(index, value)
// }
value.disAmt = value.price * value.discount /100
value.afterDis = value.price-value.disAmt
return value
})
console.log(result)

// .forEach()
// .filter()
// .reduce()

let student = [
    {name:"Nishan Rai", email:"infonkumarrai323@gmail.com", address:"Kathmandu"},
    {name:"Binod Shrestha", email:"infonkumarrai323@gmail.com", address:"Lalitpur"},
    {name:"Asmita Rai", email:"infonkumarrai323@gmail.com", address:"Kathmandu"},
    {name:"Bipana Thata", email:"infonkumarrai323@gmail.com", address:"Bhaktapur"},
    {name:"Muskan Kesari", email:"infonkumarrai323@gmail.com", address:"Kathmandu"},
    {name:"Nirmal Pathak", email:"infonkumarrai323@gmail.com", address:"Lalitpur"},
    {name:"Rabina Yonjan", email:"infonkumarrai323@gmail.com", address:"Kathmandu"},
    {name:"Kusum Karki", email:"infonkumarrai323@gmail.com", address:"Bhaktapur"},
    {name:"Bikash Sarki", email:"infonkumarrai323@gmail.com", address:"Lalitpur"},
    {name:"Niyon Guragai", email:"infonkumarrai323@gmail.com", address:"Kathmandu"},

]

let  stdktm = student.filter((std)=> std.address ==="Kathmandu")
console.log(stdktm)


