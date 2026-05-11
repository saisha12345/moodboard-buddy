# Journal Scrapbook Buddy Design Process

Journal Scrapbook Buddy is a playful AI-inspired journaling web app that turns a user's feelings into a saved scrapbook page. This case study documents the product framing, low-fidelity wireframes, mock structure, interaction states, prompt strategy, content design, systems thinking, accessibility, and responsible AI decisions behind the prototype.

## 1. Product Problem

Many journaling tools feel either too blank or too clinical. People may want to reflect on their feelings, but a blank page can make the moment feel heavier than it needs to. Journal Scrapbook Buddy explores how an AI-assisted interface can help users turn unstructured emotional input into a creative, reviewable scrapbook page.

## 2. Target User

Young adults who want a cute, low-pressure way to reflect on their day, save emotional moments, and build a personal digital scrapbook over time.

## 3. Design Goals

- Make emotional input feel lightweight, not clinical.
- Let users guide the visual direction through multiple color selections.
- Turn a journal entry into a structured scrapbook page with a title, mascot, caption, reflection, and tiny next step.
- Keep the user in control by making generated content reviewable before saving or exporting.
- Support progression over time through a saved local book.
- Avoid mental health claims or diagnostic suggestions.

## 4. Low-Fidelity Wireframe

```text
+-------------------------------------------------------------+
| Journal Scrapbook Buddy                                     |
| Write how you feel, choose colors, and save the moment.     |
+-----------------------------+-------------------------------+
| JOURNAL INPUT               | SCRAPBOOK PAGE                |
|                             |                               |
| What are you carrying?      | Today's scrap                 |
| [ journal text area      ]  | Scrap title                   |
|                             | [ selected color palette ]    |
| Choose your colors          | [ mascot / visual anchor ]    |
| [color][color][color]       | "caption"                    |
|                             |                               |
| Choose a vibe               | Your words                    |
| [Gentle][Dreamy][Brave]     | AI-style reflection           |
| [Cozy]                      | Tiny next step                |
|                             |                               |
| [Create journal scrap]      | [Save to book] [Save as PDF]  |
+-----------------------------+-------------------------------+
| SAVED BOOK                                                  |
| [Scrap 1] [Scrap 2] [Scrap 3]                               |
+-------------------------------------------------------------+
```

## 5. Interaction Flow

```text
User writes journal entry
        ↓
User selects multiple colors
        ↓
User chooses a vibe
        ↓
System generates structured scrapbook page
        ↓
User reviews reflection and next step
        ↓
User saves scrap to local book or exports as PDF
```

## 6. Mock Structure

The interface is split into three primary surfaces:

### Input Surface

- Journal text area
- Multi-select color palette
- Vibe chips
- Primary generation button

### Generated Scrap Surface

- Date label
- Scrap title
- Selected color palette
- Mascot / visual anchor
- Caption
- User's original words
- AI-style reflection
- Tiny next step
- Save-to-book and PDF export actions

### Saved Book Surface

- Locally saved scrapbook cards
- Mini color palette preview
- Date and entry preview
- Clear-book control

This structure supports systems thinking: each scrap follows the same repeatable content framework, making the experience scalable across days, moods, and saved entries.

## 7. Interaction States

| State | Purpose |
|---|---|
| Default state | Shows a sample scrap so the user understands the output before typing. |
| Color selection | Lets users guide the visual direction through multiple selected colors. |
| Vibe selection | Lets users choose the tone of the generated reflection. |
| Generated state | Updates the scrapbook page with title, colors, mascot, caption, reflection, and next step. |
| Saved state | Adds the current scrap to the local book using browser localStorage. |
| PDF export state | Uses the browser print flow so users can save the current scrap as a PDF. |
| Clear-book state | Gives users control over locally stored entries. |

## 8. Content Design Decisions

The app avoids heavy or clinical language and uses soft, expressive labels:

- “What are you carrying today?” instead of “Enter prompt.”
- “Choose your colors” instead of “Select theme.”
- “Choose a vibe” instead of “Select category.”
- “AI-style reflection” instead of “Analysis.”
- “Tiny next step” instead of “Recommended action.”
- “Save to my book” instead of “Store entry.”

The goal is to make the app feel like a creative companion rather than a form or mental health tool.

## 9. Prompt Strategy and AI Role

The current prototype simulates AI-generated output locally using JavaScript. The intended AI role is to translate unstructured journal input into supportive creative fields:

- Scrap title
- Mascot concept
- Caption
- Reflection
- Tiny next step
- Visual scrapbook direction based on selected colors and vibe

A production prompt would ask the model to return structured JSON so the front end can safely render fields without mixing layout logic and generated prose.

### Example Structured Output Shape

```json
{
  "scrapTitle": "Soft Landing",
  "mascot": "bunny with a notebook",
  "caption": "You can move gently and still move forward.",
  "reflection": "This moment is asking for patience, not pressure.",
  "tinyNextStep": "Pick one small action and give yourself credit for starting.",
  "tone": "gentle, warm, non-clinical"
}
```

A production version would connect to an AI model through a secure backend so API keys and journal content are not exposed in the browser.

## 10. Systems Thinking

Journal Scrapbook Buddy is designed as a repeatable system, not a one-off card:

- Each scrap uses the same content framework: date, title, colors, mascot, caption, entry, reflection, and next step.
- Saved scraps become a growing local book, creating continuity across days.
- The UI separates input, generated output, and saved history so the product can scale to future features like calendar view, editable entries, image stickers, or a multi-page book export.
- The generated fields are structured so future AI integration can plug into the existing front-end without redesigning the whole interface.

## 11. Responsible AI Decisions

- Outputs are framed as creative reflection and journaling inspiration, not therapy, diagnosis, or life advice.
- The app avoids mental health claims.
- The user reviews generated content before saving or exporting.
- The prototype stores saved scraps only in the user's browser localStorage.
- A production version should include a clearer privacy notice, deletion controls, and secure backend handling before storing any journal data remotely.

## 12. Accessibility Considerations

- Semantic HTML structure.
- Clear labels for the journal input.
- Keyboard-accessible buttons.
- High-contrast primary actions.
- Responsive two-column layout that collapses on smaller screens.
- Text-based output alongside visual elements so the experience does not rely only on color or emoji.
- Print-friendly PDF export layout.

## 13. Prototype Implementation

Built with:

- HTML
- CSS
- JavaScript
- Browser localStorage
- Browser print/PDF flow
- GitHub Pages

The prototype prioritizes speed, clarity, and shareability. It is intentionally lightweight so the core interaction can be tested quickly before adding a real AI API.

## 14. Future Iterations

- Add secure AI generation through a backend.
- Add editable reflection fields.
- Add a real multi-page PDF book export.
- Add calendar view for saved scraps.
- Add optional privacy lock for journal entries.
- Add richer sticker, photo, and collage tools.
- Add usability testing prompts to learn whether users understand the AI boundaries.
