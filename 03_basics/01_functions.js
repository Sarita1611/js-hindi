function saymyname(){
    console.log("s");
    console.log("a");
    console.log("r");
    console.log("i");
    console.log("t");
    console.log("a");


    
}
// saymyname()
// function addtwonumber(number1,number2){
//     console.log(number1+number2);
    
// }
function addtwonumber(number1,number2){
    return (number1+number2);
    
}
const result=addtwonumber(3,5)
// console.log("result:",result)

function loginusermessage(username="sam"){
    if (username===undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginusermessage("sarita"))
// console.log(loginusermessage())


function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,400,500));

const user={
    username:"sarita",
    price:900
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)
handleobject({
    username:"hitesh",
    price:45

})
const mynewarray=[200,400,500]
function returnsecondvalue(getArray){
    return getArray[0]
}
console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([500,466]))