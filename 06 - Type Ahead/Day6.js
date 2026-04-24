const formularioBuscador = document.querySelector("#searcher");
const busqueda = document.querySelector(".search");
const resultados = document.querySelector(".suggestions");

const database =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const objectList = [];
fetch(database)
  .then((data) => data.json())
  .then((objects) => objectList.push(...objects));

function buscarDatos(keyword, list) {
  return list.filter((element) => {
    const expresionDeBusqueda = new RegExp(keyword, "gi");
    return (
      element.city.match(expresionDeBusqueda) ||
      element.state.match(expresionDeBusqueda)
    );
  });
}

function mostrarDatos() {
  const arrayMatched = buscarDatos(this.value, objectList);
  const generarHTML = arrayMatched
    .map((object) => {
      const expresionDeBusqueda = new RegExp(this.value, "gi");
      const city = object.city.replace(
        expresionDeBusqueda,
        `<span class ="h1">${this.value}</span>`,
      );
      const state = object.state.replace(
        expresionDeBusqueda,
        `<span class ="h1">${this.value}</span>`,
      );
      return `
      <li>
        <span class="name">
          ${city}, ${state}
        </span>
        <span class="population">${numberWithCommas(object.population)}</span>
      </li>
    `;
    })
    .join("");
  resultados.innerHTML = generarHTML;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

busqueda.addEventListener("change", mostrarDatos);
busqueda.addEventListener("keyup", mostrarDatos);
