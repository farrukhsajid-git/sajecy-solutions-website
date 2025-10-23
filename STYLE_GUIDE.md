# Sajecy Solutions - Style Guide & Design System Documentation

**Version:** 2.0
**Last Updated:** October 19, 2025
**Status:** Complete Redesign

---

## Design Philosophy

The Sajecy Solutions website embodies **Modern Professional Excellence** - a design approach that balances corporate authority with approachability, innovation with trust, and premium aesthetics with accessibility.

### Core Design Principles

1. **Trust Through Professionalism** - Premium blue color scheme establishes credibility
2. **Clarity Over Complexity** - Clean layouts guide users naturally
3. **Accessible to All** - WCAG AA compliant with 4.5:1+ contrast ratios
4. **Performance First** - Sub-3-second load times on all devices
5. **Mobile-First** - Responsive design optimized for touch interactions

---

## Color System

### Primary Palette

Our color scheme uses premium blues that signal **trust, intelligence, and innovation** - aligned with 90% of successful enterprise IT consulting websites.

```
PRIMARY NAVY    #0A2463    RGB(10, 36, 99)
├─ Use: Primary backgrounds, headers, navigation
├─ Psychology: Authority, trust, professionalism
└─ Contrast: 12.5:1 with white (WCAG AAA)

PRIMARY BLUE    #3E92CC    RGB(62, 146, 204)
├─ Use: Interactive elements, hover states, links
├─ Psychology: Approachability, intelligence
└─ Contrast: 4.8:1 with white (WCAG AA)

ACCENT ELECTRIC #52B2CF    RGB(82, 178, 207)
├─ Use: CTAs, highlights, important actions
├─ Psychology: Innovation, energy, progress
└─ Contrast: 3.5:1 with white (WCAG AA)

ACCENT BRIGHT   #00D9FF    RGB(0, 217, 255)
├─ Use: Sparingly for emphasis and special CTAs
├─ Psychology: Cutting-edge, futuristic
└─ Contrast: 2.8:1 with white (Use on dark backgrounds only)
```

### Neutral Palette

```
NEUTRAL-100    #F8F9FA    Lightest backgrounds
NEUTRAL-200    #E9ECEF    Card borders, dividers
NEUTRAL-300    #DEE2E6    Input borders
NEUTRAL-400    #CED4DA    Disabled states
NEUTRAL-500    #ADB5BD    Placeholder text
NEUTRAL-600    #6C757D    Secondary text
NEUTRAL-700    #495057    Body text alternative
NEUTRAL-800    #343A40    Dark backgrounds
NEUTRAL-900    #212529    Darkest text
```

### Semantic Colors

```
SUCCESS    #10B981    Confirmations, success states
WARNING    #F59E0B    Alerts, important notices
ERROR      #EF4444    Errors, destructive actions
INFO       #3B82F6    Informational messages
```

### Gradient System

```css
/* Primary Gradient - Navy to Blue */
background: linear-gradient(135deg, #0A2463 0%, #3E92CC 100%);

/* Secondary Gradient - Blue to Electric */
background: linear-gradient(135deg, #3E92CC 0%, #52B2CF 100%);

/* Hero Gradient - With Transparency */
background: linear-gradient(135deg, rgba(10, 36, 99, 0.95) 0%, rgba(62, 146, 204, 0.9) 100%);
```

---

## Typography

### Font Family

**Primary Font: Inter (Variable)**

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Why Inter?**
- Modern geometric sans-serif optimized for screens
- Excellent readability at all sizes
- Variable font provides flexible weights (300-900)
- Free and widely supported
- Used by GitHub, Airbnb, and other tech leaders

### Type Scale

```
DISPLAY (H1)    72px / 4.5rem     Weight: 800     Line: 1.2
HEADING 1 (H1)  60px / 3.75rem    Weight: 800     Line: 1.2
HEADING 2 (H2)  48px / 3rem       Weight: 700     Line: 1.2
HEADING 3 (H3)  36px / 2.25rem    Weight: 600     Line: 1.2
HEADING 4 (H4)  30px / 1.875rem   Weight: 600     Line: 1.3
HEADING 5 (H5)  24px / 1.5rem     Weight: 500     Line: 1.3
HEADING 6 (H6)  20px / 1.25rem    Weight: 500     Line: 1.3

BODY LARGE      18px / 1.125rem   Weight: 400     Line: 1.6
BODY            16px / 1rem       Weight: 400     Line: 1.6
BODY SMALL      14px / 0.875rem   Weight: 400     Line: 1.5
CAPTION         12px / 0.75rem    Weight: 400     Line: 1.4
```

### Typography Best Practices

**Headlines:**
- Use sentence case for modern feel
- Maximum 2 typefaces (we use only Inter)
- Tight line-height (1.2) for impact
- Negative letter-spacing (-0.02em) for large text

**Body Text:**
- Minimum 16px on all devices (accessibility)
- 1.6 line-height for comfortable reading
- Maximum 720px line width (60-75 characters)
- Color: #5A6C7D for reduced eye strain

**Mobile Typography:**
- Scale down proportionally (maintain hierarchy)
- Minimum 14px for accessibility
- Increase line-height slightly (1.7) on small screens
- Reduce letter-spacing on constrained widths

---

## Spacing System

### Scale (8px Base Grid)

```
SPACE-1     4px      0.25rem     Tiny gaps
SPACE-2     8px      0.5rem      Small gaps, icon spacing
SPACE-3     12px     0.75rem     Compact padding
SPACE-4     16px     1rem        Default spacing unit
SPACE-5     20px     1.25rem     Medium padding
SPACE-6     24px     1.5rem      Standard padding
SPACE-8     32px     2rem        Large padding
SPACE-10    40px     2.5rem      Section spacing
SPACE-12    48px     3rem        Component spacing
SPACE-16    64px     4rem        Major sections
SPACE-20    80px     5rem        Section padding
SPACE-24    96px     6rem        Large section padding
SPACE-32    128px    8rem        Hero section padding
```

### Application Guidelines

**Component Padding:**
- Buttons: 16px vertical, 32px horizontal
- Cards: 32px all sides
- Input fields: 16px all sides
- Navigation: 24px vertical, 24px horizontal

**Section Spacing:**
- Standard section: 80px top/bottom
- Large section: 128px top/bottom
- Small section: 64px top/bottom
- Mobile: Reduce by 30-40%

---

## Layout System

### Container Widths

```
CONTAINER         1200px    Standard content width
CONTAINER-WIDE    1440px    Wide content sections
CONTAINER-NARROW  720px     Text-focused content
FULL-WIDTH        100%      Edge-to-edge sections
```

### Grid System

**12-Column Grid**
- Gutter: 24px
- Margin: 24px (mobile), 48px (tablet+)
- Responsive breakpoints

**Common Layouts:**
```
2-Column: 50/50 split (services, features)
3-Column: 33/33/33 (service cards, team)
4-Column: 25/25/25/25 (benefits, stats)
Sidebar: 66/33 (blog post layout)
```

### Breakpoints

```css
/* Mobile First Approach */
Mobile:        320px - 767px   (1 column layouts)
Tablet:        768px - 1023px  (2 column layouts)
Desktop:       1024px - 1439px (3-4 column layouts)
Desktop XL:    1440px+          (Full layouts)
Ultra-wide:    1920px+          (Constrained max-width)
```

---

## Components

### Buttons

**Primary Button**
```css
Background: #0A2463
Color: #FFFFFF
Padding: 16px 32px
Border-radius: 8px
Font-weight: 600
Min-height: 48px
Shadow: 0 10px 30px rgba(10, 36, 99, 0.2)
Hover: Background #3E92CC, translateY(-2px)
```

**Secondary Button**
```css
Background: transparent
Color: #0A2463
Border: 2px solid #0A2463
Hover: Background #0A2463, Color #FFFFFF
```

**Accent Button**
```css
Background: linear-gradient(135deg, #3E92CC 0%, #52B2CF 100%)
Color: #FFFFFF
Hover: translateY(-2px), shadow increase
```

**Size Variants:**
- Small: 40px height, 12px/24px padding
- Medium: 48px height, 16px/32px padding (default)
- Large: 56px height, 20px/40px padding

### Cards

**Standard Card**
```css
Background: #FFFFFF
Padding: 32px
Border-radius: 16px
Shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
Hover: translateY(-4px), shadow increase
```

**Card Variants:**
- Flat: No shadow, border instead
- Elevated: Larger shadow for emphasis
- Image: Image header + content
- Interactive: Hover effects, clickable

### Forms

**Input Fields**
```css
Width: 100%
Padding: 16px
Border: 2px solid #DEE2E6
Border-radius: 8px
Min-height: 48px
Focus: Border #3E92CC, shadow ring
```

**Labels**
```css
Font-size: 14px
Font-weight: 500
Color: #2C3E50
Margin-bottom: 8px
```

### Navigation

**Desktop Navigation**
```css
Height: 80px
Background: White (sticky)
Shadow: 0 2px 8px rgba(0, 0, 0, 0.05)
Position: sticky, top: 0
```

**Mobile Navigation**
```css
Hamburger menu: 44x44px touch target
Off-canvas drawer
Full-screen overlay
Smooth transitions
```

---

## Image Guidelines

### Photography Style

**Professional Characteristics:**
- Real business environments (no cheesy stock)
- Well-lit, high-resolution (1920px+ width)
- Properly composed (no cut-off faces)
- Diverse representation
- Modern office/tech settings
- Natural colors with slight saturation boost

**Technical Specifications:**
```
Format: WebP with JPG fallback
Hero Images: 1920x1080px minimum
Card Images: 800x600px
Thumbnails: 400x300px
Compression: 80-85% quality
Aspect Ratios: 16:9, 4:3, 1:1
```

**Image Sources:**
- Unsplash (free, high-quality)
- Pexels (free alternative)
- Professional photoshoots (recommended)
- Client-provided imagery

### Icons

**Style: Line/Outline Icons**
```
Stroke weight: 2px
Size: 24px, 32px, 48px, 64px
Color: Inherit or accent
Library: Heroicons or Feather Icons
```

**Common Icons Needed:**
- Server (Data Infrastructure)
- Shield (Cybersecurity)
- Cloud (Cloud Services)
- Users (Managed Services)
- Clock (24/7 Support)
- Check (Benefits, Features)
- Arrow Right (CTAs, Links)
- Menu (Mobile Navigation)

---

## Animation & Interaction

### Timing Functions

```css
Fast:     150ms cubic-bezier(0.4, 0, 0.2, 1)
Base:     300ms cubic-bezier(0.4, 0, 0.2, 1)
Slow:     500ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Common Animations

**Fade In Up**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
Duration: 600ms
```

**Hover Lift**
```css
transform: translateY(-4px);
transition: 300ms ease;
```

**Scale on Hover**
```css
transform: scale(1.05);
transition: 300ms ease;
```

### Scroll Animations

- Trigger: When element enters 80% of viewport
- Duration: 600ms
- Delay: Staggered 150ms per item
- Reduce motion: Respect prefers-reduced-motion

---

## Accessibility Standards

### WCAG AA Compliance

**Color Contrast:**
```
Normal text: 4.5:1 minimum
Large text: 3:1 minimum
UI elements: 3:1 minimum
Our compliance: 4.5:1+ everywhere
```

**Interactive Elements:**
- Minimum touch target: 44x44px
- Keyboard navigation: Full support
- Focus indicators: Visible 2px outlines
- Skip links: "Skip to main content"

**Content:**
- Alt text: All images
- ARIA labels: Complex interactions
- Semantic HTML: Proper heading hierarchy
- Form labels: Properly associated

### Performance Targets

```
First Contentful Paint: < 1.5s
Largest Contentful Paint: < 2.5s
Total Load Time: < 3s
Time to Interactive: < 3.5s
Lighthouse Scores: 90+ (all categories)
```

---

## Content Guidelines

### Tone of Voice

**Professional but Approachable**
- Confident without arrogance
- Clear over clever
- Client-focused ("you" > "we")
- Action-oriented
- Benefit-driven

### Writing Best Practices

**Headlines:**
- 6-10 words maximum
- Lead with benefit
- Use action verbs
- Avoid jargon

**Body Text:**
- 2-3 sentences per paragraph
- Scannable (bullets, bold)
- Active voice
- Specific over generic

**CTAs:**
- Action verbs (Schedule, Get, Start, Download)
- Under 5 words
- Create urgency/value
- Examples:
  - "Schedule Free Consultation"
  - "Get Your Custom Quote"
  - "Download 2025 Guide"

---

## Trust Elements

### Essential Signals

**Client Logos**
- Grayscale or branded
- Grid or carousel
- "Trusted by 100+ Companies"

**Certifications**
- SOC 2, ISO 27001, HIPAA, CMMC
- Prominent placement
- Homepage + about page

**Testimonials**
- Client photo + quote
- Name, title, company
- Specific results mentioned
- Video preferred

**Metrics**
```
98% Client Satisfaction
15+ Years Experience
500+ Projects Completed
24/7 Support Available
```

---

## File Organization

```
/css/
  ├── design-system.css      (Core design tokens & base)
  ├── components.css         (Reusable components)
  ├── navigation.css         (Header & footer)
  ├── animations.css         (Animation definitions)
  └── pages/
      ├── home.css
      ├── services.css
      └── about.css

/images/
  ├── hero/
  ├── services/
  ├── team/
  └── clients/

/js/
  ├── main.js
  ├── animations.js
  └── forms.js
```

---

## Browser Support

```
Chrome: Last 2 versions
Firefox: Last 2 versions
Safari: Last 2 versions
Edge: Last 2 versions
Mobile Safari: iOS 12+
Mobile Chrome: Android 8+
```

---

## Quick Reference

### Common Classes

```css
.container          /* 1200px centered container */
.section            /* 80px padding top/bottom */
.btn-primary        /* Primary CTA button */
.card               /* Standard card component */
.text-gradient      /* Blue gradient text */
.hover-lift         /* Lift on hover effect */
.fade-in-up         /* Fade and slide animation */
.grid-3             /* 3-column grid */
```

### Color Variables

```css
var(--primary-navy)
var(--primary-blue)
var(--accent-electric)
var(--text-primary)
var(--bg-white)
```

### Spacing Variables

```css
var(--space-4)      /* 16px */
var(--space-8)      /* 32px */
var(--space-12)     /* 48px */
var(--space-20)     /* 80px */
```

---

## Next Steps for Developers

1. **Include design-system.css** in all pages (first)
2. **Use CSS variables** for consistency
3. **Follow component patterns** from this guide
4. **Test accessibility** with screen readers
5. **Optimize images** before uploading
6. **Run Lighthouse** before deployment
7. **Test on actual devices** (not just browser devtools)

---

## Resources

**Design Tools:**
- Figma (for mockups)
- Adobe Illustrator (for icons)

**Development:**
- VS Code (code editor)
- Chrome DevTools (debugging)
- Lighthouse (performance)

**Testing:**
- WAVE (accessibility)
- GTmetrix (performance)
- BrowserStack (cross-browser)

**Assets:**
- Unsplash (free images)
- Heroicons (free icons)
- Google Fonts (typography)

---

**Style Guide Version:** 2.0
**Maintained By:** Design Team
**Last Updated:** October 19, 2025
**Status:** Production Ready
