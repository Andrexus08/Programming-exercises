// Data
// Tuesday's riff, now with data in it: notes, lengths and tempos stored in variables.
// Work through the exercises in order. Each one has its own button on the page.
// After each one: save, press its button, check the console, commit.

// Make the instruments and plug them into the speakers.
const synth = new Tone.Synth().toDestination();
const chordSynth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// ==================== Block 1: notes as data ====================

// ---------- Exercise 1: store a sound ----------
// Tuesday's riff. Every value is typed straight into the calls.
// TODO 1a: above the function, store the first note and the length in variables:
//            const note = "C4";
//            let duration = "8n";
//          Then use them in the first call: synth.triggerAttackRelease(note, duration, start);
// TODO 1b: for each variable, decide: does it change while the piece plays (let) or stay fixed (const)?
// TODO 1c: on a new line under the variables, change duration: duration = "2n";  Play. Hear the difference?
// TODO 1d: try the same with note: note = "D4";  Read the error in the console. Then delete that line.

function exercise1(start) {
  synth.triggerAttackRelease("C4", "8n", start);
  synth.triggerAttackRelease("E4", "8n", start + 0.5);
  synth.triggerAttackRelease("G4", "8n", start + 1);
}

// ---------- Exercise 2: build a note from parts ----------
const pitchName = "E";
let octave = 4;
let fullNote = pitchName + octave;
console.log("Exercise 2: fullNote is " + fullNote);

// TODO 2a: raise the octave by one: octave = octave + 1;
// TODO 2b: log fullNote again. Predict first: has it changed?
// TODO 2c: rebuild it from its parts (fullNote = pitchName + octave;) and log it once more.

function exercise2(start) {
  synth.triggerAttackRelease(fullNote, "4n", start);
}

// ---------- Exercise 3: tempo arithmetic ----------
const bpm = 90; // beats per minute
const beat = 60 / bpm; // how long one beat lasts, in seconds
console.log("Exercise 3: one beat lasts " + beat + " seconds");

// TODO 3a: log the beat in milliseconds, rounded: Math.round(beat * 1000)

function exercise3(start) {
  synth.triggerAttackRelease("C4", "8n", start);
  // TODO 3b: play "E4" one beat after start, then "G4" two beats after start.
  //          Use beat, not a number: start + beat, start + beat * 2
}

// TODO 3c: change bpm (try 60, then 160) and play again. Which lines did you change?

// ---------- Exercises 4 and 5: variables as arguments, and data you can see ----------
function playNote(name, length, time) {
  // TODO 5: log what is playing, before the note plays:
  //         console.log("Playing " + name + " for " + length);
  synth.triggerAttackRelease(name, length, time);
}

// TODO 4a: store the three notes and one length in variables, here, above the function.
// TODO 4b: use those variables in the calls below instead of the values typed in.
// TODO 4c: change the length variable once. Do all three notes change?

function exercise4(start) {
  playNote("C4", "8n", start);
  playNote("E4", "8n", start + beat);
  playNote("G4", "8n", start + beat * 2);
}

// ==================== Block 2: transforming musical data ====================

// ---------- Exercise 6: the same number, different jobs ----------
const a4 = 440; // the note A4, as a frequency: 440 vibrations a second (Hz)

function exercise6(start) {
  synth.triggerAttackRelease(a4, "4n", start);
  // TODO 6a: play a4 * 2 at start + 0.5      (an octave up)
  // TODO 6b: play a4 * 1.5 at start + 1      (a fifth up)
  // TODO 6c: play a4 / 2 at start + 1.5      (an octave down)
}

// TODO 6d: log a4 * 2, then log a4. Did multiplying change what a4 holds?

// ---------- Exercise 7: a chord ----------
// synth plays one note at a time, like one voice singing. That's all Tuesday's riff needed.
// A chord is several notes sounding at the same time. For that we need chordSynth, made at the
// top of this file: a PolySynth ("poly" means many), which can play several notes at once.
const bottomNote = "c4";
const middleNote = "e4";
const topNote = "g4";

function exercise7(start) {
  synth.triggerAttackRelease(bottomNote, "2n", start);
  synth.triggerAttackRelease(middleNote, "2n", start);
  synth.triggerAttackRelease(topNote, "2n", start);
}

// TODO 7a: play exercise 7 as it is. How many notes do you hear? Read the red error in the console.
// TODO 7b: in exercise7, change synth to chordSynth in all three calls. Play again.
// TODO 7c: glue the three notes into one string, with a space between each, and log it:
//            const chord = bottomNote + " " + middleNote + " " + topNote;
// TODO 7d: log chord.toUpperCase(), then chord.length. Predict the length first: do the spaces count?
// TODO 7e: log chord one last time. Has toUpperCase changed it?

// ---------- Exercise 8: bug hunt ----------
// The octave arrives as text, the way it would from a text box on a web page.
const typedOctave = "4";
const noteUp = "C" + (typedOctave + 1);
const noteDown = "C" + (typedOctave - 1);

// TODO 8a: predict what noteUp and noteDown hold. Then log them and play exercise 8.
// TODO 8b: one note is wildly wrong. Why? Fix noteUp so it really is one octave up.

function exercise8(start) {
  synth.triggerAttackRelease(noteDown, "4n", start);
  synth.triggerAttackRelease(noteUp, "4n", start + 0.5);
}

// ==================== Blue track ====================

// TODO B1: a phrase is 12 beats long. Work out how long it lasts in seconds from beat,
//          round it to a whole number of seconds, and log it.

// TODO B2: store a title and a key for your track (you already have bpm), then log one line like:
//          Night Bus · 90 BPM · A minor

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
