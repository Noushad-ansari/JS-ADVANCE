let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    //   myResolve(); // when successful
    myReject("error coming from reject");  // when error
});



// "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log("Error:" + err)})

const myPromise = new Promise((myResolve, myReject) => {
    setTimeout(() => {
        // myResolve("I love You !!");
        myReject("error coming from my reject")
    }, 3000);
});

myPromise.then( (response) => {
    console.log( 'this is my resolve part' + response)
}).catch((err)=>{
console.log(err)
})