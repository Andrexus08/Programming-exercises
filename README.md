# KD402D Programming — Exercises

This repository holds the exercises for the afternoon sessions in KD402D Programming. You fork it once, at the start of the course, and keep working in your own copy until the end.

## Setting up (once)

1. Install [VS Code](https://code.visualstudio.com).
2. On GitHub, click **Fork** at the top of this page. This makes your own copy of the repository under your account.
3. In VS Code, open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`) and run **Git: Clone**.
4. Choose **your fork** (it has your username in it — not the course's original).
5. Save it in a normal folder on your computer, for example `Documents/code`. Avoid OneDrive, iCloud or Dropbox folders.
6. Open the folder in VS Code (File > Open Folder).
7. Click **Install** when VS Code offers the recommended extensions.

### How VS Code is set up

Files auto-save and auto-format (Prettier). Copilot inline completions are disabled. Copilot Chat runs in tutor mode (hints and explanations, no full solutions).

## At the start of every session

New exercises are added to the course repository before each session. To get them:

1. Go to **your fork** on github.com and click **Sync fork** → **Update branch**.
2. In VS Code, open the Source Control panel and click **Pull** (or **Sync Changes**).

The new session folder now appears in VS Code.

## How the folders work

There is one folder per session, named after the topic of that day's lecture:

```
tools/
├── start/       ← your starting point. Work here.
├── in-class/    ← what we wrote together in class (added after the session)
└── reference/   ← a finished version to compare with (added after the session)
data/
└── …
```

- **Work only inside the `start/` folders.** These are yours to change as much as you like.
- **Don't change files in `in-class/` or `reference/`, or at the top level of the repository.** Read them, copy from them, run them, but put your own changes in `start/`.

If you follow this, Sync fork will always work without problems. If Sync fork ever reports a conflict, don't try to fix it on your own. Ask your teacher.

`in-class/` is what we live-coded during the session, mistakes and all. `reference/` was prepared before class and may look a bit different. Both are useful: one shows the process, the other a tidier result.

## Running an exercise

Each folder has its own `index.html`. Open it with the **Live Preview** extension in VS Code, then open the browser's developer tools to see the console.

## Saving your work

As you work:

1. Open the **Source Control** panel in VS Code. You'll see the files you changed.
2. Click a file to see exactly what changed.
3. Write a short message that says what you did, for example `Add function that doubles a number`.
4. Click **Commit**.
5. Click **Sync Changes** (or **Push**) to send your commits to GitHub.

Commit small and often. Push at least once at the end of every session.
