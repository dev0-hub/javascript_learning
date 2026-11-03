# JS Quest

Gamified JavaScript learning app built with React and Vite. Run `npm install`, then
`npm run dev` and open the URL shown.

## Languages and learning content

Choose Myanmar or English from the navigation bar or Settings. Myanmar is the
default. The selected language and learning progress are saved together in
LocalStorage on the current browser; the app does not yet have authentication
or separate server-side user profiles.

The Roadmap contains structured bilingual lessons, Quiz Arena includes
multiple-choice, true/false, guess-the-output, and find-the-error questions, and
Syntax Master includes fill-in-the-blank, missing-keyword, missing-symbol, and
drag-and-drop code puzzles. Tech Dictionary contains searchable English–
Myanmar JavaScript terms.

Add multiple-choice questions in `src/data/questions.js` and keep their Myanmar
translations in `src/data/questionTranslations.js`. Lesson content, syntax
questions, and dictionary terms are maintained in their corresponding files in
`src/data/`.

## Verification

Run `npm run build` for a production build and `npm run verify:syntax` to check
the Syntax Master question bank.
