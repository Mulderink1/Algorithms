/**
 *
 Write a function that reverses a string. The input string is given as
 an array of characters char[]. Do not allocate extra space for another
 array, you must do this by modifying the input array in-place with
 O(1) extra memory. You may assume all the characters consist of
 printable ascii characters.

 Input: ["h","e","l","l","o"]
 Output: ["o","l","l","e","h"]
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i += 1) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - i - 1], s[i]];
  };
};

const str = ["h", "e", "l", "l", "o"];
reverseString(str);

console.log(str);