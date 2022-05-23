const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
    shoe_size: '20'
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
    shoe_size: '50'
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
    shoe_size: '20'
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
    shoe_size: '2'
  },
];

let myListOfNames = characters.map(user => {
  return user.name;
})

let allShoeSizes = characters.map(x => {
  return x.shoe_size;
})
// console.log(allShoeSizes);


let MyListOfHeights = characters.map(user => {
  return user.height
})
let HeightsName = characters.map(user => {
  return user.name + " " + user.height;
})

let firstNames = characters.map(user => {
  return user.name.split(' ')[0];
})

//console.log(HeightsName);

let sum = 0;

characters.forEach((x) => {

  let massValue = parseInt(x.mass);
  sum += massValue;
  return sum
})

let massChar = characters.reduce((accum, current) => {
  accum += parseInt(current.mass);
  return accum;

}, 0)

let totalHeight = characters.reduce((accum, current) => {
  accum += parseInt(current.height);
  return accum

}, 0)

let totalCharacters = characters.reduce((accum, currentvalue) => {
  accum += (currentvalue.name.split('').length - 1);
  return accum;
}, 0)

let charEye = characters.reduce((accum, currentvalue) => {
  let color = currentvalue.eye_color
  accum[color] += 1
  return accum;
}, { brown: 0, blue: 0, yellow: 0 })


let charGreater100 = characters.filter((people) => {
  return people.mass >= 100



})
let charLessThan200 = characters.filter((people) => {
  return people.height <= 200



})

let isMale = characters.filter((people) => {
  return people.gender == 'male';



})
let isFemale = characters.filter((people) => {

  return people.gender == 'female';



})

//console.log(isFemale);

let sortByName = characters.sort((a, b) => {
  return a.name - b.name;
});
// console.log(sortByName);


let sortMass = characters.sort(function (a, b) {
  return a.mass - b.mass;
})
console.log(sortMass);

let sortHeight = characters.sort(function (a, b) {
  return a.height - b.height;

})

let sortGender = characters.sort(function (a, b) {
  return a.gender - b.gender;
})
// console.log(sortGender);

let blueEyes = characters.every((eye_color) => {
  return eye_color == 'blue';
});

let massMore40 = characters.every((mass) => {
  return mass > '40';
})

let tallerThan200 = characters.every((height) => {
  return height > 200;
})

letGender = characters.every((gender) => {
  return gender == 'male';
})
// console.log(letGender);
let checkForMales = characters.some(characters => characters.gender == 'male');

let blueEyes2 = characters.some(characters => characters.eye_color == 'blue')

let tall200 = characters.some(characters => characters.height > 200)
//console.log(tall200);
let less50 = characters.some(characters => characters.mass < 50);
// console.log(less50)


//console.log(checkForMales);



//console.log(charEye);

// console.log(totalCharacters);
// console.log(totalHeight);









let myOwnLessThan100Mass = characters.filter((x) => {
  return x.mass < 100
})
// console.log(myOwnLessThan100Mass)

// let getShoeSum = characters.reduce((accum, currentValue) => {
//   accum = + parseInt(currentValue.shoe_size);
// }, 0)
// console.log(getShoeSum);

let getShoeSum1 = characters.reduce((accum, currentValue) => {
  sum = accum + parseInt(currentValue.shoe_size)
  return sum;
}, 0)
// console.log(getShoeSum1);
// MAP
// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names
// REDUCE OR FOREACH
// My own question get the total number shoe size sum of all characters
// Get the total mass of all characters 
// Get the total height of all characters
// Get the total number of characters in all the character names
// Get the total number of characters by eye color(hint.a map of eye color to count)
// FILTER
// Get characters with mass greater than 100
// Get characters with height less than 200
// My own practice- get characters with mass less than 100
// Get all male characters
// Get all female characters
// SORT
// Sort by name
// Sort by mass
// Sort by height
// Sort by gender
// EVERY
// Does every character have blue eyes ?
//   Does every character have mass more than 40 ?
//     Is every character shorter than 200 ?
//       Is every character male ?
// SOME
// Is there at least one male character ?
//   Is there at least one character with blue eyes ?
//     Is there at least one character taller than 200 ?
//       Is there at least one character that has mass less than 50 ?
//         Bonus
// Redo the filter and map functions challenges, but do them with reduce / forEach
// come up with your own and use different methods you have not used
// add tests