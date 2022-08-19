// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag 

//  1️⃣ method
// let data={
//     fname: "yash",
//     lname: "varshney",
//     getdata : function(){
//         console.log(`${data.fname} ${data.lname} is good coder`)
//     }
// }
// data.getdata();

//  2️⃣ method
// let data={
//     fname: "yash",
//     lname: "varshney",
//     getdata (){
//         console.log(`${data.fname} ${data.lname} is good coder`)
//     }
// }
// data.getdata();

//  3️⃣ method
// let data={
//     name:{
//         fname:"yash",
//         lname: "varshney"
//     },
//     getdata (){
//         console.log(`${data.name.fname} ${data.name.lname} is good coder`)
//     }
// }
// data.getdata();


// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.

// console.log(this);

// function mane(){
//     console.log(this);

// }
// mane();
// let data = {
//     fname: "yash",
//     lname: "varshney",
//     getdata: function () {
//        console.log(this);
//     }
// }
// data.getdata();

let data = {
    fname: "yash",
    lname: "varshney",
    getdata: ()=> {
       console.log(this);
    }
}
data.getdata();