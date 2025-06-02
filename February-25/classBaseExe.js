// Create a javaScript calss called Student Assign name, email, phone, address as the property. assign the values to these properties via functions
// inside the class. access and print the values of these properties via function from the class
class StudentDetail {
  name;
  email;
  phone;
  address;

  setDetails(_name, _email, _phone, _address) {
    this.name = _name;
    this.email = _email;
    this.phone = _phone;
    this.address = _address;
  }
  getDetails() {
    return{
      name :this.name,
      email:this.email,
      phone:this.phone,
      address: this.address
    }
  }
}

const userObj = new StudentDetail();

userObj.setDetails(
  "Nishan Rai",
  "infonkumarrai323@gmail.com",
  "9867219739",
  "Sindhuli"
);

console.log(userObj.getDetails())