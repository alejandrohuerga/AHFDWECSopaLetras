/*
    - Script que representa todo lo relacionado con las puntuaciones.
    - Incluye una funcion que guarda las 3 primeras puntuaciones en una tabla.
*/

/*
    - Función que crea tres puntuaciones con la ApiWebStorage.
    
*/

function guardarPuntuaciones(sg){
    var primera = new Object(); // Objeto primera , la primera puntuacion de cada objeto de dificultad.
    var segunda = new Object(); // Objeto segunda , la segunda puntuacion de cada objeto de dificultad.
    var tercera = new Object(); // Objeto tercera , la tercera puntuacion de cada objeto de dificultad.

    var facil=new Object( // Objeto facil , propiedad del objecto MejoresPuntuaciones.
        primera,
        segunda,
        tercera
    );

    var media=new Object( // Objeto media , propiedad del objecto MejoresPuntuaciones.
        primera,
        segunda,
        tercera
    );

    var dificil=new Object( // Objeto dificil , propiedad del objecto MejoresPuntuaciones.
        primera,
        segunda,
        tercera
    ); 

    var MejoresPuntuaciones = new Object( // Objeto llamado mejores puntuaciones, tiene como propiedades 3 objetos (facil,media,dificil)
        facil,
        media,
        dificil
    ); 

    


    console.log(MejoresPuntuaciones);


    /*
    if (!localStorage.getItem("puntuacion1")) {
        localStorage.setItem("puntuacion1", sg);
    } else if (!localStorage.getItem("puntuacion2")) {
        localStorage.setItem("puntuacion2", sg);
    } else if (!localStorage.getItem("puntuacion3")) {
        localStorage.setItem("puntuacion3", sg);
    } else {
        if (sg < Number(localStorage.getItem("puntuacion1"))) {
            localStorage.setItem("puntuacion3", localStorage.getItem("puntuacion2"));
            localStorage.setItem("puntuacion2", localStorage.getItem("puntuacion1"));
            localStorage.setItem("puntuacion1", sg);
        } else if (sg < Number(localStorage.getItem("puntuacion2"))) {
            localStorage.setItem("puntuacion3", localStorage.getItem("puntuacion2"));
            localStorage.setItem("puntuacion2", sg);
        } else if (sg < Number(localStorage.getItem("puntuacion3"))) {
            localStorage.setItem("puntuacion3", sg);
        }
    }

    crearTablaPuntuaciones();
    */
}



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




