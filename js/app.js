const btnEnviar = document.querySelector('#btn-enviar');
const username = document.querySelector('#username')
const passwd = document.querySelector('#password')
const form = document.querySelector('#formulario')
const error = document.querySelector('#error')

btnEnviar.addEventListener('click', function (evento) {
  evento.preventDefault()
  validar(username.value, passwd.value)
})

const validar = (name, passwd) => {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then ((json) => {
      json.forEach(j => {
        if(j.username === name && j.address.zipcode === passwd){
          window.open("./views/blog.html")
        }else{
          error.style.display = "block"
        }
      })
    })
    .catch((error) => console.alert(error));
};


