
// Creamos el array y lo rellenamos con algunas palabras de ejemplo.

var palabras=new Array();
palabras=["PATO","BALON","MONITOR","FEMUR","ORFANATO","BALONCESTO"];

// Ordenamos el Array de palabras mas larga a mas corta para colocar primero las largas.

palabras=palabras.sort((a,b)=>b.length-a.length);



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


// Constante (Array) que almacena todas las diecciones posibles.

const direcciones=[
        {dx:1, dy:0},   // derecha
        {dx:-1,dy:0},   // izquierda
        {dx:0, dy:1},   // arriba
        {dx:0, dy:-1},  // abajo
        {dx:1,dy:1},    // diagonal abajo derecha
        {dx:-1,dy:1},   // diagonal abajo izquierda
        {dx:1, dy:-1},  // diagonal arriba derecha
        {dx:-1, dy:-1}, // diagonal arriba izquierda
];

/*
    - Función que calcula las posiciones validas de la constante.
    - Recibe como parámetros (posicion aleatoria,dimension del tablero,array de direcciones).
    - Utiliza el método de los Arrays .filter() para filtrar las direcciones.
    - Devuelve un array con las direcciones posibles segun el filtrado.
*/

function direccionesValidas(posicion,dimension,direcciones){
    var x=posicion[0];
    var y = posicion[1];

    var direccionesValidas=direcciones.filter(({dx,dy})=>{
        var nx=dx+x;
        var ny=dy+y;

        return nx >= 0 && nx < dimension && ny >= 0 && ny < dimension;
    });

    return direccionesValidas;
}


var arrayDireccionesValidas=direccionesValidas(posicion,dimension,direcciones);


/* 
    - Función que calcula una direccion aleatoria entre las posibles.
    - Recibe como parametro el arrayDireccionesValidas.
    - Devuelve un indice del array de posiciones validas.
*/

function calcularDireccionAleatoria(arrayDireccionesValidas){

    var indice= Math.floor(Math.random()*arrayDireccionesValidas.length);

    return arrayDireccionesValidas[indice];
}


var direccionAleatoria=calcularDireccionAleatoria(arrayDireccionesValidas);





/* 
    - Funcion que comprueba si la palabra entra o no en el tablero.
    - Devuelve true o false dependiendo de si entra o no.
    - Recibe como parametros (tablero,palabra,posicion,direccion).
*/
function comprobarPalabraEntra (tablero,palabra,posicion,direccionAleatoria,dimension){

    var x=posicion[0];
    var y = posicion[1];
    var dx=direccionAleatoria.dx;
    var dy=direccionAleatoria.dy;

    for (let i = 0; i < palabra.length; i++) {
        const nx = x + dx * i; // Nueva posición en X
        const ny = y + dy * i; // Nueva posición en Y

        // Si se sale de los límites, la palabra no entra
        if (nx < 0 || nx >= dimension || ny < 0 || ny >= dimension) {
            return false;
        }
    }

    return true;
}


/*
console.log("Esta es la dimension del tablero: "+dimension);
console.log("Esta es la posicion aleatoria generada: "+posicion);
console.log(arrayDireccionesValidas);
console.log(direccionAleatoria);
console.log("Esta es la primera palabra: "+palabras[0]);
console.log(comprobarPalabraEntra(tablero,palabras[0],posicion,direccionAleatoria,dimension));
*/

function escribirPalabra(tablero,palabras,posicion,direccionAleatoria){
    
    var nx=posicion[0];
    var ny=posicion[1];
    var dx=direccionAleatoria.dx;
    var dy=direccionAleatoria.dy;

    for(i=0;i<palabras.length;i++){
        var palabra=palabras[i];
        
        calcularPosicionAleatoria(dimension);
        direccionesValidas(posicion,dimension,direcciones);
        calcularDireccionAleatoria(arrayDireccionesValidas);
        comprobarPalabraEntra(tablero,palabra,posicion,direccionAleatoria,dimension);
        
        if(comprobarPalabraEntra(tablero,palabra,posicion,direccionAleatoria,dimension)==true){
            for(j=0;j<palabra.length;j++){
                tablero[nx][ny]=palabra.charAt(j);
                nx +=  dx;
                ny +=  dy;   
            }
            
        }
    }
    
    return tablero;
}


console.log(escribirPalabra(tablero,palabras,posicion,direccionAleatoria));






