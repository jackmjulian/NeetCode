function getConcatenation(nums) {
  let newArray = nums;

  for (let num in nums) {
    newArray.push(nums[num]);
  }

  return newArray;
}

const nums = [1, 2, 1];

console.log(getConcatenation(nums));
