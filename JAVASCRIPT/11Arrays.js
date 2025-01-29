//JS arrays are resizable
//in JS arrays-copy-opertaions create shallow copies
//shallow copy of an object is a copy whose properties do not share same reference means changes will be also be done in original copies

// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)  //add an element at the end of array
// myArr.push(7)
// myArr.pop()   //removes last element of arrys

// myArr.unshift(9) //add element 9 to start
// myArr.shift()    //remove first element

// console.log(myArr.includes(9)); //ask is 9 present in array
// console.log(myArr.indexOf(3));// gives index of element

// const newArr = myArr.join()  

// console.log(myArr);
// console.log( newArr);//gives elements in type of strings


// slice, splice

// console.log("A ", myArr); //A is name of array

// const myn1 = myArr.slice(1, 3) //return section of array
// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3) //removes that section from array
// console.log("C ", myArr);
// console.log(myn2);
/*
A  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ]  this is sliced part
B  [ 0, 1, 2, 3, 4, 5 ]
C  [ 0, 4, 5 ]  (1,3)part is removed from original arry
[ 1, 2, 3 ] this is section that is removed 
 */

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //add array dc as a single element to arr marvel

// const allHeros = marvel_heros.concat(dc_heros) //method1
//add all elements of dc to marvel 
// console.log(allHeros); 

const all_new_heros = [...marvel_heros, ...dc_heros] //spread method 
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Om"))
console.log(Array.from("Om")) //["O","m"]
console.log(Array.from({name: "om"})) // gives empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[100,200,300]