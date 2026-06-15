let formContacto;
let btnEnviar;
let mensajeExito;

let inputNombre, inputEmail, inputTelefono, inputAsunto, inputMensaje;
let errorNombre, errorEmail, errorTelefono, errorAsunto, errorMensaje;

// estado de la validacion
let estadoValidacion = {
    nombre: false,
    email: false,
    telefono: false,
    asunto: false,
    mensaje: false
};

document.addEventListener("DOMContentLoaded", function () {
    formContacto = document.getElementById("contacto-form");
    btnEnviar = document.getElementById("btn-enviar");
    mensajeExito = document.getElementById("mensaje-exito");

    // inputs
    inputNombre = document.getElementById("nombre");
    inputEmail = document.getElementById("email");
    inputTelefono = document.getElementById("telefono");
    inputAsunto = document.getElementById("asunto");
    inputMensaje = document.getElementById("mensaje");
    // contenedores de error
    errorNombre = document.getElementById("error-nombre");
    errorEmail = document.getElementById("error-email");
    errorTelefono = document.getElementById("error-telefono");
    errorAsunto = document.getElementById("error-asunto");
    errorMensaje = document.getElementById("error-mensaje");

    // inputs en tiempo real
    inputNombre.addEventListener("input", validarNombre);
    inputEmail.addEventListener("input", validarEmail);
    inputTelefono.addEventListener("input", validarTelefono);
    inputAsunto.addEventListener("input", validarAsunto);
    inputMensaje.addEventListener("input", validarMensaje);

    // evento submit del formulario
    formContacto.addEventListener("submit", manejarSubmit);
});

// muestra o esconde el error y actualiza el estado global
function actualizarEstado(campo, esValido, elementoError, mensajeTexto) {
    estadoValidacion[campo] = esValido;

    if (!esValido) {
        elementoError.textContent = mensajeTexto;
        elementoError.classList.remove("d-none");
    } else {
        elementoError.classList.add("d-none");
    }

    comprobarFormularioGlobal();
}

// valida que todos los campos sean verdaderos para habilitar el boton
function comprobarFormularioGlobal() {
    if (estadoValidacion.nombre && estadoValidacion.email &&
        estadoValidacion.telefono && estadoValidacion.asunto &&
        estadoValidacion.mensaje) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

// validacion de nombre (minimo 5 caracteres, solo letras y espacios)
function validarNombre() {
    const valor = inputNombre.value.trim();
    // regex que permite mayusculas, minusculas, letras con tildes y espacios
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (valor.length < 5) {
        actualizarEstado("nombre", false, errorNombre, "El nombre debe tener al menos 5 caracteres.");
    } else if (!regexLetras.test(valor)) {
        actualizarEstado("nombre", false, errorNombre, "El nombre solo puede contener letras y espacios.");
    } else {
        actualizarEstado("nombre", true, errorNombre, "");
    }
}

// validacion de correo (regex estandar)
function validarEmail() {
    const valor = inputEmail.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(valor)) {
        actualizarEstado("email", false, errorEmail, "Por favor ingresa un correo electrónico válido.");
    } else {
        actualizarEstado("email", true, errorEmail, "");
    }
}

// validacion de telefono (solo numeros, minimo 8 digitos)
function validarTelefono() {
    const valor = inputTelefono.value.trim();
    const regexNumeros = /^[0-9]+$/;

    if (!regexNumeros.test(valor)) {
        actualizarEstado("telefono", false, errorTelefono, "El teléfono solo puede contener números.");
    } else if (valor.length < 8) {
        actualizarEstado("telefono", false, errorTelefono, "El teléfono debe tener al menos 8 dígitos.");
    } else {
        actualizarEstado("telefono", true, errorTelefono, "");
    }
}

// validacion de asunto (minimo 3 caracteres)
function validarAsunto() {
    const valor = inputAsunto.value.trim();

    if (valor.length < 3) {
        actualizarEstado("asunto", false, errorAsunto, "El asunto debe tener al menos 3 caracteres.");
    } else {
        actualizarEstado("asunto", true, errorAsunto, "");
    }
}

// validacion de mensaje (minimo 20 caracteres)
function validarMensaje() {
    const valor = inputMensaje.value.trim();

    if (valor.length < 20) {
        actualizarEstado("mensaje", false, errorMensaje, "El mensaje debe tener al menos 20 caracteres.");
    } else {
        actualizarEstado("mensaje", true, errorMensaje, "");
    }
}

// maneja el envio del formulario
function manejarSubmit(evento) {
    // prevenimos que se recargue la pagina
    evento.preventDefault();
    if (btnEnviar.disabled) return;
    mensajeExito.classList.remove("d-none");
    formContacto.reset();

    estadoValidacion = {
        nombre: false,
        email: false,
        telefono: false,
        asunto: false,
        mensaje: false
    };
    comprobarFormularioGlobal();

    setTimeout(function () {
        mensajeExito.classList.add("d-none");
    }, 5000); //5s
}
