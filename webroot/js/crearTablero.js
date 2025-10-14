
// Creamos el array y lo rellenamos con algunas palabras de ejemplo.

var palabras=new Array();
palabras=["PATO","BALON","MONITOR","FEMUR","ORFANATO","BALONCESTO"];

/*
    La función contarLetrasPalabras recibe como  parametro un array.
    Devuelve la suma de todas las letras de todas las palabras.
*/

function contarLetrasPalabras(palabras){
    var cadenaJunta=palabras.join('');
    var total_letras_palabras=cadenaJunta.length;

    return total_letras_palabras;
}


/*
    La función encontrarPalabraMasLarga recibe como  parametro un array de palabras.
    Devuelve la longitud de la palabra mas larga.
*/

function encontrarPalabraMasLarga(palabras){
    var palabraMasLarga=palabras[0];

    for(let i=0;i<palabras.length;i++){
        if(palabras[i].length>palabraMasLarga.length){
            palabraMasLarga=palabras[i];
        }
    }

    return palabraMasLarga;
}

