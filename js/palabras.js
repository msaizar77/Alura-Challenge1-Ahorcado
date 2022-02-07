
// Al final del ARRAY estan las funciones que usan el banco de palabras

const bancoDePalabras = [
    "Profesor",
    "Velo",
    "Casco",
    "Tijeras",
    "Aceite",
    "Yunta",
    "Tarta",
    "Derecha",
    "Embajador",
    "Tostar",
    "Flecha",
    "Tarjetas",
    "Sufrir",
    "Madurez",
    "Donde",
    "Cajonera",
    "Cosa",
    "Lamer",
    "Descifrar",
    "Espumar",
    "Postre",
    "Bocadillo",
    "Tornillo",
    "Leer",
    "Pastar",
    "Mantel",
    "Novio",
    "Colectivo",
    "Collar",
    "Cicatrizar",
    "Cambio",
    "Trasplantar",
    "Uniforme",
    "Fracturar",
    "Electricidad",
    "Rotor",
    "Velorio",
    "Persona",
    "Chicos",
    "Apellido",
    "Cometa",
    "Cabalgar",
    "Escalera",
    "Promedio",
    "Carnicero",
    "Nadar",
    "Pesa",
    "Bestia",
    "Hemisferios",
    "Pato",
    "Vidrio",
    "Denso",
    "Acupuntura",
    "Pintarse",
    "Desayuno",
    "Fiesta",
    "Pera",
    "Minar",
    "Nariz",
    "Raya",
    "Clavo",
    "Suegro",
    "Manta",
    "Ahogar",
    "Cejas",
    "Conflicto",
    "Pararse",
    "Tumba",
    "Envasado",
    "Cuchillo",
    "Republica",
    "Adivino",
    "Francia",
    "Seis",
    "Anchoa",
    "Minorista",
    "Mono",
    "Hiedra",
    "Manejar",
    "Escribir",
    "Tapizar",
    "Tango",
    "Adelgazar",
    "Obelisco",
    "Malo",
    "Pastel",
    "Abanderado",
    "Venecia",
    "Fugarse",
    "Historieta",
    "Divorciado",
    "Adhesivo",
    "Mantel",
    "Azotar",
    "Caracol",
    "Vuelta",
    "Balizas",
    "Aspiradora",
    "Caños",
    "Espiga",
]

var botonNuevaPalabra = document.getElementById("nueva-palabra");
botonNuevaPalabra.addEventListener("click",function(){
    var nuevaPalabra = document.getElementById("input-nueva-palabra").value;
    if (bancoDePalabras.includes(nuevaPalabra))
        alert("Palabra repetida");
    else {
        bancoDePalabras.push(nuevaPalabra);
        document.getElementById("input-nueva-palabra").value = "";
    } 
});

function palabraAlAzar(){
  let posicionAleatoria = Math.floor(Math.random() * bancoDePalabras.length);
  let resultado = bancoDePalabras[posicionAleatoria].toUpperCase();
  return resultado;
}

function mostrarInput(){
    document.getElementById("mostrarInput").style.display = "block";
    document.querySelector("#entradaLetras").disabled = false;
    document.getElementById("entradaLetras").focus();
}

function contarLetrasDistintas(){
    var sinRepetir = "";
    for (i=0; i<palabraElegida.length; i++) {
        if (sinRepetir.indexOf(palabraElegida[i]) == -1)
            sinRepetir+=palabraElegida[i];
    }
    cantLetrasDistintas = sinRepetir.length;
    //alert("cantLetrasDistintas: "+cantLetrasDistintas);
}


function analizarSeleccion(){

    setInterval(function () {document.querySelector("#entradaLetras").value = ""}, 1000);

    if (fallos.search(letraElegida) != -1)
        alert("Ya falló con esa letra");
    else if (aciertos.search(letraElegida) != -1)
            alert("Ya acertó con esa letra");
    else if (palabraElegida.search(letraElegida) != -1)
            letraCorrecta();
    else    
            letraErronea();
}
