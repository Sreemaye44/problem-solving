// count the number of arrays inside a given array.
function test(arr_nums) {
  return arr_nums.filter((n) => Array.isArray(n)).length;
}
arr_nums = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
console.log("Number of arrays inside the said array: " + test(arr_nums));
arr_nums = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];
console.log("Number of arrays inside the said array: " + test(arr_nums));
//JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

function test(arr){
    const index=arr.map((el, i)=>{
       if(isNaN(el)){
        return i;
       }
       else {
        return false;
       }
    })
    return index.filter(el=>el)

}
arr_nums = [2, NaN, 8, NaN, 32];
console.log(test(arr_nums));
//Write a JavaScript program that takes an array of numbers and returns the third smallest number.

function thirdSmall(){
   const sortedArray= nums.sort((a,b)=>b-a)
   return nums[sortedArray.length-3];
}
nums = [2, 3, 5, 7, 1];
console.log(thirdSmall(nums));

//remove unique character in an array

let charss = ["A", "B", "A", "C", "B"];

let uniqueCharss = charss.filter((c, index) => {
  return charss.indexOf(c) === index;
});

console.log(uniqueCharss);

//-----------------or-----------------//
let chars = ["A", "B", "A", "C", "B"];

let uniqueChars = [];
chars.forEach((c) => {
  if (!uniqueChars.includes(c)) {
    uniqueChars.push(c);
  }
});

console.log(uniqueChars);

//Write a JavaScript function to clone an array.
var array_Clone = function (arra1) {
  return arra1.slice(0);
};

//Write a JavaScript function to get the first element of an array.
// Passing the parameter 'n' will return the first 'n' elements of the array.