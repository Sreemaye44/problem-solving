var subtractProductAndSum = function (n) {
    let sum=0; let product=1;
       while(n>0){
     let remainder = n % 10;
         console.log("🚀 ~ file: subProductAndSumOfDigits.js:5 ~ subtractProductAndSum ~ remainder:", remainder)
         sum += remainder;
         product=product*remainder;
         n=Math.floor(n/10);
       }
       return product-sum;
    
};
console.log(subtractProductAndSum(234))

