
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

/* 
    - Funcion que calcula la dimensión del tablero.
    - La función devuelve un array con las dimension calculada previamente.
    - la función recibe como parametro el array de palabras.
    - Utilizamos las funciones creadas anteriormente para calcular la dimensión del tablero 
      (contarLetrasPalbras y encontrarPalabraMasLarga).

*/

function calcularDimensionTablero(palabras){

    var totalLetras=contarLetrasPalabras(palabras);
    var palabraLarga=encontrarPalabraMasLarga(palabras);
    var longitudMax=palabraLarga.length;

    var dimension=longitudMax;
    var tablero=new Array(dimension);

    while(dimension*dimension <2 * totalLetras){
        dimension++;
    }

    for(let i=0;i<dimension;i++){
        tablero[i]=new Array(dimension);
        for(let j=0;j<dimension;j++){
            tablero[i][j]='';
        }
    }

    return tablero;
}

console.log(calcularDimensionTablero(palabras));

