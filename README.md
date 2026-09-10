# Shut Up and Learn

> The interface is tiny. The vocabulary is not.

A minimal German vocabulary trainer that refuses to have a database.

No sign-up. No streaks. No XP bar guilting you into opening the app at 7am. You pick a topic, you get ten German words, you click one, you learn it, you move on. That's the whole product.

## The idea

Most vocab apps ship with a giant hardcoded word list that goes stale the day it's written. This one doesn't store vocabulary at all. Instead, every word is discovered and enriched on the fly from open linguistic sources — Wiktionary for definitions and grammar, Tatoeba for real example sentences, OpenThesaurus for synonyms — normalized behind a tiny Cloudflare Worker, and cached so nobody has to wait on a dictionary twice.

The frontend never talks to any of those services directly. It just asks the Worker for "ten words about work" or "everything you know about *schaffen*," and gets back clean JSON. All the dictionary-wrangling complexity stays hidden behind the API.

```
Browser  →  /api/*  →  Cloudflare Worker  →  Wiktionary / Tatoeba / OpenThesaurus
                              │
                         cache / KV
```

## Why this is harder than it sounds

None of these sources know what a "beginner word about the office" is. Wiktionary doesn't tag pages by topic. Tatoeba doesn't rank sentences by difficulty. Nobody hands you a clean CEFR level. So a chunk of this project is a small pipeline that turns "give me words about Arbeit" into something a learner can actually use:

```
topic seed words  →  OpenThesaurus expansion  →  frequency-based ranking
                                                        ↓
                                            filter noise, dedupe, drop known words
                                                        ↓
                                                   10 useful words
```

The result is never invented — if a word's CEFR level or grammar isn't known, the app says so instead of making something up.

## Status

Currently at the spec/spike stage. Wiktionary lookups, Tatoeba sentence search, and OpenThesaurus expansion have all been verified against the live APIs. Next up: scaffolding the Worker and proving the whole loop end-to-end for one word before building any UI.

## Stack

Vanilla HTML/CSS/JS on the frontend, a single Cloudflare Worker on the backend, nothing else. No frameworks, no build-heavy tooling, no server to babysit.
