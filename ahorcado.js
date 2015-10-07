var palabra = "hola";
var newPalabra = palabra.split("");

function validacion(p){

    var p = prompt("que letra quieres?");
    
    for(i=0; i <= newPalabra.length; i++){

        console.log(newPalabra[i]);

    if(p == newPalabra[i]){

        console.log("good!");

    }
        else{

            console.log("bad");

        }
    }
}

validacion();