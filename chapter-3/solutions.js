// Exercises
// 1 — Write a function min that takes two args and returns their minimum

const min = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error('Args have to be numbers');
  if (num1 === num2) return num1

  if (num1 > num2) {
    return num2
  } else {
    return num1
  }
}

// console.log(min(1, 2))
// console.log(min(50, 43))

// 2 — Define a recursive function isEven.
// The function should accept a single parameter (a positive, whole number) and return a Boolean
// test on 50, 75, and -1

const isEven = (number) => {
  if (typeof number !== 'number') throw new Error('Argument is not a number');
  if (number < 0) return isEven(-number);

  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false
  } else {
    return isEven(number - 2)
  }

}

// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))

// 3 — Bean counting
/*
  1. Write a function countBs that takes a string as its only arg and returns a number that
  indicates how many uppercase "B"s are present
*/

const countBs = (string) => {
  if (typeof string !== 'string') throw new Error('Not a string');

  let letterCount = 0, left = 0, right = string.length - 1
  while (left <= right) {
    if (string[left] === 'B') letterCount += 1
    if (left !== right && string[right] === 'B') letterCount += 1

    left += 1
    right -= 1
  }
  return letterCount
}

// console.log(countBs('Bear in the Big Blue House')) // 3
// console.log(countBs('BBBBBB')) // 6
// console.log(countBs('Vacation')) // 0

const countChar = (string, delimiter) => {
  if (typeof string !== 'string') throw new Error('Not a string');

  let letterCount = 0, left = 0, right = string.length - 1
  while (left <= right) {
    if (string[left] === delimiter) letterCount += 1
    if (left !== right && string[right] === delimiter) letterCount += 1

    left += 1
    right -= 1
  }
  return letterCount
}

console.log(countChar('Bear in the Big Blue House', 'e')) // 4
console.log(countChar('Vacation', 'a')) // 2