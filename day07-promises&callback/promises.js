function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Register")
            resolve()
        }, 1000);
    })

}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("getting error while login")
            console.log("login")
            resolve()
        }, 1000);
    })
}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("getuser data")
            resolve()
        }, 1000);
    })
}

function displayUserData() {
    setTimeout(() => {
        console.log("displayed data")
    }, 1000);
}


// callback hell
// register(function() {
//     login(function() {
//         getUserData(function() {
//             displayUserData()

//         })
//     })
// })

// register()
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => { console.log(err) })

async function authentication() {

    try {
        await register()
        await login()
        await getUserData()
        await displayUserData()
    } catch (error) {
        console.log(error)
        // throw new Error()
    }
    // console.log("authentication")
}



authentication().then(() => { console.log("everything is set") }).catch((err) => { console.log(err) })