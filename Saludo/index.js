let respuestaNombre = prompt("escriba su nombre ");
let respuestaApellido = prompt(respuestaNombre + " " + "escriba su apellido ");

// let saludo = "Como estas, ";
// let saludo2 = " bienvenida a Ada.";
// alert(saludo + respuestaNombre + " " + respuestaApellido + saludo2);

let nombreCompleto = respuestaNombre + " " + respuestaApellido;
let saludo = "Hola " + nombreCompleto + ", bienvenida a Ada.";
alert(saludo);

// ----->otra forma de generar el alerta final!!!
// alert(
//   "Como estas " +
//     respuestaApellido +
//     " " +
//     respuestaNombre +
//     ", bienvenida a Ada"
// );
