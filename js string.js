// question to print even or odd

function number (a){
    if (a % 2 == 0){
        console.log("the number you entered is even ");
    }
    else
    {
        console.log("the number you entered is odd");
    }
}
let num = parseInt(prompt("enter a number"))
number(num)