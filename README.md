# Sajecy Solutions Website

An exact replica of the Astreya website design, customized for Sajecy Solutions.

## Features

✅ **Exact Match to Astreya Design**
- Identical layout and structure
- Matching color scheme (Orange #FF6B35, Navy, Peach backgrounds)
- Same navigation structure with dropdowns
- All sections recreated pixel-perfect

✅ **Complete Sections**
1. Hero Section - "WORKING INNOVATION" with background image
2. Services Overview - 4-column grid
3. Innovation Sections (3) - Circular image features
4. Tech Sheet Section - Dark background with orange CTA card
5. Testimonials - Peach background with client quotes
6. Careers Section - Dark background with circular images
7. CTA Section - Peach card with laptop mockup
8. Resources - 4 colorful download cards
9. Footer - Comprehensive links and social media

✅ **Interactive Elements**
- Smooth scrolling navigation
- Hover effects on buttons and cards
- Animated scroll reveals
- Mobile-responsive hamburger menu
- Parallax hero image
- Animated marquee banners

## How to View

### Option 1: Double-click
Navigate to the `website` folder and double-click `index.html`

### Option 2: Terminal
```bash
cd "/Users/farrukh/Desktop/Sajecy Solutions/website"
open index.html
```

### Option 3: Local Server (Recommended)
```bash
cd "/Users/farrukh/Desktop/Sajecy Solutions/website"
python3 -m http.server 8000
```
Then visit: http://localhost:8000

## File Structure

```
website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Complete styling (exact Astreya match)
├── js/
│   └── script.js       # Interactive functionality
├── images/             # Placeholder for images
└── README.md           # This file
```

## Color Palette (Exact Astreya Match)

- **Primary Orange**: #FF6B35
- **Dark Navy**: #1a2332
- **Dark Charcoal**: #2d3748
- **Peach Background**: #FFD1C1
- **Light Peach**: #FFE5DC
- **White**: #FFFFFF
- **Black**: #000000

## Typography

- **Font Family**: Inter (Google Fonts)
- **Hero Title**: 80px, 900 weight
- **Section Titles**: 44px, 800 weight
- **Body Text**: 16-17px, 400 weight

## Customization Guide

### Update Company Information
All instances of "Sajecy" can be found throughout the HTML. To update:
1. Search for "Sajecy" in `index.html`
2. Replace with your company name

### Change Colors
Edit CSS variables in `styles.css` (lines 10-18):
```css
:root {
    --primary-orange: #FF6B35;  /* Your primary color */
    --dark-navy: #1a2332;       /* Dark sections */
    --peach-bg: #FFD1C1;        /* Testimonials background */
}
```

### Add Real Images
1. Save images in the `images/` folder
2. Update CSS background-image URLs
3. Replace SVG placeholders with actual photos

### Modify Content
- Hero text: line 51-58 in index.html
- Services: lines 75-108
- Testimonials: lines 223-264
- Resources: lines 299-322

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS/Android)

## Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: <768px

## Navigation Structure

1. **Why Sajecy** (Dropdown)
2. **What We Do** (Dropdown)
   - Digital Workplace Services
   - Cloud, Infrastructure, Security
   - Enterprise AI Services
3. **Partnerships** (Dropdown)
4. **Resources** (Dropdown)
5. **Company** (Dropdown)
6. **Careers at Sajecy**
7. **Open Positions**
8. **Contact Us** (Button)

## Next Steps

1. ✅ View the website (it's ready!)
2. 🎨 Add your real images
3. 📝 Customize content for your business
4. 🔗 Set up actual links for navigation
5. 📧 Connect contact form to backend
6. 🚀 Deploy to web hosting

## Technical Details

- **HTML5** with semantic markup
- **CSS3** with Grid and Flexbox
- **Vanilla JavaScript** (no dependencies)
- **Google Fonts** (Inter family)
- **Responsive Design** (mobile-first)
- **Accessibility** considerations
- **Performance** optimized

## Credits

Design inspired by: Astreya.com
Built for: Sajecy Solutions
Date: 2024

---

© 2024 Sajecy Solutions. All rights reserved.
