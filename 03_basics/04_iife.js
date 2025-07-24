//immediately Invoked Function Expressions
//sometimes there is problem due to polution of global scope and to remove this we use iife function
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)

})();
//ye function invoke to ho jata hai pr usko pta nhi rahta ki bnd kb hona hai to uske liye we have to put a semicolon

(()=>{
    console.log(`DB CONNECTED TWO `);
    
})();

((name)=>{
    //parameter IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})("sarita")