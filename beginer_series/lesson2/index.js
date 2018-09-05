// const array_diff = (a, b) => {
//   b.forEach(itemB => {
//     a = a.filter(itemA => itemA !== itemB);
//   });
//   return a;
// }

// 通过判断a的子项是否被b包含可以更好的实现功能
const better = (a, b) => a.filter(item => !b.includes(item));

console.log(better([1,2,2,2,3],[2]));
