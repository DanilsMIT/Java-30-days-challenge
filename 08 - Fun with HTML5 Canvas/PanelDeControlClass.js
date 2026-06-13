export default class PanelDeControl {
  //{} funciones de inputs botones
  constructor(id, handleControlar, { handleClean }) {
    this.panel = document.querySelector(`${id}`);
    this.controlar = handleControlar;
    //funciones de algunos controles botones
    this.botonClean = this.panel.querySelector("#btn-limpiar");
    this.clean = handleClean;

    this.setEventListeners();
  }

  setEventListeners() {
    this.panel.addEventListener("input", (e) => {
      const inputs = {
        strokeStyle: this.panel.color.value,
        lineCap: this.panel.punta.value,
        lineJoin: this.panel.curva.value,
        lineWidth: this.panel.grosor.value,
        rainbowYN: this.panel.rainbow.checked,
      };
      this.controlar(inputs);
    });

    this.botonClean.addEventListener("click", () => {
      this.clean();
    });
  }
}
