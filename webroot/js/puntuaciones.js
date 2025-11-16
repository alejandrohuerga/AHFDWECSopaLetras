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

    // 1. Obtener el main donde debe ir la tabla
    var main=document.getElementById("contenidoPrincipal");


    // 2. Creamos contenedorTabla si NO existe
    let contenedorTabla = document.getElementById("contenedorTabla");

    if (!contenedorTabla) {
        contenedorTabla = document.createElement("div");
        contenedorTabla.id = "contenedorTabla";
        main.appendChild(contenedorTabla);
    }

    const tabla = document.createElement("table");
    tabla.classList.add("tabla-puntuaciones");

    // CABECERA
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    ["Jugador", "Puntuación"].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    tabla.appendChild(thead);


    // 5. Recuperar puntuaciones del localStorage
    let datos = [];

    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);

        if (clave.startsWith("Jugador")) {
            datos.push({
                nombre: clave,
                puntos: Number(localStorage.getItem(clave))
            });
        }
    }

     // Ordenar de mayor a menor
    datos.sort((a, b) => b.puntos - a.puntos);

    // CUERPO TABLA
    const tbody = document.createElement("tbody");

    datos.forEach(obj => {
        const tr = document.createElement("tr");
        tr.classList.add("fila-puntuacion");

        const tdNombre = document.createElement("td");
        tdNombre.classList.add("celda-puntuacion");
        tdNombre.textContent = obj.nombre;
        
        const tdPuntos = document.createElement("td");
        tdPuntos.classList.add("celda-puntuacion");
        tdPuntos.textContent = obj.puntos;
        

        tr.appendChild(tdNombre);
        tr.appendChild(tdPuntos);
        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);

    // 6. Insertar tabla en el contenedor
    contenedorTabla.appendChild(tabla);
}

crearPuntuaciones();
crearTablaPuntuaciones();