export const celdas = document.querySelectorAll(".cell");

document.getElementById("reset").addEventListener("click", () => {
  // TODO Reiniciar las variables de turnos y jugador actual
  turnoActual = 1;
  jugadorActual = player1;

  // TODO Reiniciar el contenido de todas las celdas
  celdas.forEach((celda) => (celda.innerHTML = ""));

  // TODO Reiniciar el contenido del elemento de id 'result
  document.querySelector("#result").innerHTML = "";
});