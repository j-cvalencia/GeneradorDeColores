let colores = [];
colores = Array.from(document.querySelectorAll(".color"));
generar = document.querySelector("button");
generar.addEventListener("click", posicionarColor); //Para asignar el evento al hacerle click al boton

//Llama a la funcion posicionarColor para que se ejecute al cargar la pagina
posicionarColor();

//Funcion que llama a la funcion generarColores y asi asignar el color resultante a el texto y al color de fondo
function posicionarColor() {
  colores.forEach((color) => {
    let colorGenerado = `#${generarColores()}`;
    color.textContent = colorGenerado;
    color.style.backgroundColor = colorGenerado;
  });
}

//Funcion que genera un numeros aleatorios para generar colores hexadecimales
function generarColores() {
  let color = "";
  for (let i = 0; i < 6; i++) {
    let numero = Math.floor(Math.random() * 16);
    if (numero > 9) {
      switch (numero) {
        case 10:
          numero = "A";
          break;
        case 11:
          numero = "B";
          break;
        case 12:
          numero = "C";
          break;
        case 13:
          numero = "D";
          break;
        case 14:
          numero = "E";
          break;
        case 15:
          numero = "F";
          break;
      }
    }
    color += String(numero);
  }
  return color;
}
