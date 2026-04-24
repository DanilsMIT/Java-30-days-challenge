import cronometro from "./cronometro.js";

const reloj = document.querySelector(".chronometer");
const time = new cronometro(reloj);

time.init();

const btnIniciar = reloj.querySelector("#btnIniciar");
const btnFinalizar = reloj.querySelector("#btnTerminar");

btnIniciar.addEventListener("click", () => {
  time.start();
});

btnFinalizar.addEventListener("click", () => {
  time.stop();
});
