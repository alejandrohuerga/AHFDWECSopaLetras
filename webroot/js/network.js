

// Función que crea la barra superior si no hay red mediante el DOM.

function crearBarra(){
    const barra=document.createElement("div");
    barra.id = "offline-bar";
    barra.textContent = "Sin conexión — no hay red. Algunas funciones pueden no estar disponibles.";

    document.body.insertBefore(barra, document.body.firstChild);
}

// Función que muestra la barra en el html.

function mostrarBarra(){
    crearBarraOffline();
    const barra = document.getElementById("offline-bar");
    if (barra) barra.classList.add("visible");
}

function ocultarBarra() {
    const barra = document.getElementById("offline-bar");
    if (!barra) return;
    barra.classList.remove("visible");
}

/* 
    - Funcion que decide si mostrar la barra o no.
    - Utiliza el objeto navigator.
*/

function hayConexion(){
    if(!navigator.onLine){
        mostrarBarra();
    }else{
        ocultarBarra();
    }
}

// Escuchar cambios de red
window.addEventListener("offline", () => {
    mostrarBarra();
});

window.addEventListener("online", () => {
    ocultarBarra();
});