// to print  any table 

// for ( let num = 1; num <= 10; num++)
// {
//     console.log(`6 * ${num} = ${6 * num}`);
// }

// for ( let a = 1; a <= 10; a++)
//     {
//         console.log(`8 * ${a} = ${8 * a}`);
//     }

//     for ( let b = 1; b <= 10; b++)
//         {
//             console.log(`3 * ${b} = ${3 * b}`);
//         }


// print all tables in nested loop
// for(let a =1; a <=10; a++){
//     for(let j =1; j<=10; j++)
//         console.log(`j * ${a} = ${j*a}`)
// }



// for(let i = 1; i <=10; i++)
// {
//     console.log(`Table of ${i}`)
//     for(let j = 1; j <=10; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }   
// }   


// // to print star
// for(let a =1; a<=10; a++){
//     var c = ""
// for(let b =1; b<=a; b++){
//     c += "*"
// }
// console.log(c)
// }+

// // 0r
// let n = 5;
// for (let i = 1; i<=n; i++){
//     let str = "*";
//     console.log(str.repeat(i));
// }



// let m = 5;
// for(let i = 1; i<=m; i++){
//     let str = "*";
//     let space = ' ';
//     console.log(space.repeat((m-i)) + str.repeat(i));
// }




// let rows = 5;
// for (let a = 4; a >=0; a--){
//     let row = ' ';
//     for (let b = 0; b < rows - a - 1; b++) {
//         row+='  ';
//     }
//     for(let c=0; c<2*a+1; c++){
//         row +='* ';
//     }
//       console.log(row)  
// }

// for (let i = 0;i<5;i++){
//     let row = ""
//     for(let j = 4-i;j>0;j--){
//         row += " "
//     }
//     for(let k = 0;k<2*i-1;k++){
//         row += "*"
//     }
//     console.log(row)
// }



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




// question  to print star pyramid downword
// let n = 5; 
// for (let i = n; i>=1; i--){
//     let star = ("*");
//     let space = (" ");
//     console.log(space.repeat(n-i) + star.repeat(i*2-1));
// }



// question guess the game number(0-10)
function random(){
    let num = 5
    let numuser = prompt("Guess the number")
    if (numuser!=num ){
        numuser = prompt("you entered the wrong number")

    }
    console.log("you entered the right number")

}
random()




