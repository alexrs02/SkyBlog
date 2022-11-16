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
                let tr = document.createElement("tr")
                let trclase = document.createAttribute('class')
                let trid = document.createAttribute('id')
                trclase.value = 'trclase'
                trid.value = '' + j.id
                tr.setAttributeNode(trclase)
                tr.setAttributeNode(trid)
                let td1 = document.createElement("td")
                let td2 = document.createElement("td")
                let td3 = document.createElement("td")
                let td4 = document.createElement("td")
                let claseP = document.createAttribute("class")
                let claseU = document.createAttribute("class")
                let funP = document.createAttribute("onclick")
                let funU = document.createAttribute("onclick")
                claseP.value = "linkpost"
                claseU.value = "userpost"
                funP.value = 'seePost(' + j.id + ')'
                funU.value = 'seeUser(' + j.id + ')'
                td4.setAttributeNode(claseP)
                td4.setAttributeNode(funP)
                td2.setAttributeNode(claseU)
                td2.setAttributeNode(funU)
                let texto1 = document.createTextNode(j.id)
                let texto2 = document.createTextNode(j.username)
                let texto3 = document.createTextNode(j.email)
                let texto4 = document.createTextNode('see post')
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
            const filtrar_id = json.filter(u => {
                return u.userId === id
            }).slice(0, 5)
            filtrar_id.forEach(j => {
                let div = document.createElement('div')
                let divclass = document.createAttribute('class')
                let h1class = document.createAttribute('class')
                let titleclass = document.createAttribute('class')
                let bodyclass = document.createAttribute('class')
                divclass.value = 'divP'
                h1class.value = 'h1P'
                titleclass.value = 'titleP'
                bodyclass.value = 'bodyP'
                let h1 = document.createElement('h1')
                let titulo = document.createElement('h2')
                let body = document.createElement('h3')
                let text_h1 = document.createTextNode('Posts off ' + j.userId + ' Id user')
                let text_title = document.createTextNode(j.title)
                let text_body = document.createTextNode(j.body)
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
            })
        })
}

const pintarUsers = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((user) => {

        })
}