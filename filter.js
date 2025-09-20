// given an array give me the even value of the array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//general solution
// const arr2 = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         arr2.push(arr[i]);
//     }
// }
// console.log(arr2)

// using filter
const ans = arr.filter(function filterlogic(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(ans);
 