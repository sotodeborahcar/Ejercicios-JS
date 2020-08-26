/*

Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".

*/
/*

// ejemplo 1 del ejercicio de heladeria:


const funcionDeEjemplo = () => {
  let primerGusto = prompt("Decime el primer gusto de tu helado");
  let segundoGusto = prompt("Decime el segundo gusto de tu helado");
  let tercerGusto = prompt("Decime el tercer gusto de tu helado");

  alert(
    `Aqui tienen su helado de ${primerGusto}, ${segundoGusto} y ${tercerGusto}`
  );
};
funcionDeEjemplo();

*/

alert(
  "Bienvenido a Heladeria COCO, siga las siguientes instrucciones para tomar su pedido: "
);

let usuario = prompt("Ingrese su nombre");

alert(usuario + " " + "Elija 3 gustos para armar su pedido");

let gusto1 = prompt("Gusto 1");
document.getElementById("gusto1").innerHTML = gusto1;

let gusto2 = prompt("Gusto 2");
document.getElementById("gusto2").innerHTML = gusto2;

let gusto3 = prompt("Gusto 3");
document.getElementById("gusto3").innerHTML = gusto3;

alert(
  `Gracias por su pedido ${usuario}, aqui tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`
);
