const user={
    username:"sarita",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
        
    }
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

// console.log(this);
// function chai(){
//     console.log(this);
    
// }
// chai()
// function chai(){
//     let username="sarita"
//     console.log(this.username);
    
// }
/////this can be used only inside the objects it can not be used in the functions
// chai()

// const chai =function(){
//     let username="sarita"
//     console.log(this.username);

// }
//arrow function
const chai =()=>{
    let username="sarita"
    console.log(this);

}
// chai()
//explicit return 
// const addtwo =(num1,num2)=>{
//     return num1+num2
// }

///implicit return 
// const addtwo =(num1,num2)=>  num1 + num2
// const addtwo =(num1,num2)=>  (num1 + num2)
const addtwo =(num1,num2)=>  ({ username:"sarita"})

console.log(addtwo(3,4))

