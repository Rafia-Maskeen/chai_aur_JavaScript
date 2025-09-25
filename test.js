// console.log("Rafia Maskeen")
// const accountId = 144553
// let accountEmail = "rafia@gmail.com"
// var accountPassword = "12345"
// accountCity ="Rajdhani"
// let accountState;

// accountId = 2  // Not Allowed
// accountEmail ="rafi@gamil.com"
// accountCity ="Kotli"

// console.log(accountId)
// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// ############## DATA TYPES ##########################
"use strict";
// alert(3 + 3)  // we are using node.js not browser
let name = "Rafia"
let age = 18
let isLoggedIn = false
let state;

//number => 2 to power 53
// bigint
// string => ""
// boolean => tru/false
// null => standalone value
// undefined =>
// symbol => unique


// object 
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object

//################## DATA CONVERSION #######################
// let score = 33
// console.log(typeof score);
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

//############## OPERATIONS #########################

let value = 3
let negVAlue = -value
// console.log(negVAlue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

// let str1= "hello"
// let str2="RAFIA"
// let str3= str1+str2
// console.log(str3)

//###################### COMPARISON OF DATATYPE ##########################
// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1);
// console.log("02">1);

// console.log(null >0);
// console.log(null ==0);
// console.log(null >=0);

//############### SUMMARY OF DATATYPES ################
//********** PERMITIVE DATATYPE ************/
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// const score = 100
// const scoreValue = 100.3

// const isLogedIn = false
// const outsideTemp = null
// let userEmail;

// const id=Symbol('123')
// const idanother=Symbol('123')

// console.log(id===idanother)
// const bigNumer = 12322437499344444444444457712n

//*********** REFERENCE TYPE/NON-PERMITIVE ***********/
// Arrays, Objects, Functions

// const heros = ["shaktiman", "hunhhh", "doga"];
// let myobj={
//     name:"rafia",
//     age:22,
// }
// const myFunction=function(){
//     console.log("HELLO WORLD");
    
// }

//############## STACK & HEAP ######################
// Stack(Permitive), Heap(non-primitive)

let myFunctions="rafia"
let anotherName= myFunctions
anotherName="chai aur code "
// console.log(anotherName);
// console.log(myFunctions);

let user ={
    email:"rafia@gmail.com",
    upi:"user@ybl"
}
let user2 =user 
user2.email= "rafiamaskeen@gmail.com"

console.log(user2);
console.log(user);
