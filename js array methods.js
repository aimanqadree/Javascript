// Array methos / funtions

let arr = [1,2,3,4,5]
// length
console.log(arr.length)

// tostring,
var string_value = arr.toString()
console.log(string_value)

// at
console.log(arr.flat(2))

// join
let joined_arr = arr.join("*")
console.log(joined_arr)

// pop
arr.pop
console.log(arr)

// push
arr.push(10)
console.log(arr)

// shift
arr.shift()
console.log(arr)

// unshift
arr.unshift(22)
console.log(arr)

// delete : undefined hole
delete arrr[2]
console.log(arr)

// concat
let arr2 = [33,44,23,34]
let concat_arr = arr.concat(arr2)
console.log(concat_arr)

// copywith
let copr_arr = ["HTML", "CSS", "JS", "REACT"]
copr_arr.copyWithin(2,0)
console.log(copr_arr)

// flat
let arr_2d = [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr_2d)
let newArr = arr_2d.flat()
console.log(newArr)

// splice: str_idx, count, elements
newArr.splice(2,2,39,49)
console.log("spliced:", newArr)

// slice: str_idx, ed_idx
console.log(newArr.slice(4,))