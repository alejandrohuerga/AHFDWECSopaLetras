export let seleccionInicio = null;
export let seleccionFin = null;

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

        // Reset para la siguiente palabra
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
    //const tabla=document.getElementsByTagName("table")[0];

        console.log(Math.abs(colFin - colInicio),Math.abs(filaFin - filaInicio));

        if ((colInicio==colFin)||(filaFin==filaInicio)||(Math.abs(colFin - colInicio)==Math.abs(filaFin - filaInicio))){
            while (true) { // Quitar el while true por otra estructura de control.
                tabla.rows[y].cells[x].classList.add("seleccionada");
                if (x === colFin && y === filaFin) break;
                x += dx;
                y += dy;
            }
        }else{
            inicio.classList.remove("seleccionada");
        }
}


















