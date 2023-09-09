const zeroSum=(ar)=>{

   let left=0;
   let right=ar.length-1;

   while(left<right){
    let sum=ar[left]+ar[right];

    if(sum===0){

        return[ar[left], ar[right]];
    }

    else if(sum>0){
         right--;

    }
    else  left++;
   }
}

const zeroSumContainer=zeroSum([-5,-4,-3,-2,-1, 0,1,2,4,6])

console.log( zeroSumContainer)
