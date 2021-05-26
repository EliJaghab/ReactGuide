class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super(); //Execute Parent constructor of human
    this.name = "Max";
    this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
