export default class cronometro {
  constructor(clockElement) {
    this._clock = clockElement;
    this._segundos = this._clock.querySelector(".clock__hand--sec");
    this._minutos = this._clock.querySelector(".clock__hand--min");
    this._horas = this._clock.querySelector(".clock__hand--hour");
    this._showTime = this._clock.querySelector(".clock__display-text");
    this._interval = null;
    this._startTime = null;
    this._btnIniciar = this._clock.querySelector("#btnIniciar");
    this._btnFinalizar = this._clock.querySelector("#btnTerminar");
  }

  _relojDeManecillas(date) {
    let seconds = date.getSeconds();
    let secondsDegrees = (seconds / 60) * 360 + 90;
    this._segundos.style.transform = `rotate(${secondsDegrees}deg)`;

    let minutes = date.getMinutes();
    let minutesDegrees = (minutes / 60) * 360 + 90;
    this._minutos.style.transform = `rotate(${minutesDegrees}deg)`;

    let hour = date.getHours();
    let hourDegrees = (hour / 12) * 360 + 90;
    this._horas.style.transform = `rotate(${hourDegrees}deg)`;
  }

  _relojDigital(totalSeconds) {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    const format = (num) => num.toString().padStart(2, "0");
    this._showTime.textContent = `${format(h)}:${format(m)}:${format(s)}`;
  }

  start() {
    if (this._interval) return;

    this._btnIniciar.disabled = true;
    this._btnFinalizar.disabled = false;
    this._btnIniciar.classList.add("btn-deshabilitado");
    this._btnFinalizar.classList.remove("btn-deshabilitado");

    this._startTime = Date.now();

    this._interval = setInterval(() => {
      this._relojDeManecillas(new Date());

      const timer = Date.now() - this._startTime;
      let totalSeconds = Math.floor(timer / 1000);

      if (totalSeconds >= 7200) {
        totalSeconds = 7200;
        this.stop();
      }

      this._relojDigital(totalSeconds);
    }, 1000);
  }

  init() {
    this._relojDeManecillas(new Date());
    this._showTime.textContent = "00:00:00";
  }

  stop() {
    this._btnIniciar.disabled = false;
    this._btnFinalizar.disabled = true;
    this._btnIniciar.classList.remove("btn-deshabilitado");
    this._btnFinalizar.classList.add("btn-deshabilitado");

    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }
}
