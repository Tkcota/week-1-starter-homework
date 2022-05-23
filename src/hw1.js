
//function that takes a number and doubles it
const internal = require("assert");

// yarn jest -t 'test doubleNumber'
const doubleNumber = (num) => {
  num = num * 2;
  // or num *=2;
  return num;
  // TODO
};



/// function that takes a number and returns 'odd' or 'even'
// yarn jest -t 'test isOddOrEven'
const isOddOrEven = (num) => {
  if (num % 2 == 0) {
    return "even"
    // number is even
  } else {
    return "odd"
    // number is odd
  }
  // TODO
};

//function that return a random number 0-5
// yarn jest -t 'test randomNumber'
const randomNumber = (maxLimit = 5) => {
  let rand = Math.random() * maxLimit;
  console.log(Math.round(rand));
  return Math.round(rand);

  // TODO
};

/// function that takes two numbers num and 'opp'
/// opp can be +, -, /, or *
// yarn jest -t 'test randomNumber'
const calc = (num1, num2, opp) => {
  if (opp === '+') return num1 + num2;
  if (opp === '-') return num1 - num2;
  if (opp === '*') return num1 * num2;
  if (opp === '/') return num1 / num2;

  return calc(num2, num1, opp);

  // TODO
};

//function that takes a string and return the number of vowels it has
// *lowercase only, and never count y
// yarn jest -t 'test vowelCount'
const vowelCount = (str) => {

  let vowelsCount = 0;

  //turn the input into a string
  let string = str.toString();

  //loop through the string
  for (let i = 0; i <= string.length - 1; i++) {

    //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};


// TODO


/// function that takes an array of numbers and returns sum
// yarn jest -t 'test getSum'
const getSum = (numbers) => {
  return numbers.reduce(function (a, b) {
    return a + b;
  })





  // TODO
};

/// function that takes an array of numbers and returns highest num
// yarn jest -t 'test getHighNum'
const getHighNum = (numbers) => {
  let highestValue = numbers[0];
  numbers.forEach((num) => {
    if (num > highestValue) {
      highestValue = num

    }
  })
  return highestValue;
}
// TODO

/// function that takes an array of numbers and returns lowest num
// yarn jest -t 'test getLowNum'
const getLowNum = (numbers) => {
  // let lowestValue = numbers[0];
  // numbers.forEach((num) => {
  //   if (num < lowestValue) {
  //     lowestValue = num;
  //   }
  // })
  // return lowestValue;

  let lowestValue = numbers[0];
  if (numbers[1] < lowestValue) {
    lowestValue = numbers[1];
    if (numbers[2] < lowestValue) {
      lowestValue = numbers[2];
      if (numbers[3] < lowestValue)
        lowestValue = numbers[3];
      if (numbers[4] < lowestValue)
        lowestValue = numbers[4];
    }
  }
  return lowestValue;


}






// TODO

/// function that takes an array of numbers and returns true if sorted (low to high only)
// yarn jest -t 'test isSorted'
const isSorted = (numbers) => {
  let firstNumIndex = 0;
  let secondNumIndex = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[secondNumIndex] - numbers[firstNumIndex] >= 0) {
      firstNumIndex++;
      secondNumIndex++;
    }
  }
  if (secondNumIndex === numbers.length) {
    return true;
  }
  else {
    return false;
  }


  // TODO
};

//  write a function that takes a number (0-100)
//  return 'fizz' if only divisible by 3
//  return 'buzz' if only divisible by 5
//  return 'fizzbuzz' if divisible by  3 and 5
//  return the number if none apply
// yarn jest -t 'test fizzbuzz'
const fizzbuzz = (num) => {
  // for (num = 0; num <= 100; num++) {
  //   if (num % 3 == 0) { return ("fizz") }
  //   else if (num % 5 == 0) {
  //     return ("buzz")
  //   } else if (num % 3 == 0 && num % 5 == 0) {
  //     return ("fizzbuzz")

  //   } else {
  //     return (num)
  //   }
  // }
  //}
  // for (num = 0; num <= 100; num++) {
  if (num % 3 == 0 && num % 5 == 0) {
    return ("fizzbuzz")
  } else if (num % 3 == 0) {
    return ("fizz")
  } else if (num % 5 == 0) {
    return ("buzz")
  } else {
    return (num)
  }
}


//correct answer above

//TODO
//};

module.exports = {
  doubleNumber,
  vowelCount,
  isOddOrEven,
  calc,
  getHighNum,
  getLowNum,
  getSum,
  isSorted,
  fizzbuzz,
  randomNumber,
  calc
};
