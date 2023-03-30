export const comprobarEmpate = (celdas) => {
  for (let i = 0; i < celdas.length; i++) {
    if (celdas[i].innerHTML === "") {
      return false;
    }
  }
  return true;
};

export const checkWin = (player,celdas) => {
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