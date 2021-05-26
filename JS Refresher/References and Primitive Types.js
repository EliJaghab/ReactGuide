const number = 1;
const num2 = number; // this creates a copy

const person = {
  name: "Max",
};

const secondPerson = person; // not a copy
// this declaration points to the memory of the obj person

person.name = "Manu"; // this changes the value of secondPerson as well
console.log(secondPerson);
