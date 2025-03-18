// Print this pattern
// *
// **
// ***
// ****
// *****  

let n = 5;
let star = " ";
for(let i=0; i<n; i++){
    for(j=0; j<=i; j++){
        star +=("*");
    }
    star += " \n"
}
console.log(star)


// or
let m = 5;
for (let i =1; i<=m; i++){
    let star ="*"
    console.log(star.repeat(i))
}
