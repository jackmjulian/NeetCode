function TwoSum(nums, target) {
  // create an empty map
  let numsMap = new Map();

  // iterate through elements
  for (let i = 0; i < nums.length; i++) {
    // set variable for the difference in the target value and our current looped item
    const difference = target - nums[i];
    if (numsMap.has(difference)) {
        // if the map has this, then return the [index, and get the map index]
      console.log(nums[i], difference);
      return [i, numsMap.get(difference)];
    } else {
        // else we add the num to the map to keep on checking on each loop
      numsMap.set(nums[i], i);
    }
  }
  // set a variable for the difference of the target - the current looped num
  // if the map has the difference then return the num and the difference
}

const nums = [2, 7, 11, 15];
const target = 9;

console.log(TwoSum(nums, target));
