var productExceptSelf = function (nums) {
  //left array: multiply all left elements (i no element e bosbe i-1 porjnto multi)
  //right array: multiply all right elements (i no element e bosbe i-1 porjnto multi)
  let left = [];
  let right = [];
  let ans = [];
  left[0] = 1;
  right[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let i = nums.length - 2; i > -1; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    ans[i] = left[i] * right[i];
  }
  return ans;
};
console.log(productExceptSelf([3,4,6,1,2]))
