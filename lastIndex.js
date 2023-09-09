function length(str) {
  let count = 0;
  let flag = false;

  
  for (let i = str.length - 1; i >= 0; i--) {
  
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      flag = true;
      count++;
      
    }
    

    else {

      if (flag == true) return count;
    }
  }

  return count;
}


let str = "Geeks jkln nok";
console.log(`The length of last word is ${length(str)}`);
