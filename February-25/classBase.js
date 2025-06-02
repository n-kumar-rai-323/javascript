class User {
    name;
    email;
    address;
    #role; //private 
setRole(_role){
    this.#role=_role;
}
getRole(){
    return this.#role
}
    //general approach function
    setName(){}
    //arrow 
    getName = ()=>{
        return this.name
    }
}

const userObj = new User()
userObj.setRole("Admin")
console.log(userObj)
console.log(userObj.getRole())
userObj.setName()