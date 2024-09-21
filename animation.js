var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del sol iluminaba la esquina", time: 31 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 38 },
  { text: "Ella sabía que él sabía", time: 41 },
  { text: "Que algún día pasaría", time: 43 },
  { text: "Que vendría a buscarla", time: 45 },
  { text: "Con sus flores amarillas", time: 51 },
  { text: "No te apures, no detengas", time: 53 },
  { text: "El instante del encuentro", time: 55 },
  { text: "Está dicho que es un hecho", time: 57 },
  { text: "No la pierdas, no hay derecho", time: 59 }, 
  { text: "No te olvides que la vida", time: 63 },
  { text: "Casi nunca está dormida", time: 67 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 92 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 100 }, 
  { text: "Él se acercó de repente la miro tan de frente", time: 108 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "Ella sabía que él sabía", time: 118 },
  { text: "Que algún día pasaría", time: 120 },
  { text: "Que vendría a buscarla", time: 122 },
  { text: "Con sus flores amarillas", time: 124 },
  { text: "No te apures, no detengas", time: 130 },
  { text: "El instante del encuentro", time: 132 },
  { text: "Está dicho que es un hecho", time: 134 },
  { text: "No la pierdas, no hay derecho", time: 136 }, 
  { text: "No te olvides que la vida", time: 138 },
  { text: "Casi nunca está dormida", time: 147 },
  { text: "Flores amarillas", time: 158 },
  { text: "Ella sabía que él sabía", time: 163 },
  { text: "Que algún día pasaría", time: 165 },
  { text: "Que vendría a buscarla", time: 167 },
  { text: "Con sus flores amarillas", time: 171 },
  { text: "No te apures, no detengas", time: 175 },
  { text: "El instante del encuentro", time: 177 },
  { text: "Está dicho que es un hecho", time: 179 },
  { text: "No la pierdas, no hay derecho", time: 181 }, 
  { text: "No te olvides que la vida", time: 184 },
  { text: "Casi nunca está dormida", time: 188 },
  { text: "Ella sabía que él sabía", time: 192 },
  { text: "Él sabía, ella sabía", time: 194 },
  { text: "Que él sabía, ella sabía", time: 196 },
  { text: "Y se olvidaron de sus flores amarillas", time: 200 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6 + 2
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

// Función para ocultar el título después de 216 segundos
function hideTitle() {
  var title = document.querySelector(".title");
  title.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(hideTitle, 18000);
