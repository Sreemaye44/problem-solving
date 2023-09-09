var isSubsequence = function (s, t) {
    if (!s) return true;
    let cursorS = 0;

    for (let i = 0; i < t.length; i++) {
      if (t[i] === s[cursorS]) {
    
        cursorS++;
      }

      if (cursorS === s.length) return true;
    }

    return false;
};
console.log(isSubsequence('abmd','ahbgdc'))