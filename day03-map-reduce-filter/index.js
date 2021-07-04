// var array = [45, 4, 9, 16, 25];

// const newArray = []
// for (let index = 0; index < array.length; index++) {
//     const element = array[index] + 5;
//     console.log(element)
//     newArray.push(element)
// }

// console.log(newArray)


// foreach
// const newArray = []
// array.forEach(element => {
//     newArray.push(element + 5)
// });

// console.log(newArray)

//map function
// var array = [45, 4, 9, 16, 25];

// // const myObject = {
// //     firstName: "John",
// //     lastName: "Doe",
// //     age: 50,
// //     eyeColor: "blue"
// // };

// const newArray = array.map((value) => {
//     return value + 10
// })
// console.log(newArray)


// // iteration over  an object
// const newarray = Object.keys(myObject).map(function(key, index) {
//     myObject[key];
// });

// console.log(newarray)


//filter function 
// var array = [45, 4, 9, 16, 20, 23, 25];

// Using for and if-else 
// const newArray = []
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element > 18) {
//         newArray.push(element)
//     }
// }
// console.log(newArray)

// const newArray = array.filter((value, index, array) => {
//     return value > 18
// })

// console.log(newArray)


// reduce function

// var array = [45, 4, 9, 16, 25];

// var sum = 0
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     sum = sum + array[index]
// }
// console.log(sum)

// var numbers1 = [5, 4, 9, 6, 5];

// var sum = numbers1.reduce((total, currValue, index, array) => {
//     console.log(array)
//     return total + currValue
// }, 10);

// console.log(sum)


// function sum(a = 2, b = 8) {
//     var sum
//     return sum = a + b

// }

// console.log(sum())

class person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    getName() {
        setTimeout(() => {
            console.log(this)
        }, 1000);
    }

    getAge() {
        setTimeout(function() {
            console.log(this)
        }, 1000)
    }
}

let personOne = new person('john', 25)

personOne.getName()
personOne.getAge()