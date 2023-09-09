var thirdMax = function (nums) {
  var numss = removeDuplicates(nums);
  let firstMaximum = Math.max(numss[0], numss[1], numss[2]);

  let thirdMaximum = Math.min(numss[0], numss[1], numss[2]);
  
  var secondMaximum = findSecondMax(numss);
 
  if (numss.length < 2) {
    return numss[0];
  }
  if (numss.length < 3) {
    return Math.max(numss[0], numss[1]);
  }
  for (let i = 3; i < numss.length; i++) {
    if (numss[i] > thirdMaximum && numss[i] < secondMaximum) {
      thirdMaximum[numss[i]];
    } else if (numss[i] > secondMaximum && numss[i] < firstMaximum) {
      thirdMaximum = secondMaximum;
      secondMaximum = numss[i];
    } else if (numss[i] > firstMaximum) {
      thirdMaximum = secondMaximum;
      secondMaximum = firstMaximum;
      firstMaximum = numss[i];
    }
   
    
    
  }

  return thirdMaximum;
};

function findSecondMax(numss) {
  return middle =
    numss[0] +
    numss[1] +
    numss[2] -
    Math.min(numss[0], numss[1], numss[2]) -
    Math.max(numss[0], numss[1], numss[2]);
}
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(thirdMax([5, 2, 4, 1, 3, 6, 0]));
