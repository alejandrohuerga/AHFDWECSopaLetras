/*
    - Script que representa todo lo relacionado con las puntuaciones.
    - Incluye una funcion que guarda las 3 primeras puntuaciones en una tabla.
*/



/*
    - Función que crea tres puntuaciones con la ApiWebStorage.
    - 3 puntuaciones de ejemplo para validar las funciones.
*/

function crearPuntuaciones(){
    localStorage.setItem("Jugador1",1000);
    localStorage.setItem("Jugador2",2000);
    localStorage.setItem("Jugador3",5000);
    console.log("Los jugadores se guardaron correctamente");
}

function crearTablaPuntuaciones(){

    var tabla=document.createElement("table");
    var thead=document.createElement("thead");
    var filaHead=document.createElement("tr");
    var thJugador=document.createElement("th");
    thJugador.textContent("Jugador");
    var thPuntuacion=document.createElement("th");
    thPuntuacion.textContent("Puntuacion");

    filaHead.appendChild(thJugador);
    filaHead.appendChild(thPuntuacion);
    thead.appendChild(filaHead);
    tabla.appendChild(thead);

    var tbody=document.createElement("tbody");
    let index=0;

    for(let i=0;i<localStorage.length;i++){
        var jugador=localStorage.key(i);
        var puntuacion=localStorage.getItem(jugador);

        var fila=document.createElement("tr");
        var celdaJugador=document.createElement("td");

        celdaJugador.textContent=jugador;


        var celdaPuntuacion=document.createElement("td");
        celdaPuntuacion.textContent=puntuacion;

        fila.appendChild(celdaJugador);
        fila.appendChild(celdaPuntuacion);
        tbody.appendChild(fila);

        index++;

    }

    tabla.appendChild(tbody);

    document.getElementById("contenidoPrincipal").appendChild(tabla);
    /*
    var contenedorPuntuaciones=document.createElement("div");
    var tabla=document.createElement("table");
    tabla.setAttribute("id","tablaPuntuaciones");

    var fila=document.createElement("tr");
    
    var encabezado1=document.createElement("th");
    encabezado1.appendChild(document.createTextNode("Nombre Jugador"));

    var encabezado2=document.createElement("th");
    encabezado2.appendChild(document.createTextNode("Puntuacion"));

    fila.appendChild(encabezado1);
    fila.appendChild(encabezado2);
    tabla.appendChild(fila);
    contenedorPuntuaciones.appendChild(tabla);

    for(let i=0;i<3;i++){

        var fila=document.createElement("tr");
        var celda=document.createElement("td");
        celda.appendChild(document.createTextNode("Jugador"+i));
        fila.appendChild(celda);
        
        for(let i=0;i<1;i++){
           
            var celda=document.createElement("td");

            
            celda.appendChild(document.createTextNode(localStorage.getItem("Jugador"+i)));
            
            
            fila.appendChild(celda);
        }
        
        tabla.appendChild(fila);
    }

    contenedorPuntuaciones.appendChild(tabla);

    document.getElementById("contenidoPrincipal").appendChild(contenedorPuntuaciones);
    */
}

crearPuntuaciones();
crearTablaPuntuaciones();