
const Test = {
  assertEquals(test1, test2) {
    if (test1 === test2) {
      console.log(`Test Passed: Value == '${test1}'`);
    } else {
      console.log(`Test fail: Value == '${test1}'`);
    }
  }
};

module.exports = Test;
