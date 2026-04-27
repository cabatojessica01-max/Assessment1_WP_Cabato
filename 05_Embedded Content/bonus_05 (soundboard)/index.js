const buttons = document.querySelectorAll(".sound");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const soundFile = button.getAttribute("data-sound");
    const audio = new Audio("Audio/" + soundFile);
    audio.play();
  });
});