// * The sum of a range
/*
Write a function that takes two arguments, start and end, and returns an array containing
all the numbers between start and end

func (1,4) => [1,2,3,4]
*/

const rangeArr = (start, end) => {
  const result = []
  if ((typeof start !== 'number') || (typeof end !== 'number')) {
    throw new Error('Both start and end must be numbers')
  }

  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

console.log('rangeArr',rangeArr(1,10))