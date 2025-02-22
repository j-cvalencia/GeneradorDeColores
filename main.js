let colores = [];
colores = Array.from(document.querySelectorAll('.color'));
generar = document.querySelector('button');
generar.addEventListener('click', posicionarColor);

posicionarColor();

function posicionarColor() {
  colores.forEach((color) => {
    let colorGenerado = `#${generarColores()}`;
    color.textContent = colorGenerado;
    color.style.backgroundColor = colorGenerado;
  });
}

//Funcion que genera un numeros aleatorios para generar colores hexadecimales 
function generarColores(){
  let color = '';
  for (let i = 0; i < 6; i++) {
    let numero = Math.floor(Math.random()* 10);
    color += String(numero);
  }
  return color
}