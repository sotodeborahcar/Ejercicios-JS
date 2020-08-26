/*
EJERCICIOS CONDICIONALES Y OPERADORES LOGICOS
*/

//---->👻👻👻 EJERCICIOS CON OPERADORES LOGICOS

/*
puedeVerPelicula(edad, tieneAutorizacion)
Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
*/

const puedeVerPelicula = (edad, tieneAutorizacion) => {
  if (edad >= 15 || tieneAutorizacion) {
    return true;
  } else {
    return false;
  }
};
//puedo escribir tambien porque tieneAutorizacion se lo paso a Booleano y es true por defecto:

// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     if (edad >= 15 || tieneAutorizacion === true) {
//       return true;
//     } else {
//       return false;
//     }
//   };
console.log(`EJERCICIO-pelicula`);
console.log(puedeVerPelicula(12, false)); // false
console.log(puedeVerPelicula(12, true)); // true
console.log(puedeVerPelicula(16, false)); // true
console.log(puedeVerPelicula(18, true)); // true

/*
estaEnRango(valor, minimo, maximo)
Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)
*/

const estaEnRango = (valor, minimo, maximo) => {
  if (minimo <= valor && valor >= maximo) {
    return true;
  } else {
    return false;
  }
};
console.log(`EJERCICIO-rango`);
console.log(estaEnRango(3, 1, 10)); // true
console.log(estaEnRango(1, 1, 10)); // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10)); // false

/*
puedeAvanzar(colorSemaforo)
Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido
*/
const puedeAvanzar = (colorSemaforo) => {
  if (colorSemaforo == "verde") {
    return true;
  } else if (colorSemaforo == "amarillo" || colorSemaforo == "rojo") {
    return false;
  } else {
    return "Error: color de semaforo";
  }
};
console.log(`EJERCICIO-avanzar`);
console.log(puedeAvanzar("verde")); // true
console.log(puedeAvanzar("amarillo")); // false
console.log(puedeAvanzar("rojo")); // false
console.log(puedeAvanzar("lila")); // 'Error: color de semáforo

/*
esVocal(letra)
Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.
*/

const esVocal = (letra) => {
  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(`EJERCICIO-vocal`);
console.log(esVocal("a")); // true
console.log(esVocal("n")); // false
console.log(esVocal("e")); // true

/*
esConsonante(letra)
Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es
*/
const esConsonante = (letra) => {
  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  ) {
    return false;
  } else {
    return true;
  }
};
console.log(`EJERCICIO-consonante`);
console.log(esConsonante("a")); // false
console.log(esConsonante("n")); // true
console.log(esConsonante("e")); // false

/*
puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos
*/
const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
  if (pasoTests && tieneMultasImpagas == false && pagoImpuestos) {
    return true;
  } else {
    return false;
  }
};
console.log(`EJERCICIO-renovarCarnet`);
console.log(puedeRenovarCarnet(true, true, true)); // false
console.log(puedeRenovarCarnet(true, true, false)); // false
console.log(puedeRenovarCarnet(true, false, true)); // true
console.log(puedeRenovarCarnet(true, false, false)); // false
console.log(puedeRenovarCarnet(false, true, true)); // false
console.log(puedeRenovarCarnet(false, true, false)); // false
console.log(puedeRenovarCarnet(false, false, true)); // false
console.log(puedeRenovarCarnet(false, false, false)); // false

/*
puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.
*/
const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
  if (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada) {
    return true;
  } else {
    return false;
  }
};
console.log(`EJERCICIO-puedeGraduarse`);
console.log(puedeGraduarse(80, 50, true)); // true
console.log(puedeGraduarse(80, 50, false)); // false
console.log(puedeGraduarse(80, 45, true)); // false
console.log(puedeGraduarse(80, 45, false)); // false
console.log(puedeGraduarse(65, 50, true)); // false
console.log(puedeGraduarse(33, 55, false)); // false
console.log(puedeGraduarse(42, 45, true)); // false
console.log(puedeGraduarse(28, 45, false)); // false

//---->👻👻👻 EJERCICIOS CON CONDICIONALES

/*
esParOImpar(numero)
Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

Tip: Investigá sobre el operador módulo %
*/
const esParOImpar = (numero) => {
  let resto = numero % 2;
  if (resto == 0) {
    return `es par`;
  } else {
    return `es impar`;
  }
};
console.log(`EJERCICIO-esParOImpar`);
console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'

/*
esPositivoONegativo(numero)
Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo
*/
const esPositivoONegativo = (numero) => {
  if (numero >= 0) {
    return `positivo`;
  } else {
    return `negativo`;
  }
};
console.log(`EJERCICIO-esPositivoONegativo`);
console.log(esPositivoONegativo(3)); // 'positivo'
console.log(esPositivoONegativo(-5)); // 'negativo'

/*
avanzarSemaforo(colorActual)
Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde
*/
const avanzarSemaforo = (colorActual) => {
  if (colorActual == `verde`) {
    return `amarillo`;
  } else if (colorActual == `amarillo`) {
    return `rojo`;
  } else if (colorActual == `rojo`) {
    return `verde`;
  } else {
    return `no ingresaste un color valido`;
  }
};
console.log(`EJERCICIO-avanzarSemaforo`);
console.log(avanzarSemaforo("verde")); // 'amarillo'
console.log(avanzarSemaforo("amarillo")); // 'rojo'
console.log(avanzarSemaforo("rojo")); // 'verde'

/*
obtenerSensacion(temperatura)
Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

Temperatura	Mensaje:

Menor a 0° --->	¡Está helando!
Mayor o igual a 0° y menor a 15°--->	¡Hace frío!
Mayor o igual a 15° y menor a 25°--->	Está lindo
Mayor o igual a entre 25° y menor a 30°	--->Hace calor
Mayor o igual de 30°--->	¡Hace mucho calor!
*/
const obtenerSensacion = (temperatura) => {
  if (temperatura <= 0) {
    return `¡Está helando!`;
  } else if (temperatura >= 0 && temperatura <= 15) {
    return `¡Hace frío!`;
  } else if (temperatura >= 15 && temperatura <= 25) {
    return `¡Está lindo!`;
  } else if (temperatura >= 25 && temperatura <= 30) {
    return `¡Hace calor!`;
  } else {
    return `¡Hace mucho calor!`;
  }
};
console.log(`EJERCICIO-obtenerSensacion`);
console.log(obtenerSensacion(33)); // "¡Hace mucho calor!"

/*
obtenerNota(puntaje)
Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje, con las siguientes reglas:

Puntaje	Nota:
Menor a 6--->	Desaprobado
Mayor o igual a 6 y menor a 7--->	Regular
Mayor o igual a 7 y menor a 8--->	Bueno
Mayor o igual a entre 8 y menor a 10--->	Muy bueno
10--->	Excelente
Menor a 0 o mayor a 10--->	Puntaje inválido
*/
const obtenerNota = (puntaje) => {
  if (puntaje <= 6) {
    return `Desaprobado`;
  } else if (puntaje >= 6 && puntaje < 7) {
    return `Regular`;
  } else if (puntaje >= 7 && puntaje < 8) {
    return `Bueno`;
  } else if (puntaje >= 8 && puntaje < 10) {
    return `Muy bueno`;
  } else if (puntaje == 10) {
    return `Excelente`;
  } else {
    return `Puntaje inválido`;
  }
};
console.log(`EJERCICIO-obtenerNota`);
console.log(obtenerNota(7)); // "Bueno"
console.log(obtenerNota(9.6)); // "Excelente" --->solo se da esta condicion si es = 10
console.log(obtenerNota(12)); // "Puntaje inválido"

/*
jugarPiedraPapelTijera(a, b)
Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)
*/
const jugarPiedraPapelTijera = (a, b) => {
  if (a == "papel") {
    if (b == "piedra") {
      return "¡Ganó papel!";
    } else if (b == "tijera") {
      return "¡Ganó tijera!";
    } else {
      return "Empate";
    }
  }
  if (a == "piedra") {
    if (b == "papel") {
      return "¡Ganó papel!";
    } else if (b == "tijera") {
      return "¡Ganó piedra!";
    } else {
      return "Empate";
    }
  }
  if (a == "tijera") {
    if (b == "piedra") {
      return "¡Ganó piedra!";
    } else if (b == "papel") {
      return "¡Ganó tijera!";
    } else {
      return "Empate";
    }
  }
};
console.log(`EJERCICIO-jugarPiedraPapelTijera`);
console.log(jugarPiedraPapelTijera("tijera", "piedra")); // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera("piedra", "tijera")); // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera("papel", "piedra")); // ¡Ganó papel!
console.log(jugarPiedraPapelTijera("piedra", "papel")); // ¡Ganó papel!
console.log(jugarPiedraPapelTijera("papel", "tijera")); // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera("tijera", "papel")); // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera("piedra", "piedra")); // ¡Empate!
console.log(jugarPiedraPapelTijera("papel", "papel")); // ¡Empate!
console.log(jugarPiedraPapelTijera("tijera", "tijera")); // ¡Empate!
