# Journal Scrapbook Buddy A/B Test

This experiment tests whether different creation-button copy changes how users move through the journaling flow.

## Experiment Question

Does direct utility copy or expressive scrapbook copy lead to more users creating and saving a journal scrap?

## Variants

### Variant A: Direct Utility Copy

Button copy: `Create my journal scrap`

Hypothesis: Direct language will be clearer and may increase completion because users immediately understand the action.

### Variant B: Expressive Scrapbook Copy

Button copy: `Turn this into a scrapbook page`

Hypothesis: Expressive outcome-focused language will feel more emotionally engaging and may increase completion because it connects the action to the final value.

## Assignment Logic

Each visitor is randomly assigned to Variant A or Variant B using JavaScript. The assigned variant is stored in `localStorage` so the visitor sees a consistent experience across page reloads.

## Events Tracked

The prototype stores lightweight, local-only metrics in the browser:

- Visits
- Creates
- Saves
- PDF exports
- Saved scrap views
- Deletes

## Primary Metric

Create-to-save conversion rate.

This measures whether people who create a scrapbook page are motivated enough to save it to their book.

## Secondary Metrics

- Visit-to-create conversion rate
- PDF exports
- Saved scrap views
- Deletes

## Privacy Notes

This prototype does not send data to a server. Metrics are stored locally in the user's browser through `localStorage` and `sessionStorage`. A production version would need analytics consent, privacy documentation, event naming standards, and a secure analytics pipeline.

## How This Supports Product Iteration

The experiment helps connect content design decisions to measurable user behavior. Instead of only choosing the button label based on preference, the prototype creates a structure for comparing variants and learning which language better supports user action.
