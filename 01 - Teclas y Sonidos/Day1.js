import key from "./key.js";

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((keyElement) => {
  const keySounds = new key(keyElement);
  keySounds.setEventListener();
});
