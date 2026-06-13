export default class panel {
  constructor(obj, template) {
    this._top = obj.top;
    this._middle = obj.middle;
    this._down = obj.down;
    this._img = obj.link;
    this._template = template;
  }

  _getTemplate() {
    const panelTemplate = document
      .querySelector(this._template)
      .content.querySelector(".panel")
      .cloneNode(true);
    return panelTemplate;
  }

  _paneltexts() {
    this._element
      .querySelector(".panel__text--top")
      .classList.toggle("open-active");
    this._element
      .querySelector(".panel__text--down")
      .classList.toggle("open-active");

    this._element
      .querySelector(".panel__text--middle")
      .classList.toggle("open-middle");
  }

  _panelOpen() {
    const panelAbierto = document.querySelector(".panel__opened");

    if (panelAbierto && panelAbierto !== this._element) {
      this._autoClose(panelAbierto);
    }

    this._element.classList.toggle("panel__opened");
    this._element
      .querySelector(".panel__text--top")
      .classList.toggle("open-active");
    this._element
      .querySelector(".panel__text--down")
      .classList.toggle("open-active");
    this._element
      .querySelector(".panel__text--middle")
      .classList.toggle("open-middle");
  }
  _autoClose(panel) {
    panel.classList.remove("panel__opened");
    panel.querySelector(".panel__text--top").classList.remove("open-active");
    panel.querySelector(".panel__text--down").classList.remove("open-active");
    panel.querySelector(".panel__text--middle").classList.remove("open-middle");
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._panelOpen();
    });
  }

  generatePanel() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const top = this._element.querySelector(".panel__text--top");
    const middle = this._element.querySelector(".panel__text--middle");
    const down = this._element.querySelector(".panel__text--down");
    const img = this._element.querySelector(".panel__img");

    top.textContent = this._top;
    middle.textContent = this._middle;
    down.textContent = this._down;
    img.src = this._img;

    return this._element;
  }
}
