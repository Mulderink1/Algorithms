/**

 Given a non-empty array of integers, return
 the k most frequent elements.

 Input: nums = [1,1,1,2,2,3], k = 2
 Output: [1,2]

 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

const topKFrequent = (nums, k) => {
  const obj = {}, arr = [], finalArr = [];
  nums.forEach((el) => {
    (obj[el]) ? obj[el] += 1 : obj[el] = 1;
  });
  for (let key in obj) {
    arr.push({ key: key, value: obj[key] });
  };
  arr.sort((a, b) => {
    return b.value - a.value;
  });
  for (let i = 0; i < k; i += 1) {
    finalArr.push(+arr[i].key);
  };
  return finalArr;
};

const numbers = [1, 1, 1, 2, 2, 3], a = 2;

console.log(`${topKFrequent(numbers, a)} --> Should equal: [1, 2]`);