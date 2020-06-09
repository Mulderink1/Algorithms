/**

Given an array of integers, return indices of the two numbers
such that they add up to a specific target.You may assume that
each input would have exactly one solution, and you may not
use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let obj = {}, arr = [];
  nums.map((el, index) => {
    const tn = target - el;
    if (obj[el] != undefined) {
      arr = [obj[el], index];
    };
    obj = {
      ...obj,
      [tn]: index
    };
  });
  return arr;
};


const arr = [2, 7, 11, 15], tar = 9;

console.log(`${twoSum(arr, tar)} --> Should return: [0, 1]`);