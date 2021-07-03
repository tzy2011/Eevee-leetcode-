/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

 

示例 1：

输入：n = 2
输出：1
示例 2：

输入：n = 5
输出：5

斐波那契数列：0,1,1,2,3,5,8,13,21....
*/
//递归
var fib = function(n) {
    if (n===0) {
        return 0
    } else if (n===1) {
        return 1
    } else {
        return fib(n-1)+fib(n-2)
    }
};
//动态规划
// var fibplus = function(n) {
//     let memo = [];
//     for(let i = 0; i <= n; i++ ) {
//       if(i <= 1) {
//         memo[i] = i%1000000007;
//       }else {
//         memo[i] = (memo[i-1] + memo[i-2])%1000000007;
//       }
//     }
//     return memo[n];
// }
var fibplus = function(n) {
  var arr = []
  arr[0] = 0
  arr[1] = 1
  for(let i=2;i<n+1;i++) {
      arr[i] = arr[i-1]+arr[i-2]
  }
  return arr[n]
};
let a = fibplus(6)
console.log(a);