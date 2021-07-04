
// ******Rest Operator*********
// function accumulator(name, boolean,...rest) {

//     console.log(name)
//     console.log(boolean)
//     // console.log(rest)
//     let sum = 0
//     for (const i in rest) {
//         sum += rest[i]
//     }
//     console.log(sum)

// }


// accumulator("Rohan", true,2, 5, 4, 6)


// function accumulator(...rest) {

//     // console.log(num1)
//     // console.log(num2)
//     // console.log(num3)
//     let sum = 0
//     for (const i in rest) {
//         sum += rest[i]
//     }
//     console.log(sum)

// }

// const spread = [2, 5, 4, 6]
// accumulator(...spread)


// const arr1 = [2,3,6,4,5]
// const arr2 = [2,3,6,4,5]
// const obj1 = {firstName:"Rahul",lastName : "sharma"}
// const obj2 = {ab:"Rohan",bc : "sharma"}

// const obj3 = {a:"hello",b:"world",...obj1,...obj2}
// console.log(obj3)

// const arr3 = arr1.concat(arr2)
// const arr3 = [25,63,85,...arr1,...arr2]

// // console.log(arr1)
// // console.log(arr2)
// console.log(arr3)


// **********Destructring*************
//  Array destructring
// const arr1 = ["rahul","sohan","kartik","neeraj",2,5,4,6,4,]

// const [a,b,...remainingData] = arr1
// // const kartik = arr1[2]
// // const rahul = arr1[0]
// // const neeraj = arr1[3]
// // console.log(kartik)
// console.log(a,b)
// console.log(remainingData)

// object Destructring

// const obj1 = {
//     firstName: "Rahul",
//     lastName: "Sharma",
//     age: 25, gender: "male",
//     phyMarks:85,
//     maths:75,
//     chem:95,
// }

// const {firstName : fn,age:ag, ...rest} = obj1
// console.log(fn)
// // console.log(age)
// console.log(ag)
// // console.log(rest)


function sum(...rest){

    const [a,,,b,c] = rest
    const sum =  b+c
    console.log(sum)
    
}
sum(2,85,6,54,4,2,5,)