var isPalindrome = function (s) {
    const str=s.toLowerCase().replace(/[^0-9a-z]/g, "");
    let left=0; let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;

    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panami"));
