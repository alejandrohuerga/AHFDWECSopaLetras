
// Función que crea la barra superior si no existe
function crearBarra(){
    if (document.getElementById("offline-bar")) return; // evitar duplicados

    const barra = document.createElement("div");
    barra.id = "offline-bar";
    barra.textContent = "Sin conexión — no hay red. Algunas funciones pueden no estar disponibles.";
    document.body.insertBefore(barra, document.body.firstChild);
}

// Mostrar barra
function mostrarBarra(){
    crearBarra(); 
    const barra = document.getElementById("offline-bar");
    if (barra) barra.classList.add("visible");
}

// Ocultar barra
function ocultarBarra() {
    const barra = document.getElementById("offline-bar");
    if (!barra) return;
    barra.classList.remove("visible");
}

// Comprobar conexión al cargar
function hayConexion(){
    if(!navigator.onLine){
        mostrarBarra();
    }else{
        ocultarBarra();
    }
}

window.addEventListener("offline", mostrarBarra);
window.addEventListener("online", ocultarBarra);

// Ejecutar en el inicio
hayConexion();