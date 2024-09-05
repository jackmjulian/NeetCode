function containsDuplicates(nums) {
    // create an new set
  const numSet = new Set();

  // iterate through each num
  for (let num in nums) {
    // variable for current num
    let currentNum = nums[num];

    // if the set already includes the current number then return true
    if (numSet.has(currentNum)) {
      return true;
    } else {
        // add current number to the set
      numSet.add(currentNum);
    }
  }
  return false;
}

// const nums = [1, 2, 3, 1];
const nums = [1, 2, 3, 4];

console.log(containsDuplicates(nums));
