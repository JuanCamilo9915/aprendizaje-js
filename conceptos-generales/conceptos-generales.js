console.log('|-------------Variables-------------|');

var nameP = 'Juan Camilo';
let cargo = 'Estudiante';
const idStudent = 9788;

console.log('Datos Persona: ' + nameP + ' - ' + cargo + ' - ' + idStudent);

//------------------------------------------------------------------------
console.log('\n|-------------Operadores de Negación-------------|');

var isTrue = true;

console.log('isTrue: ' + isTrue + ', Negando a istrue: ' + !isTrue);

//------------------------------------------------------------------------
console.log('\n|-------------Operadores Extrictos-------------|');

var isEqual = (7 == '7');// se evalua el valor solamente.
var isEqual2 = (7 === '7');// se evalua el valor como el tipo de dato

console.log('isEqual: ' + isEqual, 'isEquals2: ', isEqual2);

//------------------------------------------------------------------------
console.log('\n|-------------Operador Ternario-------------|');

let isAdult = 18;
let fromColombia = true;

isAdult > 18 ? console.log('Es mayor de edad') : console.log('No es mayor de edad');
let yesOrNot = fromColombia ? 'Es Colombian@' : 'No es Colombian@';
console.log(yesOrNot);

//------------------------------------------------------------------------
console.log('\n|-------------Funciones-------------|');

// Funciones declarativas
function miFunction(){
    console.log('Función sin parámetros');
}

function miFunctionParam(name){
    console.log('Función con parámetros, nombre: ' + name);
}

// Funciones anónimas
let functionAnonymous = function () {
    console.log('Función Anónima');
}

// Funciones Flecha
let functionArrow = () => console.log('Función Flecha sin corchetes')
let functionArrow2 = () => {
    console.log('Función Flecha con corchetes');
}
let functionArrow3 = (param) => console.log('Función Flecha sin corchetes con parámetros', param)

// Llamado a funciones
miFunction();
miFunctionParam('Juan Camilo');
functionAnonymous();
functionArrow();
functionArrow2();
functionArrow(789);