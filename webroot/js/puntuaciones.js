/*
    - Script que representa todo lo relacionado con las puntuaciones.
    - Incluye una funcion que guarda las 3 primeras puntuaciones en una tabla.
*/



// Objeto global mejores puntuaciones.
let MejoresPuntuaciones ={
    facil:{
        primera:["",1000],
        segunda:["",2000],
        tercera:["",3000]
    }
}


function guardarPuntuaciones(sg) {

    // Cargar de localStorage si existe
    const datos = localStorage.getItem("rankingFacil");
    if (datos) {
        MejoresPuntuaciones = JSON.parse(datos);
    }

    let f = MejoresPuntuaciones.facil;

    let p1 = f.primera[1];
    let p2 = f.segunda[1];
    let p3 = f.tercera[1];

    if (p1 === 0 || sg < p1) {
        f.tercera = [...f.segunda];
        f.segunda = [...f.primera];
        f.primera = ["", sg];
    }
    else if (p2 === 0 || sg < p2) {
        f.tercera = [...f.segunda];
        f.segunda = ["", sg];
    }
    else if (p3 === 0 || sg < p3) {
        f.tercera = ["", sg];
    }

    // Guardar
    localStorage.setItem("rankingFacil", JSON.stringify(MejoresPuntuaciones));

    mostrarPuntuaciones(MejoresPuntuaciones);
}


function mostrarPuntuaciones(oPuntuaciones) {

    // ⬅️ Cargar desde localStorage SIEMPRE
    const datos = localStorage.getItem("rankingFacil");
    if (datos) {
        oPuntuaciones = JSON.parse(datos);
    }

    const main = document.getElementById("contenidoPrincipal");

    let contenedor = document.getElementById("contenedorTabla");
    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "contenedorTabla";
        main.appendChild(contenedor);
    }

    contenedor.innerHTML = "";

    const tabla = document.createElement("table");
    tabla.classList.add("tabla-puntuaciones");

    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");

    ["Jugador", "Puntuación"].forEach(t => {
        const th = document.createElement("th");
        th.textContent = t;
        trHead.appendChild(th);
    });

    thead.appendChild(trHead);
    tabla.appendChild(thead);

    const tbody = document.createElement("tbody");

    const puestos = ["primera", "segunda", "tercera"];

    puestos.forEach(p => {
        const datos = oPuntuaciones.facil[p];
        if (datos[1] === 0) return;

        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");

        if (datos[0] === "") {
            const input = document.createElement("input");
            input.placeholder = "Nombre";
            input.addEventListener("blur", () => {
                if (input.value.trim() !== "") {
                    datos[0] = input.value.trim();
                    localStorage.setItem("rankingFacil", JSON.stringify(oPuntuaciones));
                    mostrarPuntuaciones(oPuntuaciones);
                }
            });
            tdNombre.appendChild(input);
        } else {
            tdNombre.textContent = datos[0];
        }

        const tdPuntos = document.createElement("td");
        tdPuntos.textContent = datos[1];

        tr.appendChild(tdNombre);
        tr.appendChild(tdPuntos);
        tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    contenedor.appendChild(tabla);
}


