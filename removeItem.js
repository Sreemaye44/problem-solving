const removeItem=(nums, val)=>{

    let i=0;
    let j=0;

    while(i<nums.length){
        if(nums[i]!==val){
            nums[j]=nums[i];
            j++;
        }
        i++;
    }

    return j;
}

const nums=[3,2,2,3];
const val=3;
console.log(removeItem(nums, val));