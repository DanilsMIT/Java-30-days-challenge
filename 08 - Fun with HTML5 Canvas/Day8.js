import Pizarra from "./PizarraClass.js";
import PanelDeControl from "./PanelDeControlClass.js";
const pizarra = new Pizarra("#draw", {
  strokeStyle: "#f2ff00",
  lineCap: "round",
  lineJoin: "round",
  lineWidth: 20,
  rainbowYN: false,
});

const panel_de_control = new PanelDeControl(
  "#panel-form",
  (inputs) => {
    pizarra.updatePizarra(inputs);
  },
  {
    handleClean: () => {
      pizarra.cleanPizarra();
    },
  },
);
