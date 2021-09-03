// import  { getMessage, message as msg, setMessage} from './login.js'
// // import * as login from './login.js';



  
 
//1st method
// function add(){
//    let menu =  document.querySelector("#menu")
//     let li =  document.createElement("li")
//     li.textContent = "I am from Javascript"

//     menu.appendChild(li)
// }

// function remove(){
//     let menu =  document.querySelector("#menu")
//     menu.removeChild(menu.lastElementChild)
// }

// 2nd method
// document.querySelector("#add").onclick = function(){
//     let menu =  document.querySelector("#menu")
//         let li =  document.createElement("li")
//         li.textContent = "I am from Javascript"
    
//         menu.appendChild(li)
// }


// document.querySelector("#remove").onclick = function(){
//     let menu =  document.querySelector("#menu")
//         menu.removeChild(menu.lastElementChild)
// }

// 3rd mehtod
// adding element
let menu = document.querySelector("#add")

function adding(){
    let menu =  document.querySelector("#menu")
            let li =  document.createElement("li")
            li.textContent = "I am from Javascript"
    
            // ****update button
            let update = document.createElement("button")
            update.textContent = "Update"
            update.style.cssText = "background:yellow;font-size:30px;color:white;"
           
            
            // ***delete button
            let Remove = document.createElement("button")
            Remove.textContent = "Delete"
            Remove.style.background = "red"
            Remove.style['font-size'] = "30px"
        
            li.append(update)
            li.append(Remove)
            menu.appendChild(li)
}

menu.addEventListener('click',adding)




//Removing element
document.querySelector("#remove").addEventListener('click',function(){
    let menu =  document.querySelector("#menu")
            menu.removeChild(menu.lastElementChild)
})


function changeColor(){
    let btn = document.querySelector("#about")
 btn.classList.toggle('btnColor')
}
// function removeClass(){
//     let btn = document.querySelector("#about")
//     btn.classList.remove('btnColor')
// }

