function greet(name, age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }
  
  greet.call(null, "John", 30);