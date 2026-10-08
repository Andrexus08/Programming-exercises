// Exercise 6: the same number, different jobs

const a4 = 440; // the note A4, as a frequency: 440 vibrations a second (Hz)

function exercise6(start) {
  synth.triggerAttackRelease(a4, "4n", start);
  // TODO 6a: play a4 * 2 at start + 0.5      (an octave up)
  // TODO 6b: play a4 * 1.5 at start + 1      (a fifth up)
  // TODO 6c: play a4 / 2 at start + 1.5      (an octave down)
}

// TODO 6d: log a4 * 2, then log a4. Did multiplying change what a4 holds?

// ---------- You don't need to change anything below this line ----------

playOnClick("play-6", exercise6);
