# Journal Scrapbook Buddy

Journal Scrapbook Buddy is a playful AI-inspired journaling web app that turns a user's feelings into a saved scrapbook page. Users can write a journal entry, choose multiple colors, select a vibe, generate an AI-style reflection, save the scrap to a growing local book, and export the current scrap as a PDF through the browser print flow.

**Live demo:** https://saisha12345.github.io/moodboard-buddy/  
**Design process:** [DESIGN_PROCESS.md](DESIGN_PROCESS.md)

## Why I Built This

Many journaling tools feel either too blank or too clinical. Journal Scrapbook Buddy explores how an AI-assisted interface can make reflection feel creative, visual, and emotionally approachable without positioning itself as therapy or diagnosis.

## Target User

Young adults who want a cute, low-pressure way to reflect on their day, save emotional moments, and build a personal digital scrapbook over time.

## Core Interaction

1. User writes what they are carrying today.
2. User selects multiple colors to shape the scrapbook page.
3. User chooses a vibe: Gentle Reset, Dreamy, Brave Mode, or Cozy Focus.
4. App generates a journal scrap with a title, mascot, caption, reflection, and tiny next step.
5. User can save the scrap to a growing local book or export the current scrap as a PDF.

## Design Process

I documented the design process in a separate case study file: [DESIGN_PROCESS.md](DESIGN_PROCESS.md).

The process includes:

- Product problem and target user
- Design goals
- Low-fidelity wireframe
- Interaction flow
- Mock structure
- Interaction states
- Content design decisions
- Responsible AI decisions
- Accessibility considerations
- Future iterations

## Updated Low-Fidelity Wireframe

```text
+-----------------------------+-------------------------------+
| JOURNAL INPUT               | SCRAPBOOK PAGE                |
| What are you carrying?      | Today's scrap                 |
| [ journal text area      ]  | Scrap title                   |
| Choose multiple colors      | [ selected color palette ]    |
| [color][color][color]       | Mascot + caption              |
| Choose a vibe               | Your words                    |
| [Gentle][Dreamy][Brave]     | AI-style reflection           |
| [Create journal scrap]      | Tiny next step                |
|                             | [Save to book] [Save as PDF]  |
+-----------------------------+-------------------------------+
| SAVED BOOK                                                  |
| [Scrap 1] [Scrap 2] [Scrap 3]                               |
+-------------------------------------------------------------+
```

## AI Role

The current MVP simulates AI-generated output with local JavaScript. The intended AI role is to translate unstructured journal input into supportive creative fields:

- Scrap title
- Mascot concept
- Caption
- Reflection
- Tiny next step
- Visual scrapbook direction based on selected colors and vibe

A production version would connect to an AI model through a secure backend so API keys and journal content are not exposed in the browser.

## Responsible AI Notes

This app avoids making mental health claims. Outputs are framed as creative reflection and journaling inspiration, not therapy, diagnosis, or life advice. The user reviews the generated output before saving or exporting. The current prototype stores saved scraps only in the user's browser local storage.

## Accessibility Notes

- Semantic HTML structure
- Clear labels for journal input
- Keyboard-accessible controls
- Responsive layout
- Text-based output alongside visual elements
- Print-friendly PDF export layout

## Tech Stack

- HTML
- CSS
- JavaScript
- Browser localStorage
- Browser print/PDF flow
- GitHub Pages

## Future Improvements

- Add secure AI generation through a backend
- Add editable reflection fields
- Add a real multi-page PDF book export
- Add calendar view for saved scraps
- Add optional privacy lock for journal entries
- Add richer sticker, photo, and collage tools
