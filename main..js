/* Al estar listo el documento */
$("Document").ready(function () {

    /* Caputar evento Submit */
    $("#Cuentanueva").submit(function () {
        return validarDatos();
    })
})

/* Función Validar Datos */
function validarDatos() {
    /* Preguntar si se envia formulario */
    let pregunta = confirm("¿Seguro que deseas enviar?");
    if (pregunta) { // Caso presiona Aceptar

        /* Obtener campos */
        let inputName = $("#inputName")[0].value;
        let inputEmail = $("#inputEmail")[0].value;

        /* Validar nuestro formulario */
        if (inputName.length > 50 || inputName.length < 2) {
            alert("Su nombre no es aceptado.");
            return false;
        }
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail) == false) {
            alert("Su correo electrónico está mal");
            return false;
        }

        /* Mandar confirmación de envio */
        return true;

    } else { // Caso presiona Cancelar
        return false;
    }
}

