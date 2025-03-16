//*  → 3
//*  → 2
//*  → 1

const loop = (start, testFn, updateFn, bodyFn) => {
  for (let value = start; testFn(value); value = updateFn(value)) {
    bodyFn(value);
  }
}

console.log(loop(3, n => n > 0, n => n - 1, console.log))