var ans = new Promise((res,rej)=>{
    if(false){
        return res();
    }
    else{
        return rej();
    }
})

ans
.then (function(){
    console.log("resolve hogaya ha")
})
.catch (function(){
    console.log("reject hogaya ha")
})



//  question : user will ask for a number between 0 to 9 &
// if the number is below 5 resolve if not reject


var anss = new Promise((res, rej)=>{
   var n = Math.floor(Math.random()*10);
    if (n<5){
        return res();
    }
    else{
        return rej();
    }

})
anss
.then(function(){
    console.log("below")
})
.catch(function(){
    console.log("above")
})