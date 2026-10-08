// Exercises 4 and 5: variables as arguments, and data you can see (finished version)
// beat comes from exercise3.js. Every file on the page can use the variables the others make.

function playNote(name, length, time) {
  console.log("Playing " + name + " for " + length);
  synth.triggerAttackRelease(name, length, time);
}

const rootNote = "C4";
const thirdNote = "E4";
const fifthNote = "G4";
let noteLength = "8n"; // change this once and every note in the riff changes

function exercise4(start) {
  playNote(rootNote, noteLength, start);
  playNote(thirdNote, noteLength, start + beat);
  playNote(fifthNote, noteLength, start + beat * 2);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
