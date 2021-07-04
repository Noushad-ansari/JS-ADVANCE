// this key word context in different scope

//1 console.log(this)


// 2 use of this keyword
// const video = {
//     title: "hello",
//     play: function() {
//         console.log(this)
//     },
//     stop() {
//         console.log(this)
//     }
// }
// video.play()
// video.stop()

// function hello() {
//     console.log(this)
// }
// hello()

// 3 use of this keyword
// function Video(param) {
//     this.a = param
//     console.log(this)
// }
// const videoData = new Video('a')

// 4th use of this keyword
// const video = {
//         title: "video title",
//         name: ["a", "b", "c"],
//         play() {
//             // console.log(this)
//             this.name.forEach(function(element) {
//                 // console.log(element)
//                 console.log(this)

//             }, this)
//         }
//     }
// video.play()

// 5 method with fat arrow function
// const video = {
//         title: "video title",
//         name: ["a", "b", "c"],
//         play() {
//             // console.log(this)
//             this.name.forEach((element) => {
//                 console.log(element)
//                 console.log(this)
//             })
//         }
//     }
// video.play()

// 6th use of this keyword
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