class Animal{
  sound;
  mekeSound() {
    console.log(this.sound)
  }
}

class Cat extends Animal {}

class Dog extends Animal{}

const objCat = new Cat();
objCat.sound = "meow";
objCat.mekeSound();


const objDog = new Dog()
objDog.sound= "woof"
objDog.mekeSound()