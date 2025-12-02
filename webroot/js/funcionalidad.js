export let seleccionInicio = null;
export let seleccionFin = null;
import { tablero,palabras,dibujarTablero, mostrarPalabras } from "./crearTablero.js";




// Función que muestra por consola si se ha hecho click en una celda.

export function miFuncionClick(event) {
    const celda = event.target;

    // Si no hay inicio, esta será la primera
    if (!seleccionInicio) {
        seleccionInicio = celda;
        celda.classList.add("seleccionada"); // Resaltamos la celda
        return;
    }

    // Si ya hay inicio, esta será la fin
    if (!seleccionFin) {
        seleccionFin = celda;
        seleccionarPalabra(seleccionInicio, seleccionFin);

        // Solo llamamos a la función si seleccionInicio NO es null
        if (seleccionInicio) {
            const celdas = obtenerLetrasSeleccionadas(seleccionInicio, seleccionFin);
            const palabraFormada = celdas.map(c => c.textContent).join("");
            const palabraInversa=celdas.map(c => c.textContent).reverse().join("");
            console.log("Palabra formada:", palabraFormada);

            //Comprobacion de palabra en el array
            if(palabras.includes(palabraFormada) || palabras.includes(palabraInversa)){
                console.log("Palabra encontrada");
                marcarCorrectaVisual(celdas);
                eliminarPalabraLista(palabraFormada); // borra la palabra de la lista
            }else{
                console.log("Palabra incorrecta");
                revertirSeleccionVisual(celdas);
            }
        }

        // Reseteamos para la siguiente selección
        seleccionInicio = null;
        seleccionFin = null;
    }

}


// Función que selecciona la palabra segun las celdas a las que hagamos click.

function seleccionarPalabra(inicio, fin) {
    const filaInicio = inicio.parentElement.rowIndex;
    const colInicio = inicio.cellIndex;

    const filaFin = fin.parentElement.rowIndex;
    const colFin = fin.cellIndex;
    console.log(filaInicio,colInicio,filaFin,colFin);

    const dx = Math.sign(colFin - colInicio);
    const dy = Math.sign(filaFin - filaInicio);

    let x = colInicio;
    let y = filaInicio;

    const tabla = inicio.closest("table");
    
        console.log(Math.abs(colFin - colInicio),Math.abs(filaFin - filaInicio));

        if ((colInicio==colFin)||(filaFin==filaInicio)||(Math.abs(colFin - colInicio)==Math.abs(filaFin - filaInicio))){
            // Calculamos el número de pasos que hay que recorrer
            const pasos = Math.max(Math.abs(colFin - colInicio), Math.abs(filaFin - filaInicio));

            for (let i = 0; i <= pasos; i++) {
              tabla.rows[y].cells[x].classList.add("seleccionada");
                if (x === colFin && y === filaFin){ // conservamos la condición original
                    x += dx;
                    y += dy;
                }
            }
        }else{
            inicio.classList.remove("seleccionada");
        }
        var palabraSeleccionada;
}

// Funcion que recorre las letras seleccionadas y las mete en un array.

function obtenerLetrasSeleccionadas(inicio, fin) {
    const filaInicio = inicio.parentElement.rowIndex;
    const colInicio = inicio.cellIndex;

    const filaFin = fin.parentElement.rowIndex;
    const colFin = fin.cellIndex;

    const dx = Math.sign(colFin - colInicio); // dirección horizontal: 1, 0 o -1
    const dy = Math.sign(filaFin - filaInicio); // dirección vertical: 1, 0 o -1

    const tabla = inicio.closest("table");
    const celdasSeleccionadas = [];

    const pasos = Math.max(Math.abs(colFin - colInicio), Math.abs(filaFin - filaInicio));

    let x = colInicio;
    let y = filaInicio;

    for (let i = 0; i <= pasos; i++) {
        const celda = tabla.rows[y].cells[x];

        // Marcamos la celda visualmente
        celda.classList.add("seleccionada");
        celdasSeleccionadas.push(celda); // Guardamos el <td> completo, no solo la letra.

        

        x += dx;
        y += dy;
    }

    return celdasSeleccionadas;
}

// Función que quita la palabra acertada.

function eliminarPalabraLista(palabra) {
    const items = document.querySelectorAll("#listaPalabras li");

    items.forEach(li => {
        const texto = li.textContent;
        const textoInvertido = texto.split('').reverse().join(''); // invertimos el texto

        if (texto === palabra || textoInvertido === palabra) {
            li.remove(); 
        }
    });

    // Comprobamos si quedan palabras por buscar y sino mostramos alert.
    
    const restantes=document.querySelectorAll("#listaPalabras li");

    if(restantes.length ===0){
        alert("Has terminado el juego, tu tiempo es: "+cronometro.textContent);
    }
}

/*
    - Función la cual nos permite anotar un nuevo record en la tabla de puntuaciones.
*/
function anotarRecord(){
    
    
}





// Función que marca las palabras correctas en verde en el tablero

function marcarCorrectaVisual(letras){
    letras.forEach(celda => celda.classList.add("correcta"));
}

// Funcion que quita la clase seleccionada si no es correcta.
function revertirSeleccionVisual(letras) {
    letras.forEach(celda => celda.classList.add("incorrecta")); // amarillo
    letras.forEach(celda => celda.classList.remove("seleccionada"));

    // Paso 2: después de 2 segundos, poner rojo
    setTimeout(() => {
        letras.forEach(celda => {
            celda.classList.remove("incorrecta"); // quitamos amarillo
            celda.classList.add("incorrecta-roja"); // ponemos rojo
        });

        // Paso 3: después de 1 segundo más, quitar todo para volver a estado normal
        setTimeout(() => {
            letras.forEach(celda => celda.classList.remove("incorrecta-roja"));
        }, 1000);
    }, 1000);
}

/* 
   Función que agrega el boton de inicio al html , empieza el cronometro al hacer click y pinta
   el tablero.
*/

function agregarBotonInicio() {
    const botonInicio = document.createElement("button");
    botonInicio.id = "botonInicio";
    botonInicio.textContent = "Comenzar";

    const encabezado = document.querySelector("header");
    encabezado.appendChild(botonInicio);

    const cronometro = document.createElement("h4");
    cronometro.id = "cronometro";
    let segundos = 0;
    let intervalo; // guardamos el setInterval

    botonInicio.addEventListener("click", () => {
        // Dibujar tablero y mostrar palabras al pulsar
        dibujarTablero(tablero);

        // Iniciar cronómetro
        cronometro.textContent = `Tiempo: ${segundos}s`;
        encabezado.appendChild(cronometro);

        intervalo = setInterval(() => {
            segundos++;
            cronometro.textContent = `Tiempo: ${segundos}s`;
        }, 1000);

        // Deshabilitar botón para que no se pulse otra vez
        botonInicio.disabled = true;
    });
}

agregarBotonInicio();

























