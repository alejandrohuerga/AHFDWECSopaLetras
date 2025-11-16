
// Funcion que muestra una alerta si las cookies estan desactivadas.

function cookiesHabilitadas(){

    var activas=false;

    // Utilizamos el objeto navigator con el método cookieEnabled (Devuelve true si estan activas).

    if(navigator.cookieEnabled()){
        activas=true;
    }

    if(activas){
        alert("Cookies desactivadas");
    }
}