const Test = {
  assertEquals(test1, test2) {
    if (test1 === test2) {
      console.log(`Test Passed: Value == '${test1}'`);
    } else {
      console.log(`Test fail: Value == '${test1}'`);
    }
  }
};

const spinWords = (str) => str.split(' ').map(s => s.length >= 5 ? s.split('').reverse().join('') : s).join(' ');

Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
