# Moodboard Buddy

Moodboard Buddy is a playful AI-inspired web app that turns a user's current feeling into a shareable moodboard card with a mood name, color palette, mascot, caption, focus ritual, and playlist vibe.

**Live demo:** https://saisha12345.github.io/moodboard-buddy/  
**Design process:** [DESIGN_PROCESS.md](DESIGN_PROCESS.md)

## Why I Built This

People often use digital products to express mood, identity, and personal goals, but starting from a blank page can feel overwhelming. Moodboard Buddy explores how AI can help translate messy emotional input into a structured creative output.

## Target User

Young adults who use digital tools for self-expression, productivity, and identity-building.

## Core Interaction

1. User writes how they feel.
2. User chooses a visual world.
3. App generates a moodboard card with a mood name, palette, mascot, caption, focus ritual, and playlist vibe.
4. User can copy/share the result.

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

## Low-Fidelity Wireframe

```text
+-----------------------------+-------------------------------+
| INPUT PANEL                 | RESULT CARD                   |
| How are you feeling today?  | Your Moodboard                |
| [ text area              ]  | Mood Name                     |
| Choose a world              | [ color palette swatches ]    |
| [Soft] [Ocean] [City]       | [ mascot / visual anchor ]    |
| [Generate my moodboard]     | Caption + ritual + playlist   |
+-----------------------------+-------------------------------+
```

## AI Role

The current MVP simulates AI-generated output with local JavaScript. The intended AI role is to translate unstructured emotional input into structured creative fields: mood name, color palette, mascot concept, caption, focus ritual, and playlist vibe.

A production version would connect to an AI model through a secure backend so API keys and user input are not exposed in the browser.

## Responsible AI Notes

This app avoids making mental health claims. Outputs are framed as creative inspiration, not therapy, diagnosis, or life advice. The user reviews the generated output before copying or sharing, and the prototype does not store personal mood input.

## Accessibility Notes

- Semantic HTML structure
- Clear labels for input fields
- Keyboard-accessible controls
- Responsive layout
- Text-based output alongside visual elements

## Tech Stack

- HTML
- CSS
- JavaScript
- GitHub Pages

## Future Improvements

- Add downloadable image cards
- Add more visual worlds, such as Interview Glow-Up, Rainy Cafe, and Job Hunt Fairy
- Add a regenerate button
- Add editable output fields
- Add secure AI generation through a backend
- Add a privacy notice for any future saved moodboard history
