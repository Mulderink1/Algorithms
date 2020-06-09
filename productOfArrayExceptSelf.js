/**
 *
 Given an array nums of n integers where n > 1,  return an array
 output such that output[i] is equal to the product of all the
 elements of nums except nums[i].


 Example:

 Input:  [1,2,3,4]
 Output: [24,12,8,6]
 Note: Please solve it without division and in O(n).

 Follow up:
 Could you solve it with constant space complexity? (The output array
 does not count as extra space for the purpose of space complexity analysis.)
 *
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = nums => {
  const output = [];
  let backAcc = 1, forwardAcc = 1;
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    output[i] = backAcc;
    backAcc *= nums[i];
  };
  nums.map((el, index) => {
    output[index] *= forwardAcc;
    forwardAcc *= nums[index];
  });
  return output;
};


const arr = [1, 2, 3, 4];

console.log(`${productExceptSelf(arr)} --> Should Return: [24, 12, 8, 6]`);
