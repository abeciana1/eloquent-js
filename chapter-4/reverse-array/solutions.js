// * Reversing an array
/*
  * write 2 functions - reverseArray && reverseArrayInPlace
  * reverseArray => takes arr as arg and produces new array, same elements but in reverse order
  * reverseArrayInPlace => does what reverseArray is doing, but modified the array in the argument
  *
  * Can't use reverse method
*/

const reverseArray = (arr) => {
  if (arr.length < 1) throw new Error('array has no elements');
  if (arr.length === 1) return arr
  const reversedArr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i])
  }
  return reversedArr
}

// console.log('reverseArray', reverseArray(['start', 'middle', 'end']))
// console.log('reverseArray', reverseArray([1,2,3,4,5,6,7,8,9,10,11]))


// const reverseArrayInPlace = (arr) => {
//   if (arr.length < 1) throw new Error('array has no elements');
//   if (arr.length === 1) return arr

  // let len = arr.length,
  //     mid = Math.floor(len / 2),
  //     hold = null

  // for (let i = 0; i < mid; i++) {
  //   hold = arr[i]
  //   arr[i] = arr[len - 1 - i]
  //   arr[len - 1 - i] = hold
  // }

//   let left = 0
//   let right = arr.length - 1

//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]]
//     left++
//     right--
//   }
//   return arr
// }

// console.log('reverseArrayInPlace', reverseArrayInPlace(['start', 'middle', 'end', 'extra'])) 

// const getReversedArrayView = (arr) => {
//   return new Proxy(arr, {
//     get(target, index) {
//       if (typeof index === 'string' && !isNaN(index)) {
//         index = Number(index);
//         return target[target.length - 1 - index]; // Access in reverse order
//       }
//       return target[index]; // Default behavior
//     }
//   });
// };

// const arr = ['start', 'middle', 'end', 'extra'];
// const reversedArr = getReversedArrayView(arr);
// console.log('reversedArr', getReversedArrayView(arr))

// const createFullyReversedArrayProxy = (arr) => {
//   return new Proxy(arr, {
//     get(target, prop) {
//       if (prop === "length") return target.length; // Maintain correct length
//       if (prop in Array.prototype) {
//         return (...args) => [...target].reverse()[prop](...args); // Handle iteration
//       }
//       if (!isNaN(prop)) {
//         return target[target.length - 1 - Number(prop)]; // Reverse element access
//       }
//       return target[prop]; // Default fallback
//     }
//   });
// };

// // Example
// const arr = ["start", "middle", "end", "extra"];
// const reversedArr = createFullyReversedArrayProxy(arr);
// // console.log("reversedArr", [...reversedArr]);
// console.log(reversedArr.map((x) => x.toUpperCase()))