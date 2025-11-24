
// Función que muestra por consola si se ha hecho click en una celda.

export function miFuncionClick(){
    
    console.log("Has hecho click en la celda: ");
}



// Función que comprueba si una letra es la primera seleccionada.
export function comprobarClaseSeleccionada(){
    
    var numSeleccionadas=document.getElementsByClassName("seleccionada");

    return numSeleccionadas.length;
}


function agregarPrimeraSeleccionada(){
    if(comprobarClaseSeleccionada()=0){

    }
}









