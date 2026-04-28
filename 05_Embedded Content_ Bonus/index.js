// select all sound buttons
const buttons = document.querySelectorAll(".sound");

// add click event to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {

    // get audio file name from button
    const soundFile = button.getAttribute("data-sound");

    // play audio from folder
    const audio = new Audio("audio/" + soundFile);

    audio.play();
  });
});