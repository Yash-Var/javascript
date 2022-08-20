// object destructing 


// let [fname,lastname,myage]=["yash","varshney",20];
// console.log(fname);


// const person={
//     firstName: "Bill",
//     lastName: "Gates"
// };
// let {firstName,lastName}=person;
// console.log(firstName);

// Dynamic properties

// let myname="yash";
// const data={
//     [myname]: "varshney",
//     [89+20]:"how are you"
// };
// console.log(data);

// // Spread Operator

// const colors=['red','green','blue','white'];
// const myColors=['red','green','blue','white','yellow','sunshine'];
// const MYFav=[...colors,'yellow'];
// console.log(MYFav);


const person={
    firstName: "Bill",
    lastName: "Gates"
};
console.log(Object.values(person));
console.log(Object.entries(person));