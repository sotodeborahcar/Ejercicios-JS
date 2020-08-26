// let nombreDeLaProfe = "Malena"
// const decirNombreCompleto = (nombre, apellido) => {
//     returnnombre + " " + apellido
// }
// console.log(decirNombreCompleto(nombreDeLaProfe, "rey"))
//
//
//

//👻👻👻 ejercicio 6

/* gritar(str)

Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo
*/

const gritar = (str) => {
  return `¡${str}!`;
};

console.log(gritar("Debo"));
console.log(gritar("ooooooooh"));

//otro ejemplo:
/*
let mensajeAGritar = prompt("¿Qué desea gritar?");

const gritar = (loQueGrita) => {
  return `¡${loQueGrita}!`;
};

alert(gritar(mensajeAGritar));
*/

//
// ------->
// 👻👻👻 ejercicio 7

//obtenerNombreCompleto(nombre, apellido)
// Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

const obtenerNombreCompleto = (nombre, apellido) => {
  return `${nombre} ${apellido}`;
};
console.log(obtenerNombreCompleto("Ada", "Lovelace"));

//
// ------->
// 👻👻👻 ejercicio 8

// saludar(nombre)
// Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.

const saludar = (nombre) => {
  return `Hola ${nombre}, un gusto conocerte.`;
};
console.log(saludar(`Debito`));

// ------->
// 👻👻👻 ejercicio 9
//
// saludarGritando(nombre, apellido)
// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

// --> TIP: recordá que los resultados de funciones se pueden guardar en variables para usarlos más adelante --->
// const nombreCompleto = obtenerNombreCompleto('Ada', 'Lovelace')
// const saludo = saludar(nombreCompleto)
// const grito = gritar(saludo)
// console.log(grito) // ¡Hola Ada Lovelace, un gusto conocerte!

const saludarGritando = (nombre, apellido) => {
  let nombreCompleto = obtenerNombreCompleto(nombre, apellido);
  let saludo = saludar(nombreCompleto);
  let grito = gritar(saludo);
  return grito;
};

console.log(saludarGritando("Ada", "lovalace"));

// ------->
// 👻👻👻 ejercicio 10
//
// obtenerDatosDeCiudad(nombre, poblacion, pais)
// Crear una función obtenerDatosDeCiudad que tome como argumentos un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

// obtenerDatosDeCiudad('Santa Fe', 545606, 'Argentina')

const obtenerDatosDeCiudad = (nombre, poblacion, pais) => {
  return `La ciudad de ${nombre} tiene una poblacion de ${poblacion} habitantes y esta ubicada en ${pais}`;
};
console.log(obtenerDatosDeCiudad("Santa Fe", 545606, "Argentina"));
//'La ciudad de Santa Fe tiene una población de 545606 habitantes y está ubicada en Argentina'

// ------->
// 👻👻👻 ejercicio 11

// convertirHorasEnSegundos(horas)
// Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

const convertirHorasEnSegundos = (horas) => {
  //otra forma es:
  // const tiempo = hora * 60 *60
  // return tiempo

  return `${horas * 3600}`;
};
console.log(convertirHorasEnSegundos(1)); // 3600
//consultar porque no me da number!!!
console.log(convertirHorasEnSegundos(3)); // 10800
console.log(convertirHorasEnSegundos(4.5)); // 16200

// ------>
// 👻👻👻 ejercicio 12

// calcularPerimetroRectangulo(ancho, alto)
// Crear una función calcularAreaTriangulo que tome como argumentos el ancho y el alto de un rectángulo y devuelva su perímetro

const calcularPerimetroRectangulo = (ancho, alto) => {
  const calculo = (ancho + alto) * 2;
  return calculo;
};
console.log(calcularPerimetroRectangulo(3.2, 5)); // 16.4
console.log(calcularPerimetroRectangulo(10, 20)); // 60

// ------>
// 👻👻👻 ejercicio 13

// calcularPorcentaje(numero, porcentaje)
// Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el valor del porcentaje correspondiente al número

const calcularPorcentaje = (numero, porcentaje) => {
  const resultadoPorcentaje = (numero * porcentaje) / 100;
  return resultadoPorcentaje;
};
console.log(calcularPorcentaje(100, 15)); // 15
console.log(calcularPorcentaje(10, 50)); // 5
console.log(calcularPorcentaje(200, 10)); // 20

// ------>
// 👻👻👻 ejercicio 14
// sumarPorcentaje(numero, porcentaje)
// Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a sumar

const sumarPorcentaje = (numero, porcentaje) => {
  const resultadoPorcentajeSuma = (numero * porcentaje) / 100 + numero;
  return resultadoPorcentajeSuma;
};
console.log(sumarPorcentaje(100, 15)); // 115
console.log(sumarPorcentaje(10, 50)); // 15
console.log(sumarPorcentaje(200, 10)); // 220

// ------>
// 👻👻👻 ejercicio 15

// restarPorcentaje(numero, porcentaje)
// Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener el porcentaje a restar

const restarPorcentaje = (numero, porcentaje) => {
  const PorcentajeResta = calcularPorcentaje(numero, porcentaje);
  const resultadoResta = numero - PorcentajeResta;
  return resultadoResta;
};

console.log(restarPorcentaje(100, 15)); // 85
console.log(restarPorcentaje(10, 40)); // 6
console.log(restarPorcentaje(200, 10)); // 180

// ------>
// 👻👻👻 ejercicio 16

// calcularFPS(fps, minutos)
// FPS son cuadros por segundo (frames per second). Crear una una función calcularFPS que tome como argumentos una cantidad de cuadros por segundo y una cantidad de minutos, y devuelva cuántos cuadros hubo en esa cantidad de minutos

const calcularFPS = (fps, minutos) => {
  const minutosTotal = minutos * 60;
  const totalFps = minutosTotal * fps;
  return totalFps;
};
console.log(calcularFPS(1, 1)); // 60
console.log(calcularFPS(10, 2)); // 1200
console.log(calcularFPS(2, 3)); // 360

// ------>
// 👻👻👻 ejercicio 17

// obtenerCompetencia(a, b)
// Crear una función obtenerCompetencia que tome como argumentos dos strings a y b y devuelva un string con el formato a vs. b

const obtenerCompetencia = (a, b) => {
  //   let rival1 = obtenerRivales(`JavaScript, Python`);
  //   let rival2 = obtenerRivales("Coca", "Pepsi");
  //   let rival3 = obtenerRivales("Perros", "Gatos");

  return `${a} vs. ${b}`;
};

// console.log(obtenerCompetencia(rival1));
console.log(obtenerCompetencia("javascript", "python")); // `JavaScript vs. Python`
console.log(obtenerCompetencia("Coca", "Pepsi")); // `Coca vs. Pepsi`
console.log(obtenerCompetencia("Perros", "Gatos")); // `Perros vs. Gatos`

// ------>
// 👻👻👻 ejercicio 18

// 18. generarEmail(usuario, dominio)
// Crear una función generarEmail que tome como argumentos dos string usuario y dominio y el un string email con el formato usuario@dominio.com

const generarEmail = (usuario, dominio) => {
  const email = `${usuario}@${dominio}.com`;
  return email;
};
console.log(generarEmail("adalovelace", "gmail")); // 'adalovelace@gmail.com'

// ------>
// 👻👻👻 ejercicio 19

// calcularPuntaje(facil, normal, dificil)
// Crear una función calcularPuntaje que calcule el puntaje de un examen que consiste en ejercicios de distinto nivel. Debe tomar como argumento tres numeros que consisten en la cantidad de ejercicios resueltos en cada nivel y devolver un número con el puntaje correspondiente. El puntaje se calcula de la siguiente forma:
// facil : 3 puntos
// normal: 5 puntos
// dificil: 10 puntos

const calcularPuntaje = (facil, normal, dificil) => {
  const totalFaciles = facil * 3;
  const totalNormales = normal * 5;
  const totalDificiles = dificil * 10;
  // mas resumido:::
  // return dificil * 10 + normal * 5 + facil * 3

  return totalDificiles + totalNormales + totalFaciles;
};
console.log(calcularPuntaje(3, 0, 0)); // 9
console.log(calcularPuntaje(0, 2, 1)); // 20
console.log(calcularPuntaje(5, 1, 2)); //40
