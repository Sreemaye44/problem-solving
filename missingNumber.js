function missingNumber(nums){
   nums.sort(function(a,b){
    return a-b;
   })
   let i=0;
   if(nums[i]!==0){
    return 0;
   }
    for(let i=0; i<nums.length; i++){
        if(nums[i+1]!==nums[i]+1){
              return nums[i]+1;
        }
    } 
   // return nums;
}
const nums=[1]
console.log(missingNumber(nums));