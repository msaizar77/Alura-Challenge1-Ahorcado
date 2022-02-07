var palabraElegida = "";            // Se elije al azar
var fallos = "";                    // Letras no incluidas en la palabra a Adivinar
var aciertos = "";
var letraElegida = "";
var cantLetrasDistintas = 0;
var cantMaximaFallos = 9;           // Mastil, Travesaño, Soporte, 
                                    // Cabeza, BrazoI, BrazoD, Torso, PiernaI, PiernaD

var botonIniciarJuego = document.getElementById("iniciar-juego");
botonIniciarJuego.addEventListener("click",function(){
    botonIniciarJuego.innerHTML = "REINICIAR JUEGO";
    palabraElegida = palabraAlAzar();                       // la funcion esta en "palabras.js"
    contarLetrasDistintas(palabraElegida);
    fallos = "";
    aciertos = "";
    reiniciarCanvas();                                      // la funcion esta en "canvas.js"
    mostrarInput();
});

var entradaLetras = document.querySelector("#entradaLetras");
entradaLetras.addEventListener("keypress", function(e){
    if (e.code.search("Key"))
        alert("No es una letra");
    else {
        letraElegida = e.code.substring(3,4);
        analizarSeleccion();
    }
});

function letraCorrecta(){
    aciertos += letraElegida;
    console.log("Letra correcta: "+letraElegida);
    redibujarLetrasAcertadas();
    if (aciertos.length == cantLetrasDistintas){
        mostrarMensajeGano();
        document.querySelector("#entradaLetras").disabled = true;
    }
}
    
function letraErronea(){
    fallos += letraElegida;
    console.log("Letra erronea: "+letraElegida);
    redibujarLetrasErroneas();
    dibujarSiguienteElementoHorca();
    if (fallos.length == cantMaximaFallos) {
        mostrarMensajePerdio();
        document.querySelector("#entradaLetras").disabled = true;
    }
}

function dibujarSiguienteElementoHorca(){
    switch (fallos.length) {
        case 1:
          dibujarMastil();
          break;
        case 2:
            dibujarTravesanio();
            break;
        case 3:
            dibujarCuerda();
            break;
        case 4:
            dibujarCabeza();
            break;
        case 5:
            dibujarTorso();
            break;
        case 6:
            dibujarBrazoI();
            break;
        case 7:
            dibujarBrazoD();
            break;
        case 8:
            dibujarPiernaI();
            break;
        case 9:
            dibujarPiernaD();
            break;
        default:
          break;
      }
}
