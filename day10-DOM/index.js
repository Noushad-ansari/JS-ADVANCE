// let ul  = document.getElementsByTagName('nav')

// console.log(ul)

// let main = document.getElementById('main')
//  let p = main.getElementsByTagName('p')
// // console.log(main)
// console.log(p)

// let paragraph = document.getElementsByClassName('para')
// console.log(paragraph)

// let paragraph = document.querySelectorAll('p.para')
// console.log(paragraph)
// console.log(paragraph)


// let footer =  document.querySelector('#footer')
// // console.log(footer)

// let ul = document.querySelector('.ul')
// // console.log(ul)


// let menu = document.getElementById("menu")
// console.log(menu)

// let list  = menu.getElementsByClassName("list")

// for (let i = 0; i < list.length; i++) {
//     list[i].innerHTML = "<h1>byeeeeee</h1>"
// }


// for (let i = 0; i <list.length ; i++) {
//    list[i].innerHTML = "<h1>Byeee</h1>"
    
// }

// let list =  document.querySelector(ul)


// let arr = [1,2,4]
// console.log(arr[5])

// let menu = document.querySelector('#menu')
// console.log(menu)

// let list  =  menu.querySelectorAll('.list')
// console.log(list)


// for (let i = 0; i < list.length; i++) {
//     list[i].style.background  =  "teal"
    
// }


// ********Event Handlers******


// function changeText(button) {
//     button.innerHTML = "hurrey! your text is changed";
//     button.style.background = "teal"  
//     button.style.height = "100px"  
//     button.style.width = "200px"  
//     button.style.borderRadius = "200px"  
   
//     // alert("wooo! your event is working properly")
//   }

  document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").style.display = "none"
}

// function upperCase(x) {
   
//     x.value = x.value.toUpperCase();
//     console.log(x.value)

//   let paragraph=   document.getElementById("demo")
//   paragraph.style.background = "teal"
//   paragraph.style.height = "100px"
//   paragraph.innerHTML = x.value
// }

// create a button 
// add event(onclick) on this button
// add values
// ***********color generator*********
let showColor = document.querySelector("#show_Color")
var bgColor
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
     bgColor = "rgb(" + x + "," + y + "," + z + ")"
 console.log(bgColor);
    document.body.style.background = bgColor;
    showColor.innerHTML = bgColor
    }

// random_bg_color();  

