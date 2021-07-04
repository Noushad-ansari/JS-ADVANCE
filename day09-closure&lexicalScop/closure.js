
// function accumulate() {
//     const a = 5
//    return function sum() {
//         const b = 5
//         console.log(a + b)
//     }
//     // sum()
// }

//  const newValue =  accumulate()
//  newValue()
// console.dir(newValue)
// //  console.log(newValue)

// function close(){
//   alert("hello")
// }


// IIFE
// (function greet() {
//     console.log("Good AfterNoon")
// })()

// function Currying 
const funcA=(num1) => (num2)=> (num3)=> (num4)=>  num1 + num2 + num3 + num4
     
console.log(funcA(2)(5)(3)(7))

// const funcB = funcA(2)
// const funcC = funcB(3)
// const funcD = funcC(5)