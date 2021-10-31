var Nombre = document.getElementById ('Nombre');
var Email = document.getElementById ('Email');
var Mensaje = document.getElementById ('Mensaje');
var error = document.getElementById ('error');
error.style.color = 'red';

function enviarForm () {
    console.log ('Enviando formulario');

    var MensajeError = [];

    if (Nombre.value === null || Nombre.value === '') {
        MensajeError.push ('Ingresá tu nombre');
    }

    if (Email.value === null || Email.value === '') {
        MensajeError.push ('Ingresá tu mail');
    }

    if (Mensaje.value === null || Mensaje.value === '') {
        MensajeError.push ('Ingresá tu mensaje');
    }
   
        error.innerHTML = MensajeError.join('<br>');


    return false;
     }
