/**
 * 题目：给定一个数字m，求是否存在一个数字n使得n^3 + (n-1)^3 + ... + 1^3 === m
 * 存在的话返回n，不存在返回-1
 * @type {number}
 */
const Test = require('../test');
let n = 0;
const findNb = (m) => {
  if (m <= 0) {
    const res = m ? -1 : n;
    n = 0;
    return res;
  }
  n++;
  // ！！！此处记得要return
  return findNb(m - n**3);
};

Test.assertEquals(findNb(4183059834009), 2022);
Test.assertEquals(findNb(24723578342962), -1);
Test.assertEquals(findNb(135440716410000), 4824);
Test.assertEquals(findNb(40539911473216), 3568);
