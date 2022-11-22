
// Recojo los datos necesarios para trabajar con el html

const btnEnviar = document.querySelector('#btn-enviar')
const username = document.querySelector('#username')
const passwd = document.querySelector('#password')
const form = document.querySelector('#formulario')
const error = document.querySelector('#error')

// Función a la escucha para validar el usuario

btnEnviar.addEventListener('click', function (evento) {
  evento.preventDefault()
  validar(username.value, passwd.value)
})


// Función que recorre la lista de usuarios para validar lo introducido

const validar = (name, passwd) => {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then ((json) => {
      json.forEach(j => {
        if(j.username === name && j.address.zipcode === passwd){
          error.style.display = "none"
          window.location.href = "./views/blog.html?name=" + username.value
        }else{
          error.style.display = "block"
        }
      })
    })
    .catch((error) => console.alert(error));
};


