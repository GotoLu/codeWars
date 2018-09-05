/**
 * 题目：给定一个字符串word，将其转化为一个新的字符串
 * 规则，重复出现的字符转化为')',否则转化为'('，且大小写不敏感
 * 思路：分割，映射，拼接
 * 难点：怎么判断某个字符是否是重复字符
 * 判断indexOf和lastIndexOf是否是同一个值，是的话就不是重复字符
 * @param word
 */
const Test = require('../test');

const duplicateEncode = (word) => {
  const wLow = word.toLowerCase().split('');
  return wLow.map(c =>
    wLow.lastIndexOf(c) === wLow.indexOf(c) ? '(' : ')').join('');
};


Test.assertEquals(duplicateEncode("GGw(GGvOTG! PnbQR@"),"))(())((()((((((((");
Test.assertEquals(duplicateEncode("recede"),"()()()");
Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
Test.assertEquals(duplicateEncode("(( @"),"))((");
