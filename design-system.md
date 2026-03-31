# Ascenzia Design System

### The Definitive Interface Language — v1.0

---

&nbsp;

## 1. Creative North Star

There is a moment — brief, almost imperceptible — when you first encounter an object of extraordinary craft, and you simply *know*. Not because it announces itself. Not because it demands your attention. But because every surface, every proportion, every transition exists in such quiet agreement that the thing feels inevitable. As though it could not have been any other way.

This is our ambition. The Ascenzia interface is not a dashboard. It is a command environment — a place where data becomes kinetic, where information moves with the unhurried confidence of something that knows exactly where it belongs. We draw from the language of aerospace instrumentation, from the restrained opulence of hand-finished materials, from the physics of light passing through layered glass. Our palette is dark not because darkness is fashionable, but because darkness is the canvas upon which gold light carries meaning. Every element floats in considered space. Every interaction responds with physical truthfulness. Nothing decorates. Everything communicates.

&nbsp;

---

&nbsp;

## 2. Design Philosophy & Principles

These are not guidelines. They are laws.

### 2.1 — The No-Line Mandate

**One-pixel borders do not exist in this system.** Structure is never drawn — it is *implied* through tonal shifts between surfaces, through spacing, through the careful modulation of material opacity. If you find yourself reaching for a border, you have failed to create sufficient contrast between adjacent surfaces. Step back. Adjust the surface tokens. Let the architecture do the work.

The sole exception: the Ghost Border (defined in §5), used at 15% opacity as a last resort when tonal contrast alone cannot distinguish overlapping glass planes.

### 2.2 — Surface Over Decoration

Every visual distinction must emerge from the material itself — from its tone, its translucency, its elevation. Gradients serve to simulate light falling across a surface, never to "make something look cool." Shadows exist because physics demands them when one plane floats above another. Ornament is forbidden.

### 2.3 — Gold Carries Meaning

The color `#ddac63` is not an accent. It is the voice of the system. Gold appears only where the interface speaks directly to the user: in active states, in primary calls to action, in the single navigation item that says *you are here*. If gold is everywhere, it means nothing. Protect it.

### 2.4 — Kinetic Stillness

Motion must feel physical. Elements do not "animate" — they *settle*, they *arrive*, they *recede*. Every transition must obey inertia: things accelerate gently, move with purpose, and decelerate into rest. The system should feel alive even when perfectly still — through the layered depth of its surfaces, the suspended quality of its glass planes, the faint ambient glow that suggests energy held in reserve.

### 2.5 — Asymmetry as Intelligence

Symmetry is easy. Symmetry is expected. Our layouts use deliberate asymmetrical composition — wider left margins, off-center focal points, columns of unequal weight — to create visual tension that feels editorial, curated, alive. The grid exists to be respected and then, at precisely the right moment, broken.

### 2.6 — Density Without Crowding

A command center must present substantial information without overwhelming. We achieve this through rigorous typographic hierarchy, generous vertical rhythm, and the disciplined use of surface grouping. When a layout feels busy, the answer is never to shrink — it is to space, to group, to elevate.

### 2.7 — Accessibility Is Non-Negotiable

Contrast ratios meet WCAG 2.1 AA at minimum. Interactive elements carry visible focus indicators (gold outline, 2px, offset by 2px). Reduced-motion preferences are honored by collapsing all transitions to instantaneous state changes. Screen reader semantics are structural, not cosmetic.

&nbsp;

---

&nbsp;

## 3. Color System & Surface Architecture

### 3.1 — Core Palette

This system operates exclusively in dark mode. There is no light theme.

```
┌─────────────────────────────────────────────────────────────┐
│  TOKEN                        HEX         ROLE              │
├─────────────────────────────────────────────────────────────┤
│  --color-gold                 #ddac63     Primary accent    │
│  --color-gold-light           #fbc77b     Gradient high     │
│  --color-gold-subtle          #ddac6326   Hover wash        │
│  --color-wine                 #8B3A4A     Critical/luxury   │
│  --color-wine-light           #A8495C     Wine hover        │
│  --color-teal                 #52BEC0     Data/status       │
│  --color-teal-dim             #52BEC066   Teal muted        │
│  --color-success              #4ADE80     Nominal states    │
│  --color-warning              #FBBF24     Caution states    │
│  --color-error                #F87171     Error states      │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 — Surface Tokens

Surfaces are the architecture of the interface. They define space, hierarchy, and depth.

```
┌─────────────────────────────────────────────────────────────┐
│  TOKEN                        VALUE                DEPTH    │
├─────────────────────────────────────────────────────────────┤
│  --surface-base               linear-gradient(     0       │
│                                90deg,                       │
│                                #1a202c, #2d3748)            │
│  --surface-dim                #0d131f               -1      │
│  --surface-container-lowest   #111722               0.5     │
│  --surface-container-low      #161c27               1       │
│  --surface-container          #1a202c               2       │
│  --surface-container-high     #242a36               3       │
│  --surface-container-highest  #2f3542               4       │
│  --surface-bright             #3a4150               5       │
│  --surface-glass              rgba(255,255,255,0.05)  —     │
│  --surface-glass-elevated     rgba(255,255,255,0.08)  —     │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 — Text Tokens

```
┌─────────────────────────────────────────────────────────────┐
│  TOKEN                        HEX         USAGE             │
├─────────────────────────────────────────────────────────────┤
│  --text-primary               #F7FAFC     Headlines, values │
│  --text-secondary             #A0AEC0     Body copy         │
│  --text-tertiary              #718096     Metadata, captions│
│  --text-disabled              #4A5568     Inactive elements │
│  --text-on-gold               #442B00     Text on gold bg   │
│  --text-gold                  #ddac63     Gold-colored text │
│  --text-teal                  #52BEC0     Data highlights   │
│  --text-wine                  #8B3A4A     Critical labels   │
└─────────────────────────────────────────────────────────────┘
```

### 3.4 — The Gold Gradient (Signature)

The primary call-to-action gradient. Used on primary buttons, the "Initiate Command" element, and key interactive moments.

```css
background: linear-gradient(135deg, #fbc77b 0%, #ddac63 100%);
```

This gradient must always flow at 135° — top-left to bottom-right — simulating warm light falling across a metallic surface. Never flatten this to a solid fill. Never reverse the direction.

### 3.5 — Glassmorphism Rules

Glass is the defining material of the system. It must be used with discipline.

| Property | Standard Glass | Elevated Glass | Data Glass (HUD) |
|---|---|---|---|
| Background | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.08)` | `rgba(255,255,255,0.04)` with `--surface-container-low` |
| Backdrop Blur | `20px` | `30px` | `30px` |
| Border | Ghost Border at 15% | Ghost Border at 20% | `--color-gold` Ghost Border at 10% |
| Border Radius | `12px` | `16px` | `12px` |

**Rules:**

- Never stack more than two glass layers. Blur-on-blur creates visual mud.
- Glass containers must have a minimum of `24px` padding to prevent content from touching the frosted edge.
- Glass is for *floating* elements — navigation overlays, modal sheets, HUD panels. Never glass a full-width section.

### 3.6 — Semantic Color Usage

| Context | Token | Notes |
|---|---|---|
| Active navigation | `--color-gold` text | The single gold item in the nav sidebar |
| Primary CTA | Gold gradient fill | Text in `--text-on-gold` |
| Hover state | `--color-gold-subtle` wash | Background fade-in, 200ms |
| Focus ring | `--color-gold` | 2px outline, 2px offset |
| Nominal status | `--color-success` | "NOMINAL" badge |
| Warning status | `--color-warning` / `--color-wine` | "WARNING" / "CRITICAL LOAD" |
| Data values | `--color-teal` | Chart bars, live metrics |
| Inactive tab | `--text-secondary` | Never gold |

&nbsp;

---

&nbsp;

## 4. Typography System

### 4.1 — Font Stack

```css
--font-display: 'Manrope', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

**Manrope** is the voice of authority — used for display text, page titles, and hero moments. Its wide apertures and geometric construction project futurism without affectation.

**Inter** is the voice of clarity — used for all body text, labels, UI controls, and data. Its optical sizing and carefully tuned metrics ensure legibility at every scale against dark surfaces.

**JetBrains Mono** is reserved for technical data, code references, and numerical readouts where monospacing aids scanability.

### 4.2 — Type Scale

| Token | Size | Weight | Font | Letter-Spacing | Line-Height | Usage |
|---|---|---|---|---|---|---|
| `display-xl` | `4rem` / 64px | 800 | Manrope | `-0.03em` | 1.1 | Hero statements |
| `display-lg` | `3.5rem` / 56px | 700 | Manrope | `-0.02em` | 1.1 | Page titles |
| `display-md` | `2.5rem` / 40px | 700 | Manrope | `-0.02em` | 1.2 | Section heroes |
| `display-sm` | `2rem` / 32px | 600 | Manrope | `-0.01em` | 1.25 | Card heroes |
| `title-lg` | `1.5rem` / 24px | 600 | Inter | `-0.01em` | 1.3 | Major section titles |
| `title-md` | `1.125rem` / 18px | 600 | Inter | `0` | 1.4 | Card titles, headers |
| `title-sm` | `1rem` / 16px | 600 | Inter | `0` | 1.4 | Sub-section titles |
| `body-lg` | `1rem` / 16px | 400 | Inter | `0` | 1.6 | Primary body copy |
| `body-md` | `0.875rem` / 14px | 400 | Inter | `0` | 1.5 | Standard body copy |
| `body-sm` | `0.8125rem` / 13px | 400 | Inter | `0` | 1.5 | Secondary content |
| `label-lg` | `0.875rem` / 14px | 500 | Inter | `0.02em` | 1.2 | Button labels |
| `label-md` | `0.8125rem` / 13px | 500 | Inter | `0.04em` | 1.2 | Form labels |
| `label-sm` | `0.6875rem` / 11px | 600 | Inter | `0.1em` | 1.2 | UPPERCASE metadata |
| `data-xl` | `3rem` / 48px | 700 | Manrope | `-0.02em` | 1.0 | Large metric values |
| `data-lg` | `2rem` / 32px | 600 | Manrope | `-0.01em` | 1.1 | Dashboard KPIs |
| `data-md` | `1.25rem` / 20px | 600 | Inter | `0` | 1.2 | Inline data points |
| `data-sm` | `0.875rem` / 14px | 500 | JetBrains Mono | `0.02em` | 1.3 | Technical readouts |

### 4.3 — Typography Rules

- **UPPERCASE** is reserved exclusively for `label-sm` metadata tokens (e.g., "CORE SYSTEMS", "ENERGY RESERVES", "CURRENT VELOCITY"). Never uppercase body text or titles.
- **Bold weight** in body text must be `600` (semibold), never `700` or `800`. Heavy weights are for display sizes only.
- **Line-height** decreases as size increases. Display text breathes through letter-spacing; body text breathes through line-height.
- **Color pairing**: Display text uses `--text-primary`. Body uses `--text-secondary`. Metadata labels use `--text-tertiary`. Data values use `--text-primary` or `--color-teal` depending on context.

&nbsp;

---

&nbsp;

## 5. Elevation, Depth & Material Language

### 5.1 — The Layering Principle

Depth is not simulated with shadows — it is constructed through tonal relationships between stacked surfaces. Place a `surface-container` card on a `surface-container-low` section, and the eye perceives lift. Place `surface-container-highest` on `surface-container`, and the element advances toward the viewer.

```
Viewer
  ↑
  │  surface-container-highest  ─── Modals, dropdowns
  │  surface-container-high     ─── Hovered cards, active panels
  │  surface-container          ─── Default cards, content areas
  │  surface-container-low      ─── Section backgrounds, groupings
  │  surface-container-lowest   ─── Recessed wells, disabled areas
  │  surface-base (gradient)    ─── The canvas itself
  │  surface-dim                ─── Deepest layer (rare)
  ↓
Background
```

### 5.2 — Shadow Language

We use shadows sparingly and only for truly floating elements (dropdowns, modals, tooltips). Every shadow is tinted — never neutral gray.

```css
/* Elevation 1 — Subtle lift (floating cards) */
--shadow-sm: 0 4px 24px rgba(13, 19, 31, 0.4);

/* Elevation 2 — Prominent float (dropdowns, popovers) */
--shadow-md: 0 8px 40px rgba(13, 19, 31, 0.5);

/* Elevation 3 — Command presence (modals) */
--shadow-lg: 0 16px 64px rgba(13, 19, 31, 0.6);

/* Ambient glow — Gold interactive feedback */
--glow-gold: 0 0 20px rgba(221, 172, 99, 0.15);

/* Ambient glow — Teal data pulse */
--glow-teal: 0 0 16px rgba(82, 190, 192, 0.12);
```

### 5.3 — The Ghost Border

When tonal contrast alone cannot distinguish two adjacent surfaces — and only then — apply the Ghost Border:

```css
border: 1px solid rgba(79, 69, 57, 0.15);
```

The Ghost Border must be *felt*, not *seen*. If you can see the border clearly at normal viewing distance, the opacity is too high. Reduce it. The color `#4f4539` is a warm neutral drawn from the gold family, ensuring the border belongs to the material rather than cutting against it.

### 5.4 — Ambient Light

Certain premium elements carry a faint ambient glow to suggest contained energy:

- **Gold CTA buttons**: `--glow-gold` on hover
- **Active status indicators**: Pulsing `--glow-teal` at 60% opacity, 2s cycle
- **"Initiate Command" button**: Persistent `--glow-gold` at 40% opacity

This glow must always be subtle. If it looks like a neon sign, it is wrong.

&nbsp;

---

&nbsp;

## 6. Spacing & Grid System

### 6.1 — Spacing Scale

All spacing values derive from a base unit of `0.25rem` (4px). **Never hardcode pixel values.**

| Token | Value | Usage |
|---|---|---|
| `--space-0` | `0` | Zero spacing |
| `--space-1` | `0.25rem` (4px) | Tight icon gaps |
| `--space-2` | `0.5rem` (8px) | Inline element gaps |
| `--space-3` | `0.75rem` (12px) | Compact component padding |
| `--space-4` | `1rem` (16px) | Standard component padding |
| `--space-5` | `1.25rem` (20px) | Comfortable padding |
| `--space-6` | `1.5rem` (24px) | Card internal padding |
| `--space-8` | `2rem` (32px) | Section gaps, card gutters |
| `--space-10` | `2.5rem` (40px) | Major section spacing |
| `--space-12` | `3rem` (48px) | Layout margins |
| `--space-16` | `4rem` (64px) | Hero vertical spacing |
| `--space-20` | `5rem` (80px) | Page-level breathing room |
| `--space-24` | `6rem` (96px) | Maximum vertical separation |

### 6.2 — Grid System

The command center layout uses a fluid, asymmetrical column system.

```
┌──────────────────────────────────────────────────────────┐
│ Sidebar        Main Content Area                         │
│ 240px fixed    Fluid, max-width 1440px                   │
│                                                          │
│ ┌─────┐  ┌─────────────────────────────────────────┐    │
│ │ Nav │  │  ┌──────┐  ┌──────────┐  ┌──────────┐  │    │
│ │     │  │  │ 3col │  │  5col    │  │  4col    │  │    │
│ │     │  │  │      │  │          │  │          │  │    │
│ │     │  │  └──────┘  └──────────┘  └──────────┘  │    │
│ │     │  │                                         │    │
│ └─────┘  └─────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```

- **Base grid**: 12 columns with `--space-6` (24px) gutters
- **Sidebar**: Fixed at `240px`, detached from the column grid
- **Content max-width**: `1440px`, centered with `--space-12` horizontal margins
- **Breakpoints**: `640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl), `1536px` (2xl)

### 6.3 — Asymmetry Rules

- The left margin of the main content area should be `--space-10` (40px); the right margin `--space-12` (48px). This subtle imbalance creates a natural leftward energy.
- Card grids do not require equal column widths. A 3-5-4 or 4-5-3 ratio produces the editorial tension the system demands.
- Vertical rhythm alternates between `--space-8` and `--space-10` to prevent monotony.

### 6.4 — Border Radius Scale

```
--radius-sm: 6px;    /* Badges, tags, small chips */
--radius-md: 8px;    /* Buttons, inputs */
--radius-lg: 12px;   /* Cards, panels */
--radius-xl: 16px;   /* Modals, elevated glass */
--radius-full: 9999px; /* Avatars, status dots */
```

**Rule**: Never use `0px` radius unless deliberately creating a "technical crosshair" element. All UI surfaces carry at least `--radius-sm`.

&nbsp;

---

&nbsp;

## 7. Motion & Micro-interactions

### 7.1 — Easing Curves

```css
/* The primary curve — smooth deceleration, feels physical */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);

/* For elements entering the viewport */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);

/* For subtle property changes (color, opacity) */
--ease-subtle: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Spring-like settle for scale transforms */
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### 7.2 — Duration Scale

| Token | Value | Usage |
|---|---|---|
| `--duration-instant` | `100ms` | Color changes, opacity shifts |
| `--duration-fast` | `200ms` | Hover states, focus rings |
| `--duration-normal` | `300ms` | Panel transitions, card hovers |
| `--duration-slow` | `500ms` | Modal entry/exit, page transitions |
| `--duration-deliberate` | `800ms` | Hero animations, onboarding reveals |

### 7.3 — Kinetic Principles

**Card hover**: Scale to `1.02` + shift surface from `container` to `container-high`. Duration: `--duration-normal`. Easing: `--ease-out`.

**Button hover**: Gold glow fade-in (`--glow-gold`). Duration: `--duration-fast`. Easing: `--ease-subtle`.

**Modal entry**: Translate from `Y: 16px` to `Y: 0` + opacity `0` to `1`. Duration: `--duration-slow`. Easing: `--ease-out`.

**Modal exit**: Opacity `1` to `0` + scale `1` to `0.98`. Duration: `--duration-normal`. Easing: `--ease-in-out`.

**Navigation highlight**: Gold underline slides from previous to current item. Duration: `--duration-normal`. Easing: `--ease-out`.

**Data value update**: Old value fades out (`--duration-instant`), new value fades in with subtle `Y: -4px` to `Y: 0` translate (`--duration-fast`).

**Status pulse**: `--glow-teal` opacity oscillates `0.4 → 0.8 → 0.4` over `2s`, infinite, using `--ease-subtle`.

### 7.4 — Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

&nbsp;

---

&nbsp;

## 8. Core Components

### 8.1 — Buttons

#### Primary Button ("Command")

The primary action. Unmistakable. Gold gradient with dark text.

```
┌─────────────────────────────────────────────┐
│  Background:  linear-gradient(135deg,       │
│               #fbc77b 0%, #ddac63 100%)     │
│  Text:        #442B00 (--text-on-gold)      │
│  Font:        label-lg, weight 600          │
│  Padding:     --space-3 vertical,           │
│               --space-6 horizontal          │
│  Radius:      --radius-md (8px)             │
│  States:                                    │
│    Hover:     --glow-gold ambient glow      │
│    Active:    Darken 8%, scale(0.98)        │
│    Focus:     2px gold outline, 2px offset  │
│    Disabled:  Opacity 0.4, no gradient      │
└─────────────────────────────────────────────┘
```

#### Secondary Button ("Ghost Command")

Transparent with a Ghost Border. Text in gold.

```
┌─────────────────────────────────────────────┐
│  Background:  transparent                   │
│  Border:      Ghost Border at 25% opacity   │
│  Text:        --color-gold                  │
│  Padding:     Same as Primary               │
│  Radius:      --radius-md                   │
│  States:                                    │
│    Hover:     --color-gold-subtle bg wash   │
│    Active:    Ghost Border at 40% opacity   │
│    Focus:     2px gold outline, 2px offset  │
│    Disabled:  Opacity 0.3                   │
└─────────────────────────────────────────────┘
```

#### Tertiary Button ("Whisper")

Text-only. Minimal presence until interaction.

```
┌─────────────────────────────────────────────┐
│  Background:  transparent                   │
│  Text:        --text-secondary              │
│  Font:        label-md                      │
│  Padding:     --space-2 vertical,           │
│               --space-3 horizontal          │
│  States:                                    │
│    Hover:     Text shifts to --color-gold,  │
│               surface-bright underlay fades │
│               in (300ms)                    │
│    Focus:     2px gold outline, 2px offset  │
│    Disabled:  --text-disabled               │
└─────────────────────────────────────────────┘
```

#### Critical Button ("Alert Command")

Used only for destructive or emergency actions.

```
┌─────────────────────────────────────────────┐
│  Background:  --color-wine                  │
│  Text:        --text-primary                │
│  Radius:      --radius-md                   │
│  States:                                    │
│    Hover:     --color-wine-light + subtle   │
│               wine glow                     │
│    Focus:     2px wine outline, 2px offset  │
└─────────────────────────────────────────────┘
```

### 8.2 — Cards

Cards are the primary containers for grouped information. They must never use visible borders.

```
┌─────────────────────────────────────────────┐
│  Background:  --surface-container-low       │
│  Padding:     --space-6                     │
│  Radius:      --radius-lg (12px)            │
│  Gap between cards: --space-6 minimum       │
│                                             │
│  States:                                    │
│    Default:   --surface-container-low       │
│    Hover:     --surface-container-high      │
│               + scale(1.02)                 │
│               + --shadow-sm                 │
│    Active:    --surface-container-highest   │
│                                             │
│  Internal structure:                        │
│    Header:    label-sm UPPERCASE + icon     │
│               --text-tertiary               │
│               margin-bottom: --space-4      │
│    Value:     data-lg or data-xl            │
│               --text-primary                │
│    Meta:      body-sm, --text-tertiary      │
└─────────────────────────────────────────────┘
```

**Card separation**: Cards are never separated by lines. Use `--space-6` gutters and contrasting surface tokens. Group related cards on a shared `surface-container-lowest` plinth when needed.

### 8.3 — The Data Glass (Signature Component)

The Data Glass is the system's defining HUD element — a translucent panel that floats above the base surface, displaying real-time metrics with aerospace clarity.

```css
.data-glass {
  background: rgba(22, 28, 39, 0.7);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(156, 143, 127, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}
```

**Internal typography**: Metric labels use `label-sm` uppercase in `--text-tertiary`. Values use `data-lg` in `--text-primary` or `--color-teal`. Units use `body-sm` in `--text-tertiary`, positioned immediately after the value with `--space-1` gap.

**Example** (as seen in the Command Center — "84 %", "124 km/h", "08:42 min"):

```
┌──────────────────────────┐
│  ENERGY RESERVES    ⚡   │  ← label-sm, --text-tertiary
│                          │
│  84 %                    │  ← data-xl (84) + body-md (%), --text-primary
│                          │
│  Est. Range: 412km       │  ← body-sm, --text-tertiary
│  Current Drain: 12kW/h   │
│                          │
│  ▬ ▬ ▬ ▬ ▬              │  ← Bar chart, --color-teal
└──────────────────────────┘
```

### 8.4 — Input Fields

Fields are "underlined" or "gently flooded" — never outlined with full borders.

```
┌─────────────────────────────────────────────┐
│  Default State:                             │
│    Background:  --surface-container-highest │
│    Border:      bottom-only Ghost Border    │
│    Text:        --text-primary              │
│    Placeholder: --text-disabled             │
│    Radius:      --radius-md top corners     │
│                 0 bottom corners            │
│                                             │
│  Focus State:                               │
│    Bottom border: 2px solid --color-gold    │
│    Glow: 0 2px 8px rgba(221,172,99,0.2)    │
│    Label shifts to --color-gold             │
│                                             │
│  Error State:                               │
│    Bottom border: 2px solid --color-error   │
│    Error text: body-sm, --color-error       │
│    Below field with --space-2 gap           │
│                                             │
│  Disabled State:                            │
│    Background: --surface-container-lowest   │
│    Text: --text-disabled                    │
│    Opacity: 0.6                             │
└─────────────────────────────────────────────┘
```

### 8.5 — Navigation (Sidebar)

The sidebar is a fixed vertical rail — the only persistent structural element.

```
┌─────────────────────────────────────────────┐
│  Width:       240px fixed                   │
│  Background:  --surface-container-low       │
│  Padding:     --space-6 vertical,           │
│               --space-4 horizontal          │
│                                             │
│  Brand mark:  Top of sidebar, --space-8     │
│               below top edge                │
│                                             │
│  Nav items:                                 │
│    Font:      body-md, weight 500           │
│    Color:     --text-secondary (default)    │
│    Active:    --color-gold text             │
│               + left accent bar (3px,       │
│                 --color-gold, --radius-full)│
│    Hover:     --text-primary                │
│               + --color-gold-subtle bg wash │
│    Spacing:   --space-2 between items       │
│    Padding:   --space-3 vertical,           │
│               --space-4 horizontal          │
│    Radius:    --radius-md                   │
│    Icons:     20px, --space-3 gap to label  │
│                                             │
│  Footer:      User avatar + name + role     │
│               Pinned to bottom, --space-6   │
│               padding                       │
└─────────────────────────────────────────────┘
```

### 8.6 — Top Navigation Bar

The horizontal nav within the content area, as seen in "Experience | Innovation | Curate | Fleet":

```
┌─────────────────────────────────────────────┐
│  Items:       label-md weight 500           │
│  Color:       --text-secondary (default)    │
│  Active:      --color-gold text             │
│               + bottom bar (2px,            │
│                 --color-gold, slides in)    │
│  Hover:       --text-primary                │
│  Spacing:     --space-8 between items       │
│  Alignment:   Inline, vertically centered   │
│               with the page title           │
└─────────────────────────────────────────────┘
```

### 8.7 — Status Indicators

Small but vital signals throughout the command interface.

| Variant | Visual | Usage |
|---|---|---|
| Nominal | `--color-success` dot (8px), pulsing | "NOMINAL", systems operational |
| Warning | `--color-warning` dot + `--color-wine` text | "WARNING", approaching limits |
| Critical | `--color-error` dot + `--color-wine` bg badge | "CRITICAL LOAD", immediate attention |
| Active | `--color-gold` dot (8px), steady glow | "ACTIVE TRACKING", live operations |
| Offline | `--text-disabled` dot, no pulse | Disconnected systems |

### 8.8 — Modals

```
┌─────────────────────────────────────────────┐
│  Overlay:     rgba(13, 19, 31, 0.7)        │
│               + backdrop-filter: blur(8px)  │
│                                             │
│  Panel:       --surface-container-highest   │
│               --shadow-lg                   │
│               --radius-xl (16px)            │
│               padding: --space-8            │
│               max-width: 560px              │
│                                             │
│  Entry:       translateY(16px) → 0          │
│               opacity 0 → 1                 │
│               --duration-slow, --ease-out   │
│                                             │
│  Exit:        opacity 1 → 0, scale 0.98    │
│               --duration-normal             │
│                                             │
│  Close:       Top-right, tertiary button    │
│               + Escape key binding          │
│               + Click-outside dismiss       │
│                                             │
│  Focus trap:  Mandatory. Tab cycles within  │
│               the modal. Focus returns to   │
│               trigger on close.             │
└─────────────────────────────────────────────┘
```

### 8.9 — Tooltips

```
┌─────────────────────────────────────────────┐
│  Background:  --surface-container-highest   │
│  Text:        body-sm, --text-primary       │
│  Padding:     --space-2 --space-3           │
│  Radius:      --radius-sm                   │
│  Shadow:      --shadow-md                   │
│  Max-width:   280px                         │
│  Delay:       400ms before showing          │
│  Entry:       opacity 0→1, Y: 4px→0        │
│               --duration-fast, --ease-out   │
│  Arrow:       6px, matching background      │
└─────────────────────────────────────────────┘
```

### 8.10 — Charts & Data Visualization

All charts follow the system's restrained material language.

- **Bar fills**: `--color-teal` at 80% opacity. Hover: 100% opacity + `--glow-teal`.
- **Line strokes**: 2px, `--color-teal`. No fill below the line unless explicitly needed (use 10% opacity fill).
- **Grid lines**: `rgba(255,255,255,0.06)`. Never prominent.
- **Axis labels**: `label-sm`, `--text-tertiary`.
- **Value labels**: `data-sm`, `--text-primary`.
- **No 3D effects. No gradient fills on bars. No decorative elements.**

&nbsp;

---

&nbsp;

## 9. Patterns & Layouts

### 9.1 — Command Center Dashboard

The flagship layout, as expressed in the Ascenzia Command Center screenshot:

```
┌─────────────────────────────────────────────────────────┐
│ ┌──────────┐  ┌──────────────────────────────────────┐ │
│ │ Sidebar  │  │  Header: Title + Tabs + Search       │ │
│ │ 240px    │  ├──────────────────────────────────────┤ │
│ │          │  │                                      │ │
│ │ Logo     │  │  ┌─ Left ──┐ ┌─ Center ─┐ ┌─Right─┐│ │
│ │ Nav      │  │  │ System  │ │ Primary  │ │ Tac.  ││ │
│ │ items    │  │  │ Cards   │ │ Viewport │ │ Nav   ││ │
│ │          │  │  │ (3col)  │ │ (5col)   │ │(4col) ││ │
│ │          │  │  │         │ │          │ │       ││ │
│ │          │  │  │ Energy  │ │ Velocity │ │Overdr.││ │
│ │          │  │  │ Card    │ │ Data     │ │Status ││ │
│ │          │  │  │         │ │          │ │       ││ │
│ │          │  │  │ Environ.│ │ Telemetry│ │       ││ │
│ │ User     │  │  └─────────┘ └──────────┘ └───────┘│ │
│ │ Avatar   │  │                                      │ │
│ └──────────┘  │  Footer: Copyright + Legal links     │ │
│               └──────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

**Key compositional rules:**

- The three column areas are deliberately unequal: approximately 25% / 42% / 33%.
- Cards in the left column stack vertically with `--space-6` gaps.
- The center viewport is the visual anchor — larger, more open, potentially containing maps or primary data visualizations.
- The right column houses tactical/alert information.
- No visible grid lines, no borders between zones. Surface contrast alone defines regions.

### 9.2 — Stacked Card Column

For information-dense sections (left sidebar content in the dashboard):

```
┌─────────────────────────┐
│  Card A                 │  ← --surface-container-low
│  (System Status)        │
│                         │
└─────────────────────────┘
        ↕ --space-6
┌─────────────────────────┐
│  Card B                 │
│  (Energy Data)          │
│                         │
└─────────────────────────┘
        ↕ --space-6
┌─────────────────────────┐
│  Card C                 │
│  (Environment)          │
│                         │
└─────────────────────────┘
```

No divider lines between cards. The gap and surface contrast are the structure.

### 9.3 — Metric Strip

For inline telemetry readouts (velocity, torsion, PSI, etc.):

```
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ TORSION │ │AERO DRAG│ │PSI REAR │ │PSI FRONT│
│  1.2 G  │ │ 0.24 cd │ │  32.4   │ │  32.1   │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
```

- Each cell: `--surface-container-low`, `--radius-lg`, `--space-4` padding.
- Label: `label-sm` uppercase, `--text-tertiary`.
- Value: `data-md`, `--text-primary`.
- Cells separated by `--space-4` gap. Equal widths in this specific pattern.

### 9.4 — Alert Card Pattern

For critical status displays (Overdrive Status):

```
┌─────────────────────────────────────────────┐
│  Background: --surface-container-low        │
│              with subtle wine left-accent   │
│              (3px bar, --color-wine)         │
│                                             │
│  Title:      label-sm, --color-wine         │
│              "OVERDRIVE STATUS"             │
│  Icon:       --color-error, top-right       │
│  Value:      data-lg, --text-primary        │
│              "102°C"                         │
│  Badge:      --color-wine bg, --text-primary│
│              "WARNING"                       │
│  Body:       body-sm, --text-secondary      │
│              Description of the alert state  │
└─────────────────────────────────────────────┘
```

### 9.5 — Page-Level Composition Rules

1. **Every page** begins with a header zone: page title (`display-lg` or `display-md`), optional subtitle (`body-md`, `--text-secondary`), and navigation tabs. This zone has `--space-10` bottom margin.
2. **Content area** is never full-bleed. Minimum `--space-12` horizontal padding on both sides.
3. **Footer** is minimal: `label-sm`, `--text-tertiary`, centered or left-aligned. Separated from content by `--space-16` vertical gap.
4. **Scroll behavior**: The sidebar is fixed. The header may be sticky. The content area scrolls independently.

&nbsp;

---

&nbsp;

## 10. Do's and Don'ts

### Do

- **Do** let silence speak. Generous whitespace is your most powerful tool. When in doubt, add more.
- **Do** use the gold `#ddac63` with the discipline of a jeweler. One golden element per visible viewport is ideal. Two is acceptable. Three means you have lost control.
- **Do** create depth through tonal surface layering. Every card, every section, every panel must sit at a deliberate altitude in the surface hierarchy.
- **Do** use asymmetrical margins and unequal column widths. The editorial tension this creates is what separates a command center from a spreadsheet.
- **Do** use high-quality, desaturated imagery with a slight film grain. Photography should feel like it was shot on medium-format film in available light.
- **Do** test every component at 1x and 2x resolution. The system's subtlety — its ghost borders, its glass effects, its tonal transitions — demands retina-quality rendering.
- **Do** maintain WCAG 2.1 AA contrast ratios. Accessibility is elegance. An interface that excludes is an interface that fails.

### Don't

- **Don't** use borders. The No-Line Mandate is absolute. If you need separation, you need better surface contrast. Go back to §3.2 and choose the correct token.
- **Don't** use pure black (`#000000`) anywhere. The deepest surface in this system is `--surface-dim` (#0d131f). Pure black is a void; our dark surfaces have *material*.
- **Don't** use drop shadows as decoration. Shadows exist only where physics demands them — on elements that genuinely float above others.
- **Don't** animate for the sake of animation. Every transition must have a physical rationale. If removing the animation makes no difference to the user's understanding, remove it.
- **Don't** use sharp corners (`border-radius: 0`). Everything in this system has mass, and mass has edges that catch light. Minimum `--radius-sm` (6px).
- **Don't** crowd the interface. If a screen feels busy, do not shrink elements. Instead, increase spacing by two steps on the scale, or distribute content across a second viewport.
- **Don't** use more than two typefaces on any single screen. Manrope for display. Inter for everything else. JetBrains Mono only for technical data. That is the rule.
- **Don't** use colored backgrounds for status badges beyond `--color-wine` for critical states. All other status communication uses colored text or dots on dark surfaces.
- **Don't** ever use stock illustrations, clip art, or decorative SVGs. If it doesn't serve data, navigation, or status, it doesn't belong.

&nbsp;

---

&nbsp;

## 11. Implementation Guidelines

### 11.1 — CSS Custom Properties (Full Token Set)

Copy this block into your root stylesheet:

```css
:root {
  /* ── Color: Accent ── */
  --color-gold: #ddac63;
  --color-gold-light: #fbc77b;
  --color-gold-subtle: rgba(221, 172, 99, 0.15);
  --color-wine: #8B3A4A;
  --color-wine-light: #A8495C;
  --color-teal: #52BEC0;
  --color-teal-dim: rgba(82, 190, 192, 0.4);
  --color-success: #4ADE80;
  --color-warning: #FBBF24;
  --color-error: #F87171;

  /* ── Color: Surfaces ── */
  --surface-base-from: #1a202c;
  --surface-base-to: #2d3748;
  --surface-dim: #0d131f;
  --surface-container-lowest: #111722;
  --surface-container-low: #161c27;
  --surface-container: #1a202c;
  --surface-container-high: #242a36;
  --surface-container-highest: #2f3542;
  --surface-bright: #3a4150;
  --surface-glass: rgba(255, 255, 255, 0.05);
  --surface-glass-elevated: rgba(255, 255, 255, 0.08);

  /* ── Color: Text ── */
  --text-primary: #F7FAFC;
  --text-secondary: #A0AEC0;
  --text-tertiary: #718096;
  --text-disabled: #4A5568;
  --text-on-gold: #442B00;
  --text-gold: #ddac63;
  --text-teal: #52BEC0;
  --text-wine: #8B3A4A;

  /* ── Color: Borders ── */
  --ghost-border: rgba(79, 69, 57, 0.15);
  --ghost-border-medium: rgba(79, 69, 57, 0.25);

  /* ── Typography ── */
  --font-display: 'Manrope', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* ── Spacing ── */
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* ── Border Radius ── */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* ── Shadows ── */
  --shadow-sm: 0 4px 24px rgba(13, 19, 31, 0.4);
  --shadow-md: 0 8px 40px rgba(13, 19, 31, 0.5);
  --shadow-lg: 0 16px 64px rgba(13, 19, 31, 0.6);
  --glow-gold: 0 0 20px rgba(221, 172, 99, 0.15);
  --glow-teal: 0 0 16px rgba(82, 190, 192, 0.12);

  /* ── Motion ── */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-subtle: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-deliberate: 800ms;

  /* ── Gradients ── */
  --gradient-gold: linear-gradient(135deg, #fbc77b 0%, #ddac63 100%);
  --gradient-base: linear-gradient(90deg, #1a202c 0%, #2d3748 100%);
}
```

### 11.2 — Tailwind CSS Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#ddac63',
          light: '#fbc77b',
          subtle: 'rgba(221, 172, 99, 0.15)',
          dark: '#442B00',
        },
        wine: {
          DEFAULT: '#8B3A4A',
          light: '#A8495C',
        },
        teal: {
          DEFAULT: '#52BEC0',
          dim: 'rgba(82, 190, 192, 0.4)',
        },
        surface: {
          dim: '#0d131f',
          'container-lowest': '#111722',
          'container-low': '#161c27',
          'container': '#1a202c',
          'container-high': '#242a36',
          'container-highest': '#2f3542',
          bright: '#3a4150',
          glass: 'rgba(255, 255, 255, 0.05)',
          'glass-elevated': 'rgba(255, 255, 255, 0.08)',
        },
        content: {
          primary: '#F7FAFC',
          secondary: '#A0AEC0',
          tertiary: '#718096',
          disabled: '#4A5568',
        },
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 4px 24px rgba(13, 19, 31, 0.4)',
        md: '0 8px 40px rgba(13, 19, 31, 0.5)',
        lg: '0 16px 64px rgba(13, 19, 31, 0.6)',
        'glow-gold': '0 0 20px rgba(221, 172, 99, 0.15)',
        'glow-teal': '0 0 16px rgba(82, 190, 192, 0.12)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
        subtle: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        instant: '100ms',
        fast: '200ms',
        normal: '300ms',
        slow: '500ms',
        deliberate: '800ms',
      },
    },
  },
}
```

### 11.3 — Maintaining the No-Line Mandate

When generating components, follow this decision tree:

```
Need to separate two elements?
  │
  ├─ Are they on different surface levels? → Done. No border needed.
  │
  ├─ Can you add spacing between them? → Add --space-6 minimum. Done.
  │
  ├─ Can you place them on different surface tokens?
  │   → Move one to a higher/lower surface. Done.
  │
  └─ None of the above work?
      → Apply Ghost Border: border: 1px solid var(--ghost-border);
        This is the LAST resort.
```

### 11.4 — Preserving the Kinetic Feel

For AI code generators (Claude, Cursor, Copilot), include these instructions in every prompt:

1. All interactive elements must have `transition: all var(--duration-normal) var(--ease-out)` as baseline.
2. Cards respond to hover with `transform: scale(1.02)` and surface elevation shift.
3. Buttons respond to hover with ambient glow, to active with `scale(0.98)`.
4. Page-level content should enter with a staggered fade: each major section delays by `100ms`.
5. Data values that update should crossfade, not snap.
6. The gold gradient must always use `135deg` angle.
7. Never use `opacity: 0` as a resting state for visible elements. Use surface tokens to control visibility.

### 11.5 — Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
```

Load only the weights specified. Additional weights dilute the typographic voice.

### 11.6 — Accessibility Checklist

| Requirement | Implementation |
|---|---|
| Color contrast (AA) | All text/bg combinations ≥ 4.5:1 for body, ≥ 3:1 for large text |
| Focus indicators | 2px solid `--color-gold`, 2px offset on all interactive elements |
| Keyboard navigation | Full tab order, Enter/Space activation, Escape dismissal |
| Screen reader labels | `aria-label` on icon-only buttons, `role` on custom components |
| Reduced motion | `prefers-reduced-motion` media query removes all transitions |
| Touch targets | Minimum 44×44px for all interactive elements on touch devices |

&nbsp;

---

&nbsp;

*Ascenzia Design System v1.0 — Engineered with the conviction that restraint is the highest form of expression.*
