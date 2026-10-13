# Silver jewelry catalog — order list via WhatsApp

> Public mini-demo with fictional data. The full product is private; access on request: carrerabernal@gmail.com

## Live demo

https://carrerable.github.io/el23-catalog-demo/

## What it demonstrates

- A catalog with no prices ("Price on request") and no checkout: the visitor builds an order list and the demo prepares a WhatsApp message to ask the store for a quote.
- The message never contains prices, and the link (`https://wa.me/?text=...`) carries no phone number.
- A guard that blocks vocabulary the store must never use (third-party brand names and "replica" language).

## What is fictional and what is real

The 12 pieces and their drawings are fictional. The store, El 23 (a physical silver jewelry shop), allowed itself to be named; the real catalog is a separate WordPress site described in the case study. No store data is included. The code is written from scratch.

## Run locally

```bash
npm ci && npm run dev
```

Add `?lang=es` for Spanish.

## Tests

```bash
npm test
```

## How it was built

Code written with Claude Code under my specs and code review; I designed the behavior, wrote the acceptance tests and verified the result.

## Case study

https://carrerable.github.io/en/projects/el23/

## License

MIT
