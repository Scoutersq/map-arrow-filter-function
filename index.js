// map,filter,arrow fncs


// arrow functions
const sum = (a,b) => {
    return a +b;
}

//given a array convert the value of the array to the multiple of 2
const array = [1,2,3,4,5];

// general solution
// const newArray = [];
// for(let i = 0; i < array.length; i++){
//     newArray.push(array[i] * 2);
// }
// console.log(newArray);


// other solution(using map)
const ans = array.map(function(i){
    return i*2;
})
console.log(ans);
