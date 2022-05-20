// variables + Data Types

// in JS three ways to declare a variable 1. var(old), 2. let (new), 3. const

var x = 1;// works but outdated
let y = 1; //preffered (bit more strict)


// convention to upcase constants that dont change;
const PI = 3.14
PI = 2.5; //this causes an error cannot reassign a const.
const age = getAge()
// wont change after I define it
//
const add = () => { }

const Add = () => { }


console.log(typeof 1); // number
console.log(typeof typeof 1); // string
console.log(typeof "yo"); // string
console.log(typeof 1.2); // number
console.log(typeof []); // object: huh?
console.log([] instanceof Array); // true: see it is an array
console.log(typeof { yo: "asdf" }); // object
console.log({ yo: "asdf" } instanceof Object); // true
console.log(typeof true); // boolean
typeof null // object

const season = "spring";

if (season === "spring") {
  console.log("yeah for spring");
} else if (season === "summer") {
  console.log("yeah for Summer");
} else if (season === "fall") {
  console.log("yeah for fall");
} else {
  console.log("yeah for winter");
}

// switch - another if else if (preffered if 3 or more)
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
switch (season) {
  case "spring":
    console.log("yeah for spring");
    break; // exit this switch statment
  case "summer":
    console.log("yeah for summer");
    break;
  case "fall":
    console.log("yeah for summer");
    break;
  default:
    console.log("yeah for winter");
    break;
}

let num = 5
let isOdd

// if(num % 2 === 0){
//     isOdd =false
// } else {
//     isOdd = true
// }

// ternary
isOdd = num % 2 === 0 ? false : true

console.log(isOdd)



// let x = undefined // falsey
// let x // falsey
// let x = false// falsey
// let x = 0 // falsey
// let x = null // falsey
// let x = -0 // falsey
// let x = NaN //falsey
//let x = '' //falsey
// let x = 0n //falsey
// console.log(typeof 0n) //bigint

// let x = 10 // truthy
//  let x = 'hello' // truthy
// let x = true// truthy
// let x = 1 // truthy
// let x = -10 // truthy
// let x = []// truthy
// let x = {}// truthy

if ({}) {
  console.log('true/truthy')
} else {
  console.log('false/falsey')
}






















