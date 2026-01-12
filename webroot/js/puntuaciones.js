/*
    - Script que representa todo lo relacionado con las puntuaciones.
    - Incluye una funcion que guarda las 3 primeras puntuaciones en una tabla.
*/

/*
    - Función que crea tres puntuaciones con la ApiWebStorage.
    
*/

function guardarPuntuaciones(sg){
    
    
    MejoresPuntuaciones={
        facil:{
            primera:["",0],
            segunda:["",0],
            tercera:["",0],
        },
        media:{
            primera:["",0],
            segunda:["",0],
            tercera:["",0],
        },
        alta:{
            primera:["",0],
            segunda:["",0],
            tercera:["",0],
        }
    }
    
    
    
    if (!localStorage.getItem("puntuacion1")) {
        localStorage.setItem("puntuacion1", sg);
        MejoresPuntuaciones.facil.primera[0]=sg;
    } else if (!localStorage.getItem("puntuacion2")) {
        localStorage.setItem("puntuacion2", sg);
        MejoresPuntuaciones.facil.segunda[0]=sg;
    } else if (!localStorage.getItem("puntuacion3")) {
        localStorage.setItem("puntuacion3", sg);
        MejoresPuntuaciones.facil.tercera[0]=sg;
    } else {
        if (sg < Number(localStorage.getItem("puntuacion1"))) {
            localStorage.setItem("puntuacion3", localStorage.getItem("puntuacion2"));
            MejoresPuntuaciones.facil.tercera[0]=MejoresPuntuaciones.facil.segunda[0];
            localStorage.setItem("puntuacion2", localStorage.getItem("puntuacion1"));
            MejoresPuntuaciones.facil.segunda[0]=MejoresPuntuaciones.facil.primera[0];
            localStorage.setItem("puntuacion1", sg);
            MejoresPuntuaciones.facil.primera[0]=sg;
        } else if (sg < Number(localStorage.getItem("puntuacion2"))) {
            localStorage.setItem("puntuacion3", localStorage.getItem("puntuacion2"));
            MejoresPuntuaciones.facil.tercera[0]=MejoresPuntuaciones.facil.segunda[0];
            localStorage.setItem("puntuacion2", sg);
            MejoresPuntuaciones.facil.segunda[sg];
        } else if (sg < Number(localStorage.getItem("puntuacion3"))) {
            localStorage.setItem("puntuacion3", sg);
            MejoresPuntuaciones.facil.tercera[sg];
        }
    }

    mostrarPuntuaciones(MejoresPuntuaciones,nivel=0);
    
}


guardarPuntuaciones();

function mostrarPuntuaciones(oPuntuaciones,nivel=0){
    
    var main = document.getElementById("contenidoPrincipal");

    let contenedorTabla = document.getElementById("contenedorTabla");

    if (!contenedorTabla) {
        contenedorTabla = document.createElement("div");
        contenedorTabla.id = "contenedorTabla";
        main.appendChild(contenedorTabla);
    }

    contenedorTabla.innerHTML="";

    const tabla = document.createElement("table");
    tabla.classList.add("tabla-puntuaciones");

    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    const tBody = document.createElement("tbody");
    // Fila primera puntuación.
    const trPrimera = document.createElement("tr");
    const tdNombrePrimera = document.createElement("td"); // Celda nombre primera puntuación.
    const tdPuntuacionPrimera = document.createElement("td"); // Celda primera puntuación.
    // Fila segunda puntuación.
    const trSegunda = document.createElement("tr");
    const tdNombreSegunda = document.createElement("td");
    const tdPuntuacionSegunda = document.createElement("td");
    // Fila tercera puntuación.
    const trTercera = document.createElement("tr");
    const tdNombreTercera = document.createElement("td");
    const tdPuntuacionTercera = document.createElement("td");

    

}

mostrarPuntuaciones();
/*
function crearTablaPuntuaciones(){

    var main = document.getElementById("contenidoPrincipal");

    let contenedorTabla = document.getElementById("contenedorTabla");

    if (!contenedorTabla) {
        contenedorTabla = document.createElement("div");
        contenedorTabla.id = "contenedorTabla";
        main.appendChild(contenedorTabla);
    }

    
    contenedorTabla.innerHTML = "";

    const tabla = document.createElement("table");
    tabla.classList.add("tabla-puntuaciones");

    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    ["Jugador", "Puntuación"].forEach(texto => {
        const th = document.createElement("th");
        th.textContent = texto;
        trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");

    
    for (let i = 1; i <= 3; i++) {
        const valor = localStorage.getItem("puntuacion" + i);
        if (!valor) continue;

        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        const inputNombre = document.createElement("input");

        inputNombre.placeholder = "Nombre";
        tdNombre.appendChild(inputNombre);

        inputNombre.addEventListener("blur", () => {
            // Cuando pierde el foco, se bloquea mostrando el nombre
            if (inputNombre.value.trim() !== "") {
                inputNombre.parentElement.textContent = inputNombre.value.trim();
            }
        });

        const tdPuntos = document.createElement("td");
        tdPuntos.textContent = valor;

        tr.appendChild(tdNombre);
        tr.appendChild(tdPuntos);
        tbody.appendChild(tr);
    }

    tabla.appendChild(tbody);
    contenedorTabla.appendChild(tabla);
}


*/

