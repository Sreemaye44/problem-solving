var maxSubArray = function (nums) {
// sliding window algorithm, jodi porer jon minus thake tahole add hobe sum er sathe.
//but sum i jodi minus thake tahole tar sathe plus wala keo add hobe na
    let maxSum=nums[0];
    let sum=nums[0];

    for (let i=1; i<nums.length; i++){   
     if(sum>=0){
        sum=sum+nums[i];
     }
     else{
        sum=nums[i];
     }

        if(maxSum<sum){
            maxSum=sum;
        }
      
    }
      return maxSum;
    
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));