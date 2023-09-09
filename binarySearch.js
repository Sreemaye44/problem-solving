const search= (nums, target)=> {
    let low= 0;
    let high= nums.length - 1;
    //console.log("🚀 ~ file: binarySearch.js:4 ~ search ~ high:", high)
    

    while(low<=high){
        let mid = Math.floor(low + (high - low) / 2);
    if(nums[mid]===target){
        return mid;
    }
    else if(target>nums[mid]){
        low=++mid;
    }

    else {
         high=--mid;
    }

   
}
return -1;
    
};

const nums=[-1,0,3,5,9,12];
const target=9;
console.log(search(nums, target));