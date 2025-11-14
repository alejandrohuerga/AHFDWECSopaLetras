/*
    - Funcion que muestra el relog en tiempo real y actualizandose cada segundo.
    - Utiliza la clase Date.
    - Utiliza la clase document para poder escribirlo en el footer.
    - Ejecutaremos la función con setInterval para que actualice cada segundo.
*/ 

function mostrarRelog(){
    
    var reloj = new Date();
    var hora = reloj.getHours().toString().padStart(2, '0');
    var minutos = reloj.getMinutes().toString().padStart(2, '0');
    var segundos = reloj.getSeconds().toString().padStart(2, '0');

    var textoHora = hora + ":" + minutos + ":" + segundos;

    // Actualizamos el contenido del <p> dentro del footer
    document.getElementById("piePagina").textContent = textoHora;
}

mostrarRelog();
var temporizadorRelog=setInterval(mostrarRelog,1000);