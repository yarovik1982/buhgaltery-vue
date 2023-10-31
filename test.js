// const getAge = (num) => {
//    const baseYear = 1870
//    const currentYear = 2023
//    return currentYear - (baseYear + num)
// }
// console.log(getAge(99));

const common = (a,b,c) => {
   [a,b,c] = [a,b,c].map(el => el.reduce((sum, num) => (sum[num] = (sum[num] || 0) + 1,  sum), {}));
   return[a,b,c]
}
console.log(common([1,1,1],[2,2,2],[3,3,3]));