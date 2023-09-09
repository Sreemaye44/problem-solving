var kidsWithCandies = function (candies, extraCandies) {
   let booleanArray=[];
    const maxCandies=Math.max(...candies);
    for(let i=0; i<candies.length; i++){
        const totalCandies=candies[i]+extraCandies;
        if(totalCandies<maxCandies){
            booleanArray.push(false)
        }
     else{
        booleanArray.push(true);
     }
    }
    return booleanArray;
};
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));