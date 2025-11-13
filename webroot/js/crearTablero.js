
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
    - Funcion la cual escribe la palabra dentro del tablero.
    - Recibe como parametros (tablero,palabras,posicion,direccionAleatoria).
    - Antes de escribir vada letra verifica si la posicion esta vacia o tiene la misma letra.
    - Devuelve el tablero con las palabras escritas.
*/

function escribirPalabra(tablero,palabras,posicion,direccionAleatoria){

    //Recorremos el array de palabras una por una.
    for(var i=0;i<palabras.length;i++){

        var palabra=palabras[i]; // palabra es igual al valor de i.
        posicion=calcularPosicionAleatoria(dimension);
        var arrayDirecciones=direccionesValidas(posicion,dimension,direcciones);
        direccionAleatoria=calcularDireccionAleatoria(arrayDirecciones);
        var x=posicion[0];
        var y=posicion[1];
        var dx=direccionAleatoria.dx;
        var dy=direccionAleatoria.dy;
        var entra=comprobarPalabraEntra(tablero,palabra,posicion,direccionAleatoria,dimension);

        do{
            posicion=calcularPosicionAleatoria(dimension);
            arrayDirecciones=direccionesValidas(posicion,dimension,direcciones);
            direccionAleatoria=calcularDireccionAleatoria(arrayDirecciones);
            x=posicion[0];
            y=posicion[1];
            dx=direccionAleatoria.dx;
            dy=direccionAleatoria.dy;
            entra=comprobarPalabraEntra(tablero,palabra,posicion,direccionAleatoria,dimension);
            
            // Validación de que la posición está vacía o tiene la misma letra
            if(entra){
                var puedePoner=true;
                for(let j=0;j<palabra.length;j++){
                    var nx=x+dx*j;
                    var ny=y+dy*j;
                    if(tablero[nx][ny]!='' && tablero[nx][ny]!=palabra.charAt(j)){
                        puedePoner=false;
                        break;
                    }
                }
                entra=puedePoner;
            }
            
        }while(entra==false);

        // Escribimos la palabra en el tablero
        if(entra){
            for(let j=0;j<palabra.length;j++){
                tablero[x][y]=palabra.charAt(j);
                x+=dx;
                y+=dy;
            }
        }

    }
    
    return tablero;
}

/*
    - Funcion que dibuja el tablero en el documento HTML.
    - Recorre el tablero generado con un for y lo escribe en el HTML.
    - Si en el hueco no hay ninguna letra de la palabra pone un td vacio.
    - Utiliza el objeto document los metodos createElement() y appendChild().
*/

function dibujarTablero(tablero){
    var tabla=document.createElement("table");
    
    for(let i=0;i<tablero.length;i++){
        var fila=document.createElement("tr");
        
        for(let j=0;j<tablero[i].length;j++){
            var letra = tablero[i][j] === '' ? '' : tablero[i][j];

            var celda=document.createElement("td");
            
            celda.appendChild(document.createTextNode(letra));
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    document.getElementById("contenidoPrincipal").appendChild(tabla);
}

/*
    - Función que rellena los huecos vacios con letras aleatorias.
    - Recibe como parametro el tablero con las palabras colocadas.
    - Devuelve el tablero con las palabras y relleno.
*/

function rellenarTablero(tablero){
    
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i=0;i<tablero.length;i++){
        for(let j=0;j<tablero[i].length;j++){
            // Si la celda está vacía, rellenar con letra aleatoria
            if(tablero[i][j] === ''){
                var indiceAleatorio = Math.floor(Math.random() * letras.length);
                tablero[i][j] = letras.charAt(indiceAleatorio);
            }
        }
    }
    
    return tablero;
}

/*
    - Funcion que escribe las palabras a buscar encima de la sopa de letras.
    - Recibe como parametro el array de palabras.
    - Utiliza el objeto document y los metodos createElement() y appendChild().
    - Recorre el array para ir escribiendo ccada palabra en una etiqueta li.
*/

function mostrarPalabras(palabras){
    var div=document.createElement("div");
    var lista=document.createElement("ul");

    for(let i=0;i<palabras.length;i++){

        var elementoLista=document.createElement("li");

        elementoLista.appendChild(document.createTextNode(palabras[i]));

        lista.appendChild(elementoLista);
    }

    div.appendChild(lista);

    document.getElementById("contenidoPrincipal").appendChild(div);
}

escribirPalabra(tablero,palabras,posicion,direccionAleatoria);
mostrarPalabras(palabras);
rellenarTablero(tablero);
dibujarTablero(tablero);




