const colorDeFondo = "lightgreen";
const colorHorca = "brown";
const anchoDeLinea = 10;
const tamanoFuente = 30;
const fuente = "Arial";

const canvas = document.getElementById("ahorcado");
const contexto = canvas.getContext("2d");

function reiniciarCanvas(){
  llenarRectangulo(0, 0, canvas.width, canvas.height, colorDeFondo);
  agregarBotonRevelacion();
  dibujarEspacios(palabraElegida);
  dibujarBaseHorca();
};

function llenarRectangulo(x, y, width, height, color){
  contexto.fillStyle = color;
  contexto.fillRect(x, y, width, height);
};

function dibujarLinea(x1, y1, x2, y2, lineW, color){
  contexto.beginPath();
  contexto.moveTo(x1, y1);
  contexto.lineTo(x2, y2);
  contexto.lineWidth = lineW;
  contexto.strokeStyle = color;
  contexto.stroke();
};

function agregarBotonRevelacion(){
  contexto.fillStyle = "gray";
  contexto.font = `bold ${tamanoFuente/2}px ${fuente}`;
  contexto.textAlign = "center";
  contexto.fillText(`Renuncio!!! (ver palabra)`, 100, tamanoFuente);
};

function descubrirPalabra(palabra){
  contexto.clearRect(0, 0, 200, tamanoFuente*2);
  llenarRectangulo(0, 0, 200, tamanoFuente, colorDeFondo);
  contexto.fillStyle = "blue";
  contexto.font = `bold ${tamanoFuente/2}px Arial`;
  contexto.textAlign = "center";
  contexto.fillText(palabra, 100, tamanoFuente);
};

function dibujarEspacios(palabra){
  var posXinicial = Math.floor((canvas.width - (palabra.length * (tamanoFuente*2))) / 2) + tamanoFuente;
  for (let i = 0; i < palabra.length; i++) {
    contexto.fillStyle = "#ffffff";
    contexto.font = `${tamanoFuente}px Arial`;
    contexto.textAlign = "center";
    contexto.fillText("_", posXinicial, canvas.height - 60);
    posXinicial = posXinicial + tamanoFuente*2;
  }
};

function redibujarLetrasAcertadas(){
  var posXinicial = Math.floor((canvas.width - (palabraElegida.length * (tamanoFuente*2))) / 2) + tamanoFuente;
  for (let i = 0; i < palabraElegida.length; i++) {
    if (aciertos.indexOf(palabraElegida[i]) != -1) {
      contexto.fillStyle = "blue";
      contexto.font = `${tamanoFuente}px Arial`;
      contexto.textAlign = "center";
      contexto.fillText(palabraElegida[i], posXinicial, canvas.height - 62);
    }
    posXinicial = posXinicial + tamanoFuente*2;
  }
}

function redibujarLetrasErroneas(){
  var posXinicial = Math.floor((canvas.width - (fallos.length * (tamanoFuente*2))) / 2) + tamanoFuente;
  llenarRectangulo(posXinicial-20,canvas.height - tamanoFuente - 25,canvas.width,canvas.height - 20, colorDeFondo);
  for (let i = 0; i < fallos.length; i++) {
      contexto.fillStyle = "red";
      contexto.font = `${tamanoFuente}px Arial`;
      contexto.textAlign = "center";
      contexto.fillText(fallos[i], posXinicial, canvas.height - 20);
      posXinicial = posXinicial + tamanoFuente*2;
  }
}

canvas.addEventListener("click", (e) => {
  //  Area del Boton "Descubrir Palabra" de 0..190 para x / de 0..35 para y
  e.preventDefault();
  if (e.offsetX < 190 && e.offsetY < 35) {
    descubrirPalabra(palabraElegida);
    document.querySelector("#entradaLetras").disabled = true;
    } 
  else
      document.querySelector("#entradaLetras").focus();
});

function mostrarMensajeGano(){
  var mensaje = "Ganó la partida!!!";
  contexto.fillStyle = "green";
  contexto.font = `bold ${tamanoFuente/2}px ${fuente}`;
  contexto.textAlign = "center";
  contexto.fillText(mensaje, canvas.width - (Math.floor(tamanoFuente/3)*mensaje.length), tamanoFuente);
}

function mostrarMensajePerdio(){
  var mensaje = "Perdió la partida!!! (era: "+palabraElegida+")";
  contexto.fillStyle = "red";
  contexto.font = `bold ${tamanoFuente/2}px ${fuente}`;
  contexto.textAlign = "center";
  contexto.fillText(mensaje, canvas.width - (Math.floor(tamanoFuente/6)*mensaje.length), tamanoFuente);
}

function dibujarBaseHorca(){
  var anchoBaseHorca = 200;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2);
  var destinox = origenx + anchoBaseHorca;

  dibujarLinea(origenx,canvas.height - 120,destinox,canvas.height - 120,anchoDeLinea,colorHorca);
}

function dibujarMastil(){
  var alturaMastil = 250;
  var anchoBaseHorca = 200;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2) + 30;
  
  var origeny = canvas.height - 120;
  var destinoy = origeny - alturaMastil; 
  

  dibujarLinea(origenx,origeny,origenx,destinoy,anchoDeLinea,colorHorca);
}

function dibujarTravesanio(){
  var alturaMastil = 250;
  var anchoBaseHorca = 200;
  var anchoTravesanio = 100;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2) + 30 - Math.floor(anchoDeLinea / 2);
  
  var origeny = canvas.height - 120;
  origeny = origeny - alturaMastil; 

  dibujarLinea(origenx,origeny,origenx+anchoTravesanio,origeny,anchoDeLinea,colorHorca);
}

function dibujarCuerda(){
  var altoSoporte = 30;
  var alturaMastil = 250;
  var anchoBaseHorca = 200;
  var anchoTravesanio = 100;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2) + 30 - Math.floor(anchoDeLinea / 2);
  origenx = origenx+anchoTravesanio;

  var origeny = canvas.height - 120;
  origeny = origeny - alturaMastil - Math.floor(anchoDeLinea / 2);

  dibujarLinea(origenx,origeny,origenx,origeny+altoSoporte,anchoDeLinea,colorHorca);
}

function dibujarCabeza(){
  var altoSoporte = 30;
  var alturaMastil = 250;
  var anchoBaseHorca = 200;
  var anchoTravesanio = 100;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2) + 30 - Math.floor(anchoDeLinea / 2);
  origenx = origenx+anchoTravesanio;

  var origeny = canvas.height - 120;
  origeny = origeny - alturaMastil - Math.floor(anchoDeLinea / 2);

  var diametro = 20;
  var centroX = origenx;
  var centroY = origeny + altoSoporte + diametro;

  contexto.beginPath();
  contexto.arc(centroX, centroY, diametro, 0, Math.PI * 2, false);
  contexto.fillStyle = "lightgray";
  contexto.fill();
  contexto.lineWidth = 5;
  contexto.strokeStyle = "black";
  contexto.stroke();
}

function dibujarTorso(){
  var diametro = 20;
  var altoTorso = 90;
  var altoSoporte = 30;
  var alturaMastil = 250;
  var anchoBaseHorca = 200;
  var anchoTravesanio = 100;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2) + 30 - Math.floor(anchoDeLinea / 2);
  origenx = origenx+anchoTravesanio;

  var origeny = canvas.height - 120;
  origeny = origeny - alturaMastil - Math.floor(anchoDeLinea / 2);
  origeny = origeny + altoSoporte + (diametro*2);
  destinoy = origeny + altoTorso;

  dibujarLinea(origenx,origeny,origenx,destinoy,5,"black");
}

function dibujarBrazoI(){
  var diametro = 20;
  var altoTorso = 90;
  var altoSoporte = 30;
  var alturaMastil = 250;
  var anchoBaseHorca = 200;
  var anchoTravesanio = 100;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2) + 30 - Math.floor(anchoDeLinea / 2);
  origenx = origenx+anchoTravesanio;
  destinox = origenx - 35;

  var origeny = canvas.height - 120;
  origeny = origeny - alturaMastil - Math.floor(anchoDeLinea / 2);
  origeny = origeny + altoSoporte + (diametro*2);
  origeny = origeny + 5;
  destinoy = origeny + 35;

  dibujarLinea(origenx,origeny,destinox,destinoy,5,"black");
}

function dibujarBrazoD(){
  var diametro = 20;
  var altoTorso = 90;
  var altoSoporte = 30;
  var alturaMastil = 250;
  var anchoBaseHorca = 200;
  var anchoTravesanio = 100;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2) + 30 - Math.floor(anchoDeLinea / 2);
  origenx = origenx+anchoTravesanio;
  destinox = origenx + 35;

  var origeny = canvas.height - 120;
  origeny = origeny - alturaMastil - Math.floor(anchoDeLinea / 2);
  origeny = origeny + altoSoporte + (diametro*2);
  origeny = origeny + 5;
  destinoy = origeny + 35;

  dibujarLinea(origenx,origeny,destinox,destinoy,5,"black");
}

function dibujarPiernaI(){
  var diametro = 20;
  var altoTorso = 90;
  var altoSoporte = 30;
  var alturaMastil = 250;
  var anchoBaseHorca = 200;
  var anchoTravesanio = 100;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2) + 30 - Math.floor(anchoDeLinea / 2);
  origenx = origenx+anchoTravesanio;
  destinox = origenx - 35;

  var origeny = canvas.height - 120;
  origeny = origeny - alturaMastil - Math.floor(anchoDeLinea / 2);
  origeny = origeny + altoSoporte + (diametro*2) + altoTorso;
  origeny = origeny;
  destinoy = origeny + 35;

  dibujarLinea(origenx,origeny,destinox,destinoy,5,"black");
}

function dibujarPiernaD(){
  var diametro = 20;
  var altoTorso = 90;
  var altoSoporte = 30;
  var alturaMastil = 250;
  var anchoBaseHorca = 200;
  var anchoTravesanio = 100;
  var origenx = Math.floor((canvas.width - anchoBaseHorca) / 2) + 30 - Math.floor(anchoDeLinea / 2);
  origenx = origenx+anchoTravesanio;
  destinox = origenx + 35;

  var origeny = canvas.height - 120;
  origeny = origeny - alturaMastil - Math.floor(anchoDeLinea / 2);
  origeny = origeny + altoSoporte + (diametro*2) + altoTorso;
  origeny = origeny;
  destinoy = origeny + 35;

  dibujarLinea(origenx,origeny,destinox,destinoy,5,"black");
}
