/*
Write a func arrayToList 

list structure
* list : { 
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  }

  example arr = [1,2,3]
*/

// const arrayToList = (arr) => {
//   if (arr.length === 0) return {}
//   if (arr.length === 1) return { value: arr[0], rest: null}
//   let head = { value: arr[0], rest: null }
//   let tail = head

//   // let resultList = null
//   // for (let i = arr.length - 1; i >= 0; i--) {
//   //   resultList = {value: arr[i], rest: resultList};
//   // }

//   for (let i = 1; i < arr.length; i++) {
//     tail.rest = { value: arr[i], rest: null }
//     tail = tail.rest
//   }
//   return head
// }

// console.log(arrayToList([1,2,3]))

/*
  * listToArray
*/ 

const exampleList = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

const listToArray = (list) => {
  let array = []
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array
}

// console.log(listToArray(exampleList))

const prepend = (value, list) => {
  return { value: value, rest: list}
}

console.log(prepend(500, exampleList))

const nth = (arr, idx) => {
  if (arr.length < 1) return null
  if (arr.length === 1) return arr[0]
  return arr[idx]
}

// console.log(nth(listToArray(exampleList), 2))

