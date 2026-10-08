// Data: a finished version
// One way to do every exercise in data/start. Yours can look different and still be right.
// Compare, copy from it, run it, but make your own changes in data/start.

// Make the instruments and plug them into the speakers.
const synth = new Tone.Synth().toDestination();
const chordSynth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// ==================== Block 1: notes as data ====================

// ---------- Exercise 1: store a sound ----------
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

// ---------- Exercise 2: build a note from parts ----------
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

// ---------- Exercise 3: tempo arithmetic ----------
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

// ---------- Exercises 4 and 5: variables as arguments, and data you can see ----------
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

// ==================== Block 2: transforming musical data ====================

// ---------- Exercise 6: the same number, different jobs ----------
const a4 = 440; // the note A4, as a frequency: 440 vibrations a second (Hz)

function exercise6(start) {
  synth.triggerAttackRelease(a4, "4n", start);
  synth.triggerAttackRelease(a4 * 2, "4n", start + 0.5); // 880: an octave up
  synth.triggerAttackRelease(a4 * 1.5, "4n", start + 1); // 660: a fifth up
  synth.triggerAttackRelease(a4 / 2, "4n", start + 1.5); // 220: an octave down
}

console.log("Exercise 6: a4 * 2 is " + a4 * 2);
console.log("Exercise 6: a4 is still " + a4); // working out a new value leaves the original alone
// 440 is a frequency, 4 (in octave) is a position on the keyboard, 90 (in bpm) is a speed.
// All numbers. What each one means comes from how we use it, and what we name it.

// ---------- Exercise 7: a chord from a string ----------
const chord = "c4 e4 g4";

console.log("Exercise 7: " + chord.toUpperCase()); // "C4 E4 G4"
console.log("Exercise 7: the chord is " + chord.length + " characters long"); // 8: the spaces count

const tidyChord = chord.toUpperCase();
const bottomNote = tidyChord.slice(0, 2); // "C4"
const middleNote = tidyChord.slice(3, 5); // "E4"
const topNote = tidyChord.slice(6, 8); // "G4"

function exercise7(start) {
  chordSynth.triggerAttackRelease(bottomNote, "2n", start);
  chordSynth.triggerAttackRelease(middleNote, "2n", start);
  chordSynth.triggerAttackRelease(topNote, "2n", start);
}

console.log("Exercise 7: chord is still " + chord); // each method made a new value; chord is untouched

// ---------- Exercise 8: bug hunt ----------
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

// ==================== Blue track ====================

// B1: how long a 12-beat phrase lasts
const beatsInPhrase = 12;
const phraseSeconds = beatsInPhrase * beat;
console.log("Blue: a " + beatsInPhrase + "-beat phrase lasts " + Math.round(phraseSeconds) + " seconds");

// B2: one line of track info, built from stored values
const title = "Night Bus";
const musicalKey = "A minor";
console.log(title + " · " + bpm + " BPM · " + musicalKey);

// ---------- You don't need to change anything below this line ----------

// Each button switches the sound on, then plays its exercise from now.
function playOnClick(buttonId, exercise) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", async () => {
    await Tone.start();
    exercise(Tone.now());
  });
}

playOnClick("play-1", exercise1);
playOnClick("play-2", exercise2);
playOnClick("play-3", exercise3);
playOnClick("play-4", exercise4);
playOnClick("play-6", exercise6);
playOnClick("play-7", exercise7);
playOnClick("play-8", exercise8);
