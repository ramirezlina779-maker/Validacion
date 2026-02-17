let usuario = document.getElementById("usuario")
let mensaje = document.getElementById("mensaje")
let password = document.getElementById("password");

usuario.addEventListener("input", function (e) {
    let valor = this.value

    if (/[^a-zA-Z]/.test(valor)) {
        this.style.border = "2px solid red"
        mensaje.textContent = "Usuario incorrecto"
        mensaje.style.color = "red"
    } 
    else if (valor === "") {
        this.style.border = "2px solid red"
        mensaje.textContent = "Campo obligatorio"
        mensaje.style.color = "red"
    } 
    else {
        this.style.border = "2px solid green"
        mensaje.textContent = "Usuario válido"
        mensaje.style.color = "green"
    }

    this.value = valor.replace(/[^a-zA-Z]/g, '')
})


let mensajePassword = document.getElementById("mensajePassword");

password.addEventListener("input", function () {

    let valor = password.value
    let longitud = valor.length

    if (longitud > 10) {
        mensajePassword.textContent = "Contraseña válida ✅"
        mensajePassword.style.color = "green"
        password.style.border = "2px solid green"
    } else {
        let faltan = 10 - longitud
        mensajePassword.textContent = "Faltan " + faltan + " caracteres"
        mensajePassword.style.color = "red"
        password.style.border = "2px solid red"
    }

})