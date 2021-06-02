function recursiveCount(num = 0) {
  // type your code here
  if (num > 9) {
    return
  }
  console.log(num)
  num++
  recursiveCount(num)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file

// have to call recursive count on it self; base case is num < 10; each time it should console.log the num and increase the num by 1

// And a written explanation of your solution
