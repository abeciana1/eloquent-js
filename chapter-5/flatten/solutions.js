// * flatten

let arrays = [[1, 2, 3], [4, 5], [6]];
//* → [1, 2, 3, 4, 5, 6]

let flattened = arrays.reduce((acc, val) => {
  return acc.concat(val)
}, []);

console.log(flattened);