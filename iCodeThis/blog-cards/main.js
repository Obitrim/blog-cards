const cards = document.querySelectorAll(".card");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    cards.forEach((element) => {
      element.classList.add("animate-delay");
      element.classList.add("animate");
    });
  }, 250);
});
