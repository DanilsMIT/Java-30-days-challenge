export default class styleInput {
  constructor(input) {
    this._element = input;
    this._name = input.name;
    this._messure = input.dataset.sizing ? input.dataset.sizing : "";
  }

  handleUpdateStyle() {
    this._element.addEventListener("input", () => {
      document.documentElement.style.setProperty(
        `--${this._name}`,
        this._element.value + this._messure,
      );
    });
  }
}
