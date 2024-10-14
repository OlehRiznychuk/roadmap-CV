const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  if (document.cookie.includes("oleh")) return; // *if cookie contains 'oleh' it will be returned and code below won't be runned
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      if (button.id == "accept-btn") {
        document.cookie = "cookieBy = oleh; max-age =" + 60 * 60 * 24 * 30;
      }
    });
  });
};
window.addEventListener("load", executeCodes);
