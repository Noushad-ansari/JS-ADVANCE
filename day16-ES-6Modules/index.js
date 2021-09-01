// import  { getMessage, message as msg, setMessage} from './login.js'
// // import * as login from './login.js';


// console.log(msg)

// // setMessage("hello i am calling you from index.js file")

// // let newmsg = getMessage()
// // console.log(newmsg)





    //  function add() {

    //         let about = document.querySelector(".about")
    //     about.classList.remove("display")
    //     console.log("add")
    //     let addButton = document.querySelector("#addButton")
    //     addButton.removeEventListener("click")
    //     } 
 
// function add() {

//     let about = document.querySelector(".about")
// about.classList.remove("display")
// console.log("add")
// }
// function remove() {
//     let about = document.querySelector(".about")
// about.classList.add("display")
// console.log("remove")
// }

//add class
// let addButton = document.querySelector("#addButton")
// addButton.addEventListener("click",function(){
//     let about = document.querySelector(".about")
//     about.classList.remove("display")
//     console.log("add")
// })


// Remove class
// let removeButton = document.querySelector("#removeButton")
// removeButton.addEventListener("click",function(){
//     let about = document.querySelector(".about")
//     about.classList.add("display")
//     console.log("remove")
// })





// function remove(){
//     let menu =  document.querySelector("#menu")

//     menu.removeChild(menu.lastElementChild)
// }

// let add =  document.querySelector("#add").onclick = function () {
//     let menu =  document.querySelector("#menu")
//     let li = document.createElement("li")
//     li.textContent = "hello i am from javascript"
//     console.log(li)
//     li.style.background = "lightgray"
//     li.style.color = "teal"
//     li.style.border = "1px solid green"
    
//     menu.appendChild(li)
// }


// let remove =  document.querySelector("#remove").onclick  =  function(){
//     let menu =  document.querySelector("#menu")

//     menu.removeChild(menu.lastElementChild)
//     console.log('element removed')
// } 

let add = document.querySelector("#add").addEventListener("click", function () {
    let menu =  document.querySelector("#menu")
        let li = document.createElement("li")
        li.textContent = "hello"
        console.log(li)
        li.style.background = "lightgray"
        li.style.color = "teal"
        li.style.border = "1px solid green"
        
        // menu.appendChild(li)
       localStorage.setItem("li",li.innerHTML)
 })

 
let show = document.querySelector("#show").addEventListener("change",function (e) {
console.log(e.target)

})

let data = localStorage.getItem("li")
let h1 = document.querySelector("#showData")
h1.append(data) 

 let remove = document.querySelector("#remove") .addEventListener("click",function(){
    let menu =  document.querySelector("#menu")

        menu.removeChild(menu.lastElementChild)
        console.log('element removed')
 })

