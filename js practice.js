                    //  topic   loops


// let a = 10;
// let b = 20;
// let c = 30;
// if (a>b && a>c) {
//     console.log("a is greater")
// } else if (b>a && b>c) {
//     console.log("b is greater")
// } else {
//     console.log("c is greater")
// }

// question;2
// let a = 30
// let b = 10
// if(a>b) {
//     console.log("a is greater")
// } else{
//     console.log("b is greater")
// }

// question;3 WAP to take input from the user & print accordingly
//90 - 100    A
// 80 - 89    B
// 70 - 79    C
// 60 - 69    D
// 0 -  59    E

// let num = 59;
// let grade;
// if (num >= 90 && num <= 100) {
//     grade = "A"
// }
// else if (num >= 80 && num <= 89) {
//     grade = "B"
// }
// else if (num >= 70 && num <= 79) {
//     grade = "c"
// }
// else if (num >= 60 && num <= 69) {
//     grade = "D"
// }
// else if (num >= 0 && num <= 59) {
//     grade = "E"
// }
// console.log("according to number",grade)




// for (let num = 1; num <=10; num++) {
// console.log(`5 * ${num} = ${5*num} `)
// }



// for (let num = 1; num <=10; num++) {
//     for (let j =1; num <=10;)



// question square star pattern

// let n = 5  ;
// let star = "";
// for (i=0; i<n; i++) {
//     for (j=0; j<n; j++){
//         star += "*"
//     }
//     star +="\n";
// }
// console.log(star)


// question hallowen square pattern

// let n = 5;
// let star = "";
// for (i=0; i<n; i++){
//     for (j=0; j<n; j++){
//         if(i===0 || i===n-1){
//             star += "*";
//         }
//         else{
//             if(j===0 || j===n-1){
//                 star += "*";
//             }
//             else{
//                 star += " ";    
//             }
//         }
//     }
//     star += "\n";
// }
// console.log(star)



// question to print left triangle

// let n = 5;
// let star = "";
// for (i=0; i<n; i++){
//     for (j=0; j<=i; j++){
//         star +=("*");
//     }
//     star += ("\n");
// }
// console.log(star)


// or
// let n = 5;
// for (i = 1; i <= n; i++) {
//     let star = "*";
//     console.log(star.repeat(i));
// }



// question  to print right traingle
// let n = 5;
// let star = "";
// for (i=0; i<=n; i++){
//     for (j=0; j<n-i; j++){
//         star +=" ";
//     }
//     for (k=0; k<i; k++){
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star)



//  or

// let n = 5;
// for (i = 1; i <= n; i++) {
//     let star = "*";
//     let space = " ";
//     console.log(space.repeat((n - i)) + star.repeat(i));
// }


// question to print downword traingle
// let n = 5; 
// let star = "";
// for (i=0; i<n; i++){
//     for(j=0; j<n-i; j++){
//         star +="*";
//     }
//     star += "\n";
// }
// console.log(star)

                        //  or
// let n = 5;
// for (let i = n; i >=1; i--){
//     let star = "* ";
//     console.log(star.repeat(i));
// }                        


// question to print star pyramid
// let n = 5;
// let star = "";
// for(i=0; i<=n; i++){
//     for (j=0; j< n-i; j++){
//         star += " ";
//     }
//     for(k=0; k<2*i-1; k++){
//         star += "*";
//     }
//     star += "\n";
// }
// console.log(star)


                // or
// let n = 5;
// for (let i = 1; i <=n; i++){
//     let star = "*";
//     let space = " ";
//     console.log(space.repeat((n -i)) + star.repeat (2*i-1));
// }                



// question
// function digit() {
// let number = [1, 3, 6, 4, 2];
// let ans = -1;
//  for (let i = 0; i <number.length; i++);
//  console.log(number[7])};
//  digit()
 


// question
// function digit(){
//     let num= [1, 3, 6, 4, 2];
//     target = 6
//     let ans = -1
//     for(let i=0; i<num.length; i++)
//     if (num[i]===target){
//         ans= i
//     }
// console.log(ans)}
// digit()



// // question  to check  if a variable is an array

// let fruits = ["apple", "banana"];
// console.log(Array. isArray(fruits));
// let notAnArray = "kiwi";
// console.log(Array.isArray (notAnArray));



// question how can u remove elements
// let fruits = ['strawbery', 'banana', 'cherry'];
// fruits.pop();   
// console.log(fruits);
// fruits.shift();
// console.log(fruits);





// question what is length property of an array
// let fruits = ['apple', 'banana', 'cherry', 'orange', 'kiwi'];
// console.log(fruits.length);




// question how do you check if a varaible is an array
// let vegetables = ['potato', 'tomato', 'carrot'];
// console.log(Array.isArray(vegetables));
// let notAnArray = 'apple';
// console.log(Array.isArray(notAnArray));





// question   numbers = [1, 4, 2, 6, 8];
// targetsum = 3
// ans = -1
// const arr = [1, 4, 2, 6, 8];
// const targetSum = 3;
// const ans = []
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === targetSum) {
//       ans.push(arr[i])
//       ans.push(arr[j])
//         }
//   }
// }
// if(ans.length === 0){
//   console.log(-1)
// }else{
//   console.log(ans)
// }





// how we use forEach method
// let fruits = ['apple', 'banana', 'cherry']
// fruits.forEach((fruits, index) => {
//     console.log(`Fruit at index ${index} is ${fruits}`)
// });




// question  how do you concentrate two arrays
// let fruits = ['apple', 'banana'];
// let moreFruits = ['cherry', 'mango'];

// // Using concat method
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits);

// // Using spread operator
// let aallFruits = [...fruits, ...moreFruits];
// console.log(aallFruits);



                                //    Filter Method
// question how does filter method work

// The filter method creates a new array with all elements that pass the test implemented by the provided function. It calls the function for each element in the array and includes the element in the new array if the function returns true.
// The filter method does not modify the original array and is useful for extracting a subset of elements based on certain criteria, such as finding all even numbers or filtering out invalid entries.
// let fruits = ['apple', 'banana'];
// let moreFruits = ['cherry', 'mango'];

// // Using concat method
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits);

// // Using spread operator
// let aallFruits = [...fruits, ...moreFruits];
// console.log(aallFruits);






                                        // Reduce Method
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. The reducer function takes two arguments: the accumulator (which accumulates the callback’s return values) and the current value (the current element being processed).

// The reduce method is commonly used for summing up elements, finding averages, or performing other cumulativeoperations  

//question  Describe the reduce method with an example.
let fruits = ['apple', 'banana'];
let moreFruits = ['cherry', 'mango'];

// Using concat method
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);

// Using spread operator
let aallFruits = [...fruits, ...moreFruits];
console.log(aallFruits);



    //  if there are two div elements without id or class how can u hide one using js

    document.getElementsByTagName("div")[0].style.display = "none";



  





