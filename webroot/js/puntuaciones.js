/*
    - Script que representa todo lo relacionado con las puntuaciones.
    - Incluye una funcion que guarda las 3 primeras puntuaciones en una tabla.
*/



/*
    - Función que crea tres puntuaciones con la ApiWebStorage.
    
*/

function guardarPuntuaciones(sg){
    localStorage.setItem("puntuacion1",10000);
    localStorage.setItem("puntuacion2",20000);
    localStorage.setItem("puntuacion3",30000);
    /*
    if(sg<localStorage.getItem(1) || sg<localStorage.getItem(2) || sg>localStorage.getItem(3)){
        localStorage.setItem("puntuacion",sg);
        crearTablaPuntuaciones();
    }
    */

    crearTablaPuntuaciones();
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

        if (clave.startsWith("puntuacion")) {
            datos.push({
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
        tdNombre.classList.add("celda-puntuacion-nombre");
        const inputNombre=document.createElement("input");
        tdNombre.textContent = obj.nombre;
        
        const tdPuntos = document.createElement("td");
        tdPuntos.classList.add("celda-puntuacion-puntos");
        tdPuntos.textContent = obj.puntos;
        

        tr.appendChild(tdNombre);
        tdNombre.appendChild(inputNombre);
        tr.appendChild(tdPuntos);
        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);

    // 6. Insertar tabla en el contenedor
    contenedorTabla.appendChild(tabla);
}



crearTablaPuntuaciones();
