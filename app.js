// Definir los jugadores y su respectivo símbolo
export const player1 = "X";
export const player2 = "O";

// Variables para llevar la cuenta de los turnos y el jugador actual
export let turnoActual = 1;
export let jugadorActual = player1;

//Funciones Importadas de dom.js
import { celdas, reset } from "./dom.js";

//Funciones importadas de game.js
import { comprobarEmpate, checkWin } from "./game.js";

// Obtener todas las celdas del tablero
//const celdas = document.querySelectorAll(".cell"); // celdas | celda

// TODO Agregar un evento de click a cada celda con la funcion 'marcarCelda'


celdas.forEach((celda) =>
  celda.addEventListener("click", () => marcarCelda(celda))
);

// funcion para marcar la celda

function marcarCelda(celda) {
  console.log(celda);
  // Comprobar si la celda ya ha sido marcada
  if (celda.innerHTML !== "") {
    alert("Esta celda ya ha sido marcada. Por favor seleccione otra.");
    return;
  }

  // TODO Marcar la celda con el símbolo del jugador actual
  celda.innerHTML = jugadorActual;

  // TODO Comprobar si el jugador actual ha ganado, si es así, mostrar el mensaje de ganador en el elemento con id 'result' y terminar la ejecución de la función (ver ejemplo de los condicionales de arriba y abajo que terminan con return)

  if (checkWin(jugadorActual, celdas)) {
    document.querySelector(
      "#result"
    ).innerHTML = `El ganador es ${jugadorActual}`;
    return;
  }

  // Comprobar si hay empate
  if (comprobarEmpate(celdas)) {
    document.getElementById("result").innerHTML = "¡Empate!";
    return;
  }

  // Cambiar al siguiente jugador
  turnoActual++;
  jugadorActual = turnoActual % 2 === 0 ? player2 : player1;
}


//celda, celdas, jugadorActual, turnoActual, player1, player2, checkwin

reset.addEventListener("click", () => {

  // TODO Reiniciar el contenido de todas las celdas
  celdas.forEach((celda) => (celda.innerHTML = ""));

  // TODO Reiniciar el contenido del elemento de id 'result
  document.querySelector("#result").innerHTML = "";
});


// Este evento se ejecuta cuando se hace click en el botón de reiniciar, lo que hay aqui es una funcion flecha, escribe el codigo dentro del bloque como con otra funcion normal
// document.getElementById("reset").addEventListener("click", () => {  erick..
//   // TODO Reiniciar las variables de turnos y jugador actual
//   turnoActual = 1;
//   jugadorActual = player1;

//   // TODO Reiniciar el contenido de todas las celdas
//   celdas.forEach((celda) => (celda.innerHTML = ""));

//   // TODO Reiniciar el contenido del elemento de id 'result
//   document.querySelector("#result").innerHTML = "";
// });
// Función para comprobar si hay empate
/*
function comprobarEmpate() {
  for (let i = 0; i < celdas.length; i++) {
    if (celdas[i].innerHTML === "") {
      return false;
    }
  }
  return true;
}
*/

// Función para comprobar si el jugador actual ha ganado
/*
function checkWin(player) {
  // Comprobar las combinaciones ganadoras
  if (
    celdas[0].innerHTML === player &&
    celdas[1].innerHTML === player &&
    celdas[2].innerHTML === player
  ) {
    return true;
  } else if (
    celdas[3].innerHTML === player &&
    celdas[4].innerHTML === player &&
    celdas[5].innerHTML === player
  ) {
    return true;
  } else if (
    celdas[6].innerHTML === player &&
    celdas[7].innerHTML === player &&
    celdas[8].innerHTML === player
  ) {
    return true;
  } else if (
    celdas[0].innerHTML === player &&
    celdas[3].innerHTML === player &&
    celdas[6].innerHTML === player
  ) {
    return true;
  } else if (
    celdas[1].innerHTML === player &&
    celdas[4].innerHTML === player &&
    celdas[7].innerHTML === player
  ) {
    return true;
  } else if (
    celdas[2].innerHTML === player &&
    celdas[5].innerHTML === player &&
    celdas[8].innerHTML === player
  ) {
    return true;
  } else if (
    celdas[0].innerHTML === player &&
    celdas[4].innerHTML === player &&
    celdas[8].innerHTML === player
  ) {
    return true;
  } else if (
    celdas[2].innerHTML === player &&
    celdas[4].innerHTML === player &&
    celdas[6].innerHTML === player
  ) {
    return true;
  }

  // Si ninguna combinación ganadora se cumple, retornar false
  return false;
}
*/
