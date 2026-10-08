# Data

Today you put data into Tuesday's riff. A note (`"C4"`) is a string, a length (`"8n"`) is a string, a tempo (`90`) and a frequency (`440`) are numbers. You store them in variables, feed them into functions, and transform them into new values.

The slides for this afternoon walk you through every exercise: open them on your own laptop and go at your own pace.

## Run it

1. Sync your fork and pull (see the main README), so this `data/` folder is on your laptop.
2. Open `data/start/index.html`, then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab. You should see `Exercise 2: fullNote is E4`.
4. Click **1 · Store a sound**. You should hear three notes.

Each exercise has its own file (`exercise1.js`, `exercise2.js` …) and its own button on the page. Exercises 4 and 5 share `exercise4-5.js`. The instruments are made in `setup.js`; you don't need to change it. When you save, the page reloads on its own.

## The exercises

Do them in order. After each one: save, press its button, check the console, and commit.

| Exercise | File             | What you do                                      | A commit message could be             |
| -------- | ---------------- | ------------------------------------------------ | ------------------------------------- |
| 1        | `exercise1.js`   | Store the note and length in variables           | `Store the riff's note and length`    |
| 2        | `exercise2.js`   | Build a note from a letter and an octave         | `Build a note from its parts`         |
| 3        | `exercise3.js`   | Time three notes from a tempo                    | `Time the riff from the tempo`        |
| 4        | `exercise4-5.js` | Call `playNote` with variables instead of values | `Use variables as arguments`          |
| 5        | `exercise4-5.js` | Log each note as it plays                        | `Log each note as it plays`           |
| 6        | `exercise6.js`   | Work out new pitches from 440                    | `Work out pitches from a frequency`   |
| 7        | `exercise7.js`   | Play three notes at once on `chordSynth`         | `Play a chord on chordSynth`          |
| 8        | `exercise8.js`   | Find and fix the octave bug                      | `Fix the octave that arrives as text` |

**Blue track** (when 1–8 are done): B1 and B2 in `blue.js`.

**Purple track** (when 1–8 are done, if you have coded before): a generative piece in `generative.js`, steps P1 to P4. It uses three things the lecture held back: template literals, `Math.random()` and `.slice()`.

## If something goes wrong

- **A button does nothing:** that exercise's file stopped before it reached the bottom, where its button is connected. Look at the console for a red error, and the file name and line number next to it.
- **`TypeError: Assignment to constant variable.`** You changed a `const`. That's exercise 1d doing its job: delete the line, or make it a `let` if it really needs to change.
- **`ReferenceError: note is not defined`:** a variable is used before it was made, or its name is spelled differently. Capitals count: `fullNote` and `fullnote` are two names.
- **`SyntaxError: Identifier 'note' has already been declared`:** two `const` or `let` lines make the same name. The files share their variables, so this counts across files too: a `note` in `exercise1.js` and another in `exercise4-5.js` clash. Give the second one a new name, or drop the `let` to change the one you have.
- **A note sounds wildly wrong, or not at all:** log the note before you play it. Is it really `"C5"`, or is it `"C41"`?
- **No sound:** check the volume and your headphones. Sound only starts after you click a button.
- **`Start time must be strictly greater than previous start time`:** two notes on one synth asked to start at the same moment. `synth` plays one note at a time: give each note its own time, or play them on `chordSynth`, which can play several at once (exercise 7 starts with this error on purpose).
