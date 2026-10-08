// Exercise 2: build a note from parts (finished version)

const pitchName = "E";
let octave = 4;
let fullNote = pitchName + octave; // "E" + 4 gives "E4": the number is turned into text
console.log("Exercise 2: fullNote is " + fullNote);

octave = octave + 1;
console.log("Exercise 2: after raising the octave, fullNote is still " + fullNote);
// fullNote remembered "E4". Changing octave afterwards doesn't reach back into it.

fullNote = pitchName + octave;
console.log("Exercise 2: rebuilt, fullNote is " + fullNote); // "E5"

function exercise2(start) {
  synth.triggerAttackRelease(fullNote, "4n", start);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-2", exercise2);
