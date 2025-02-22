let colores = [];
colores = Array.from(document.querySelectorAll(".color"));
generar = document.querySelector("button");
generar.addEventListener("click", posicionarColor); //Para asignar el evento al hacerle click al boton

//Llama a la funcion posicionarColor para que se ejecute al cargar la pagina
posicionarColor();

//Funcion que llama a la funcion generarColores y asi asignar el color resultante a el texto y al color de fondo
function posicionarColor() {
  colores.forEach((color) => {
    let colorGenerado = `${generarColores()}`;
    color.children[0].textContent = `#${colorGenerado}`;
    color.children[1].textContent = hexadecimalARGB(colorGenerado);
    color.style.backgroundColor = `#${colorGenerado}`;
  });
}

//Funcion que genera un numeros aleatorios para generar colores hexadecimales
function generarColores() {
  let color = "";
  for (let i = 0; i < 6; i++) {
    let numero = Math.floor(Math.random() * 16);
    //Cuando de un numero superior a 9 empieza a asignar letras
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

//Funcion que convierte un color hexadecimal a RGB
function hexadecimalARGB(color){
  let primeros = color.slice(0, 2);
  let segundos = color.slice(2, 4);
  let terceros = color.slice(4, 6);

  primeros = parseInt(primeros, 16);
  segundos = parseInt(segundos, 16);
  terceros = parseInt(terceros, 16);

  return `RGB(${primeros}, ${segundos}, ${terceros})`;
}