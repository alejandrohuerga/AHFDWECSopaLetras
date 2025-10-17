
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
    

    while(dimension*dimension <2 * totalLetras){
        dimension++;
    }

    return dimension;
    
}

var dimension=calcularDimensionTablero(palabras);

/*
    - Función que crea un array bidimensional el cual representa un tablero.
    - La función recibe como parametro la dimension calculada el la funcion calcularDimensionTablero.
    - La funcion devuelve un array bidimensional (Tablero). 
*/ 

function crearTablero(dimension){
    var tablero=new Array();
    dimension=calcularDimensionTablero(palabras);
    for(let i=0;i<dimension;i++){
        tablero[i]=new Array(dimension);
        for(let j=0;j<dimension;j++){
            tablero[i][j]='';
        }
    }

    return tablero;
}

var tablero=crearTablero(dimension);


//console.log(crearTablero(palabras));

/*
    - Función que calcula una posicion aleatoria dentro de la dimension del tablero.
    - La función recibe como parametro la dimension calculada el la funcion calcularDimensionTablero.
    - La funcion devuelve un array con las dos posiciones generadas aleatoriamente.
*/ 

function calcularPosicionAleatoria(dimension){

    var posicionX=Math.floor(Math.random()*dimension);
    var posicionY=Math.floor(Math.random()*dimension);

    
    var posicionAleatoria=[posicionX,posicionY];
    

    
    return posicionAleatoria;
    
}


var posicion=calcularPosicionAleatoria(dimension);


/* 
    - Esta función calcula una dirección aleatoria de entre 8 posibles.
    - No calcula si la palabra entra o no entra simplemente me manda una dirección
*/


function calcularDireccionAlaetoria(){
    
}

