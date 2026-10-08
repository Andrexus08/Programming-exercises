// Exercise 3: tempo arithmetic (finished version)

const bpm = 90; // beats per minute
const beat = 60 / bpm; // how long one beat lasts, in seconds
console.log("Exercise 3: one beat lasts " + beat + " seconds");
console.log("Exercise 3: that's about " + Math.round(beat * 1000) + " milliseconds");

function exercise3(start) {
  synth.triggerAttackRelease("C4", "8n", start);
  synth.triggerAttackRelease("E4", "8n", start + beat);
  synth.triggerAttackRelease("G4", "8n", start + beat * 2);
}
// Change bpm on its own and all three notes speed up or slow down:
// one stored value steers the whole phrase.

// ---------- You don't need to change anything below this line ----------

playOnClick("play-3", exercise3);
