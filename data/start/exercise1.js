// Exercise 1: store a sound
// Tuesday's riff, now with data in it: notes, lengths and tempos stored in variables.
// Each exercise has its own file and its own button on the page. Do them in order:
// exercise1.js, exercise2.js, and so on. After each one: save, press its button, check the console, commit.
// synth and chordSynth, the instruments, are made in setup.js.

// Every value is typed straight into the calls.
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

// ---------- You don't need to change anything below this line ----------

playOnClick("play-1", exercise1);
