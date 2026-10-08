// Exercise 8: bug hunt (finished version)

// The octave arrives as text, the way it would from a text box on a web page.
const typedOctave = "4";

// The bug: "4" + 1 glues text together and gives "41", so the note was "C41",
// 41 octaves up and far too high to hear. "4" - 1 worked by luck: minus only works
// on numbers, so JavaScript quietly turned "4" into 4 first, and gave 3.
// const noteUp = "C" + (typedOctave + 1);   // "C41"

// The fix: turn the text into a number before doing arithmetic with it.
const noteUp = "C" + (Number(typedOctave) + 1); // "C5"
const noteDown = "C" + (typedOctave - 1); // "C3"
console.log("Exercise 8: up is " + noteUp + ", down is " + noteDown);

function exercise8(start) {
  synth.triggerAttackRelease(noteDown, "4n", start);
  synth.triggerAttackRelease(noteUp, "4n", start + 0.5);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-8", exercise8);
