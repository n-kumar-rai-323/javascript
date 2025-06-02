class User{
    #name; //private
    email;
    constructor(_name, _email){
        console.log("I am here")
        this.#name =_name;
        this.email = _email
    }
    getName(){
        return this.#name;
    }
}

const userObj = new User("Nishan kumar Rai", "infonkumarrai323@gmail.com")
console.log(userObj.email)
console.log(userObj.getName())



class Person{
    name;
    email;
}

class Student extends Person{
    
    classname;
    section;
}

class Teacher extends Person{
    
    role="teacher";
}