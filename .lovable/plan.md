
The user wants the personal/fun mode to feel less jarringly different from the professional mode. Currently:
- Professional: red (`0 72% 51%`), black, white, grey
- Personal: beige bg, sky blue accent, light blue hero — completely different palette

Goal: keep personal mode "relaxed and welcoming" but stay within the black/grey/white/red family so the transition feels cohesive.

## Proposed new "Personal mode" palette

Keep red as the accent (same family as professional) but soften everything else into warm off-white / soft grey tones instead of beige + blue. Use a slightly muted, warmer red so it still feels relaxed rather than bold.

| Token | Professional | Personal (new) | Personal (current) |
|---|---|---|---|
| Background | Pure white | Warm off-white (`30 20% 97%`) | Beige `39 50% 90%` |
| Foreground | Near black | Soft charcoal (`0 0% 18%`) | Brown-grey |
| Card | White | Pure white (lifts off warm bg) | Light beige |
| Primary accent | Crimson `0 72% 51%` | Muted coral-red `5 65% 58%` | Sky blue |
| Secondary | Light grey | Warm light grey (`25 15% 93%`) | Warmer beige |
| Muted | Grey | Warm grey (`25 10% 88%`) | Mid beige |
| Border | Light grey | Warm light grey (`25 12% 88%`) | Beige |
| Hero gradient (footer too) | Black gradient | Soft warm grey gradient (`0 0% 22% → 0 0% 14%`) with subtle warmth, lighter than professional's near-black | Light blue solid |
| Text gradient (accent) | Crimson | Soft coral red | Sky blue |

Why this works:
- Same red family → instantly cohesive with professional mode
- Warm off-white background (vs pure white) introduces softness/warmth = "relaxed"
- Slightly lighter, softer hero (warm dark grey instead of near-black) = welcoming, not corporate
- Coral/muted red instead of crimson = friendlier accent without losing the red identity
- Card shadows tinted slightly warm

## Files to change

**`src/index.css`** — only the `.personal-mode` block needs updating:
- `--background`, `--foreground`, `--card`, `--popover`
- `--primary` and `--accent` → muted coral red
- `--secondary`, `--muted`, `--border`, `--input`
- `--ring`
- `--hero-gradient` → soft warm dark grey gradient (replaces solid light blue)
- `--text-gradient` → coral red gradient
- `--card-shadow` / `--card-shadow-hover` → neutral warm tint

No other files need changes. Toggle behavior, icons, layout all stay identical.

## Visual outcome

- Switching to personal mode: background softens from pure white to warm off-white; the bold crimson becomes a friendlier coral; the black hero/footer becomes a softer warm dark-grey. Overall feel: same brand family, dialed down ~30% in intensity, with warmth added.
- Professional mode: completely unchanged.
