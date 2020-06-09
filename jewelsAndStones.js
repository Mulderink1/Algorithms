/***
Leetcode

You're given strings J representing the types of
stones that are jewels, and S representing the stones
you have.  Each character in S is a type of stone you
have.  You want to know how many of the stones you
have are also jewels.

The letters in J are guaranteed distinct, and all
characters in J and S are letters.Letters are case
sensitive, so "a" is considered a different type of
stone from "A".
***/

const numJewelsInStones = function (J, S) {
  const jSpl = J.split('');
  const sSpl = S.split('');
  const holdingArr = [];
  sSpl.map(char => {
    if (jSpl.includes(char)) holdingArr.push(char)
  });
  return holdingArr.length;
};

const j = 'aA';
const s = 'aAAbbbb';

console.log(numJewelsInStones(j, s));