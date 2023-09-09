var reduce = function (arr, fn, init) {
    let result=init;
    if(arr.length<1){
        return result;
    }
  for (let i = 0; i < arr.length; i++) {
     result=fn(result,arr[i]);
    
  }
  return result;
};
const plusOne = function (accum, curr) {
  return 0;
};
const arr = [];
const init=25;
console.log(reduce(arr, plusOne, init));
