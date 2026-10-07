# Tools of the Trade

Today you run, change, commit and push code in VS Code. The code is Tuesday's: a function that gives back a greeting, and a riff played with Tone.js.

## Run it

1. Open `index.html` in this folder.
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and run **Live Preview: Show Preview (External Browser)**. The page opens in your normal browser.
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab. You should see `Hello, Ana!`
4. Click **Play**. You should hear three notes.

When you save `script.js`, the page reloads on its own.

## The loop

There are four TODOs in `script.js`. Do them in order, and go round this loop for each one:

1. **Change** the code for one TODO.
2. **Check** it in the browser: look at the console, or press Play and listen.
3. **Commit**: open the Source Control panel, click the file to see what changed, write a message that says what you did, and click **Commit**.
4. **Push**: click **Sync Changes**. Then refresh your fork on github.com and find your commit.

| TODO | What you do                             | A commit message could be         |
| ---- | --------------------------------------- | --------------------------------- |
| 1    | Greet yourself in the console           | `Greet myself in the console`     |
| 2    | Change the notes in the riff            | `Change the riff's notes`         |
| 3    | Add a fourth note to the riff           | `Add a fourth note to the riff`   |
| 4    | Play the riff a second time in the song | `Play the riff twice in the song` |

## Your own change

Make one change of your own and go round the loop without help. Some ideas:

- Code the function you played on Tuesday morning (your cast card), call it, and log what it gives back.
- Write a `chorus(start)` function with different notes, and call it from `song`.
- Give `playRiff` more parameters, so the notes are arguments: `playRiff(start, "C4", "E4", "G4")`.

## If something goes wrong

- **Nothing in the console:** is the Console tab of the developer tools open? Is the page from Live Preview, not a file you double-clicked?
- **No sound:** check the volume and your headphones. Sound only starts after you click Play.
- **`ReferenceError: Tone is not defined`:** Tone.js loads from the internet. Check your connection and reload. Capitals count: `Tone`, not `tone`.
- **`ReferenceError: C4 is not defined`:** note names need quotes: `"C4"`.
- **`Start time must be strictly greater than previous start time`:** two notes asked to start at the same moment. Give each one its own time.
- **You wrote a function, but nothing happens:** it's defined but never called. Add the call, with parentheses.
