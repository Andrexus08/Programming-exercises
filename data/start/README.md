# Data

Today you put data into Tuesday's riff. A note (`"C4"`) is a string, a length (`"8n"`) is a string, a tempo (`90`) and a frequency (`440`) are numbers. You store them in variables, feed them into functions, and transform them into new values.

The slides for this afternoon walk you through every exercise: open them on your own laptop and go at your own pace.

## Run it

1. Sync your fork and pull (see the main README), so this `data/` folder is on your laptop.
2. Open `data/start/index.html`, then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab. You should see `Exercise 2: fullNote is E4`.
4. Click **1 · Store a sound**. You should hear three notes.

Each exercise in `script.js` has its own button on the page. When you save, the page reloads on its own.

## The exercises

Do them in order. After each one: save, press its button, check the console, and commit.

| Exercise | What you do                                         | A commit message could be               |
| -------- | --------------------------------------------------- | --------------------------------------- |
| 1        | Store the note and length in variables              | `Store the riff's note and length`      |
| 2        | Build a note from a letter and an octave            | `Build a note from its parts`           |
| 3        | Time three notes from a tempo                       | `Time the riff from the tempo`          |
| 4        | Call `playNote` with variables instead of values    | `Use variables as arguments`            |
| 5        | Log each note as it plays                           | `Log each note as it plays`             |
| 6        | Work out new pitches from 440                       | `Work out pitches from a frequency`     |
| 7        | Slice a chord out of a string and play it           | `Play a chord sliced from a string`     |
| 8        | Find and fix the octave bug                         | `Fix the octave that arrives as text`   |

**Blue track** (when 1–8 are done): B1 and B2 at the bottom of `script.js`.

**Purple track** (when 1–8 are done, if you have coded before): a generative piece in `generative.js`, steps P1 to P4. It uses two things the lecture held back: template literals and `Math.random()`.

## If something goes wrong

- **None of the buttons do anything:** the script stopped before it reached the bottom. Look at the console for a red error and the line number next to it.
- **`TypeError: Assignment to constant variable.`** You changed a `const`. That's exercise 1d doing its job: delete the line, or make it a `let` if it really needs to change.
- **`ReferenceError: note is not defined`:** a variable is used before it was made, or its name is spelled differently. Capitals count: `fullNote` and `fullnote` are two names.
- **`SyntaxError: Identifier 'note' has already been declared`:** two `const` or `let` lines make the same name. Give the second one a new name, or drop the `let` to change the one you have.
- **A note sounds wildly wrong, or not at all:** log the note before you play it. Is it really `"C5"`, or is it `"C41"`?
- **No sound:** check the volume and your headphones. Sound only starts after you click a button.
- **`Start time must be strictly greater than previous start time`:** two notes on one synth asked to start at the same moment. Give each one its own time. (`chordSynth` can play several at once.)
