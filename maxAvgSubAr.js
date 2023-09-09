var maxAvgSubAr = function (nums, k) {
  //sliding window algorithm
  let sum=0;
  let ans=0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
   ans=sum/k;
  }
  for(let j=k; j<nums.length; j++){
      sum += nums[j];
      sum-=nums[j-k];
     let  num=sum/k

       if(ans<num){
       ans=num;
       }
  }
  return ans;
};
console.log(maxAvgSubAr([0, 4, 0, 3, 2], 1));
