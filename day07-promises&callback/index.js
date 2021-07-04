function takeFiveSeconds() {
    let ms = 5000 + new Date().getTime()
    while (new Date < ms) {
        // console.log("please wait i will take  five seconds")
    }
}


function register(callback) {
    setTimeout(() => {
        console.log("Register")
        callback()
    }, 1000);
}

function login(callback) {
    setTimeout(() => {
        console.log("login")
        callback()
    }, 3000);
}

function getUserData(callback) {
    setTimeout(() => {
        console.log("Get user Data")
        callback()
    }, 4000);
}

function displayUserData(cb) {
    setTimeout(() => {
        console.log("displayed user data")
        cb()
    }, 1000);
}
function editUserData() {
    setTimeout(() => {
        console.log("Editing user data")
    }, 1000);
}


console.log("Other task")


// callback hell
register(function () {
    login(function () {
        getUserData(function () {
            displayUserData(function () {
                editUserData()
            })
        })
    })
})


















// function register(callback) {
//     setTimeout(() => {
//         console.log("register")
//         callback()
//     }, 2000);
// }

// function login(callback) {
//     setTimeout(() => {
//         console.log("login")
//         callback()
//     }, 3000);
// }

// function getUserData(callback) {
//     setTimeout(() => {
//         console.log("user data")
//         callback()
//     }, 1000);
// }

// function displayUserData() {
//     setTimeout(() => {
//         console.log("displayed data")
//     }, 1000);
// }


// // callback hell
// // register(function() {
// //     login(function() {
// //         getUserData(function() {
// //             displayUserData()

// //         })
// //     })
// // })