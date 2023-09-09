var majorityElement = function (nums) {
   let numbers = {};
   for (let i = 0; i < nums.length; i++) {
     if (numbers[nums[i]]) {
       numbers[nums[i]]++;
     } else {
       numbers[nums[i]] = 1;
     }
   }
   for (let key in numbers) {
     if (numbers[key] > nums.length / 2)
      {

        return key;
      }
   }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2,1,1,2,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3]));
