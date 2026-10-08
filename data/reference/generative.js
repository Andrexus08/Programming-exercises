// Purple track: a generative piece (finished version)
// A small piece that plays itself, different every time.

const lead = new Tone.Synth(); // no .toDestination(): it goes through the effects instead (P2)
const transport = Tone.getTransport(); // Tone's clock: it keeps musical time

const scale = "CDEGA"; // a pentatonic scale: any of these letters sound good together
const tempo = 100;

// ---------- P1: a melody that writes itself ----------
// Tone calls this function every eighth note, and passes in the exact time to play.
function playRandomNote(time) {
  const index = Math.floor(Math.random() * scale.length); // 0, 1, 2, 3 or 4
  const pitch = scale.slice(index, index + 1); // one letter
  const randomOctave = Math.floor(Math.random() * 2) + 4; // 4 or 5
  const note = `${pitch}${randomOctave}`;
  console.log(`Playing ${note}`);
  lead.triggerAttackRelease(note, "8n", time);
}

transport.bpm.value = tempo;
new Tone.Loop(playRandomNote, "8n").start(0);

// ---------- P2: shape the sound with effects ----------
const cutoff = 1200; // the filter lets through frequencies below this, in Hz
const feedback = 0.4; // how much of each echo comes back again: 0 to 1
const reverbDecay = 4; // how long the room rings, in seconds

const filter = new Tone.Filter(cutoff, "lowpass");
const delay = new Tone.FeedbackDelay("8n", feedback);
const reverb = new Tone.Reverb(reverbDecay);
lead.chain(filter, delay, reverb, Tone.getDestination());

// ---------- P3: make it move ----------
const lowCutoff = 300;
const highCutoff = lowCutoff * 8; // 2400: worked out from lowCutoff, so it moves when lowCutoff does
new Tone.LFO("2m", lowCutoff, highCutoff).connect(filter.frequency).start();

// ---------- P4: musical time is text ----------
// Tone writes a position in the piece as "bars:beats:sixteenths", counting from 0.
const drone = new Tone.Synth().toDestination();
drone.volume.value = -8; // a little quieter than the melody

const droneBar = 3; // the start of bar 4
const endBar = 16;
const dronePosition = `${droneBar}:0:0`;
const endPosition = `${endBar}:0:0`;

function playDrone(time) {
  console.log(`Drone comes in at ${dronePosition}`);
  drone.triggerAttackRelease("C2", "4m", time);
}

function endPiece(time) {
  console.log(`The end, at ${endPosition}`);
  transport.stop(time);
}

transport.schedule(playDrone, dronePosition);
transport.schedule(endPiece, endPosition);

// ---------- You don't need to change anything below this line ----------

document.getElementById("piece-play").addEventListener("click", async () => {
  await Tone.start();
  transport.start();
});

document.getElementById("piece-stop").addEventListener("click", () => {
  transport.stop();
});
