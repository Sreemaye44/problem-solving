var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  let maxLength = 0;

  if (s.length < 1) {
    return 0;
  }

  const uniqueCharacterList = new Set();

  while (end < s.length) {
    if (!uniqueCharacterList.has(s[end])) {
      uniqueCharacterList.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, uniqueCharacterList.size);
    } else {
      uniqueCharacterList.delete(s[start]);
      start++;
    }
  }

  return maxLength;
};
const result = lengthOfLongestSubstring("abcabcbb");
console.log(result);