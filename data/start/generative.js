// Purple track: a generative piece
// A small piece that plays itself, different every time.
// Do the steps in order (P1 to P4) and stop wherever time runs out.
// New today: template literals (`...${value}...`) and Math.random().

const lead = new Tone.Synth().toDestination();
const transport = Tone.getTransport(); // Tone's clock: it keeps musical time

const scale = "CDEGA"; // a pentatonic scale: any of these letters sound good together
const tempo = 100;

// ---------- P1: a melody that writes itself ----------
// Tone calls this function every eighth note, and passes in the exact time to play.
function playRandomNote(time) {
  // TODO P1a: pick a random position in scale:
  //           const index = Math.floor(Math.random() * scale.length);
  // TODO P1b: take the letter at that position with .slice(index, index + 1)
  // TODO P1c: pick a random octave, 4 or 5: Math.floor(Math.random() * 2) + 4
  // TODO P1d: build the note with a template literal: `${pitch}${randomOctave}`
  // TODO P1e: log it with a template literal (`Playing ${note}`), then play it:
  //           lead.triggerAttackRelease(note, "8n", time);
}

transport.bpm.value = tempo;
new Tone.Loop(playRandomNote, "8n").start(0);

// ---------- P2: shape the sound with effects ----------
// TODO P2a: store the settings in variables: cutoff (try 1200), feedback (try 0.4), reverbDecay (try 4)
// TODO P2b: make the effects:
//           const filter = new Tone.Filter(cutoff, "lowpass");
//           const delay = new Tone.FeedbackDelay("8n", feedback);
//           const reverb = new Tone.Reverb(reverbDecay);
// TODO P2c: remove .toDestination() from lead at the top, and route it through the effects instead:
//           lead.chain(filter, delay, reverb, Tone.getDestination());
// Then change one number and listen to the whole space change.

// ---------- P3: make it move ----------
// TODO P3a: const lowCutoff = 300;  and work out the top from it: const highCutoff = lowCutoff * 8;
// TODO P3b: sweep the filter between them, once every two bars:
//           new Tone.LFO("2m", lowCutoff, highCutoff).connect(filter.frequency).start();

// ---------- P4: musical time is text ----------
// Tone writes a position in the piece as "bars:beats:sixteenths", counting from 0.
// "0:0:0" is the very start, "3:0:0" is the start of bar 4.
// TODO P4a: make a second synth for a low drone: const drone = new Tone.Synth().toDestination();
// TODO P4b: store the bar where it comes in (const droneBar = 3;) and build its position
//           with a template literal: `${droneBar}:0:0`
// TODO P4c: schedule it: transport.schedule(playDrone, dronePosition);
//           where playDrone(time) plays a long, low note: drone.triggerAttackRelease("C2", "4m", time);
// TODO P4d: stop the piece at bar 16 the same way: a function that calls transport.stop(time),
//           scheduled at `${endBar}:0:0`.

// ---------- You don't need to change anything below this line ----------

document.getElementById("piece-play").addEventListener("click", async () => {
  await Tone.start();
  transport.start();
});

document.getElementById("piece-stop").addEventListener("click", () => {
  transport.stop();
});
