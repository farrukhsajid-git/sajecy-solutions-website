# Sajecy Solutions - Design At A Glance

Quick visual reference for the complete redesign.

---

## Color Palette

```
┌─────────────────────────────────────────────────┐
│  PRIMARY NAVY      #0A2463                      │
│  ███████████████████                            │
│  Trust • Authority • Headers • Backgrounds      │
│  Contrast: 12.5:1 with white (WCAG AAA)        │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  PRIMARY BLUE      #3E92CC                      │
│  ███████████████████                            │
│  Innovation • Links • Hover States              │
│  Contrast: 4.8:1 with white (WCAG AA)          │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  ACCENT ELECTRIC   #52B2CF                      │
│  ███████████████████                            │
│  CTAs • Highlights • Energy                     │
│  Contrast: 3.5:1 with white (WCAG AA)          │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│  ACCENT BRIGHT     #00D9FF                      │
│  ███████████████████                            │
│  Special Emphasis • Icons • Accents             │
│  Use on dark backgrounds only                   │
└─────────────────────────────────────────────────┘
```

---

## Typography Scale

```
H1 Display     72px / 4.5rem      Weight: 800 (Extrabold)
H1 Hero        60px / 3.75rem     Weight: 800 (Extrabold)
H2 Section     48px / 3rem        Weight: 700 (Bold)
H3 Card        36px / 2.25rem     Weight: 600 (Semibold)
H4 Small       30px / 1.875rem    Weight: 600 (Semibold)
H5 Label       24px / 1.5rem      Weight: 500 (Medium)
H6 Tiny        20px / 1.25rem     Weight: 500 (Medium)

Body Large     18px / 1.125rem    Weight: 400 (Regular)
Body Default   16px / 1rem        Weight: 400 (Regular)
Body Small     14px / 0.875rem    Weight: 400 (Regular)
Caption        12px / 0.75rem     Weight: 400 (Regular)
```

**Font:** Inter (Variable)
**Line Height:** Headlines 1.2 • Body 1.6
**Letter Spacing:** Large text -0.02em • Default 0em

---

## Spacing Scale (8px Grid)

```
space-1   4px      Tiny gaps
space-2   8px      Small gaps, icon spacing
space-3   12px     Compact padding
space-4   16px     ★ Default unit
space-5   20px     Medium padding
space-6   24px     ★ Standard padding
space-8   32px     Large padding
space-10  40px     Section spacing
space-12  48px     Component spacing
space-16  64px     Major sections
space-20  80px     ★ Section padding
space-24  96px     Large section padding
space-32  128px    Hero section padding
```

**★ Most commonly used**

---

## Component Patterns

### Buttons

```
┌──────────────────────────────┐
│  Primary Button              │  ← Navy (#0A2463)
│  48px min height             │     White text
│  16px/32px padding           │     Shadow + Hover lift
└──────────────────────────────┘

┌──────────────────────────────┐
│  Secondary Button            │  ← Transparent
│  Border: 2px Navy            │     Navy text
│  Hover: Filled navy          │     White text on hover
└──────────────────────────────┘

┌──────────────────────────────┐
│  Accent Button               │  ← Gradient Blue to Electric
│  Gradient background         │     White text
│  Box shadow + Hover lift     │     Glowing effect
└──────────────────────────────┘
```

### Cards

```
┌────────────────────────────────────┐
│  Card Component                    │
│                                    │
│  • Padding: 32px                   │
│  • Border radius: 16px             │
│  • Shadow: 0 4px 12px rgba()       │
│  • Hover: translateY(-4px)         │
│  • Background: White               │
│                                    │
│  [Content goes here...]            │
│                                    │
└────────────────────────────────────┘
```

### Service Cards

```
┌────────────────────────────────────┐
│  ┌────┐                            │
│  │Icon│  Service Title             │  ← 64px icon box
│  └────┘                            │     Gradient background
│                                    │
│  Short description explaining      │
│  the service benefit...            │
│                                    │
│  • Feature one                     │
│  • Feature two                     │
│  • Feature three                   │
│                                    │
│  Learn more →                      │
│                                    │
└────────────────────────────────────┘
```

### Testimonials

```
┌────────────────────────────────────┐
│  ★★★★★                             │
│                                    │
│  "Quote from the client about      │
│  their experience working with     │
│  Sajecy Solutions..."              │
│                                    │
│  ┌───┐  John Doe                   │
│  │ ◉ │  Chief Technology Officer   │
│  └───┘  Fortune 10 Company         │
│                                    │
└────────────────────────────────────┘
```

---

## Layout Grid

```
Mobile (320-767px):    [════════════════]  1 column

Tablet (768-1023px):   [═══════] [═══════]  2 columns

Desktop (1024-1439px): [═══] [═══] [═══]  3 columns

Desktop XL (1440px+):  [══] [══] [══] [══]  4 columns
```

**Container:** 1200px max-width • 24px padding
**Grid Gap:** 24-32px depending on content

---

## Section Patterns

### Hero Section
```
┌─────────────────────────────────────────────────┐
│  Navbar (Sticky)                                │
├─────────────────────────────────────────────────┤
│                                                 │
│  [Badge]                                        │
│                                                 │
│  Large Headline                 [Hero Image]    │
│  With Impact                    [             ] │
│                                 [Professional ] │
│  Supporting description         [Team Photo   ] │
│  explaining value prop          [             ] │
│                                                 │
│  [Get Started] [Learn More]                     │
│                                                 │
│  ✓ Metric  ✓ Metric  ✓ Metric                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Stats Section
```
┌─────────────────────────────────────────────────┐
│  NAVY BACKGROUND                                │
│                                                 │
│    15+          500+        98%         24/7    │
│  Years       Projects    Satisfied    Support   │
│  Experience  Delivered   Clients      Available │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Services Grid
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  Our Services                                   │
│  Comprehensive IT solutions...                  │
│                                                 │
│  [Card 1]  [Card 2]  [Card 3]                  │
│  [Card 4]  [Card 5]  [Card 6]                  │
│                                                 │
│          [View All Services]                    │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Animation Timing

```
Micro-interactions:  150-200ms  (hover, click)
Transitions:         300ms      (color, transform)
Page loads:          500ms      (fade in)
Complex animations:  600-800ms  (scroll reveals)
```

**Easing:** `cubic-bezier(0.4, 0.0, 0.2, 1)`

---

## Hover Effects

```
Cards:     translateY(-4px) + shadow increase
Buttons:   translateY(-2px) + shadow increase
Links:     color change to Primary Blue
Images:    scale(1.05) + brightness increase
Icons:     rotate or bounce animation
```

---

## Accessibility Checklist

```
✓ Color contrast 4.5:1 minimum (WCAG AA)
✓ Touch targets 44x44px minimum
✓ Keyboard navigation support
✓ Focus indicators visible (2px outline)
✓ Alt text on all images
✓ ARIA labels on interactive elements
✓ Semantic HTML structure (h1-h6 hierarchy)
✓ Skip to main content link
✓ Form labels properly associated
✓ Reduced motion preference respected
```

---

## Image Guidelines

```
Format:     WebP with JPG fallback
Quality:    80-85% compression

Sizes:
Hero Images:     1200px x 675px   (16:9)
Card Images:     800px x 600px    (4:3)
Thumbnails:      400px x 400px    (1:1)
Headshots:       200px x 200px    (1:1)

Source:     Unsplash (free, high-quality)
Style:      Professional, modern, diverse
Avoid:      Cut-off faces, generic stock
```

---

## Common CSS Classes

```css
/* Layout */
.container              /* 1200px centered */
.section                /* 80px padding */
.grid-2, .grid-3, .grid-4  /* Responsive grids */

/* Components */
.btn-primary            /* Navy button */
.btn-secondary          /* Outline button */
.btn-accent             /* Gradient button */
.card                   /* White card with shadow */
.badge                  /* Small label/tag */

/* Typography */
.text-gradient          /* Blue gradient text */
.text-large             /* 18px body text */
.text-center            /* Centered text */

/* Effects */
.hover-lift             /* Lift on hover */
.hover-scale            /* Scale on hover */
.fade-in-up             /* Fade and slide animation */
.scale-in               /* Scale animation */

/* Utilities */
.mt-8, .mb-8            /* Margin top/bottom */
.pt-8, .pb-8            /* Padding top/bottom */
.bg-navy                /* Navy background */
.bg-light               /* Light gray background */
```

---

## CSS Variables Quick Reference

```css
/* Colors */
var(--primary-navy)
var(--primary-blue)
var(--accent-electric)
var(--text-primary)
var(--bg-white)
var(--bg-gradient-1)

/* Spacing */
var(--space-4)    /* 16px */
var(--space-8)    /* 32px */
var(--space-12)   /* 48px */
var(--space-20)   /* 80px */

/* Typography */
var(--text-xl)     /* 20px */
var(--text-3xl)    /* 30px */
var(--text-5xl)    /* 48px */
var(--weight-bold) /* 700 */

/* Effects */
var(--shadow-md)
var(--radius-xl)
var(--transition-base)
```

---

## File Structure

```
/css/
  ├── design-system.css    ★ Include on EVERY page
  ├── home.css             Homepage specific
  └── [page].css           Page specific styles

/js/
  ├── main.js              ★ Include on EVERY page
  └── [feature].js         Optional features

/images/
  ├── hero/
  ├── services/
  ├── team/
  └── clients/

/pages/
  ├── services/            8 service pages
  ├── company/             5 company pages
  └── resources/           Resource pages
```

---

## Brand Voice

```
✓ Professional but approachable
✓ Confident without arrogance
✓ Client-focused ("you" not "we")
✓ Clear over clever
✓ Action-oriented
✓ Benefit-driven

✗ Avoid jargon
✗ Avoid generic claims
✗ Avoid company-focused language
✗ Avoid passive voice
```

---

## CTA Templates

```
Primary CTAs:
• "Schedule Free Consultation"
• "Get Your Custom Quote"
• "Request a Demo"
• "Start Your Free Assessment"

Secondary CTAs:
• "Learn More About [Service]"
• "View All Services"
• "Explore Our Solutions"
• "Download the Guide"

Inline Links:
• "Learn more →"
• "Read story →"
• "View case study →"
```

---

## Performance Targets

```
Desktop Load:    < 3 seconds
Mobile Load:     < 5 seconds
FCP:             < 1.5 seconds
LCP:             < 2.5 seconds
CLS:             < 0.1
FID:             < 100ms

Lighthouse Scores (All 90+):
Performance:     90+
Accessibility:   95+
Best Practices:  95+
SEO:             95+
```

---

## Browser Support

```
✓ Chrome (last 2 versions)
✓ Firefox (last 2 versions)
✓ Safari (last 2 versions)
✓ Edge (last 2 versions)
✓ Mobile Safari (iOS 12+)
✓ Mobile Chrome (Android 8+)

~ IE11 (graceful degradation)
```

---

## Quick Tips

1. **Always use CSS variables** instead of hardcoded values
2. **Test mobile first**, then scale up
3. **Maintain 8px spacing grid** for consistency
4. **Check contrast** for all text/background combinations
5. **Use semantic HTML** (header, nav, main, footer, article)
6. **Add alt text** to every image
7. **Test keyboard navigation** before deployment
8. **Compress images** before uploading
9. **Follow the Style Guide** for all new components
10. **Test on actual devices**, not just browser DevTools

---

**For Full Details:** See `/STYLE_GUIDE.md`

**For Implementation:** See `/COMPLETE_REDESIGN_2025.md`

**For Research:** See `/DESIGN_RESEARCH.md`

---

*Quick reference card for the Sajecy Solutions complete redesign*
*Updated: October 19, 2025*
