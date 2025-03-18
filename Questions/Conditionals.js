
// 1. Check if a one number is even or odd
var num = 5
if (num % 2 === 0) {
    console.log(num + " is even")
} else {
    console.log(num + " is odd")
}


//    Check if a numbers is even or odd
for (let num = 1; num <= 10; num++) {
    if (num % 2 === 0) {
        console.log(num + " is Even")
    } else {
        console.log(num + " is odd")
    }
}

// 2. Check a number is prime or composite 
var num = 20
var flag = true
for (let k = 2; k < num; k++) {
    if (num % k === 0) {
        console.log(num + "is composite number")
        flag = false
    }
}
if (flag) {
    console.log(num + "is prime number")
}


// 3. Print a table of a number
const table = 5;
for (let num = 1; num <= 10; num++) {
    console.log(table + " * " + num + " = " + (table * num))
}