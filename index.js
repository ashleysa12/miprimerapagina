// Encuentra al elmento HTML (el boton mendiente su ID)
const miBoton = document.getElementById('miBoton');

miBoton.addEventListener("click", handleClick);

// Define la funcion que se ejecutara cuando se ahga clic en el boton
function handleClick(){
    alert("Hola! Has hecho clic en el boton");
};

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
});


function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }

function validateForm(){
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)){
        alert('Por favor ingrese un correo electronico valido');   
    } else {
        alert('Correo electronico enviado correctamente.');
    }
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})