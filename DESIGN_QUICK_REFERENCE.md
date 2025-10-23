# Sajecy Solutions - Design Quick Reference Guide

**Quick access guide for designers and developers**

---

## Color Palette Options

### Option 1: Corporate Trust (Recommended)
```
Primary:   #0A2463 (Navy Blue)
Secondary: #3E92CC (Light Blue)
Accent:    #52B2CF (Electric Blue)
Neutral:   #F4F4F4 (Cool Gray)
Text:      #2C3E50 (Dark Charcoal)
```

### Option 2: Tech Innovation
```
Primary:   #5B2C6F (Deep Purple)
Secondary: #00D9FF (Cyan)
Accent:    #0099FF (Neon Blue)
Dark BG:   #0F1419 (Dark Navy)
Text:      #F0F0F0 (Off-White)
```

### Option 3: Dark Premium
```
Primary:   #1A1D29 (Ebony Clay)
Secondary: #0070AD (Honolulu Blue)
Accent:    #00E5FF (Bright Cyan)
Success:   #0BDA51 (Malachite Green)
Text:      #FFFFFF (White)
```

---

## Typography Stack

**Recommended Fonts:**
- **Primary:** Inter (Variable) or Plus Jakarta Sans
- **Alternative:** Space Grotesk or Aktiv Grotesk
- **Fallback:** System fonts (-apple-system, BlinkMacSystemFont)

**Size Scale:**
```
H1 Hero:    64px / 3.5rem  (Bold 700)
H2 Section: 48px / 2.75rem (Semi-Bold 600)
H3 Card:    32px / 1.875rem (Medium 500)
H4 Label:   24px / 1.375rem (Medium 500)
Body Large: 18px / 1.125rem (Regular 400)
Body:       16px / 1rem     (Regular 400)
Small:      14px / 0.875rem (Regular 400)
```

**Line Heights:**
- Headlines: 1.2
- Body: 1.6
- Captions: 1.4

---

## Layout Grid

**Breakpoints:**
```
Mobile:       320px - 767px
Tablet:       768px - 1023px
Desktop:      1024px - 1439px
Desktop XL:   1440px+
```

**Container Max-Width:**
- Content: 1200px
- Full-width sections: 100%
- Text blocks: 720px max

**Spacing Scale (px):**
```
4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120
```

---

## Component Sizes

### Buttons
```
Height: 48px (minimum 44px for accessibility)
Padding: 12px vertical, 32px horizontal
Border Radius: 6px (or 24px for pill shape)
Font: 16px, Semi-Bold (600)
```

**Button Hierarchy:**
- Primary: Filled with accent color
- Secondary: Outlined with border
- Tertiary: Text only with underline on hover

### Input Fields
```
Height: 48px
Padding: 12px 16px
Border: 1px solid #D1D5DB
Border Radius: 6px
Focus: 2px solid accent color
```

### Cards
```
Padding: 32px
Border Radius: 12px
Shadow: 0 4px 12px rgba(0,0,0,0.08)
Hover: Lift 4px with increased shadow
```

---

## CTA Copy Templates

### Primary Actions
- "Schedule Your Free Consultation"
- "Get Your Custom Quote Today"
- "Request a Demo"
- "Start Your Free Assessment"
- "Contact Our Experts"

### Secondary Actions
- "Learn More About [Service]"
- "View Case Studies"
- "Explore Our Services"
- "Download Guide"
- "Read More"

### Value Props
- "Reduce Downtime by 47%"
- "24/7 Support, 15-Min Response"
- "Certified in 15+ Technologies"
- "Trusted by 100+ Enterprises"

---

## Trust Elements Checklist

- [ ] Client logos (grayscale, responsive grid)
- [ ] Certification badges (SOC 2, ISO, HIPAA)
- [ ] Team photos (professional, authentic)
- [ ] Client testimonials (name, company, photo)
- [ ] Case studies (metrics-driven)
- [ ] Years in business
- [ ] Number of clients served
- [ ] Response time guarantees
- [ ] Satisfaction rates
- [ ] Partnership badges (Microsoft, AWS, Cisco)

---

## Icon Style Guide

**Style:** Line/Outline icons
**Weight:** 2px stroke
**Size:** 24px, 32px, 48px, 64px
**Color:** Inherit from parent or accent color
**Library:** Heroicons or Feather Icons

**Common Icons Needed:**
- Server (Data Center)
- Shield (Cybersecurity)
- Cloud (Cloud Services)
- Users (Managed Services)
- Clock (24/7 Support)
- Checkmark (Benefits)
- Arrow Right (CTAs)
- Menu/Hamburger (Mobile Nav)

---

## Image Guidelines

**Photography Style:**
- Real team photos (no generic stock)
- Professional but approachable
- Diverse representation
- Modern office/tech environments
- Action shots (people working)

**Technical Specs:**
- Format: WebP with JPG fallback
- Max width: 1920px for hero images
- Compression: 80-85% quality
- Lazy loading: Yes
- Alt text: Descriptive for SEO/accessibility

---

## Animation Timing

**Duration:**
- Micro-interactions: 150-200ms
- Transitions: 300ms
- Page loads: 500ms
- Complex animations: 600-800ms

**Easing:**
- Standard: cubic-bezier(0.4, 0.0, 0.2, 1)
- Decelerate: cubic-bezier(0.0, 0.0, 0.2, 1)
- Accelerate: cubic-bezier(0.4, 0.0, 1, 1)

**Common Animations:**
- Fade in: opacity 0 to 1
- Slide up: translateY(20px) to 0
- Scale: scale(0.95) to 1
- Hover lift: translateY(0) to -4px

---

## Performance Targets

**Load Times:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Load Time: < 3s
- Time to Interactive: < 3.5s

**Lighthouse Scores (All 90+):**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**Core Web Vitals:**
- LCP: < 2.5s (Good)
- FID: < 100ms (Good)
- CLS: < 0.1 (Good)

---

## SEO Keywords to Target

**Primary:**
- Managed IT services
- IT consulting services
- IT support services
- Technology consulting
- Cloud migration services

**Secondary:**
- Cybersecurity solutions
- Data center management
- IT infrastructure services
- Digital transformation consulting
- 24/7 IT support

**Long-tail:**
- "IT consulting for [industry]"
- "Managed services provider [location]"
- "Cloud security best practices"
- "Enterprise IT solutions"

---

## Mobile-First Checklist

- [ ] Touch targets minimum 44x44px
- [ ] Text minimum 16px (no zoom required)
- [ ] Hamburger menu for navigation
- [ ] Simplified content hierarchy
- [ ] Thumb-friendly CTA placement
- [ ] Click-to-call phone numbers
- [ ] Optimized images for mobile
- [ ] Fast load on 3G (< 5s)
- [ ] Horizontal scroll eliminated
- [ ] Form fields mobile-optimized

---

## Accessibility Checklist

- [ ] Color contrast 4.5:1 minimum (text)
- [ ] Color contrast 3:1 minimum (UI elements)
- [ ] Keyboard navigation support
- [ ] Focus indicators visible
- [ ] Alt text on all images
- [ ] ARIA labels where needed
- [ ] Semantic HTML structure
- [ ] Skip to main content link
- [ ] Form labels properly associated
- [ ] No autoplay audio/video

---

## Homepage Structure

```
1. Fixed Navigation Bar
   - Logo (left)
   - Menu items (center)
   - CTA button (right)

2. Hero Section
   - Headline + Subheadline
   - Primary + Secondary CTA
   - Hero graphic/image (right side)

3. Trust Bar
   - Client logos carousel
   - "Trusted by X companies"

4. Services Grid
   - 3 columns on desktop
   - Icon + Title + Description
   - "Learn More" links

5. Stats Section
   - 4 key metrics
   - Large numbers with icons
   - Dark background for contrast

6. Featured Case Study
   - Problem-Solution-Result
   - Client testimonial
   - CTA to view more

7. Certifications
   - Badge grid
   - Industry partnerships

8. Testimonials Carousel
   - Client quotes with photos
   - Company names
   - Rotating display

9. Final CTA Section
   - Bold headline
   - Description
   - Primary CTA button

10. Footer
    - Company links
    - Services links
    - Resources links
    - Contact info
    - Certifications
    - Social media
    - Copyright
```

---

## Development Tech Stack

**Recommended:**
- **Framework:** Next.js 14+ (React)
- **Styling:** Tailwind CSS + CSS Modules
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **CMS:** Contentful or Strapi
- **Hosting:** Vercel
- **Analytics:** Google Analytics 4

**Dependencies:**
```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "tailwindcss": "^3.4.0",
  "framer-motion": "^10.16.0",
  "react-hook-form": "^7.48.0",
  "zod": "^3.22.0"
}
```

---

## Launch Checklist

**Pre-Launch:**
- [ ] All pages mobile responsive
- [ ] Forms tested and working
- [ ] Contact info accurate
- [ ] SSL certificate installed
- [ ] Analytics configured
- [ ] SEO meta tags complete
- [ ] Images optimized
- [ ] Cross-browser tested
- [ ] Accessibility audit passed
- [ ] Performance optimized

**Post-Launch:**
- [ ] Submit sitemap to Google
- [ ] Set up Google My Business
- [ ] Monitor Core Web Vitals
- [ ] Track conversion rates
- [ ] Review heatmaps weekly
- [ ] Update content monthly
- [ ] A/B test CTAs
- [ ] Collect user feedback

---

## Contact & Emergency Info

**Key Stakeholders:**
- Project Manager: [Name]
- Lead Designer: [Name]
- Lead Developer: [Name]
- Content Writer: [Name]

**Important Links:**
- Design Files: [Figma URL]
- GitHub Repo: [Repository URL]
- Staging Site: [URL]
- Production Site: [URL]
- Analytics: [GA4 Property]

---

**Last Updated:** October 19, 2025
**Version:** 1.0
**Status:** Ready for Implementation
