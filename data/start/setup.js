// Data: setup
// The instruments, and the code that connects each button to its exercise.
// You don't need to change anything in this file.

// Make the instruments and plug them into the speakers.
const synth = new Tone.Synth().toDestination();
const chordSynth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// Each button switches the sound on, then plays its exercise from now.
function playOnClick(buttonId, exercise) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", async () => {
    await Tone.start();
    exercise(Tone.now());
  });
}
