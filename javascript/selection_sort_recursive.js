function selectionSortRecursive(arr) {
  if (arr.length < 2) {
    return arr
  }

  const min = Math.min(...arr)
  const index = arr.indexOf(min)
  arr.splice(index, 1)

  return [min, ...selectionSortRecursive(arr)]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("Expecting: [1, 5, 7, 9]")
  console.log("=>", selectionSortRecursive([1, 9, 7, 5]))

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
