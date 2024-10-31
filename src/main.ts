import "./style.css";

const numeroTurno = document.querySelector(".numero-turno") as HTMLElement;
const botonAnteriorTurno = document.getElementById(
  "previous-turn"
) as HTMLButtonElement;
const botonSiguienteTurno = document.getElementById(
  "next-turn"
) as HTMLButtonElement;
const botonResetTurno = document.getElementById(
  "reset-turn"
) as HTMLButtonElement;

let turnoActual = 1;

function formatearTurno(numero: number): string {
  return numero.toString().padStart(2, "0");
}

function actualizarDisplay() {
  numeroTurno.textContent = formatearTurno(turnoActual);
}

function avanzarTurno() {
  turnoActual += 1;
  actualizarDisplay();
}

function retrocederTurno() {
  if (turnoActual > 0) {
    turnoActual -= 1;
    actualizarDisplay();
  }
}

function resetTurno() {
  turnoActual = 0;
  actualizarDisplay();
}

botonSiguienteTurno.addEventListener("click", avanzarTurno);
botonAnteriorTurno.addEventListener("click", retrocederTurno);
botonResetTurno.addEventListener("click", resetTurno);

actualizarDisplay();
