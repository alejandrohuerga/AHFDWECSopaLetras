
// Función que crea la barra sin conexión mediante el DOM.

function crearBarra(){

    var div=document.createElement("div");
    div.id="offline-bar"; // Le ponemos id al div para luego darle estilos.

    var texto=document.createElement('p');
    texto.textContent="No tienes red en tu navegador"; // Le ponemos texto al p.

    div.appendChild(texto);

    // Insertamos la barra arriba del body.
    document.body.prepend(div);

}


/*
  - Función que comprueba si tienes red o no.
  - Devuelve true si hay conexión y false si no la hay.
*/

function hayConexion(){
    var conexion=false;

    if(navigator.onLine){
        conexion=true;
    }else{
        conexion=false;
    }

    if(!conexion){
        crearBarra();
    }
}

hayConexion();

