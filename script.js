                                         // Arithemetic operators
// var a = 11
// var b = a + 20;
// console.log(b)

// var c = a/2
// var d = a%2
// console.log(c)
// console.log(d)

// a += b;
// console.log(a)
             
// console.log(a >=b )
// console.log(a>b && a>c)
// console.log(a<b && a>c)
// console.log(a>b || a>c)
// console.log(a<b && a>c)

                                                 // asignment operator
// let a = 5;
// let b =2;
// a += 4 ;
// a = a +4
// console.log("a =", a)

// a -= 4;
// console.log("a =", a)

// a *=4;
// console.log("a =", a)

// a /= 4;
// console.log("a =", a)

// a %= 4;
// console.log("a =", a)

// a **= 4;
// console.log("a =", a)

                                                     // Conditional statements
                                                // 1...If statement
// let age = 25;
// if (age >= 18) {
    // console.log("you can vote")
// }  

// let age = 16
// if(age <18) {
    // console.log("you can not vote")
// }

// let mode ="dark";
// let color;

// if(mode === "dark") {
//     color = "black";
// }

// if(mode === "light") {
//     color = "white";
// }
// console.log(color);

                                           //    2...if statement
// let age = 16;
// if( age >= 18){
//     console.log("vote")
// }   
// else{
//     console.log("not vote")
// }   

// let age = 18;
// if( age >= 16){
//     console.log("vote")
// }   
// else{
//     console.log("not vote")
// }   

// to checq even or odd number

// let num = 4;
// if( num % 2 ===0){
//     console.log(num, "is even")
// }
// else{
//     console.log(num, "odd")
// }

// let num = 7;
// if( num % 2 ===0){
//     console.log(num, "is even")
// }
// else{
//     console.log(num, "is odd")
// }

                                      //   3....Else-if statement
// let mode = "dark";
// let color;

// if ( mode === "dark") {
//     color = "black";
// }
// else if ( mode === "blue") {
//     color = "blue";
// }

// else if ( mode === "pink") {
//     color = "pink";
// }
 
// else {
//     color = "white";
// }
// console.log(color);



// let mode = "pink";
// let color;

// if ( mode === "dark") {
//     color = "black";
// }
// else if ( mode === "blue") {
//     color = "blue";
// }

// else if ( mode === "pink") {
//     color = "pink";
// }
 
// else {
//     color = "white";
// }
// console.log(color);



// let mode = "silver";
// let color;

// if ( mode === "dark") {
//     color = "black";
// }
// else if ( mode === "blue") {
//     color = "blue";
// }

// else if ( mode === "pink") {
//     color = "pink";
// }
 
// else {
//     color = "white";
// }
// console.log(color);

                                        //   Ternary Operators
                                        // ternary operator is nothing . Its a simple, compact of  if-else
// let age = 25;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result) ;

// let age = 15;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result) ;     

// we can write also
// let age = 15;
// age >= 18 ? console.log ("adult") : console.log("not adult") ;


                                   //  practice questions
                    // qno;1' Get user to input a number using promot ("enter a number:"). Checq if the number is a multiple of 5.

                    // promot is message it has extra functinality i can write also some name as input. Its a temporary method and takes input from the user.
                    // alert is also messgae 
// solution:
// let num = prompt("enter a number");
// if(num % 5===0){
//     console.log(num, "is a multiple of 5");
// } else{
//     console.log(num, "is not a multiple of 5")
// }

                    // qno;2' Write a code ehich can give grades to students according to their scores
                    // 90-100,A
                    // 70-89,B
                    // 60-69,C
                    // 50-59,D
                    // 0-49,F
// solution:
let score = 49;
let grade;
if (score >=90 && score <= 100){
    grade ="A";
} else if(score >= 70 && score <= 89){
    grade ="B"
} else if (score >= 60 && score <= 69){
    grade = "C"
} else if (score >= 50 && score <= 59){
    grade = "D"
} else if(score >=0 && score <= 49 ){
    grade ="F"
}
console.log("according to your scores, your grade was :", grade)
