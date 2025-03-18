// let marks = [97,  87, 67, 64, 36];
// console.log (marks)
// console.log(marks.length);


// let heroes =["ironman","antma", "thor", "hulk", "shaktiman", "spiderman"];
// console.log(heroes);



// // question   for a given array with marks of students [85, 97, 44, 37,76, 60]. Find the average marks of the entire class

// let markss = [85, 97, 44, 37, 76, 60];
//     let sum = 0;
//     for (let val of markss){
//         sum +=val;
//     }
//     let avg = sum / markss.length;
//     console.log(`avg marks of the class = ${avg}`);



//     // question for a given array with prices of 5 items  [250, 645, 300,  900, 50]. All items have an offer of 10% OFF on them.
//     //  Change the array to store final price after applying offer.
// let items = [250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++){
//     let offer = items [i] / 10;
//     items [i] -= offer;
// }
// console.log(items);    



// // question create an array to store companies "Bloombery", "Microsoft", "Uber", "Google", "IBM", "Netflix".
// //  A     Remove the first company fro the array
// let companies = ["Bloombery", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// // companies.shift();
// //  companies.splice(2, 1, "Ola");
// companies.push("Amazon");


// // question  to check  if a variable is an array

// let fruits = ["apple", "banana"];
// console.log(Array. isArray(fruits));
// let notAnArray = "kiwi";
// console.log(Array.isArray (notAnArray));


// // question two sum    
// // arr [1,4,2,6,8]
// // target  = 3
// // ans = -1






// for each
// let a = [1,2,3,4,5,6]
// a.forEach((item)=>{
//     item +=10
// })

// // map
// let ab = a.map((item)=>{
//     return item +=10
// })
// console.log("map:",ab)

// // filter
// let ac = a.filter((item)=>{
//     return item % 2 === 0
// })
// console.log("filter:", ac)

// // for in
// for(let itr in a){
//     a [itr] +=10
// }
// console.log("Forin:", a)

// // Reduce
// let initial = 20
// let b = a.reduce((acc,item)=>{
//     return acc + item
// },initial)
// console.log(b)


// // object: data store in key value pair
// let object_name = {
//     name:"abi",
//     course:"mern"
// }
// console.log(object_name)
// console.log(object_name.naame)
// object_name.name = "HTML"
// console.log(object_name['name'])

// let array_object = [
//     {
//         naame: "hiten",
//         course:"MERN"
//     },
//     {
//         name:"gagan",
//         course:"MERN"
//     }
// ]
// console.log(array_object[0].name)

// let object_array = {
//     name: ["jiten","sofiya"]
// }

// console.log(object_array.name[0])


// // spread
// function spreads(a,b,...c){
//     console.log(a,b,c)
// }
// let arr = [8,9,4]
// spreads(...arr)


// // rest
// function rests(...a){
//     console.log(a)
// }
// rests(1,2,3,33,23,555)


// // destructing array and objects
// let [e,f,g] = arr
// console.log(a,b,c)

// let {name,course} = object_name
// console.log(name,course)










