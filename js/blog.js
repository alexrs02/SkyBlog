const btnUser = document.querySelector('#btn-user')
const table = document.querySelector('#table')
const tablebody = document.querySelector('tbody')


btnUser.addEventListener('click', function (evento) {
    try {
        const div = document.querySelectorAll(".divP")
        for (let i = 0; i < div.length; i++) {
            div[i].remove()
        }
        const tr = document.querySelectorAll(".trclase")
        for (let i = 0; i < tr.length; i++) {
            tr[i].remove()
        }
    } catch {

    }
    pintar(tablebody)
    table.style.display = "table"

})

const seeUser = (id) => {
    const tr = document.querySelectorAll(".trclase")
    for (let i = 0; i < tr.length; i++) {
        tr[i].remove()
    }
    table.style.display = "none"
    pintarUsers(id)
}

const seePost = (id) => {
    const tr = document.querySelectorAll(".trclase")
    for (let i = 0; i < tr.length; i++) {
        tr[i].remove()
    }
    table.style.display = "none"
    const main = document.querySelector('main')
    pintarPosts(id, main)
}


const pintar = (tbody) => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((json) => {
            json.forEach(j => {
                var tr = document.createElement("tr")
                var trclase = document.createAttribute('class')
                var trid = document.createAttribute('id')
                trclase.value = 'trclase'
                trid.value = '' + j.id
                tr.setAttributeNode(trclase)
                tr.setAttributeNode(trid)
                var td1 = document.createElement("td")
                var td2 = document.createElement("td")
                var td3 = document.createElement("td")
                var td4 = document.createElement("td")
                var claseP = document.createAttribute("class")
                var claseU = document.createAttribute("class")
                var funP = document.createAttribute("onclick")
                var funU = document.createAttribute("onclick")
                claseP.value = "linkpost"
                claseU.value = "userpost"
                funP.value = 'seePost(' + j.id + ')'
                funU.value = 'seeUser(' + j.id + ')'
                td4.setAttributeNode(claseP)
                td4.setAttributeNode(funP)
                td2.setAttributeNode(claseU)
                td2.setAttributeNode(funU)
                var texto1 = document.createTextNode(j.id)
                var texto2 = document.createTextNode(j.username)
                var texto3 = document.createTextNode(j.email)
                var texto4 = document.createTextNode('see post')
                td1.appendChild(texto1)
                td2.appendChild(texto2)
                td3.appendChild(texto3)
                td4.appendChild(texto4)
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tbody.appendChild(tr)
            })
        })
}

const pintarPosts = (id, main) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((json) => {
            json.forEach(j => {
                if (j.userId === id) {
                    var div = document.createElement('div')
                    var divclass = document.createAttribute('class')
                    var h1class = document.createAttribute('class')
                    var titleclass = document.createAttribute('class')
                    var bodyclass = document.createAttribute('class')
                    divclass.value = 'divP'
                    h1class.value = 'h1P'
                    titleclass.value = 'titleP'
                    bodyclass.value = 'bodyP'
                    var h1 = document.createElement('h1')
                    var titulo = document.createElement('h2')
                    var body = document.createElement('h3')
                    var text_h1 = document.createTextNode('Posts off ' + j.userId + ' Id user')
                    var text_title = document.createTextNode(j.title)
                    var text_body = document.createTextNode(j.body)
                    div.setAttributeNode(divclass)
                    h1.setAttributeNode(h1class)
                    titulo.setAttributeNode(titleclass)
                    body.setAttributeNode(bodyclass)
                    h1.appendChild(text_h1)
                    titulo.appendChild(text_title)
                    body.appendChild(text_body)
                    div.appendChild(h1)
                    div.appendChild(titulo)
                    div.appendChild(body)
                    main.appendChild(div)
                }
            })
        })
}

const pintarUsers = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((user) => {
            
        })
}