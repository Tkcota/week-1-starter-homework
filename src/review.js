// variables + Data Types

// in JS three ways to declare a variable 1. var(old), 2. let (new), 3. const

var x = 1;// works but outdated
let c = 1; //preffered (bit more strict)


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



const myFilter = (arr, func) => {
  let itemsToKeep = []
  arr.forEach((currentItem) => {
    // how do i know if I want to keep the thing
    // when i don't even know what the thing is.
    // ok if you(the person using myFilter) give me
    // a function that return true when give the thing then
    // i can make
    if (func(currentItem)) {
      itemsToKeep.push(currentItem)
    }
  })
  return itemsToKeep

}

let x = myFilter([1, 2, 3, 4, 5], (num) => {
  return num % 2 === 0
})
let y = myFilter([{ name: 'tony', age: 21 }, { name: 'bob', age: 12 }], (person) => person.age >= 21)
console.log(x)
console.log(y)


const myForEachLoop = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}

let yo = myForEachLoop([1, 2, 3, 4, 5], (thing) => { console.log(thing) })
console.log(yo)

// goes in the array calls function and what that function is pushed into 
// in a new array. and at the that array is returned
const myMap = (arr, func) => {
  let itemsToReturn = []
  for (let i = 0; i < arr.length; i++) {
    // create a new thing with the function they give me
    let newThing = func(arr[i])
    itemsToReturn.push(newThing)
  }
  return itemsToReturn
}

let yo1 = myMap([1, 2, 3, 4, 5], (thing) => thing * 2)
console.log(yo1) //



let nums = [1, 2, 3, 4]

// some random task with reduce
let total = nums.reduce((accum, currentItem) => {
  console.log('accum:', accum)
  console.log('currentItem:', currentItem)
  console.log('currentItem: + accum:', currentItem + accum)

  // what this function returns becomes the next accum
  return accum + currentItem
}, 0)

console.log(total)

// filter with reduce
let evens = nums.reduce((accum, currentItem) => {
  if (currentItem % 2 === 0) {
    accum.push(currentItem)
  }
  console.log('accum:', accum)
  return accum
}, [])

console.log(evens)


// map with reduce
let html = nums.reduce((accum, currentItem) => {
  accum.push(`<p>${currentItem}</p>`)
  return accum
}, [])
console.log(html)

















