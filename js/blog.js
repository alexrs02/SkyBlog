const btnUser = document.querySelector('#btn-user')
const table = document.querySelector('#table')
const tablebody = document.querySelector('tbody')
const btnPost = document.querySelector('#btn-post')
const main = document.querySelector('main')

let start = 0
let end = 5
let idUser = 0

btnUser.addEventListener('click', function (evento) {
    start = 0
    end = 5
    const btnNext = document.querySelector(".btn")
    btnNext.style.display = "none"
    try {
        const div = document.querySelectorAll(".divP")
        for (let i = 0; i < div.length; i++) {
            div[i].remove()
        }
        const tr = document.querySelectorAll(".trclase")
        for (let i = 0; i < tr.length; i++) {
            tr[i].remove()
        }
        const usercont = document.querySelector(".user-container")
        usercont.style.display = "none"
    } catch {
        console.log('Algo salio mal')
    }
    pintar(tablebody)
    table.style.display = "table"

})

btnPost.addEventListener('click', function (evento) {
    start = 0
    end = 5
    const btnNext = document.querySelector(".btn")
    btnNext.style.display = "none"
    try {
        const div = document.querySelectorAll(".divP")
        for (let i = 0; i < div.length; i++) {
            div[i].remove()
        }
        const tr = document.querySelectorAll(".trclase")
        for (let i = 0; i < tr.length; i++) {
            tr[i].remove()
        }
        const usercont = document.querySelector(".user-container")
        usercont.style.display = "none"
        table.style.display = "none"
    } catch {
        console.log('Algo salio mal')
    }
    pintarTodosPosts(main)
})

const seeUser = (id) => {
    const tr = document.querySelectorAll(".trclase")
    const usercont = document.querySelector(".user-container")
    try{
        const div = document.querySelectorAll(".divP")
        for (let i = 0; i < div.length; i++) {
            div[i].remove()
        }
    }
    catch{
        console.log('Algo a pasado')
    }
    for (let i = 0; i < tr.length; i++) {
        tr[i].remove()
    }
    table.style.display = "none"
    pintarUsers(id)
    usercont.style.display = "flex"

}

const seePost = (id) => {
    try{
        const usercont = document.querySelector(".user-container")
        usercont.style.display = "none"
    }
    catch{
        console.log('Algo a pasado')
    }
    idUser = id
    const btnNext = document.querySelector(".btn")
    btnNext.style.display = "block"
    const tr = document.querySelectorAll(".trclase")
    for (let i = 0; i < tr.length; i++) {
        tr[i].remove()
    }
    table.style.display = "none"
    pintarPosts(id, main,start,end)
}

const changeArray = () =>{
    try{
        const div = document.querySelectorAll(".divP")
        for (let i = 0; i < div.length; i++) {
            div[i].remove()
        }
    }catch{
        console.log('Algo salio mal')
    }
    start = start + 5
    end = end + 5
    seePost(idUser)
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

const pintarPosts = (id, main,start,end) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((json) => {
            const filtrar_id = json.filter(u => {
                return u.userId === id
            }).slice(start, end)
            filtrar_id.forEach(j => {
                let div = document.createElement('div')
                let divclass = document.createAttribute('class')
                let h1class = document.createAttribute('class')
                let titleclass = document.createAttribute('class')
                let bodyclass = document.createAttribute('class')
                let fun = document.createAttribute("onclick")
                fun.value = 'seeUser(' + j.userId + ')'
                divclass.value = 'divP'
                h1class.value = 'h1P'
                titleclass.value = 'titleP'
                bodyclass.value = 'bodyP'
                let h1 = document.createElement('h1')
                let titulo = document.createElement('h2')
                let body = document.createElement('h3')
                let text_h1 = document.createTextNode('User Post ' + j.userId)
                let text_title = document.createTextNode(j.title)
                let text_body = document.createTextNode(j.body)
                div.setAttributeNode(divclass)
                h1.setAttributeNode(h1class)
                h1.setAttributeNode(fun)
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

const pintarTodosPosts = (main) => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((json) => {
            json.forEach(j => {
                let div = document.createElement('div')
                let divclass = document.createAttribute('class')
                let h1class = document.createAttribute('class')
                let titleclass = document.createAttribute('class')
                let bodyclass = document.createAttribute('class')
                let fun = document.createAttribute("onclick")
                fun.value = 'seeUser(' + j.userId + ')'
                divclass.value = 'divP'
                h1class.value = 'h1P'
                titleclass.value = 'titleP'
                bodyclass.value = 'bodyP'
                let h1 = document.createElement('h1')
                let titulo = document.createElement('h2')
                let body = document.createElement('h3')
                let text_h1 = document.createTextNode('User Post ' + j.userId)
                let text_title = document.createTextNode(j.title)
                let text_body = document.createTextNode(j.body)
                div.setAttributeNode(divclass)
                h1.setAttributeNode(h1class)
                h1.setAttributeNode(fun)
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
            let idU = document.querySelector(".user-tittle").innerHTML = "User " + user.id + " Acount"
            let nameU = document.querySelector(".nameU").innerHTML = user.username
            let surnameU = document.querySelector(".surnameU").innerHTML = user.name
            let emailU = document.querySelector(".emailU").innerHTML = user.email
            let streetU = document.querySelector(".streetU").innerHTML = user.address.street
            let suiteU = document.querySelector(".suiteU").innerHTML = user.address.suite
            let cityU = document.querySelector(".cityU").innerHTML = user.address.city
            let zipcodeU = document.querySelector(".zipcodeU").innerHTML = user.address.zipcode
            let phoneU = document.querySelector(".phoneU").innerHTML = user.phone
            let webU = document.querySelector(".webU").innerHTML = user.website
            let postU = document.querySelector(".postU")
            let fun = document.createAttribute("onclick")
            fun.value = 'seePost(' + id + ')'
            postU.setAttributeNode(fun)
        })
}