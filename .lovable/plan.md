
File is fully read. Mapping each instruction to the existing code:

**Professional mode** — all targets exist:
- hero.title/summary ✓
- whoAmI: drop second `<p>`, keep one ✓
- goal: 2 paragraphs (already 2) ✓
- journey: 3 timeline blocks (already 3, just retext) ✓
- skills.Technical: replace 3 bullet labels ✓; Core Competencies unchanged ✓
- current: keep PM Interview Prep card unchanged; update Course Projects + Side Projects bodies ✓

**Personal mode** — all targets exist:
- hero ✓
- whoAmI: 3 paragraphs (already 3) ✓
- goal: 3 cards, body text only ✓
- journey: 3 entries, body text only, keep emoji + timing labels ✓
- current: 3 cards, body text only ✓

**Footer**: tagline unchanged, swap LinkedIn href to `https://linkedin.com/in/arkin-sanghi`, email to `Sanghi.arkin@gmail.com` (both href and visible label) ✓

**Doubts / things to flag (none are blockers — I'll proceed with the listed defaults unless you say otherwise):**

1. **Instruction line 50 ("BITS Pilani") body** mentions "tech-focused solutions" and ends mid-thought-ish ("…inclined towards sustainability and social impact"). I'll use it verbatim as written.
2. **Personal hero title** ("I like consuming knowledge and talking about it") — much shorter and more abstract than the current "Fantasy Fiction Fanatic | Aspiring Cook & Traveller" tagline. It will look noticeably plainer in the hero. I'll use it as written, but flag this in case you want to revisit visually after seeing it.
3. **Instructions don't mention** the "🎯 PM Interview Prep" card body — I'll leave it untouched per "leave unchanged for now."
4. **Em-dash style**: file uses both " – " (spaced en-dash) and "—" (em-dash) inconsistently. I'll preserve each exactly as written in the source.
5. **No icon, layout, or structural changes** are requested. Mode toggle, animations, photo placeholders, all stay as they are.

**Plan to execute (1 file edit + memory):**

1. **`src/pages/Index.tsx`** — replace text strings in `professionalContent` and `personalContent` objects, and update the two footer `<a>` tags. No JSX structure, classNames, or icons change.
2. **`mem://features/portfolio-sections.md`** (and `mem://index.md` if needed) — update with the now-finalized real content (CMU Tepper, Accenture, BITS Pilani, etc.) so future edits stay consistent with Arkin's actual background rather than the placeholder copy.

That's the whole change. Ready to apply on approval.
