import styleInput from "./styleInput.js";

const inputs = document.querySelector(".controls").querySelectorAll("input");

inputs.forEach((input) => {
  new styleInput(input).handleUpdateStyle();
});
