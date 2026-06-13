export default class Pizarra {
  constructor(
    idCanvaElement,
    { strokeStyle, lineCap, lineJoin, lineWidth, rainbowYN },
  ) {
    this.pizarra = document.querySelector(`${idCanvaElement}`);
    this.marcador = this.pizarra.getContext("2d");

    //tamaño de la Pizarra
    this.pizarra.width = window.innerWidth;
    this.pizarra.height = window.innerHeight;

    //atributos puntero
    this.marcador.strokeStyle = strokeStyle;
    this.marcador.lineCap = lineCap;
    this.marcador.lineJoin = lineJoin;
    this.marcador.lineWidth = lineWidth;

    //coordenadas de trazo
    this.trazo = false;
    this.punto_de_trazo_X = 0;
    this.punto_de_trazo_Y = 0;

    //(especial) Rainbow
    this.rainbow = rainbowYN;
    this.rainbowColor = 0;
    this.rainbowDirection = true;

    this.setEventListeners();
  }

  //dibujar
  dibujar(puntero) {
    if (!this.trazo) return; //apagar la funcion
    this.marcador.beginPath();
    this.marcador.moveTo(this.punto_de_trazo_X, this.punto_de_trazo_Y);
    this.marcador.lineTo(puntero.offsetX, puntero.offsetY);
    this.marcador.stroke();
    [this.punto_de_trazo_X, this.punto_de_trazo_Y] = [
      puntero.offsetX,
      puntero.offsetY,
    ];

    //(especial) rainbow
    if (this.rainbow) {
      this.marcador.strokeStyle = `hsl(${this.rainbowColor}, 100%, 50%)`;
      this.rainbowColor++;

      if (this.rainbowColor >= 360) this.rainbowColor = 0;

      if (this.marcador.lineWidth >= 20 || this.marcador.lineWidth <= 1) {
        this.rainbowDirection = !this.rainbowDirection;
      }

      if (this.rainbowDirection) {
        this.marcador.lineWidth++;
      } else {
        this.marcador.lineWidth--;
      }
    }
  }

  updatePizarra({ strokeStyle, lineCap, lineJoin, lineWidth, rainbowYN }) {
    this.marcador.strokeStyle = strokeStyle;
    this.marcador.lineCap = lineCap;
    this.marcador.lineJoin = lineJoin;
    this.marcador.lineWidth = lineWidth;
    this.rainbow = rainbowYN;
  }

  cleanPizarra() {
    this.marcador.clearRect(0, 0, this.pizarra.width, this.pizarra.height);
  }

  setEventListeners() {
    //touching
    this.pizarra.addEventListener("pointerdown", (e) => {
      this.trazo = true;
      [this.punto_de_trazo_X, this.punto_de_trazo_Y] = [e.offsetX, e.offsetY];
    });
    this.pizarra.addEventListener("pointermove", (e) => this.dibujar(e));
    this.pizarra.addEventListener("pointerup", () => (this.trazo = false));
    this.pizarra.addEventListener("pointerout", () => (this.trazo = false));
  }
}
