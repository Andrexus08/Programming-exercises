// Exercise 6: the same number, different jobs (finished version)

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

// ---------- You don't need to change anything below this line ----------

playOnClick("play-6", exercise6);
