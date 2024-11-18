// looping a triangle
let limit = 8;
let output = ''

for (let i = 0; i < limit; i++) {
  output = "#" + output
  console.log(output) 
}

// fizzbuzz
const fizzBuzz = (limit) => {
  for(let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(100)

// chessboard
let size = 8;
let board = "";

const chessBoard = () => {
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      (row + col) % 2 === 0 ? board += " " : board += "#" 
    }
    board += "\n";
  }
  console.log(board)
}

chessBoard()