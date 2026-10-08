// Exercise 1: store a sound (finished version)
// One way to do it. Yours can look different and still be right.
// Compare, copy from it, run it, but make your own changes in data/start.

// The note stays fixed while the piece plays, so const.
// The length is one we change, so let.
const note = "C4";
let duration = "8n";

duration = "2n"; // changing a let is fine
// note = "D4";  // changing a const stops the script: TypeError: Assignment to constant variable.

function exercise1(start) {
  synth.triggerAttackRelease(note, duration, start);
  synth.triggerAttackRelease("E4", "8n", start + 0.5);
  synth.triggerAttackRelease("G4", "8n", start + 1);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-1", exercise1);
