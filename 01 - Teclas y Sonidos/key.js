export default class key {
  constructor(key) {
    this._keyElement = key;
    this._keyCode = this._keyElement.getAttribute("data-key");
  }

  _playsound(event) {
    if (event.type === "keydown" && event.keyCode.toString() != this._keyCode)
      return;

    const audioPlay = document.querySelector(
      `audio[data-key="${this._keyCode}"]`,
    );

    if (audioPlay) {
      audioPlay.currentTime = 0;
      audioPlay.play();
      this._keyElement.classList.add("playing");
    }
  }
  _removeSoundAnimation(event) {
    if (event.propertyName != "transform") {
      this._keyElement.classList.remove("playing");
    }
  }

  setEventListener() {
    window.addEventListener("keydown", (event) => {
      this._playsound(event);
    });

    this._keyElement.addEventListener("click", (event) => {
      this._playsound(event);
    });

    this._keyElement.addEventListener("transitionend", (event) => {
      this._removeSoundAnimation(event);
    });
  }
}
