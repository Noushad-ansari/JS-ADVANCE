// function myFirst() {
//     console.log("function one")
// }

// function mySecond() {
//     console.log("function Two")
// }

// mySecond();
// myFirst();

// function myDisplayer(some) {
//     console.log(some)
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);

// function myDisplayer(some) {
//     console.log(some)
// }

// function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
// }

// myCalculator(5, 5);

// function myDisplayer(some) {
//     console.log(some)
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);

// setTimeout
// function funcOne() {
//     setTimeout(
//         function() {
//             console.log("FunctionOne")
//         }, 2000)
// }

// function funcTwo() {
//     setTimeout(
//         function() {
//             console.log("Function Two")
//         }, 2000)
// }

// funcTwo()
// funcOne()

// setInterval

// var timer = setInterval(() => {
//     var timer = new Date()
//     var hours = timer.getHours()
//     var minuts = timer.getMinutes()
//     var seconds = timer.getSeconds()
//     document.getElementById("timer").innerHTML = hours + ":" + minuts + ":" + seconds
//         // console.log(`${hours} : ${minuts} : ${seconds}`)
// }, 1000);



function myCounter() {
    var timer = new Date()
    var hours = timer.getHours()
    var minuts = timer.getMinutes()
    var seconds = timer.getSeconds()
    var miliSeconds = timer.getMilliseconds()
    document.getElementById("demo").innerHTML = ` ${hours} : ${minuts}: ${seconds} :${miliSeconds}`
}



// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
// }

// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//         if (req.status == 200) {
//             myCallback(this.responseText);
//         } else {
//             myCallback("Error: " + req.status);
//         }
//     }
//     req.send();
// }

// getFile(myDisplayer);