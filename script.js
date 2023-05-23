const form = document.getElementById('myForm'); //document es el html
if(form){
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
        return regex.test(email)
    }
    function validateForm() {
        const emailInput = document.getElementById('email');
        const email = emailInput.value;
        if (!validateEmail(email)) {
            alert('Por favor ingrese un correo electrónico válido.');
        } else {
            alert('Correo electrónico enviado correctamente.');
        }
    }
}



function showAlert() { alert('Hola esta es una alerta desde JavaScript!'); }

/* Agregar JavaScript para alternar la visibilidad de los enlaces de navegación
cuando se haga clic en el botón “Menú”. Este código agrega un detector de eventos al botón “Menú” que alterna la clase
“nav-links-responsive“ del elemento con la clase “.nav-links” cuando se hace clic.*/


document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function () {
        document.querySelector(".nav-links")
            .classList.toggle("nav-links-responsive")
        /* alert("alerta"); */

    })

