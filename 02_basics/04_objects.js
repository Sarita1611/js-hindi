// singleton Object
const tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="sarita"
tinderUser.isloggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"sarita@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Sarita",
            lastName:"Yadav"
        }
    }
}
// console.log((regularUser.fullname.userfullname.firstName));

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"f"}
const obj3={8:"i",10:"e"}
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

const users=[
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:1,
        email:"s@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isloggedIn"));
