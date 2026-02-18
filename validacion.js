let formulario = document.getElementById("formulario")
let usuario = document.getElementById("usuario")
let password = document.getElementById("password")

let mensajeUsuario = document.getElementById("mensajeUsuario")
let mensajePassword = document.getElementById("mensajePassword")
let mensajeGeneral = document.getElementById("mensajeGeneral")

let contador = document.getElementById("contador")

let togglePassword = document.getElementById("togglePassword")
let icono = document.getElementById("icono")

let intentos = 0
let bloqueado = false


usuario.addEventListener("input", function () {

    let valor = usuario.value
    let expresion = /^[a-zA-Z0-9.-]{3,}$/  

    if (valor.length < 3) {
        mensajeUsuario.textContent = "Mínimo 3 caracteres"
        mensajeUsuario.style.color = "red"
    }
    else if (!expresion.test(valor)) {
        mensajeUsuario.textContent = "Solo letras, números, guiones y puntos"
        mensajeUsuario.style.color = "red"
    }
    else {
        mensajeUsuario.textContent = "Usuario válido"
        mensajeUsuario.style.color = "green"
    }

})


function validarUsuario() {

    let valor = usuario.value
    let expresion = /^[a-zA-Z0-9.-]{3,}$/

    if (valor.length < 3) return false
    if (!expresion.test(valor)) return false

    return true
}


password.addEventListener("input", function () {

    let valor = password.value
    let longitud = valor.length

    contador.textContent = "Caracteres: " + longitud

    validarPassword()

})

function validarPassword() {

    let valor = password.value

    let tieneNumero = /[0-9]/.test(valor)
    let tieneEspecial = /[!@#$%^&*]/.test(valor)
    let tieneLetra = /[a-zA-Z]/.test(valor)

    if (valor.length < 10) {
        mensajePassword.textContent = "Debe tener mínimo 10 caracteres"
        mensajePassword.style.color = "red"
        return false
    }

    if (!tieneNumero || !tieneEspecial || !tieneLetra) {
        mensajePassword.textContent = "Debe contener letras, números y un carácter especial"
        mensajePassword.style.color = "red"
        return false
    }

    mensajePassword.textContent = "Contraseña segura ✅"
    mensajePassword.style.color = "green"
    return true
}




togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text"
        icono.classList.remove("bi-eye")
        icono.classList.add("bi-eye-slash")
    } else {
        password.type = "password"
        icono.classList.remove("bi-eye-slash")
        icono.classList.add("bi-eye")
    }

})


formulario.addEventListener("submit", function (e) {

    e.preventDefault()

    if (bloqueado) return

    let usuarioValido = validarUsuario()
    let passwordValido = validarPassword()

    if (usuarioValido && passwordValido) {

        mensajeGeneral.textContent = "Formulario enviado correctamente ✅"
        mensajeGeneral.style.color = "green"

        formulario.reset()
        contador.textContent = "Caracteres: 0"
        mensajeUsuario.textContent = ""
        mensajePassword.textContent = ""

        intentos = 0

    } else {

        intentos++
        mensajeGeneral.textContent = "Datos incorrectos. Intento: " + intentos
        mensajeGeneral.style.color = "red"

        if (intentos >= 3) {
            bloquearFormulario()
        }
    }

})


function bloquearFormulario() {

    bloqueado = true

    usuario.disabled = true
    password.disabled = true

    mensajeGeneral.textContent = "Formulario bloqueado por 30 segundos"
    mensajeGeneral.style.color = "darkred"

    setTimeout(function () {

        usuario.disabled = false
        password.disabled = false

        mensajeGeneral.textContent = "Puedes intentar nuevamente"
        mensajeGeneral.style.color = "blue"

        intentos = 0
        bloqueado = false

    }, 30000)
}


