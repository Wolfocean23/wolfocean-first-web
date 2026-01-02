// BOTÓN DÍA 4
const boton = document.getElementById("botonSaludo");
boton.addEventListener("click", function () {
    alert("Bienvenido al camino Full Stack, WOLFOCEAN.J. 🚀");
});

// ELEMENTOS DÍA 5 y 6
const botonMostrar = document.getElementById("botonMostrar");
const inputNombre = document.getElementById("nombreUsuario");
const salida = document.getElementById("salida");

// MOSTRAR NOMBRE GUARDADO AL CARGAR LA PÁGINA
const nombreGuardado = localStorage.getItem("nombreGuardado");

if (nombreGuardado) {
    salida.innerText = "Bienvenido de nuevo, " + nombreGuardado + " 💙";
}

// GUARDAR NOMBRE AL HACER CLIC
botonMostrar.addEventListener("click", function () {
    const nombre = inputNombre.value;

    if (nombre === "") {
        salida.innerText = "Por favor escribe tu nombre 🙂";
    } else {
        localStorage.setItem("nombreGuardado", nombre);
        salida.innerText = "Hola " + nombre + ", gusto en verte de nuevo 🚀";
    }
});