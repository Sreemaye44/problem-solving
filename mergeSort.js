var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  console.log(nums1);
  nums1.push(...nums2);
  nums1.sort(function (a, b) {
    return a - b;
  });
};
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
