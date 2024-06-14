// class explanation

class Human {
  name: string;
  gender: string;
  age: number;
  isHuman: boolean;

  constructor(name: string, gender: string, age: number, isHuman: boolean) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.isHuman = isHuman;
  }

  //   this is a function
  person() {
    return ( 
      "Hi my name is " +
      this.name +
      " and i am a " +
      this.gender +
      "AND i am a " +
      this.isHuman
    );
  }
}
const people = new Human("bite", "nale", 11, true);
//    console.log(people);
// console.log(people.person())

// inheritance class
class bite extends Human {
  constructor(name: string, gender: string, age: number, isHuman: boolean) {
    super(name, gender, age, isHuman);
  }
  child() {
    return (
      "Hi my name is " +
      this.name +
      " and i am a " +
      this.gender +
      "AND i am a " +
      this.isHuman
    );
  }
}

const pikin = new bite("bite", "nale", 11, true);
console.log(pikin);
console.log(pikin.child);
