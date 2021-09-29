// let url = "content/readme.txt"
// let url = "json/student.data.json"


// function loadData(params) {

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       console.log(`${data[2].name}  ${data[2].age}`)
//       let contentBox = document.querySelector("#contentBox")
//       for (const key in data) {
//         console.log(key)
//         let li = document.createElement("li")
//         li.textContent = `${data[key].name}  ${data[key].age}`
//         contentBox.append(li)


//       }

//     })
//     .catch((err) => console.log(`The error is ${err}`))
// }


// let url = 'https://jsonplaceholder.typicode.com/users'

// let loadData = document.querySelector("#load")

// loadData.addEventListener("click", () => {

//   fetch(url).then(function (res) {
//     console.log(res)
//     return res.json()
//   }).then(function (data) {
//     console.log(data)
//     console.log(`${data[4].name} ${data[4].email} `)
//     let contentBox = document.querySelector("#contentBox")


//     contentBox.innerHTML = `<ul> ${data.map((user)=>`<li>${user.name } </li>`)}</ul>`
//   //  for (const key in data) {
//   //   let li = document.createElement("li")
//   //   li.textContent = `${data[key].name}   ${data[key].email} ${data[key].username}`
//   //   contentBox.append(li)
//   //   li.classList.add("liststyle")
//   //  }

//   })
// })



let loadData = document.querySelector("#load")
let url = 'https://jsonplaceholder.typicode.com/users'
loadData.addEventListener("click", () => {

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: document.querySelector("#title").value,
      body: document.querySelector("#body").value,
      userId: document.querySelector("#userId").value,

    }),
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));


})