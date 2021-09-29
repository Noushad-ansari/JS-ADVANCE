
function loadData() {
    let xhttp = new XMLHttpRequest()
    let url = 'https://jsonplaceholder.typicode.com/users'

    xhttp.onreadystatechange = function () {
        let contenBox = document.getElementById("contentBox")
        let fetchedData
        let robourl = 'https://robohash.org/3?set=set1'
        if (this.readyState == 4 && this.status == 200) {
            fetchedData = JSON.parse(this.responseText)
            // console.log(`${fetchedData[2].name}  ${fetchedData[2].username} ${fetchedData[2].email} `)

            for (let i = 0; i < fetchedData.length; i++) {
                let div = document.createElement("div")
                let img = document.createElement('img')
                let h6 = document.createElement('h6')

                img.setAttribute('src', `https://robohash.org/${fetchedData[i].id}?set=set2`)
                img.setAttribute('height', 100)
                img.setAttribute('width', 100)
                
                h6.textContent = `${fetchedData[i].name}   ${fetchedData[i].email} ${fetchedData[i].address.city} `
                
                div.append(img)
                div.append(h6)
                h6.classList.add("text_center")
                contenBox.append(div)
                
                div.classList.add('display')

            }

            // contenBox.innerHTML =`${fetchedData[2].name}  ${fetchedData[2].username} ${fetchedData[2].email} `
        }
    }

    xhttp.open('GET', url, true)
    xhttp.send()
}



function add_img() {
    var img = document. createElement('img');
    img. src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
    document. getElementById('body'). appendChild(img);
    }