//task 1

//a)

//!  annoymous function
console.log("task1 a:");
var result1 =[];
var a1=function (ar){
  for(var i=0;i<ar.length;i++){
    if(ar[i]%2!==0)
    {
         result1.push(ar[i])
    }
  }
  return result1;
}
console.log(a1([1,26,3,94,5,6])+" :o/p using annoymous funtion");


//!using IIFE function

var result2 = [];
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result2.push(arr[i]);
    }
  }
  console.log(result2+" :o/p using IIFE funtion");
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//b)

//anonymous function
console.log("task1 b:");
var t=function (str) {
    str = str.toString().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(t(["day4 task"])+" :o/p using anonymous function");

//IIFE
(function (str) {
    str = str.toString().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' ')+" :o/p using IIFE funtion")
})(["day4 task"]);

//c)
    //Sum of all numbers in an array
    console.log("task1 c:");
var sum=0;
var summ=function (arr){
  for(var i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}
console.log(summ([1,2,3,4,5,10])+" o/p using anonymous function");
   
var sum1=0;
(function (arr){
  for(var i=0;i<arr.length;i++){
    sum1+=arr[i];
  }
  console.log(sum+" o/p IIFE function"); 
})([1,2,3,4,5,10])

//d)
console.log("task1 d:");
 
var prime = [];
var c=function c(a){
function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}
return prime;
}
console.log(c([5, 9, 11,22])+" prime o/p of anonymous funtion");

var prime1 = [];
(function (a){
function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime1.push(a[index])
  }
}
console.log(prime1+" prime o/p using IIFE function");
})(([5, 9, 11,22]));

//e)
function isPalindrome(s)
{
     let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
var pali=function (arr)
{
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log(pali([ "abc", "car", "ada", "racecar", "cool" ])+" palindrome o/p of annonymous function");

function isPalindrome1(s)
{
     let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
(function (arr)
{
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome1(arr[i])) {
            ans.push(arr[i]);
        }
    }
    console.log(ans+" palindrome o/p of IIFE function");
})(([ "abc", "car", "ada", "racecar", "cool" ]));

//f)

var siz=function (ar1, ar2)
    {
    var n=ar1.length;
    let j = 0;
    let i = n - 1;
    while (ar1[i] > ar2[j] && j < n && i > -1)
    {
        let temp = ar1[i];
        ar1[i] = ar2[j];
        ar2[j] = temp;
        i--; j++;
    }
    ar1.sort(function(a, b){return a - b});
    ar2.sort(function(a, b){return a - b});
    return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
    }
     
   console.log(siz([ 1, 12, 15, 26, 38 ],[ 2, 13, 17, 30, 45 ])+" median o/p of annonymous function");

   (function (ar1, ar2)
    {
    var n=ar1.length;
    let j = 0;
    let i = n - 1;
    while (ar1[i] > ar2[j] && j < n && i > -1)
    {
        let temp = ar1[i];
        ar1[i] = ar2[j];
        ar2[j] = temp;
        i--; j++;
    }
    ar1.sort(function(a, b){return a - b});
    ar2.sort(function(a, b){return a - b});
    console.log( parseInt((ar1[n - 1] + ar2[0]) / 2, 10)+"  median o/p of IIFE function");
    })([ 1, 12, 15, 26, 38 ],[ 2, 13, 17, 30, 45 ])

    //g)

    var dupli= function (arr){
        let uniqueArr = [];
        for(let i of arr) {
           if(uniqueArr.indexOf(i) === -1) {
               uniqueArr.push(i);
           }
       }
       return uniqueArr;
   }
   
   
   console.log(dupli([1, 2, 3, 2, 3])+" duplicate o/p of annonymous function");

   (function (arr){
    let uniqueArr = [];
    for(let i of arr) {
       if(uniqueArr.indexOf(i) === -1) {
           uniqueArr.push(i);
       }
   }
   console.log(uniqueArr+ "  duplicate o/p of IIFE function");
})([1, 2, 3, 2, 3]);

//h)
var a = function(nums,k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }
  
  
  console.log(a([1, 2,3,4,5],3)+" rotete o/p of anonymous function");

  (function(nums,k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    console.log(nums+" rotete o/p of IIFE function");
  })([1, 2,3,4,5],3);
//task 2
//a)

var result3 =[];
 var odd2=(arr)=>{
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0)
    {
         result3.push(arr[i])
    }
  }
  return result3
}
console.log(odd2([1,2,3,4,5,6,7,8,9,10])+" odd number using arrow funtion");

//b)


var t= (str)=> {
    str = str.toString().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(t(["day4 task"])+" :o/p using arrow function");


//c)

var sum=0;
summ= (arr)=>{
  for(var i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}
console.log(summ([1,2,3,4,5,10])+" o/p using arrow function");

//d)

var prime = [];
c= (a)=>{
function isPrime(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}
return prime;
}
console.log(c([5, 9, 11,22])+" prime o/p of arrow funtion");

//e)

function isPalindrome(s)
{
     let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
pali=(arr)=>
{
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log(pali([ "abc", "car", "ada", "racecar", "cool" ])+" palindrome o/p of arrow function");