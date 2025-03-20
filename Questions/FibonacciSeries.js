var a = 0, b = 1;
console.log(a);
console.log(b);
for (var i=0; i<=10; i++){
    var temp = a+b;       // 1 + 1 = 2
    console.log(temp)
    a=b;                 // 1 = 1
    b=temp;               //1 = 2
}