function User (){
    this.name ="";
    this.email="";
}

User.prototype.setName= function(_name){
    this.name= _name
   
}

const userObjData = new User()
console.log(userObjData)


userObjData.setName("Nishan Kumar Rai")

console.log(userObjData)


function UserClass(_name, _email, _image){
    this.name = _name;
    this.email = _email;
    this.image = _image
}

let user1 = new UserClass("Nishan Kumar Rai", "infonkumarrai323@gmail.com", "photo link")
let user2 =new UserClass("Alisha Gurung", "grgalish678@gmail.com", "photolink")
console.log(user1)
console.log(user2)