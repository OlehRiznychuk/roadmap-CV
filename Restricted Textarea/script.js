const messageElement = document.querySelector("#message");
const characterCounterElement = document.querySelector("#messagecharcounter");
const typedCharElement = document.querySelector("#typedchar");
const maxChar = 250;

messageElement.addEventListener("input", () => {
  const typedChar = messageElement.value.length;
  if (typedChar > maxChar) {
    return false;
  }

  typedCharElement.textContent = typedChar;
  if (typedChar > maxChar - 1) {
    characterCounterElement.classList = "charcounter text-danger";
    messageElement.classList = "border-danger";
  } else if (typedChar < maxChar && typedChar > maxChar * (90 / 100)) {
    characterCounterElement.classList = "charcounter text-warning";
    messageElement.classList = "border-warning";
  } else if (typedChar < maxChar - (maxChar * (10 / 100) - 1)) {
    characterCounterElement.classList = "charcounter text-normal";
    messageElement.classList = "border-normal";
  }
});
