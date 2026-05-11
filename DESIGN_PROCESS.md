# Moodboard Buddy Design Process

Moodboard Buddy is a playful AI-inspired web app that turns a user's current feeling into a shareable moodboard card. This case study documents the product framing, low-fidelity wireframes, mock structure, interaction states, content design, and responsible AI decisions behind the prototype.

## 1. Product Problem

People often use digital products to express mood, identity, and personal goals, but starting from a blank page can feel overwhelming. Moodboard Buddy explores how an AI-assisted interface can help users turn messy emotional input into a structured, playful creative output.

## 2. Target User

Young adults who use digital tools for self-expression, productivity, identity-building, and social sharing.

## 3. Design Goals

- Make emotional input feel lightweight, not clinical.
- Transform a vague feeling into a structured visual identity card.
- Keep the interface cute, clear, and fast to understand.
- Use AI-style output patterns while keeping the user in control.
- Avoid making mental health claims or diagnostic suggestions.

## 4. Low-Fidelity Wireframe

```text
+-------------------------------------------------------------+
| Moodboard Buddy                                             |
| Turn your current feeling into a shareable moodboard card.  |
+-----------------------------+-------------------------------+
| INPUT PANEL                 | RESULT CARD                   |
|                             |                               |
| How are you feeling today?  | Your Moodboard                |
| [ text area              ]  | Mood Name                     |
|                             | [ color palette swatches ]    |
| Choose a world              | [ mascot / visual anchor ]    |
| [Soft] [Ocean] [City]       | "caption"                    |
| [Fairy]                     |                               |
|                             | Focus ritual                  |
| [Generate my moodboard]     | Playlist vibe                 |
|                             |                               |
|                             | [Copy share text]             |
+-----------------------------+-------------------------------+
```

## 5. Interaction Flow

```text
User writes feeling
        ↓
User chooses a visual world
        ↓
System generates structured creative output
        ↓
User reviews moodboard card
        ↓
User copies or shares the result
```

## 6. Mock Structure

The interface is split into two primary surfaces:

### Input Surface

- Mood text area
- Style chips for visual direction
- Primary generation button

### Output Surface

- Moodboard title
- Color palette
- Mascot / visual anchor
- Caption
- Focus ritual
- Playlist vibe
- Copy/share action

This split helps users understand the product immediately: the left side is for expression, and the right side is for generated creative output.

## 7. Interaction States

| State | Purpose |
|---|---|
| Default state | Shows an example moodboard so the user understands the output before typing. |
| Style selection | Chips let the user guide the tone and visual direction. |
| Generated state | The moodboard updates with a mood name, palette, mascot, caption, ritual, and playlist vibe. |
| Copy confirmation | The button changes after copying so the user receives clear feedback. |

## 8. Content Design Decisions

The app avoids heavy language and uses soft, expressive labels:

- “How are you feeling today?” instead of “Enter prompt.”
- “Choose a world” instead of “Select category.”
- “Focus ritual” instead of “Recommended task.”
- “Playlist vibe” instead of “Music recommendation.”

The goal is to make the app feel like a creative companion rather than a form.

## 9. AI Role

The current prototype simulates AI-generated output locally using JavaScript. The intended AI role is to translate unstructured emotional input into structured creative fields:

- Mood name
- Color palette
- Mascot concept
- Caption
- Focus ritual
- Playlist vibe

A production version would connect to an AI model through a secure backend so API keys and user input are not exposed in the browser.

## 10. Responsible AI Decisions

- Outputs are framed as creative inspiration, not therapy, diagnosis, or life advice.
- The app avoids mental health claims.
- The user reviews the output before copying or sharing.
- The prototype does not store personal mood input.
- Future versions should include clearer privacy messaging if user data is persisted.

## 11. Accessibility Considerations

- Semantic HTML structure.
- Clear labels for the text input.
- High-contrast primary actions.
- Keyboard-accessible buttons.
- Responsive two-column layout that collapses on smaller screens.
- Text-based output alongside visual elements so the experience does not rely only on color or emoji.

## 12. Prototype Implementation

Built with:

- HTML
- CSS
- JavaScript
- GitHub Pages

The prototype prioritizes speed, clarity, and shareability. It is intentionally lightweight so the core interaction can be tested quickly before adding a real AI API.

## 13. Future Iterations

- Add downloadable image cards.
- Add more visual worlds, such as Interview Glow-Up, Rainy Cafe, and Job Hunt Fairy.
- Add a regenerate button.
- Add editable output fields.
- Add secure AI generation through a backend.
- Add a privacy notice for any future saved moodboard history.
