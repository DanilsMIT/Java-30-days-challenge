import panel from "./panel.js";
const panels = [
  {
    top: "Hey",
    middle: "Let's",
    down: "Dance",
    link: "https://i.pinimg.com/736x/02/ca/2d/02ca2daa7ba740450790bba99315460a.jpg",
  },
  {
    top: "Give",
    middle: "Take",
    down: "Receive",
    link: "https://static.wikia.nocookie.net/yugiohenespanol/images/4/4b/Foto_héroe_elemental_heat.jpg/revision/latest?cb=20120502052404&path-prefix=es",
  },
  {
    top: "Experience",
    middle: "It",
    down: "Today",
    link: "https://static.wikia.nocookie.net/yugiohenespanol/images/d/d3/Foto_héroe_del_destino_-_doom_lord.jpg/revision/latest?cb=20120104202822&path-prefix=es",
  },
  {
    top: "Give",
    middle: "All",
    down: "You can",
    link: "https://static.wikia.nocookie.net/yugiohenespanol/images/a/a9/Foto_héroe_enmascarado_blast.jpg/revision/latest?cb=20240412210605&path-prefix=es",
  },
  {
    top: "Life",
    middle: "In",
    down: "Motion",
    link: "https://static.wikia.nocookie.net/yugiohenespanol/images/2/22/Foto_héroe_xtra_cruzado_de_la_cruz.jpg/revision/latest?cb=20240412210039&path-prefix=es",
  },
];
const objectsContainer = document.querySelector(".panels");

function renderObjects(object, container) {
  const objectClass = new panel(object, "#panel-template");
  const objectElement = objectClass.generatePanel();
  container.append(objectElement);
}

panels.forEach((obj) => {
  renderObjects(obj, objectsContainer);
});
