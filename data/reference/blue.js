// Blue track: B1 and B2 (finished version)
// beat and bpm come from exercise3.js. Every file on the page can use the variables the others make.

// B1: how long a 12-beat phrase lasts
const beatsInPhrase = 12;
const phraseSeconds = beatsInPhrase * beat;
console.log("Blue: a " + beatsInPhrase + "-beat phrase lasts " + Math.round(phraseSeconds) + " seconds");

// B2: one line of track info, built from stored values
const title = "Night Bus";
const musicalKey = "A minor";
console.log(title + " · " + bpm + " BPM · " + musicalKey);
