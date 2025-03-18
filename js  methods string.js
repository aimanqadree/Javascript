// string functions / methods
var a = "abc123"
// length: length of the string
console.log("length:", a.length)

// charAt
console.log("charAt:", a.charAt(3))//counting is done by indixing

// []
console.log("[]:", a[4])

// slice
console.log("slice:", a.slice(1,3))

// substring
console.log("substring:", a.substring(1,3))

// touppercase
console.log("touppercase:", a.toUpperCase())

// toLowercase
console.log("toLowercase:", a.toLowerCase())

// concat
let b = "    qwerty"
console.log("Concat:", a.concat(b))

// trim
console.log("trim:", b.trim())

// Pads/E
let c = "aiman"
console.log(c.padStart(10,"e"))
console.log(c.padEnd(10,"e"))

// replace/All
d = "sofiyass"
console.log(d.replace("s","1"))
console.log(d.replaceAll("s","1"))

// Split
let e = "I am student"
let arr = e.split("s")
console.log(arr)
