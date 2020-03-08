//PESTAÑA INDEX_EJEMPLO-------
function escribirEnConsola(){
  console.log("Hola desde la consola JavaScript")
}
setInterval(escribirEnConsola,1000)

var vble1 = 'Texto de prueba'
var vble2 = 10

function sumar(valor1, valor2){
  var resultado = valor1+valor2;
  return resultado;
}
var resultadoSuma = sumar(2,10);
console.log(resultadoSuma);

const para = document.querySelector('p');
para.addEventListener('click',updateName);
function updateName() {
  let name = prompt ('Ingresa un nuevo nombre');
  para.textContent = 'Oscar:' + name;
}

new Date(1000);

var fecha= new Date(99,5,24,11,33,30,0);

fecha.setFullYear(99);

// ----fecha del incendio de roma----
var fecha= new Date(64,7,19);
fecha.setFullYear(64);
var dias_semana=['Domingo','Lunes','Martes','MIercoles','Jueves','Viernes','Sabado'];
console.log('Año'+fecha.getUTCFullYear());
console.log('Mes'+fecha.getmonth());
console.log('Día'+fecha.getUTCdate());
console.log('Día de la Semana'+dias_semana[fecha.getDay()]());



//PESTAÑA INDEX_EJEMPLO2------
function createParagraph() {
  var para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
