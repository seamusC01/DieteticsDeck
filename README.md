# A Deck of Dietetics — first version

A free, public, static revision website built with HTML, CSS and vanilla JavaScript. No account or server is required.

## Included in this first version

- Responsive homepage and topic navigation
- Searchable flashcards with reveal-answer interaction
- Four self-rating buttons (Again, Hard, Good, Easy)
- Basic review interval scheduling
- Five-question multiple-choice quiz with explanations
- Progress summary by topic
- Browser-local progress storage (`localStorage`)

## Publish with GitHub Pages

1. Create a GitHub account if you do not already have one.
2. Create a **public** repository, for example `dietetics-deck`.
3. Upload `index.html`, `styles.css`, `app.js` and `README.md` to the repository's root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)` folder, then save.
7. GitHub Pages will provide the public website URL after deployment.

## Editing the cards

Open `app.js`. The `cards` array at the top contains the flashcards. Each card has:
- `id`: unique short identifier
- `topic`: category name
- `q`: question
- `a`: answer/explanation
- `hint`: optional prompt shown before revealing

The quiz questions are in the `quizItems` array.

## Important limitations in this prototype

- Progress is saved only in the visitor's current browser and device. It is not synced across devices.
- The review intervals are a simple prototype, not a validated implementation of the full Anki algorithm.
- The sample cards are educational prompts, not clinical advice. Clinical content should be checked against current authoritative guidance, dated, and reviewed before public release.
- There is no user-submitted content, account system, analytics or backend.

## Suggested next steps

1. Agree the final name and visual identity.
2. Fact-check and expand the starter card library.
3. Add source references and last-reviewed dates to every clinical card.
4. Improve accessibility and test on mobile devices.
5. Consider optional accounts and cross-device sync only if users request them.
