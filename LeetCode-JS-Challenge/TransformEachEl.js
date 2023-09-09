var map = function (arr, fn) {
  const newAr = [];
  for (let i = 0; i < arr.length; i++) {
    newAr.push(fn(arr[i],i));
  }
  return newAr;
};
const plusOne = function () {
  return 42;
}
const arr = [1, 2, 3];
console.log(map(arr, plusOne));
