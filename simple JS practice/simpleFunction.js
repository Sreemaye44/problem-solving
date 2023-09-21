// <-----------arrow function--------------------->
const sum = (a, b) => a + b;

console.log(sum(2, 3))
// <-----------find max from array--------------------->
const ar=[2,5,2,8,39,9]
const maximum = Math.max(...ar);
console.log("🚀 ~ file: simpleFunction.js:8 ~ maximum:", maximum)

//--------------------if string is palindrome----------------------->

const str = "Helleh";
const lowerStr = str.toLocaleLowerCase();
const newStr = lowerStr.split("").reverse().join('');
if (lowerStr === newStr) {
    console.log(true);
}
else {
    console.log(false);
}

//------------------find even numbers----------------------

function evenNumbers(ar) {
   
    return ar.filter(el=>el%2===0)
}
console.log("🚀 ~ file: simpleFunction.js:25 ~ evenNumbers ~ evenNumbers:", evenNumbers([3, 54, 2, 54, 1, 4, 80]))

// factorial of given number-----------------------------------

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;

    }
    else {
       return num * factorial(num - 1);
    }
}

console.log(factorial(4));

//--------------check if prime or not --------------------------//

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0)
        {
            return false;
            }
    }

    return true;
}
console.log(isPrime(15))


