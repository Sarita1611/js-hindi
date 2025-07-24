let a=10
const b=20
var c=30
if(true){
//     console.log(a);
//     console.log(b);
//     console.log(c);

}

var c = 300

if (true) {
    let a = 10
    const b = 20

    // console.log("INNER: ", a);
    
}

function one(){
    const username="sarita"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}

// one()
if(true){
    const username='sarita'
    if(username==="sarita"){
        const website=" youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

///////*************interestibg ************ */

console.log(addone(5))

function addone(num){
    return num+1

}
addtwo(5)
const addtwo=function(num){
    return num+2
}
