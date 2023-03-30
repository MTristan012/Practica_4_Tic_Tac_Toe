//Funciones Importadas de dom.js
import { celdas, reset, marcarCelda } from "./dom.js";

celdas.forEach((celda) =>
  celda.addEventListener("click", () => marcarCelda(celda))
);

reset.addEventListener("click", () => {

  // TODO Reiniciar el contenido de todas las celdas
  celdas.forEach((celda) => (celda.innerHTML = ""));

  // TODO Reiniciar el contenido del elemento de id 'result
  document.querySelector("#result").innerHTML = "";
});
