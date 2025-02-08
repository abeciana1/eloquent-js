// * The sum of a range
/*
Write a function that takes two arguments, start and end, and returns an array containing
all the numbers between start and end

func (1,4) => [1,2,3,4]
*/

// const rangeArr = (start, end) => {
//   const result = []
//   if ((typeof start !== 'number') || (typeof end !== 'number')) {
//     throw new Error('Both start and end must be numbers')
//   }

//   for (let i = start; i <= end; i++) {
//     result.push(i)
//   }
//   return result
// }

// console.log('rangeArr', rangeArr(1,10))

// * part 2
/*
  * Take the array in previous func and return sum of the number elements

  * Example: 
  * sum([1,2,3,4,5]) => 15 // 1 + 2 + 3 + 4 + 5
  * sum([1,2]) => 3 // 1 + 2
*/

const sum = (rangeArr) => {
  let totalSum = 0
  for (let i = 0; i < rangeArr.length; i++) {
    totalSum += rangeArr[i]
  }
  return totalSum
}

// console.log('sum array', sum(rangeArr(1,5)))

// * Part 3
/*
  * bonus add optional step arg to rangeArr
  * if step is provided, increment + step
  * if step is not provided, increment  +1
*/ 

const rangeArr = (start, end, step = 1) => {
  const result = []
  if ((typeof start !== 'number') || (typeof end !== 'number')) {
    throw new Error('Both start and end must be numbers')
  }

  for (let i = start; i <= end; i += step) {
    result.push(i)
  }
  return result
}

console.log('range array with step arg', rangeArr(1,10)) // [1,2,3,4,5,6,7,8,9,10]
console.log('range array with step arg', rangeArr(1,10, 2)) // [1,3,5,7,9]