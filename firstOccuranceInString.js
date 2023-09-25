var strStr = function (haystack, needle) {
  const hayLength = haystack.length;
  const needLength = haystack.length;

  if (needLength === 0) {
    return 0;
  }
  for (let i = 0; i < hayLength - needLength; i++) {
    let found = true;
    for(j=0; j<needLength; j++){
        if(haystack[j]!==needle[j]){
            found=false;
            break;
        }
    }
    if(found)
        return i;
    
  }
  return -1;
};

console.log(leetcode, leet);
