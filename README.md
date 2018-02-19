# MathPlus
Javascript library which expands Math method.

## example
```
var arr1 = [1,2,3,4,5,6,7,8,9.8];
var arr2 = [1,2,'3'];
var arr3 = [-1,-2,-3,arr1];

console.log(Math.sum(arr1)); //45.8
console.log(Math.sum(arr2)); //undefined
console.log(Math.sum(arr3)); //39.8
console.log(Math.average(arr1)); //5.088888888888889
console.log(Math.IP(arr1)); //395136
console.log(Math.factorial(10)); //3628800
console.log(Math.permutation(6,3)); //120
console.log(Math.combination(6,3)); //20
```