// Definir los jugadores y su respectivo símbolo
const player1 = "X";
const player2 = "O";

// Variables para llevar la cuenta de los turnos y el jugador actual
let turnoActual = 1;
let jugadorActual = player1;

//Funciones importadas de game.js
import { comprobarEmpate, checkWin } from "./game.js";

export const celdas = document.querySelectorAll(".cell");

export const reset = document.getElementById("reset");

export const marcarCelda = (celda) => {
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