//singleton
//constructer methof k through singleton bnta hai 
//object.create


//object literals

const mySym=Symbol("key1")

const jsUser={
    name:"sarita",
    age:23,
    [mySym]:"myKey1",
    location:"jaipur",
    email:"sarita@google.com",
    isLoggedIn:false, 
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email="saritayadav@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email="sarita@microsoft.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello Js user");
    
}
console.log(jsUser.greeting());
jsUser.greetingtwo=function(){
    console.log(`hello Js user ${this.name}`);
    
}
console.log(jsUser.greetingtwo());
