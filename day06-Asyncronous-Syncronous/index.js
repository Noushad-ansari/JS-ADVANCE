// syncrouse Vs Asyncronous
console.log("Hello")


function takeFiveSeconds() {
    let ms = 5000 + new Date().getTime()
    while (new Date < ms) {
        // console.log("please wait i will take  five seconds")
    }
}

setTimeout(function() {
    console.log("I am from setTimeout")
}, 2000);

console.log("Javascript")

takeFiveSeconds()