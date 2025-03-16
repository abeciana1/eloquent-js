// * everything

// * loop version

const every = (array, test) => {
  for (let el of array) {
    if(!test(el)) return false
  }
  return true
}

// console.log(every([1, 3, 5], n => n < 10));
// // → true
// console.log(every([2, 4, 16], n => n < 10));
// // → false
// console.log(every([], n => n < 10));
// // → true

const every2 = (array, test) => {
  return !array.some((element) => !test(element))
}

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true