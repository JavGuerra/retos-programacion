import { el, createEl, setInactiveBtn, openDialog, getRndInt, fisherYatesShuffle } from "./functions";

const bolas = [];
let bola = 0;
let jugador = 0;
let cpu = 0;
const carton1 = generaCarton();
const carton2 = generaCarton();
const btnJugar = el("#bola span");

btnJugar.onclick = jugada;
btnJugar.classList.add("cursor");

for (let i = 1; i <= 90; i++) { bolas.push(i); }
fisherYatesShuffle(bolas);

pintaCarton(el("#carton1"), carton1);
pintaCarton(el("#carton2"), carton2);

function jugada() {
  setInactiveBtn(btnJugar, true);
  let fin = false;
  let msg = "";
  bola++;

  createEl(el("#bolas"), "span", bolas[bola]);

  if (carton1.includes(bolas[bola])) {
    jugador++;
    tachaCarton("carton1", bolas[bola]);
  }
  if (carton2.includes(bolas[bola])) {
    cpu++;
    tachaCarton("carton2", bolas[bola]);
  }

  if (jugador === 15) {
    fin = true;
    msg = "¡Jugador gana!";
  } else if (cpu === 15) {
    fin = true;
    msg = "¡CPU gana!";
  } else if (bola === 90) {
    fin = true;
    msg = "Fin del juego.";
    openDialog("Nadie ha cantado Bingo...");
  } else {
    msg = bolas[bola];
  }

  btnJugar.innerHTML = msg;

  if (fin) {
    btnJugar.onclick = null;
    btnJugar.classList.remove("cursor");
  } else {
    setInactiveBtn(btnJugar, false);
  }
}

function generaCarton() {
  const carton = [];
  let i = 1;
  let bola;
  while (i <= 15) {
    bola = getRndInt(1, 90);
    if (!carton.includes(bola)) {
      carton.push(bola);
      i++;
    }
  }
  return fisherYatesShuffle(carton);
}

function pintaCarton(padre, carton) {
  for (const bola of carton) {
    const el = createEl(padre, "span", bola);
    el.classList.add("blanco");
  }
}

function tachaCarton(padre, bola) {
  //
}
