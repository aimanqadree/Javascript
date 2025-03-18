function New(name, age){
    console.log(`my name is ${name} and i am ${age} years old`);
}
const NewFunction = New.bind(null, "John") ;
NewFunction(35);



// function greet(name, age) {
//     console.log(`Hello, my name is ${name} and I am ${age} years old.`);
//   }
  
//   const greetJohn = greet.bind(null, "John"); // 'this' is null, 'name' is "John"
//   greetJohn(30);