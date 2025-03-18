let arr = [3, 4, 6, 9, 12];
let largest = Math.max(...arr);
console.log(largest)





// without inbuilt function
let arrr = 0
for(let n=0; n<arr.length; n++) {
    if(arrr < arr[n]) {
        arrr = arr[n]
    }
}
console.log(arrr)

