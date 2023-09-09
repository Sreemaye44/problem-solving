const search = (nums, target) => {
  let i = 0;
  let j = nums.length - 1; 
  if(target<nums[i]){
    return i;
  }
  if(target>nums[nums.length-1]){
    return j+1;
  }

  function binarySearch(i, j) {
    while (i <= j) {
      const mid = Math.floor((i + j) / 2);
      if (nums[mid] === target) {
        // console.log(mid);
        return mid;
      } else if (nums[mid] > target) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
   return i;
  }
  return binarySearch(i, j);
};

const nums = [2, 3, 5, 7, 8];
const target = 1;
const result= search(nums, target);
console.log(result);
