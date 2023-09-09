var filter = function (arr, fn) {
  const newAr = [];
  for (let i = 0; i < arr.length; i++) {
    const result=fn(arr[i], i);
    if(result!=false){
        newAr.push(arr[i]);
    }
  }
  return newAr;
};
const plusOne = function (n) {
  return n+1;
};
const arr = [-2,-1,0,1,2];
console.log(filter(arr, plusOne));
