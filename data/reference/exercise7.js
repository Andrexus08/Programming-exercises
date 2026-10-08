// Exercise 7: a chord (finished version)

// synth plays one note at a time, like one voice singing. That's all Tuesday's riff needed.
// A chord is several notes sounding at the same time. For that we need chordSynth, made in
// setup.js: a PolySynth ("poly" means many), which can play several notes at once.
const bottomNote = "c4";
const middleNote = "e4";
const topNote = "g4";

function exercise7(start) {
  // On synth, the second call stops everything with an error:
  // Start time must be strictly greater than previous start time.
  // One voice can't start a second note at the moment it starts the first.
  chordSynth.triggerAttackRelease(bottomNote, "2n", start);
  chordSynth.triggerAttackRelease(middleNote, "2n", start);
  chordSynth.triggerAttackRelease(topNote, "2n", start);
}

const chord = bottomNote + " " + middleNote + " " + topNote; // "c4 e4 g4"
console.log("Exercise 7: " + chord);
console.log("Exercise 7: " + chord.toUpperCase()); // "C4 E4 G4"
console.log("Exercise 7: the chord is " + chord.length + " characters long"); // 8: the spaces count
console.log("Exercise 7: chord is still " + chord); // toUpperCase made a new value; chord is untouched

// ---------- You don't need to change anything below this line ----------

playOnClick("play-7", exercise7);
