
// console.log('hello world');

//values and variables

// var myName="vinod bahadur thapa";

// console.log(myName);

//Data type in javascript

// 1 : "undefined"
// 2 : "boolean"
// 3 : "number"
// 4 : "string"
// 5 : "bigint"
// 6 : "symbol"

// console.log(10+"20");

// console.log(9-"4");//bug

// console.log("Java "+"Script"); 

// console.log("Java "-"Script"); // NaN

//  var iAmUseLess=null;
//  console.log(iAmUseLess);
//  console.log(typeof(iAmUseLess));//bug

//  var number=9761268926;
// var name='yash';
// console.log(isNaN(name));
// console.log(isNaN(number));

//expression and operator
// var x=10;
// var y=10;

// console.log("is x and y are equal or not "+ x==y);

//both have different output

// console.log( x==y);


//Important 


// var num=15;
// // var newNum=num++ + 5;  // (num + 5)
// var important= ++num + 5;
// console.log(important);
// // console.log(newNum);

// console.log(!false);

//string concatenation (operations)
// console.log("hello "+"world "+"yash varshney");


//exponentiation operator

// console.log(3**3);
// console.log(10**-1);


// console.log(10+" yash varshney");

//swap to number
// var a=10;
// var b=5;


// var temp=b;
// b=a;
// a=temp;

// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);


//difference betwwen == and ===

// var num1=5;
// var num2='5';


// console.log(num1==num2);

// console.log();
// console.log(num1===num2);

//truly and falsy value in javascript ~
//in javascript there are total 5 falsy values
// 0,"",undefined,null,NaN,false
// if(NaN){
//     console.log("yash varshney");
// }else
// {

//     console.log("akshat varshney");
// }

//function in javascript

//A javascript function is a block of code designed to perform a particular task.

// function sum( a,b){ // a and b are arguments 

//     var total=a+b;
//     return total;
// }
// console.log(sum(10,30)); //10 and 40 are parameter


//Anonymous Functions are the functions which have no name 

// var funE=function(a,b){
//     return a+b;
// }
// console.log(funE(5,15));



// WELCOME TO ECMAScript


//ECS6 Updated on 2015

//1- LET AND CONST 
//2- TEMPLATES STRINGS
//3- DEFAULT ARGUMENTS 
//4- REST OPERATORS
//5- DESTRUCTURINGS
//6- OBJECT PROPERTIES
//7- ARROW FUNCTIONS
//8- SPREAD OPERATORS

//Now its time to moderm javascript 

// var --> function scope 
// let and const are --> Block Scope
// the measure differnce bettween let and var are scope var is function scope and let is block scope.


//templates literals

// for(let num=1;num<=10;num++){
//     let tableof=12;
//     console.log(`${tableof}*${num}=${tableof*num}`);
// }

//Default Parameters 
// function mult(a=7,b=5){
//     return a*b;
// }

// console.log(mult(5));


//fat arror functions

// const sum=(a,b) => `the sum of the two number is ${(a)+(b)} `;

// console.log(sum(50,90));

// array in javascript 
// let a=['yash','varshney','akshat','ram','prashant'];
// console.log(a.length);

//for in loop
// let a=['yash','varshney','akshat','ram','prashant'];
// for(let  Element in a ){
//     console.log(Element);
// }

//for of loop
// for(let  Element of a ){
//         console.log(Element);
//     }

//     for each loop
//     let a=['yash','varshney','akshat','ram','prashant'];

// a.forEach((element,index,array) =>{
//     console.log(element+"index :"+index +" "+array);
//  });

//Searching and filter in am array 


//index of 🔢
// let data=["vinod","bahadur","thapa","thapatechnical","thapa"];
// console.log(data.indexOf("thapa",3));



//Last Index of 🔢

// let data=["vinod","bahadur","thapa","thapatechnical","thapa"];
// console.log(data.lastIndexOf("thapa"));

//includes 🔢


// let data=["vinod","bahadur","thapa","thapatechnical","thapa"];
// console.log(data.includes("thapa"));


//filtration in javascript 🔢


// const prices = [200, 300, 350, 400, 500, 600];
// //price<400
// const findElem = prices.find((currentValue) => currentValue < 400);
// console.log(findElem);

// const prices = [200, 300, 350, 400, 500, 600];
// //price<400
// const findElem = prices.findIndex((currentValue) => currentValue < 400);
// console.log(findElem);

//filter in javascript 🔢

// const prices = [200, 300, 350, 400, 500, 600];
// //price<400
// const findElem = prices.filter((currentValue) => currentValue < 400);
// console.log(findElem);

//sort in javascript 🔢

// const month=['march','jan','feb','dec','nov'];
// console.log(month.sort());


// const prices = [1,30,4,21,100000,99];
// console.log(prices.sort());

//perfrom CRUD 🔢


//push 👍
// const animals=['pigs','goats','sheep'];
// const count=animals.push('chicken');
// console.log(animals);
// console.log(count);

//unshift 👍
// const animals=['pigs','goats','sheep'];
// const count=animals.unshift('chicken' ,'cow','dogs');
// console.log(animals);
// console.log(count);

//pop 💩
// const animals=['pigs','goats','sheep'];
// const count=animals.pop();
// console.log(animals);
// console.log(count);


//splice 👍
// const month=['march','jan','feb','dec','nov'];
// // const newmonth=month.splice(4,0,"yash");
// // const update=month.splice(5,5,"varshney");
// const update=month.splice(4,1);
// console.log(update);
// console.log(month);


//Map method in javascript 👍

// const array1=[1,4,9,16,25];
// let newArray=array1.map((currentValue,index,arr)=>
//  currentValue>9
// );

// console.log(newArray);
// const array1=[1,4,9,16,25];
// let newArray=array1.map((currentValue,index,arr)=>
//  `index no = ${index} and the value is ${currentValue} belong to ${arr}`
// );

// console.log(newArray);


// Find the square root of each element 

// let arr=[25,36,49,64,81];

// let arrSqr=arr.map((currentValue)=>
//  Math.sqrt(currentValue)
// );
// console.log(arrSqr);

// let arr1 = [2, 3, 4, 6, 8];
// let arrGre = arr1.map((currentValue) => currentValue * 2
// ).filter((currentValue) => currentValue > 10).reduce((accumulator,currentValue)=>accumulator+currentValue);
// console.log(arrGre);


//Reduce Method 🔢
// It is uase to flattern the 2d and 3d array into 1d array

// let arr=[5,6,2];

// let sum=arr.reduce((accumulator,curElem,index,arr)=>{
// return accumulator+curElem;
// });
// console.log(sum);


// 👍 String in javascript 

// Escape Character 
// Finding a String in a String 
// searching for a String in a String 
// Extracting String Parts
// Replacing String content
// Extracting string Character
// Other useful methods of String 

//   let myName="yash varshney";
//   console.log(myName.length);


// 🎱 Escape Character

// let any1 ="my name is \"yash varshney\" ";

// console.log(any1);


// let any ='my name is "yash varshney" ';

// console.log(any);

// 🎱Finding String in String

// const name="i am yash varshney";

// console.log(name.indexOf("yash"));


//Extracting String parts 🔢

//Slice method in string 
// slice() extract a part of a string and returns the extracted part to the new string
//methods takes two parameters the start position and the end position the start parameter is include but end parmeter is not include.  

// let str="Apple, banana, kiwi";
// let res=str.slice(0,5);
// let count=str.slice(7,-2);
// console.log(res + count);


// 🔢 Display only 280 charcter of a string like the one used in twitter
// let myTweets= "wndjwduhewhfgewufguhrfheurhfu3hfuhqwufhwbgfhbwhjdfbhjsbdfhgbvhgfbvhdsbbadsnhfhgdsvfhvsdshfbhdsbfhgbwhgfvhvwfhvsahdf ghds cv scb cb  cna chdbcvhhbvjbejfbjhewfueuhfhuqeya sh varshney bSGYUGQS Rhuahsipepsomajhhdhwjdhbhwjd  bdcbwdcbbhjhhuehfuhefuheufeu  yahhgdwjwheb  wbdhwegudgeuwhu yash varshney pepsi is a good coedr the hchudh cosechef jsdhwhdheufhiuehfhuf bweuhuhewuihfue  bwhehweihyfuiehufhjhbfjhsbdc hbduhggeqfuyerfiuygerf eurfihgfrgerygfyuerfyugeyfgywegfyewgfyugewyfgyewgfygewygfyuewgfyuewfgjcbnsbdcvnbcvmzxnbchjdsgjgwefyuewiruweytroiuwrqwewertyuiiooppnjjjaiiaiaooaoaoaoajjjjhjqwertyyuiioopplkkjjhhggffddssaazzxxccvvbbnnnmm,,,ll;;[]lsapxoksoijxoadcujhduvhuhdbnusuhurhgiuhrtghtrhgihreighiergiwerigitrgutrgiuoetr";

//  let myactualtweets=myTweets.slice(0,280);
//  console.log(myactualtweets);
//  console.log(myactualtweets.length);

//substring method 🔢

// let str="Apple, banana, kiwi";
// let res= str.substring(0,4);
// console.log(res);

//substr 🔢


// let str="Apple, banana, kiwi";
// let res= str.substr(-4);
// console.log(res);

//Replacing string content() 👍

// let myname="i am yash varshney";
// let res=myname.replace("yash", "akshat");
// console.log(res);
// console.log(myname);


// Extracting String Characters 👍


//CharAt 🔢
// let str="HELLO WORLD";
// console.log(str.charAt(0));

//CharCodeAt 🔢

// let str="HELLO WORLD";
// console.log(str.charCodeAt(0));

// trim method 👍

// let str="      HELLO WORLD       ";
// console.log(str.trim());


 //converting a string into array 👍

//  let txt="a,b,c,d,e,f";
//  console.log(txt.split(","));
//  console.log(txt.split(" "));


//
//
//Date and time in javascript 🔢

//Javascript Date objects represent a single moment in time in a platform-independent format. Date objects contains a number that rpresents milliseconds since 1 January 1970 UTC.

// Date objects are created with the new Date() constructor.

// let currDate=new Date();
// console.log(currDate.toString());
// console.log(currDate.toLocaleString());

// 📅 Date now give the millisecond in return 

// console.log(Date.now());

let Date_cur=new Date(2022,7,9,18,27,26,0);
console.log(Date_cur.toLocaleString());







