/**
 * Archivo que controla la petición y la obtención de palabras de una Api.
 * Para pedir las palabras utilizaremos las siguiente Api: https://random-word-api.herokuapp.com/word
 * 
 * @documentation: https://random-word-api.herokuapp.com/home
 */

// Definimos el endpoint

var endPoint = "https://random-word-api.herokuapp.com/word?number=6&lang=es";

/**
 * Funcion para consumir la Api y guardar las palabras en un array.
 */

export var palabrasGeneradas =[]

export async function obtenerPalabras(){
    return fetch(endPoint)
        .then(response => response.json())
        .then(data =>{
            palabrasGeneradas=data;
            return palabrasGeneradas; 
        })
        .catch(error =>{
            console.error('Error API', error);
            return ["MOTORISTA","BALON","MONITOR","CARACOLA"];
        })
}

