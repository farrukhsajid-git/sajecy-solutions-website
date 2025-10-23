# SAJECY SOLUTIONS - BALANCED REDESIGN STRATEGY

## Strategic Positioning

**New Brand Promise:**
"Data Center & Network Infrastructure Specialists Who Deliver Complete IT Solutions"

**The Balance (60/40 Approach):**
- 60% emphasis on Data Center & Networking (differentiator)
- 40% emphasis on Complete IT Services (market appeal)

**Core Message:**
"We're infrastructure experts who understand your entire IT ecosystem - from physical data centers to cloud and AI automation."

---

## 1. MESSAGING FRAMEWORK

### Hero Section - Rotating Carousel (3 Slides, 7-second intervals)

#### **SLIDE 1: BROAD MARKET APPEAL**
```
Headline: "Complete IT Solutions for Modern Enterprise"
Subheadline: "From data center infrastructure to cloud security and AI automation - your trusted technology partner for end-to-end IT services"

Background Image: High-quality data center server racks with blue LED lighting
- Dark, professional aesthetic
- Depth of field with blur effect
- Slight blue color grade (#1E3A8A overlay at 40% opacity)

CTAs:
- Primary: "Explore Services" (bright blue, #3B82F6)
- Secondary: "Get a Quote" (outline, white border)

Visual Elements:
- Subtle animated glow on server lights
- Floating particle effects (minimal, professional)
- Text slides in from left with fade
```

#### **SLIDE 2: CORE INFRASTRUCTURE STRENGTH**
```
Headline: "Expert Data Center & Network Infrastructure Services"
Subheadline: "Design, build, and operate enterprise-grade data centers with 24/7 NOC support, rack & stack, fiber optic installation, and Smart Hands"

Background Image: Data center aisle perspective view
- Long corridor with server racks on both sides
- Vanishing point perspective
- Cool blue/green lighting
- Professional cable management visible

CTAs:
- Primary: "Infrastructure Services"
- Secondary: "Contact Us"

Visual Elements:
- Slow zoom-in effect on background
- Highlight overlays on key infrastructure elements
- Stats overlay: "500+ Racks Deployed | 15+ Years Experience"
```

#### **SLIDE 3: 24/7 OPERATIONS**
```
Headline: "24/7 Managed IT Services & Network Operations"
Subheadline: "Round-the-clock monitoring, support, and management for your entire IT infrastructure"

Background Image: Network Operations Center (NOC)
- Multiple monitors showing network dashboards
- Professional operations environment
- Blue/purple ambient lighting
- Activity without showing faces (privacy/stock friendly)

CTAs:
- Primary: "Learn More"
- Secondary: "Schedule Consultation"

Visual Elements:
- Animated network topology overlays
- Pulsing uptime indicator: "99.9% Uptime"
- Clock icon with "24/7/365" badge
```

---

## 2. VISUAL DESIGN SYSTEM

### Color Palette

```css
/* Primary Colors - Infrastructure Foundation */
--primary-dark: #0D1B2A;        /* Deep navy - main background */
--primary-blue: #1E3A8A;        /* Rich blue - infrastructure accent */
--primary-bright: #3B82F6;      /* Bright blue - CTAs */
--accent-cyan: #06B6D4;         /* Cyan - technology highlight */

/* Secondary Colors - Complete IT Services */
--secondary-purple: #7C3AED;    /* Purple - cloud/AI services */
--secondary-green: #10B981;     /* Green - success/uptime */
--secondary-amber: #F59E0B;     /* Amber - warnings/alerts */

/* Neutral Scale */
--gray-50: #F8FAFC;
--gray-100: #F1F5F9;
--gray-200: #E2E8F0;
--gray-300: #CBD5E1;
--gray-400: #94A3B8;
--gray-500: #64748B;
--gray-600: #475569;
--gray-700: #334155;
--gray-800: #1E293B;
--gray-900: #0F172A;

/* Gradient Overlays */
--gradient-hero: linear-gradient(135deg, rgba(13, 27, 42, 0.95) 0%, rgba(30, 58, 138, 0.85) 100%);
--gradient-card: linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%);
--gradient-cta: linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%);
```

### Typography Scale

```css
/* Font Families */
--font-display: 'Inter', system-ui, -apple-system, sans-serif;
--font-body: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Courier New', monospace;

/* Type Scale - Mobile First */
--text-hero: 36px / 40px;       /* Hero headlines */
--text-h1: 30px / 36px;         /* Page titles */
--text-h2: 24px / 32px;         /* Section headers */
--text-h3: 20px / 28px;         /* Card titles */
--text-body: 16px / 24px;       /* Default text */
--text-small: 14px / 20px;      /* Secondary text */
--text-tiny: 12px / 16px;       /* Captions, labels */

/* Desktop Scale (1024px+) */
--text-hero-lg: 56px / 64px;
--text-h1-lg: 48px / 56px;
--text-h2-lg: 36px / 44px;
--text-h3-lg: 28px / 36px;
--text-body-lg: 18px / 28px;

/* Font Weights */
--weight-normal: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
--weight-black: 900;
```

### Spacing System (8px Grid)

```css
--space-1: 4px;    /* 0.25rem - Tight */
--space-2: 8px;    /* 0.5rem - XS */
--space-3: 12px;   /* 0.75rem - Small */
--space-4: 16px;   /* 1rem - Base */
--space-6: 24px;   /* 1.5rem - Medium */
--space-8: 32px;   /* 2rem - Large */
--space-12: 48px;  /* 3rem - XL */
--space-16: 64px;  /* 4rem - 2XL */
--space-24: 96px;  /* 6rem - 3XL */
--space-32: 128px; /* 8rem - 4XL */
```

### Component Patterns

```css
/* Border Radius */
--radius-sm: 4px;     /* Buttons, inputs */
--radius-md: 8px;     /* Cards, small components */
--radius-lg: 12px;    /* Large cards */
--radius-xl: 16px;    /* Hero elements */
--radius-2xl: 24px;   /* Special sections */

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-glow: 0 0 20px rgba(59, 130, 246, 0.3);

/* Transitions */
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 3. HOMEPAGE STRUCTURE

### Section Breakdown

```
┌─────────────────────────────────────────────┐
│  NAVIGATION BAR (Sticky)                    │
│  - Logo                                     │
│  - Services | Solutions | About | Contact  │
│  - "Get Quote" CTA                          │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  HERO CAROUSEL (Full viewport height)       │
│  - 3 rotating slides                        │
│  - Data center backgrounds                  │
│  - Balanced messaging                       │
│  - Dual CTAs                                │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  TRUST INDICATORS (100px height)            │
│  - "15+ Years" | "500+ Racks" | "99.9%"    │
│  - "24/7 Support" | "Enterprise Clients"    │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  SERVICES GRID (Primary Focus)              │
│  Headline: "Complete IT Solutions,          │
│             Built on Infrastructure         │
│             Excellence"                     │
│                                             │
│  6 Equal Service Cards (2x3 grid)          │
│  1. Data Center Services                   │
│  2. Network Management                     │
│  3. Cloud & Hybrid IT                      │
│  4. Cybersecurity                          │
│  5. AI & Automation                        │
│  6. Managed Services                       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  VALUE PROPOSITION (Split section)          │
│  Left: "Infrastructure Experts"             │
│  Right: "Complete Solutions"                │
│  - Shows the balance visually              │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  EXPERTISE STACK VISUALIZATION              │
│  "Your Entire IT Stack, Covered"            │
│  - Interactive layer diagram               │
│  - Physical → Network → Cloud → AI         │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  STATS & CAPABILITIES                       │
│  4-column stats with icons                 │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  CLIENT TESTIMONIALS                        │
│  3-card carousel with quotes               │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  FINAL CTA SECTION                          │
│  "Ready to Transform Your IT                │
│   Infrastructure?"                          │
│  - Large contact form or consultation      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  FOOTER (Comprehensive)                     │
│  - All service links                        │
│  - Contact info                             │
│  - Social media                             │
└─────────────────────────────────────────────┘
```

---

## 4. SERVICE CARDS - BALANCED PRESENTATION

### Design Specifications for All 6 Cards

```html
<!-- Card Structure (All Equal) -->
<div class="service-card">
  <div class="card-icon">
    <!-- Custom icon (60x60px) -->
  </div>
  <h3 class="card-title">Service Name</h3>
  <p class="card-description">
    Brief 2-line description highlighting key capabilities
  </p>
  <ul class="card-features">
    <li>Key Feature 1</li>
    <li>Key Feature 2</li>
    <li>Key Feature 3</li>
  </ul>
  <a href="#" class="card-cta">Learn More →</a>
</div>
```

```css
.service-card {
  background: var(--gradient-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  transition: var(--transition-base);
  backdrop-filter: blur(10px);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-bright);
}

.card-icon {
  width: 60px;
  height: 60px;
  margin-bottom: var(--space-6);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(59, 130, 246, 0.1);
  border-radius: var(--radius-md);
}

.card-title {
  font-size: var(--text-h3);
  font-weight: var(--weight-bold);
  color: white;
  margin-bottom: var(--space-3);
}

.card-description {
  font-size: var(--text-body);
  color: var(--gray-300);
  margin-bottom: var(--space-6);
  line-height: 1.6;
}

.card-features {
  list-style: none;
  margin-bottom: var(--space-6);
}

.card-features li {
  font-size: var(--text-small);
  color: var(--gray-400);
  padding-left: var(--space-6);
  margin-bottom: var(--space-2);
  position: relative;
}

.card-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--secondary-green);
  font-weight: bold;
}

.card-cta {
  display: inline-flex;
  align-items: center;
  color: var(--primary-bright);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  transition: var(--transition-fast);
}

.card-cta:hover {
  color: var(--accent-cyan);
  transform: translateX(4px);
}
```

### Service Card Content (6 Equal Services)

#### **1. DATA CENTER SERVICES** (Infrastructure Specialty)
```
Icon: Server rack icon with connection points
Title: "Data Center Services"
Description: "Enterprise-grade data center design, deployment, and operations. From initial planning to ongoing maintenance."

Features:
- Rack & Stack Installation
- Data Center Build-Outs
- Commissioning & Decommissioning
- Cable Management & Labeling

Color Accent: var(--primary-bright) #3B82F6
```

#### **2. NETWORK MANAGEMENT** (Infrastructure Specialty)
```
Icon: Network topology icon with nodes
Title: "Network Management"
Description: "24/7 network operations center, Smart Hands support, and comprehensive network infrastructure management."

Features:
- 24/7 NOC Monitoring
- Smart Hands Services
- Wi-Fi Design & Deployment
- Network Troubleshooting

Color Accent: var(--accent-cyan) #06B6D4
```

#### **3. CLOUD & HYBRID IT** (Modern IT Service)
```
Icon: Cloud with infrastructure layers
Title: "Cloud & Hybrid IT"
Description: "Seamless cloud migration, hybrid infrastructure design, and multi-cloud management for modern enterprises."

Features:
- Cloud Migration & Strategy
- Hybrid Infrastructure Design
- Multi-Cloud Management
- Cloud Cost Optimization

Color Accent: var(--secondary-purple) #7C3AED
```

#### **4. CYBERSECURITY** (Modern IT Service)
```
Icon: Shield with lock
Title: "Cybersecurity"
Description: "Comprehensive security solutions protecting your infrastructure from physical layer to application level."

Features:
- Network Security Architecture
- Compliance & Risk Management
- Zero Trust Implementation
- Security Operations Center

Color Accent: var(--secondary-green) #10B981
```

#### **5. AI & AUTOMATION** (Modern IT Service)
```
Icon: Neural network / circuit brain
Title: "AI & Automation"
Description: "Intelligent automation and AI-driven operations to optimize your IT infrastructure and reduce operational overhead."

Features:
- AI-Driven Network Operations
- Infrastructure Automation
- AIOps & Predictive Analytics
- Automated Incident Response

Color Accent: var(--secondary-purple) #7C3AED
```

#### **6. MANAGED SERVICES** (Operational Service)
```
Icon: Headset with tools
Title: "Managed Services"
Description: "Complete IT operations management with 24/7 service desk, proactive monitoring, and asset lifecycle management."

Features:
- 24/7 Service Desk Support
- Proactive Monitoring & Alerts
- Asset & License Management
- ITIL-Based Service Delivery

Color Accent: var(--primary-bright) #3B82F6
```

---

## 5. VALUE PROPOSITION SECTION

### Layout: Two-Column Split (50/50)

```html
<section class="value-proposition">
  <div class="container">
    <div class="value-grid">

      <!-- LEFT: Infrastructure Foundation -->
      <div class="value-column infrastructure">
        <span class="value-badge">Our Foundation</span>
        <h2>Infrastructure Experts</h2>
        <p class="lead">
          Built on 15+ years of data center and network infrastructure experience
        </p>
        <ul class="value-list">
          <li>
            <strong>500+ Racks Deployed</strong>
            Enterprise data center installations worldwide
          </li>
          <li>
            <strong>Fiber Optic Specialists</strong>
            Certified technicians for complex installations
          </li>
          <li>
            <strong>24/7 Smart Hands</strong>
            On-site support at major data centers
          </li>
          <li>
            <strong>99.9% Uptime</strong>
            Proven reliability in mission-critical environments
          </li>
        </ul>
        <div class="value-image">
          <!-- Data center image -->
        </div>
      </div>

      <!-- RIGHT: Complete Solutions -->
      <div class="value-column solutions">
        <span class="value-badge">Our Breadth</span>
        <h2>Complete Solutions</h2>
        <p class="lead">
          From physical infrastructure to cloud and AI - we handle your entire IT ecosystem
        </p>
        <ul class="value-list">
          <li>
            <strong>End-to-End Coverage</strong>
            Physical, network, cloud, security, and AI services
          </li>
          <li>
            <strong>Single Point of Contact</strong>
            One team managing your complete IT stack
          </li>
          <li>
            <strong>Modern Technology Stack</strong>
            Cloud-native, AI-driven, security-first approach
          </li>
          <li>
            <strong>Enterprise Support</strong>
            24/7 NOC and service desk operations
          </li>
        </ul>
        <div class="value-image">
          <!-- Cloud/modern tech image -->
        </div>
      </div>

    </div>
  </div>
</section>
```

### Visual Treatment

```css
.value-proposition {
  background: linear-gradient(180deg, #0D1B2A 0%, #1E293B 100%);
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
}

.value-proposition::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(59, 130, 246, 0.3),
    transparent
  );
}

.value-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
}

.value-column {
  padding: var(--space-12);
}

.value-badge {
  display: inline-block;
  background: rgba(59, 130, 246, 0.1);
  color: var(--primary-bright);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  font-size: var(--text-small);
  font-weight: var(--weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-4);
}

.value-column h2 {
  font-size: var(--text-h1-lg);
  font-weight: var(--weight-black);
  color: white;
  margin-bottom: var(--space-4);
}

.value-column .lead {
  font-size: var(--text-h3);
  color: var(--gray-300);
  margin-bottom: var(--space-8);
  line-height: 1.5;
}

.value-list {
  list-style: none;
  margin-bottom: var(--space-8);
}

.value-list li {
  padding: var(--space-4) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.value-list li strong {
  display: block;
  color: white;
  font-size: var(--text-body-lg);
  margin-bottom: var(--space-1);
}

.value-list li {
  color: var(--gray-400);
  font-size: var(--text-small);
}

/* Visual Differentiation */
.infrastructure {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.infrastructure .value-badge {
  background: rgba(59, 130, 246, 0.1);
  color: var(--primary-bright);
}

.solutions .value-badge {
  background: rgba(124, 58, 237, 0.1);
  color: var(--secondary-purple);
}
```

---

## 6. EXPERTISE STACK VISUALIZATION

### Interactive Layer Diagram

```
"Your Entire IT Stack, Covered"

┌─────────────────────────────────────────┐
│  AI & AUTOMATION LAYER                  │ ← Hover reveals: AIOps, ML, Intelligence
├─────────────────────────────────────────┤
│  CLOUD & APPLICATIONS LAYER             │ ← Hover reveals: Multi-cloud, SaaS
├─────────────────────────────────────────┤
│  SECURITY & COMPLIANCE LAYER            │ ← Hover reveals: Zero Trust, SOC
├─────────────────────────────────────────┤
│  NETWORK & CONNECTIVITY LAYER           │ ← Hover reveals: SD-WAN, Wi-Fi, NOC
├─────────────────────────────────────────┤
│  INFRASTRUCTURE & DATA CENTER LAYER     │ ← Hover reveals: Rack/Stack, Fiber
└─────────────────────────────────────────┘
        ↑
    Foundation (emphasized with blue glow)
```

### Implementation Details

```html
<section class="expertise-stack">
  <div class="container">
    <h2>Your Entire IT Stack, Covered</h2>
    <p class="subtitle">
      From physical infrastructure to intelligent automation -
      comprehensive IT solutions built on a solid foundation
    </p>

    <div class="stack-diagram">

      <div class="stack-layer" data-layer="ai">
        <div class="layer-label">
          <span class="layer-number">05</span>
          <h3>AI & Automation</h3>
        </div>
        <div class="layer-details">
          <span>AIOps</span>
          <span>ML Operations</span>
          <span>Intelligent Automation</span>
        </div>
      </div>

      <div class="stack-layer" data-layer="cloud">
        <div class="layer-label">
          <span class="layer-number">04</span>
          <h3>Cloud & Applications</h3>
        </div>
        <div class="layer-details">
          <span>Multi-Cloud</span>
          <span>Hybrid IT</span>
          <span>SaaS Integration</span>
        </div>
      </div>

      <div class="stack-layer" data-layer="security">
        <div class="layer-label">
          <span class="layer-number">03</span>
          <h3>Security & Compliance</h3>
        </div>
        <div class="layer-details">
          <span>Zero Trust</span>
          <span>SOC Operations</span>
          <span>Compliance Management</span>
        </div>
      </div>

      <div class="stack-layer" data-layer="network">
        <div class="layer-label">
          <span class="layer-number">02</span>
          <h3>Network & Connectivity</h3>
        </div>
        <div class="layer-details">
          <span>24/7 NOC</span>
          <span>SD-WAN</span>
          <span>Wi-Fi Solutions</span>
        </div>
      </div>

      <div class="stack-layer foundation" data-layer="infrastructure">
        <div class="layer-label">
          <span class="layer-number">01</span>
          <h3>Infrastructure & Data Center</h3>
        </div>
        <div class="layer-details">
          <span>Rack & Stack</span>
          <span>Fiber Optic</span>
          <span>Smart Hands</span>
        </div>
      </div>

    </div>

    <div class="stack-message">
      <p>
        <strong>Built from the ground up.</strong>
        Our infrastructure expertise provides the reliable foundation
        for your complete IT transformation.
      </p>
    </div>

  </div>
</section>
```

```css
.expertise-stack {
  background: #0D1B2A;
  padding: var(--space-24) 0;
}

.stack-diagram {
  max-width: 800px;
  margin: var(--space-12) auto;
}

.stack-layer {
  background: linear-gradient(90deg,
    rgba(30, 41, 59, 0.6) 0%,
    rgba(15, 23, 42, 0.8) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: var(--space-6) var(--space-8);
  margin-bottom: var(--space-4);
  cursor: pointer;
  transition: var(--transition-base);
  position: relative;
  overflow: hidden;
}

.stack-layer::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: var(--primary-bright);
  opacity: 0;
  transition: var(--transition-base);
}

.stack-layer:hover {
  transform: translateX(8px);
  border-color: var(--primary-bright);
  box-shadow: var(--shadow-glow);
}

.stack-layer:hover::before {
  opacity: 1;
}

.stack-layer.foundation {
  background: linear-gradient(90deg,
    rgba(59, 130, 246, 0.15) 0%,
    rgba(30, 58, 138, 0.2) 100%
  );
  border-color: var(--primary-bright);
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
}

.stack-layer.foundation::before {
  opacity: 1;
  width: 6px;
}

.layer-label {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-3);
}

.layer-number {
  font-size: var(--text-tiny);
  color: var(--gray-500);
  font-weight: var(--weight-bold);
  font-family: var(--font-mono);
}

.layer-label h3 {
  font-size: var(--text-h3);
  color: white;
  font-weight: var(--weight-bold);
  margin: 0;
}

.layer-details {
  display: flex;
  gap: var(--space-6);
  flex-wrap: wrap;
  opacity: 0.7;
  transition: var(--transition-base);
}

.stack-layer:hover .layer-details {
  opacity: 1;
}

.layer-details span {
  font-size: var(--text-small);
  color: var(--gray-400);
  padding: var(--space-1) var(--space-3);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-sm);
}

.stack-message {
  text-align: center;
  margin-top: var(--space-12);
  padding: var(--space-8);
  background: rgba(59, 130, 246, 0.05);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.stack-message p {
  font-size: var(--text-body-lg);
  color: var(--gray-300);
  line-height: 1.6;
}

.stack-message strong {
  color: var(--primary-bright);
}
```

---

## 7. STATS & CAPABILITIES SECTION

### 4-Column Grid Layout

```html
<section class="stats-section">
  <div class="container">

    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-icon">
          <!-- Calendar/Clock icon -->
          <svg>...</svg>
        </div>
        <div class="stat-number">15+</div>
        <div class="stat-label">Years of Experience</div>
        <div class="stat-description">
          Proven expertise in enterprise IT infrastructure
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <!-- Server rack icon -->
          <svg>...</svg>
        </div>
        <div class="stat-number">500+</div>
        <div class="stat-label">Racks Deployed</div>
        <div class="stat-description">
          Enterprise data center installations worldwide
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <!-- Uptime/Chart icon -->
          <svg>...</svg>
        </div>
        <div class="stat-number">99.9%</div>
        <div class="stat-label">Uptime SLA</div>
        <div class="stat-description">
          Mission-critical reliability you can trust
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">
          <!-- 24/7 icon -->
          <svg>...</svg>
        </div>
        <div class="stat-number">24/7</div>
        <div class="stat-label">Support Available</div>
        <div class="stat-description">
          Round-the-clock NOC and service desk operations
        </div>
      </div>

    </div>

    <div class="capabilities-list">
      <h3>Core Capabilities That Set Us Apart</h3>
      <div class="capabilities-grid">
        <div class="capability-item">
          <span class="capability-icon">✓</span>
          <span>Certified Fiber Optic Technicians</span>
        </div>
        <div class="capability-item">
          <span class="capability-icon">✓</span>
          <span>ISO 27001 Compliant Operations</span>
        </div>
        <div class="capability-item">
          <span class="capability-icon">✓</span>
          <span>Multi-Cloud Architecture Certified</span>
        </div>
        <div class="capability-item">
          <span class="capability-icon">✓</span>
          <span>ITIL v4 Service Management</span>
        </div>
        <div class="capability-item">
          <span class="capability-icon">✓</span>
          <span>Smart Hands at Major Data Centers</span>
        </div>
        <div class="capability-item">
          <span class="capability-icon">✓</span>
          <span>24/7 Network Operations Center</span>
        </div>
      </div>
    </div>

  </div>
</section>
```

```css
.stats-section {
  background: linear-gradient(180deg, #1E293B 0%, #0D1B2A 100%);
  padding: var(--space-24) 0;
  position: relative;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-16);
}

.stat-card {
  text-align: center;
  padding: var(--space-8);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  transition: var(--transition-base);
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--primary-bright);
  transform: translateY(-4px);
}

.stat-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg,
    rgba(59, 130, 246, 0.2) 0%,
    rgba(6, 182, 212, 0.1) 100%
  );
  border-radius: var(--radius-md);
}

.stat-icon svg {
  width: 32px;
  height: 32px;
  color: var(--primary-bright);
}

.stat-number {
  font-size: 48px;
  font-weight: var(--weight-black);
  color: white;
  line-height: 1;
  margin-bottom: var(--space-2);
  background: linear-gradient(90deg,
    var(--primary-bright) 0%,
    var(--accent-cyan) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: var(--text-body);
  font-weight: var(--weight-semibold);
  color: white;
  margin-bottom: var(--space-2);
}

.stat-description {
  font-size: var(--text-small);
  color: var(--gray-400);
  line-height: 1.5;
}

.capabilities-list {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-12);
  background: rgba(59, 130, 246, 0.05);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.capabilities-list h3 {
  text-align: center;
  font-size: var(--text-h2);
  color: white;
  margin-bottom: var(--space-8);
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

.capability-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3);
  font-size: var(--text-body);
  color: var(--gray-300);
}

.capability-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondary-green);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .capabilities-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 8. PAGE-BY-PAGE CONTENT TEMPLATES

### HOMEPAGE (index.html)

**SEO Title:** "Complete IT Solutions & Data Center Services | Sajecy Solutions"

**Meta Description:** "Expert data center infrastructure, network management, cloud solutions, and 24/7 managed IT services. 15+ years experience, 500+ racks deployed, enterprise-grade reliability."

**H1 (Hidden/Screen reader):** "Data Center & Network Infrastructure Specialists with Complete IT Solutions"

**Sections:**
1. Rotating Hero (3 slides)
2. Trust Indicators Bar
3. Services Grid (6 equal services)
4. Value Proposition (Infrastructure + Solutions)
5. Expertise Stack Visualization
6. Stats & Capabilities
7. Client Testimonials
8. Final CTA
9. Footer

---

### SERVICES OVERVIEW PAGE (services.html)

**SEO Title:** "IT Services: Data Center, Network, Cloud & Security | Sajecy"

**Structure:**
```html
<!-- Hero -->
<section class="page-hero">
  <h1>Complete IT Solutions Built on Infrastructure Excellence</h1>
  <p>
    From physical data centers to cloud and AI automation -
    comprehensive technology services for modern enterprises
  </p>
</section>

<!-- Services Grid (Expanded) -->
<section class="services-detailed">

  <!-- Infrastructure Services (60% emphasis) -->
  <div class="service-category infrastructure-primary">
    <h2>Infrastructure & Operations</h2>
    <p class="category-intro">
      Our foundation. 15+ years of expertise in enterprise
      data center and network infrastructure.
    </p>

    <div class="service-cards-expanded">
      <!-- Data Center Services -->
      <!-- Network Management -->
    </div>
  </div>

  <!-- Complete IT Services (40% emphasis) -->
  <div class="service-category it-solutions">
    <h2>Complete IT Solutions</h2>
    <p class="category-intro">
      Modern technology services built on our infrastructure expertise -
      cloud, security, AI, and managed operations.
    </p>

    <div class="service-cards-expanded">
      <!-- Cloud & Hybrid IT -->
      <!-- Cybersecurity -->
      <!-- AI & Automation -->
      <!-- Managed Services -->
    </div>
  </div>

</section>

<!-- Why Choose Sajecy -->
<section class="why-choose">
  <h2>Why Choose Sajecy for Your IT Needs</h2>

  <div class="reasons-grid">
    <div class="reason">
      <h3>Infrastructure Foundation</h3>
      <p>
        Unlike pure software consultancies, we understand infrastructure
        from the ground up - ensuring your solutions are built on solid foundations.
      </p>
    </div>

    <div class="reason">
      <h3>Single Point of Contact</h3>
      <p>
        One team managing your entire IT stack - from racks to cloud -
        eliminating vendor coordination headaches.
      </p>
    </div>

    <div class="reason">
      <h3>24/7 Operations</h3>
      <p>
        Round-the-clock NOC, Smart Hands, and service desk support
        ensuring your infrastructure never sleeps.
      </p>
    </div>

    <div class="reason">
      <h3>Proven at Scale</h3>
      <p>
        500+ racks deployed, managing enterprise networks globally,
        with 99.9% uptime SLA.
      </p>
    </div>
  </div>
</section>
```

---

### INDIVIDUAL SERVICE PAGES (Template)

**Example: Data Center Services Page**

```html
<!-- Hero with Background Image -->
<section class="service-hero" style="background-image: url('data-center-bg.jpg')">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="service-badge">Infrastructure Services</span>
    <h1>Data Center Services</h1>
    <p class="lead">
      Enterprise-grade data center design, deployment, and operations
      backed by 15+ years of infrastructure expertise
    </p>
    <div class="hero-ctas">
      <a href="#contact" class="btn-primary">Request Quote</a>
      <a href="#details" class="btn-secondary">Learn More</a>
    </div>
  </div>
</section>

<!-- Service Overview -->
<section class="service-overview">
  <div class="container">
    <div class="overview-grid">

      <div class="overview-content">
        <h2>Comprehensive Data Center Solutions</h2>
        <p>
          From initial planning to ongoing maintenance, we deliver
          complete data center services for enterprises of all sizes.
        </p>
        <p>
          Our team of certified technicians brings decades of combined
          experience in rack & stack, structured cabling, fiber optics,
          and data center operations - ensuring your infrastructure
          is built right from day one.
        </p>
      </div>

      <div class="overview-stats">
        <div class="stat-item">
          <span class="stat-value">500+</span>
          <span class="stat-label">Racks Deployed</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">99.9%</span>
          <span class="stat-label">Uptime SLA</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">24/7</span>
          <span class="stat-label">Smart Hands Support</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Key Services -->
<section class="key-services">
  <div class="container">
    <h2>What We Offer</h2>

    <div class="services-accordion">

      <div class="service-item">
        <h3>Rack & Stack Installation</h3>
        <ul>
          <li>Professional equipment installation and mounting</li>
          <li>Proper weight distribution and airflow management</li>
          <li>Detailed labeling and documentation</li>
          <li>Cable management and organization</li>
        </ul>
      </div>

      <div class="service-item">
        <h3>Data Center Build-Outs</h3>
        <ul>
          <li>Complete data center design and planning</li>
          <li>Power and cooling infrastructure</li>
          <li>Structured cabling systems</li>
          <li>Physical security implementation</li>
        </ul>
      </div>

      <div class="service-item">
        <h3>Commissioning & Decommissioning</h3>
        <ul>
          <li>New equipment commissioning and validation</li>
          <li>Secure data wiping and disposal</li>
          <li>Asset recovery and recycling</li>
          <li>Chain of custody documentation</li>
        </ul>
      </div>

      <div class="service-item">
        <h3>Ongoing Maintenance & Support</h3>
        <ul>
          <li>24/7 Smart Hands services</li>
          <li>Preventive maintenance programs</li>
          <li>Emergency response and troubleshooting</li>
          <li>Equipment moves, adds, and changes</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<!-- Process -->
<section class="service-process">
  <div class="container">
    <h2>Our Process</h2>

    <div class="process-steps">
      <div class="step">
        <span class="step-number">01</span>
        <h3>Assessment & Planning</h3>
        <p>Detailed site survey and requirements analysis</p>
      </div>
      <div class="step">
        <span class="step-number">02</span>
        <h3>Design & Engineering</h3>
        <p>Custom design tailored to your needs and budget</p>
      </div>
      <div class="step">
        <span class="step-number">03</span>
        <h3>Implementation</h3>
        <p>Professional installation with minimal disruption</p>
      </div>
      <div class="step">
        <span class="step-number">04</span>
        <h3>Testing & Validation</h3>
        <p>Comprehensive testing and quality assurance</p>
      </div>
      <div class="step">
        <span class="step-number">05</span>
        <h3>Ongoing Support</h3>
        <p>24/7 maintenance and optimization</p>
      </div>
    </div>
  </div>
</section>

<!-- Related Services -->
<section class="related-services">
  <div class="container">
    <h2>Complementary Services</h2>
    <p>
      Our data center expertise integrates seamlessly with our
      complete IT solutions portfolio
    </p>

    <div class="related-cards">
      <a href="/services/network-management" class="related-card">
        <h3>Network Management</h3>
        <p>24/7 NOC and Smart Hands support for your infrastructure</p>
      </a>
      <a href="/services/cloud-hybrid" class="related-card">
        <h3>Cloud & Hybrid IT</h3>
        <p>Integrate your data center with cloud solutions</p>
      </a>
      <a href="/services/cybersecurity" class="related-card">
        <h3>Cybersecurity</h3>
        <p>Protect your physical and digital infrastructure</p>
      </a>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="service-cta">
  <div class="container">
    <h2>Ready to Build or Upgrade Your Data Center?</h2>
    <p>Let's discuss your infrastructure needs</p>
    <a href="/contact" class="btn-primary-lg">Get Started</a>
  </div>
</section>
```

**Note:** All 6 service pages follow this same template structure, with content customized for each service. Infrastructure services (Data Center, Network Management) emphasize physical expertise while mentioning complete IT capabilities. IT services (Cloud, Security, AI, Managed) emphasize modern technology while mentioning infrastructure foundation.

---

### ABOUT / WHY SAJECY PAGE

**SEO Title:** "About Sajecy Solutions - Infrastructure Experts, Complete IT Solutions"

```html
<!-- Hero -->
<section class="about-hero">
  <h1>Infrastructure Experts. Complete IT Solutions.</h1>
  <p class="lead">
    15+ years of data center and network infrastructure expertise
    evolved into comprehensive IT services for modern enterprises
  </p>
</section>

<!-- Our Story -->
<section class="our-story">
  <div class="container">
    <div class="story-grid">

      <div class="story-content">
        <h2>Built from the Ground Up</h2>
        <p>
          Sajecy Solutions began with a simple mission: deliver
          enterprise-grade data center services with unmatched
          attention to detail and reliability.
        </p>
        <p>
          Over 15 years, we've deployed 500+ racks, installed
          thousands of fiber connections, and managed critical
          infrastructure for enterprises worldwide. This foundation
          gave us deep expertise in what makes technology truly reliable.
        </p>
        <p>
          Today, we've evolved beyond infrastructure. While our roots
          remain in data centers and networks, we now deliver complete
          IT solutions - cloud migration, cybersecurity, AI automation,
          and 24/7 managed services - all built on the rock-solid
          foundation that made our reputation.
        </p>
        <p>
          <strong>
            We're infrastructure specialists who understand your
            complete IT needs.
          </strong>
        </p>
      </div>

      <div class="story-visual">
        <div class="timeline">
          <div class="timeline-item">
            <span class="year">2010</span>
            <span class="milestone">Founded - Data Center Focus</span>
          </div>
          <div class="timeline-item">
            <span class="year">2015</span>
            <span class="milestone">500+ Racks Milestone</span>
          </div>
          <div class="timeline-item">
            <span class="year">2018</span>
            <span class="milestone">24/7 NOC Established</span>
          </div>
          <div class="timeline-item">
            <span class="year">2020</span>
            <span class="milestone">Cloud Services Launch</span>
          </div>
          <div class="timeline-item">
            <span class="year">2023</span>
            <span class="milestone">AI & Automation Division</span>
          </div>
          <div class="timeline-item current">
            <span class="year">2025</span>
            <span class="milestone">Complete IT Solutions Portfolio</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- What Makes Us Different -->
<section class="differentiators">
  <div class="container">
    <h2>What Makes Us Different</h2>

    <div class="diff-grid">

      <div class="diff-item">
        <div class="diff-icon">🏗️</div>
        <h3>Infrastructure DNA</h3>
        <p>
          We didn't add infrastructure as an afterthought - it's
          where we started. This means your cloud migration, security
          architecture, and network automation are built by people
          who truly understand physical and network infrastructure.
        </p>
      </div>

      <div class="diff-item">
        <div class="diff-icon">🔧</div>
        <h3>Hands-On Expertise</h3>
        <p>
          Our team includes certified fiber optic technicians, network
          engineers, and cloud architects who can literally rack your
          servers, run your cables, and architect your hybrid cloud -
          no handoffs to subcontractors.
        </p>
      </div>

      <div class="diff-item">
        <div class="diff-icon">🎯</div>
        <h3>Single Point of Contact</h3>
        <p>
          Stop coordinating between your cabling vendor, network team,
          cloud provider, and security consultants. We handle your
          complete IT stack with one team, one point of contact,
          one SLA.
        </p>
      </div>

      <div class="diff-item">
        <div class="diff-icon">⏰</div>
        <h3>Always Available</h3>
        <p>
          24/7/365 NOC operations, Smart Hands at major data centers,
          and round-the-clock service desk support. When you need us,
          we're there - not an answering service.
        </p>
      </div>

      <div class="diff-item">
        <div class="diff-icon">📊</div>
        <h3>Proven at Scale</h3>
        <p>
          500+ racks deployed. Enterprise networks spanning continents.
          99.9% uptime SLA. These aren't aspirations - they're our
          track record.
        </p>
      </div>

      <div class="diff-item">
        <div class="diff-icon">🚀</div>
        <h3>Modern & Forward-Thinking</h3>
        <p>
          Just because we started in data centers doesn't mean we're
          stuck in the past. We embrace cloud-native, AI-driven, and
          automation-first approaches - with the wisdom to know when
          legacy infrastructure is actually the right choice.
        </p>
      </div>

    </div>
  </div>
</section>

<!-- Our Approach -->
<section class="our-approach">
  <div class="container">
    <h2>Our Approach: Foundation First, Innovation Always</h2>

    <div class="approach-content">
      <p>
        We believe great technology starts with great infrastructure.
        Whether we're migrating you to the cloud, implementing Zero
        Trust security, or deploying AI-driven operations, we begin
        by ensuring your foundation is solid.
      </p>

      <div class="approach-principles">
        <div class="principle">
          <h3>Reliability Over Hype</h3>
          <p>We choose proven solutions over trendy technologies</p>
        </div>
        <div class="principle">
          <h3>Proactive, Not Reactive</h3>
          <p>24/7 monitoring and maintenance prevents problems</p>
        </div>
        <div class="principle">
          <h3>Transparent Communication</h3>
          <p>No jargon, no surprises - clear updates always</p>
        </div>
        <div class="principle">
          <h3>Long-Term Partnership</h3>
          <p>We're in this for your success, not quick projects</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Certifications & Partnerships -->
<section class="credentials">
  <div class="container">
    <h2>Certifications & Partnerships</h2>

    <div class="creds-grid">
      <div class="cred-category">
        <h3>Infrastructure</h3>
        <ul>
          <li>Certified Fiber Optic Technicians</li>
          <li>BICSI Certified</li>
          <li>Structured Cabling Standards</li>
        </ul>
      </div>

      <div class="cred-category">
        <h3>Cloud & Platforms</h3>
        <ul>
          <li>AWS Advanced Partner</li>
          <li>Microsoft Azure Certified</li>
          <li>Google Cloud Partner</li>
        </ul>
      </div>

      <div class="cred-category">
        <h3>Security</h3>
        <ul>
          <li>ISO 27001 Compliant</li>
          <li>SOC 2 Type II</li>
          <li>CompTIA Security+</li>
        </ul>
      </div>

      <div class="cred-category">
        <h3>Operations</h3>
        <ul>
          <li>ITIL v4 Certified</li>
          <li>PMP Project Management</li>
          <li>Six Sigma Processes</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="about-cta">
  <div class="container">
    <h2>Let's Build Something Reliable Together</h2>
    <p>
      Whether you need help with data center infrastructure,
      complete IT transformation, or anything in between
    </p>
    <a href="/contact" class="btn-primary-lg">Start a Conversation</a>
  </div>
</section>
```

---

### CONTACT PAGE

**SEO Title:** "Contact Sajecy Solutions - Get Started with Your IT Project"

```html
<!-- Hero -->
<section class="contact-hero">
  <h1>Let's Discuss Your IT Needs</h1>
  <p>
    From data center projects to complete IT transformation -
    we're here to help
  </p>
</section>

<!-- Contact Options -->
<section class="contact-options">
  <div class="container">

    <div class="contact-grid">

      <!-- Form -->
      <div class="contact-form-section">
        <h2>Send Us a Message</h2>

        <form class="contact-form">

          <div class="form-group">
            <label>I'm interested in:</label>
            <select name="service_interest">
              <option value="">Select a service area</option>
              <option value="data-center">Data Center Services</option>
              <option value="network">Network Management</option>
              <option value="cloud">Cloud & Hybrid IT</option>
              <option value="security">Cybersecurity</option>
              <option value="ai">AI & Automation</option>
              <option value="managed">Managed Services</option>
              <option value="general">General Inquiry</option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>First Name *</label>
              <input type="text" name="first_name" required>
            </div>
            <div class="form-group">
              <label>Last Name *</label>
              <input type="text" name="last_name" required>
            </div>
          </div>

          <div class="form-group">
            <label>Email Address *</label>
            <input type="email" name="email" required>
          </div>

          <div class="form-group">
            <label>Company</label>
            <input type="text" name="company">
          </div>

          <div class="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone">
          </div>

          <div class="form-group">
            <label>Tell us about your project *</label>
            <textarea name="message" rows="6" required></textarea>
          </div>

          <div class="form-group">
            <label>Timeline</label>
            <select name="timeline">
              <option value="immediate">Immediate need</option>
              <option value="1-3months">1-3 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="planning">Just planning</option>
            </select>
          </div>

          <button type="submit" class="btn-primary">
            Send Message
          </button>

        </form>
      </div>

      <!-- Contact Info & Quick Links -->
      <div class="contact-info-section">

        <div class="info-card">
          <h3>Direct Contact</h3>
          <div class="info-item">
            <span class="info-icon">📧</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:info@sajecysolutions.com">
                info@sajecysolutions.com
              </a>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
          <div class="info-item">
            <span class="info-icon">⏰</span>
            <div>
              <strong>24/7 Emergency Support</strong>
              <a href="tel:+1234567899">+1 (234) 567-899</a>
            </div>
          </div>
        </div>

        <div class="info-card">
          <h3>Quick Links</h3>
          <ul class="quick-links">
            <li>
              <a href="/services">View All Services</a>
            </li>
            <li>
              <a href="/services/data-center">Data Center Services</a>
            </li>
            <li>
              <a href="/services/network">Network Management</a>
            </li>
            <li>
              <a href="/about">About Sajecy</a>
            </li>
          </ul>
        </div>

        <div class="info-card">
          <h3>Support Hours</h3>
          <div class="hours">
            <div class="hours-item">
              <strong>Sales & Consultations</strong>
              <span>Mon-Fri: 9am - 6pm EST</span>
            </div>
            <div class="hours-item">
              <strong>Technical Support</strong>
              <span>24/7/365</span>
            </div>
            <div class="hours-item">
              <strong>Smart Hands</strong>
              <span>24/7 at major data centers</span>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

<!-- Service-Specific CTAs -->
<section class="contact-services">
  <div class="container">
    <h2>Looking for Something Specific?</h2>

    <div class="service-contact-cards">

      <div class="service-contact-card">
        <h3>Emergency Support</h3>
        <p>Infrastructure down? We're available 24/7</p>
        <a href="tel:+1234567899" class="btn-secondary">
          Call Emergency Line
        </a>
      </div>

      <div class="service-contact-card">
        <h3>Request a Quote</h3>
        <p>Get pricing for your specific project</p>
        <a href="/quote" class="btn-secondary">
          Quote Form
        </a>
      </div>

      <div class="service-contact-card">
        <h3>Schedule Consultation</h3>
        <p>Book a free 30-minute strategy call</p>
        <a href="/consultation" class="btn-secondary">
          Book Now
        </a>
      </div>

    </div>
  </div>
</section>
```

---

## 9. NAVIGATION & FOOTER STRUCTURE

### Primary Navigation

```html
<nav class="main-nav">
  <div class="nav-container">

    <!-- Logo -->
    <a href="/" class="nav-logo">
      <img src="/logo.svg" alt="Sajecy Solutions">
    </a>

    <!-- Desktop Menu -->
    <ul class="nav-menu">

      <!-- Services Mega Menu -->
      <li class="nav-item has-dropdown">
        <a href="/services">Services</a>

        <div class="mega-menu">
          <div class="mega-menu-content">

            <div class="menu-column">
              <h4>Infrastructure Services</h4>
              <ul>
                <li><a href="/services/data-center">Data Center Services</a></li>
                <li><a href="/services/network">Network Management</a></li>
              </ul>
            </div>

            <div class="menu-column">
              <h4>Modern IT Solutions</h4>
              <ul>
                <li><a href="/services/cloud">Cloud & Hybrid IT</a></li>
                <li><a href="/services/security">Cybersecurity</a></li>
                <li><a href="/services/ai">AI & Automation</a></li>
              </ul>
            </div>

            <div class="menu-column">
              <h4>Operations</h4>
              <ul>
                <li><a href="/services/managed">Managed Services</a></li>
                <li><a href="/services/noc">24/7 NOC</a></li>
                <li><a href="/services/smart-hands">Smart Hands</a></li>
              </ul>
            </div>

            <div class="menu-column featured">
              <h4>Featured</h4>
              <div class="featured-card">
                <span class="badge">Most Popular</span>
                <h5>Complete IT Stack</h5>
                <p>End-to-end solutions from infrastructure to cloud</p>
                <a href="/solutions/complete-it">Learn More →</a>
              </div>
            </div>

          </div>
        </div>
      </li>

      <li class="nav-item">
        <a href="/solutions">Solutions</a>
      </li>

      <li class="nav-item">
        <a href="/about">About</a>
      </li>

      <li class="nav-item">
        <a href="/contact">Contact</a>
      </li>

    </ul>

    <!-- CTA Button -->
    <div class="nav-cta">
      <a href="/quote" class="btn-primary">Get Quote</a>
    </div>

    <!-- Mobile Menu Toggle -->
    <button class="mobile-menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </button>

  </div>
</nav>
```

### Footer

```html
<footer class="main-footer">
  <div class="footer-container">

    <!-- Top Section -->
    <div class="footer-top">

      <div class="footer-column brand">
        <img src="/logo.svg" alt="Sajecy Solutions" class="footer-logo">
        <p>
          Data Center & Network Infrastructure Specialists
          Delivering Complete IT Solutions
        </p>
        <div class="social-links">
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
          <a href="#" aria-label="Facebook">Facebook</a>
        </div>
      </div>

      <div class="footer-column">
        <h4>Infrastructure Services</h4>
        <ul>
          <li><a href="/services/data-center">Data Center Services</a></li>
          <li><a href="/services/network">Network Management</a></li>
          <li><a href="/services/fiber-optic">Fiber Optic Installation</a></li>
          <li><a href="/services/smart-hands">Smart Hands</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>IT Solutions</h4>
        <ul>
          <li><a href="/services/cloud">Cloud & Hybrid IT</a></li>
          <li><a href="/services/security">Cybersecurity</a></li>
          <li><a href="/services/ai">AI & Automation</a></li>
          <li><a href="/services/managed">Managed Services</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">About Sajecy</a></li>
          <li><a href="/why-sajecy">Why Choose Us</a></li>
          <li><a href="/case-studies">Case Studies</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Contact</h4>
        <ul>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/quote">Request Quote</a></li>
          <li><a href="tel:+1234567890">+1 (234) 567-890</a></li>
          <li><a href="mailto:info@sajecysolutions.com">Email Us</a></li>
        </ul>
        <div class="emergency-contact">
          <strong>24/7 Emergency:</strong>
          <a href="tel:+1234567899">+1 (234) 567-899</a>
        </div>
      </div>

    </div>

    <!-- Bottom Section -->
    <div class="footer-bottom">
      <div class="footer-legal">
        <p>&copy; 2025 Sajecy Solutions. All rights reserved.</p>
        <ul class="legal-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/security">Security</a></li>
        </ul>
      </div>
      <div class="footer-badges">
        <span class="badge">ISO 27001</span>
        <span class="badge">SOC 2 Type II</span>
        <span class="badge">ITIL v4</span>
      </div>
    </div>

  </div>
</footer>
```

---

## 10. COMPONENT STATE SPECIFICATIONS

### Button States

```css
/* Primary Button */
.btn-primary {
  background: linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%);
  color: white;
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 12px 32px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: white;
  color: #0D1B2A;
}
```

### Form Input States

```css
.form-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  transition: all 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: #3B82F6;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-input.error {
  border-color: #EF4444;
}

.form-input.success {
  border-color: #10B981;
}
```

### Card Hover States

```css
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.card:active {
  transform: translateY(-4px);
}
```

### Loading States

```css
.loading-skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## 11. RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */

/* Base: 320px - 639px (Mobile) */
/* Default styles are mobile */

/* Small Tablets: 640px+ */
@media (min-width: 640px) {
  .container { max-width: 640px; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Tablets: 768px+ */
@media (min-width: 768px) {
  .container { max-width: 768px; }
  .value-grid { grid-template-columns: 1fr 1fr; }
}

/* Desktop: 1024px+ */
@media (min-width: 1024px) {
  .container { max-width: 1024px; }
  .services-grid { grid-template-columns: repeat(3, 1fr); }
  .stats-grid { grid-template-columns: repeat(4, 1fr); }

  /* Desktop typography */
  :root {
    --text-hero: 56px / 64px;
    --text-h1: 48px / 56px;
  }
}

/* Large Desktop: 1280px+ */
@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}

/* XL Desktop: 1536px+ */
@media (min-width: 1536px) {
  .container { max-width: 1536px; }
}
```

---

## 12. ANIMATION & MICRO-INTERACTIONS

### Hero Carousel Transitions

```javascript
// Auto-rotate every 7 seconds
const heroSlides = [slide1, slide2, slide3];
let currentSlide = 0;

setInterval(() => {
  currentSlide = (currentSlide + 1) % 3;
  transitionSlide(currentSlide);
}, 7000);

function transitionSlide(index) {
  // Fade out current
  // Fade in next
  // Update indicators
}
```

### Scroll Animations

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Button Hover Effects

```css
.btn-primary {
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-primary:hover::before {
  width: 300px;
  height: 300px;
}
```

### Service Card Entrance

```css
.service-card {
  animation: cardEntrance 0.6s ease-out;
  animation-fill-mode: both;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }
.service-card:nth-child(5) { animation-delay: 0.5s; }
.service-card:nth-child(6) { animation-delay: 0.6s; }

@keyframes cardEntrance {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 13. ACCESSIBILITY SPECIFICATIONS

### WCAG 2.1 AA Compliance

```html
<!-- Semantic HTML -->
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    <!-- Navigation items -->
  </nav>
</header>

<main role="main">
  <!-- Main content -->
</main>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>

<!-- Skip Link -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- ARIA Labels -->
<button aria-label="Open menu" aria-expanded="false">
  <span aria-hidden="true">☰</span>
</button>

<!-- Form Labels -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required
       aria-required="true" aria-describedby="email-help">
<span id="email-help" class="help-text">
  We'll never share your email
</span>

<!-- Images -->
<img src="hero.jpg" alt="Data center with rows of servers"
     role="img">
```

### Keyboard Navigation

```css
/* Focus Styles */
*:focus {
  outline: 3px solid #3B82F6;
  outline-offset: 2px;
}

.btn:focus {
  outline: 3px solid #3B82F6;
  outline-offset: 2px;
}

/* Skip Link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #3B82F6;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Color Contrast Ratios

```
Text on Dark Backgrounds:
- White (#FFFFFF) on #0D1B2A = 15.8:1 ✓ (AAA)
- Gray-300 (#CBD5E1) on #0D1B2A = 11.2:1 ✓ (AAA)
- Primary Blue (#3B82F6) on #0D1B2A = 5.8:1 ✓ (AA)

Interactive Elements:
- CTA buttons have 4.5:1 minimum contrast ✓
- Links have clear focus indicators ✓
- Form inputs have visible borders ✓
```

---

## 14. PERFORMANCE OPTIMIZATION

### Image Optimization

```html
<!-- Responsive Images -->
<picture>
  <source
    media="(min-width: 1024px)"
    srcset="hero-desktop.webp 1920w, hero-desktop-2x.webp 3840w"
    type="image/webp">
  <source
    media="(min-width: 640px)"
    srcset="hero-tablet.webp 1024w, hero-tablet-2x.webp 2048w"
    type="image/webp">
  <img
    src="hero-mobile.webp"
    srcset="hero-mobile-2x.webp 2x"
    alt="Enterprise data center"
    loading="lazy"
    width="1920"
    height="1080">
</picture>
```

### CSS Optimization

```css
/* Critical CSS - Inline in <head> */
/* Contains above-the-fold styles */

/* Non-critical CSS - Load async */
<link rel="preload" href="/styles/main.css" as="style"
      onload="this.onload=null;this.rel='stylesheet'">
<noscript>
  <link rel="stylesheet" href="/styles/main.css">
</noscript>
```

### JavaScript Optimization

```html
<!-- Defer non-critical JS -->
<script src="/js/main.js" defer></script>

<!-- Async for analytics -->
<script src="/js/analytics.js" async></script>

<!-- Lazy load components -->
<script>
  // Intersection Observer for lazy loading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadComponent(entry.target);
      }
    });
  });
</script>
```

### Performance Targets

```
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

Total Page Weight:
- HTML: ~50KB (gzipped)
- CSS: ~30KB (gzipped)
- JS: ~80KB (gzipped)
- Images: ~300KB (with lazy loading)
- Total Initial Load: ~500KB
```

---

## 15. IMPLEMENTATION PLAN

### Phase 1: Foundation (Week 1)
- [ ] Setup design system (colors, typography, spacing)
- [ ] Create base components (buttons, cards, forms)
- [ ] Build layout grid and containers
- [ ] Implement navigation and footer
- [ ] Setup responsive breakpoints

### Phase 2: Homepage (Week 2)
- [ ] Hero carousel with 3 rotating slides
- [ ] 6 service cards with equal presentation
- [ ] Value proposition split section
- [ ] Expertise stack visualization
- [ ] Stats and capabilities section
- [ ] Testimonials carousel

### Phase 3: Service Pages (Week 3)
- [ ] Service overview page with categorized services
- [ ] Individual service page template
- [ ] Create content for all 6 service pages
- [ ] Related services cross-linking
- [ ] Service-specific CTAs

### Phase 4: About & Contact (Week 4)
- [ ] About page with timeline and differentiators
- [ ] Contact page with form and info cards
- [ ] Quote request flow
- [ ] Consultation booking system

### Phase 5: Polish & Launch (Week 5)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verification
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance optimization
- [ ] SEO meta tags and structured data
- [ ] Analytics setup
- [ ] Final QA and launch

---

## 16. CONTENT TONE & VOICE GUIDELINES

### Brand Voice Attributes

**Confident, Not Arrogant**
- ✓ "We've deployed 500+ racks for enterprises worldwide"
- ✗ "We're the best in the industry and no one compares"

**Technical, But Accessible**
- ✓ "24/7 Network Operations Center monitoring your infrastructure"
- ✗ "BGP route optimization with OSPF failover mechanisms"

**Helpful, Not Pushy**
- ✓ "Let's discuss your infrastructure needs"
- ✗ "Call now for limited-time pricing!"

**Experienced, Not Old-Fashioned**
- ✓ "15+ years of infrastructure expertise meets modern cloud solutions"
- ✗ "We've been around since 2010 doing things the old way"

### Writing Style

**Headlines:**
- Active voice
- Clear benefit
- 8-12 words maximum
- No jargon without context

**Body Copy:**
- Short paragraphs (2-3 sentences)
- Bullet points for features
- One idea per paragraph
- Second-person ("you") perspective

**CTAs:**
- Action-oriented verbs
- Clear expectation
- 2-4 words ideal
- Examples: "Get Started," "Request Quote," "Learn More"

---

## 17. SEO STRATEGY

### Primary Keywords (60% Infrastructure)

**High Priority:**
- Data center services
- Data center rack and stack
- Network operations center (NOC)
- Smart hands services
- Fiber optic installation
- Data center build out

**Secondary Priority:**
- Network infrastructure management
- Enterprise data center solutions
- 24/7 NOC services
- Data center commissioning

### Secondary Keywords (40% Complete IT)

**High Priority:**
- IT infrastructure services
- Managed IT services
- Cloud migration services
- Enterprise cybersecurity
- IT automation solutions

**Secondary Priority:**
- Hybrid cloud infrastructure
- Network security services
- AI-driven IT operations
- Complete IT solutions

### On-Page SEO Structure

```html
<!-- Homepage -->
<title>Complete IT Solutions & Data Center Services | Sajecy</title>
<meta name="description" content="Expert data center infrastructure,
network management, cloud solutions & 24/7 managed IT services.
15+ years experience, 500+ racks deployed, 99.9% uptime.">

<!-- Schema Markup -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sajecy Solutions",
  "description": "Data Center & Network Infrastructure Specialists",
  "url": "https://www.sajecysolutions.com",
  "logo": "https://www.sajecysolutions.com/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/sajecy",
    "https://twitter.com/sajecy"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-234-567-890",
    "contactType": "customer service",
    "availableLanguage": ["English"],
    "areaServed": "US"
  }
}
</script>
```

---

## 18. CONVERSION OPTIMIZATION

### Primary Conversion Goals

1. **Quote Requests** (Primary)
   - Forms on every service page
   - Floating "Get Quote" button
   - Exit-intent popup with quote offer

2. **Consultation Bookings**
   - Calendar integration
   - 30-minute free strategy call
   - Automated email confirmation

3. **Phone Calls** (High Intent)
   - Click-to-call on mobile
   - 24/7 emergency line prominently displayed
   - Call tracking for ROI measurement

4. **Contact Form Submissions**
   - Service-specific forms
   - Progress indicators for long forms
   - Thank you page with next steps

### Trust Building Elements

```html
<!-- Trust Bar (Below Hero) -->
<div class="trust-indicators">
  <div class="trust-item">
    <strong>15+</strong>
    <span>Years Experience</span>
  </div>
  <div class="trust-item">
    <strong>500+</strong>
    <span>Racks Deployed</span>
  </div>
  <div class="trust-item">
    <strong>99.9%</strong>
    <span>Uptime SLA</span>
  </div>
  <div class="trust-item">
    <strong>24/7</strong>
    <span>Support</span>
  </div>
  <div class="trust-item">
    <strong>ISO 27001</strong>
    <span>Certified</span>
  </div>
</div>

<!-- Social Proof -->
<div class="client-logos">
  <p>Trusted by leading enterprises</p>
  <!-- Client logos -->
</div>

<!-- Guarantees -->
<div class="guarantees">
  <div class="guarantee">
    <span class="icon">✓</span>
    <span>99.9% Uptime SLA</span>
  </div>
  <div class="guarantee">
    <span class="icon">🔒</span>
    <span>SOC 2 Type II Compliant</span>
  </div>
  <div class="guarantee">
    <span class="icon">⏰</span>
    <span>24/7 Emergency Response</span>
  </div>
</div>
```

### CTA Hierarchy

**Primary CTAs** (Most prominent)
- "Get Quote"
- "Request Consultation"
- "Call Now" (mobile)

**Secondary CTAs**
- "Learn More"
- "View Services"
- "Contact Us"

**Tertiary CTAs**
- "Download Guide"
- "See Case Studies"
- Social sharing

---

## 19. DARK MODE IMPLEMENTATION

### Color Adjustments

```css
/* Light Mode (Optional) */
:root[data-theme="light"] {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --text-primary: #0F172A;
  --text-secondary: #64748B;
}

/* Dark Mode (Default) */
:root,
:root[data-theme="dark"] {
  --bg-primary: #0D1B2A;
  --bg-secondary: #1E293B;
  --text-primary: #FFFFFF;
  --text-secondary: #CBD5E1;
}

/* Toggle */
.theme-toggle {
  /* Position in nav or footer */
}
```

---

## 20. FINAL CHECKLIST

### Design Completion
- [ ] All color values defined and documented
- [ ] Typography scale implemented across all sizes
- [ ] Spacing system consistently applied
- [ ] Component library complete with all states
- [ ] Responsive breakpoints tested
- [ ] Dark theme fully functional

### Content Completion
- [ ] Homepage copy finalized
- [ ] All 6 service pages written
- [ ] About page content complete
- [ ] Contact page with all forms
- [ ] Footer links and information
- [ ] Meta descriptions for all pages

### Technical Implementation
- [ ] HTML semantic structure
- [ ] CSS optimized and organized
- [ ] JavaScript functional and performant
- [ ] Images optimized (WebP format)
- [ ] Fonts loaded efficiently
- [ ] Analytics tracking setup

### Quality Assurance
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness (iPhone, iPad, Android)
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] Performance targets met (Lighthouse score > 90)
- [ ] SEO optimization complete
- [ ] Forms tested and functional

### Launch Preparation
- [ ] Domain and hosting configured
- [ ] SSL certificate installed
- [ ] CDN setup for assets
- [ ] Backup system in place
- [ ] Monitoring and alerting configured
- [ ] Launch date scheduled

---

## SUMMARY: THE BALANCED APPROACH

This redesign strategy achieves the critical balance:

**60% Infrastructure Emphasis**
- Hero slide dedicated to data center services
- Infrastructure services listed first
- Visual emphasis on data center imagery
- Stats highlighting infrastructure experience
- About page leads with infrastructure story

**40% Complete IT Solutions**
- Hero slides for broad IT and 24/7 services
- Modern IT services equally represented
- Cloud, security, and AI prominently featured
- Messaging emphasizes complete solutions
- Visual balance between infrastructure and IT

**Key Positioning Statement:**
"We're data center and network infrastructure specialists who evolved into complete IT solution providers. Our foundation gives us unique insight into building reliable, scalable technology ecosystems."

**Competitive Advantage:**
Unlike pure infrastructure companies (limited scope) or pure IT consultancies (no hands-on experience), Sajecy offers both physical infrastructure expertise AND modern IT solutions - a rare combination that appeals to enterprises needing comprehensive, reliable technology partners.

**Implementation Priority:**
Start with homepage to establish positioning, then service pages to detail offerings, followed by about page to tell the story. This phased approach allows testing and refinement of the balanced messaging before full site launch.

---

**Document Version:** 1.0
**Last Updated:** 2025-10-19
**Next Review:** After Phase 1 implementation
**Owner:** Sajecy Solutions Design Team