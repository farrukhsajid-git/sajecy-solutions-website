# Sajecy Solutions - Brand Repositioning Document

**Last Updated:** October 19, 2025
**Status:** ACTIVE - Complete Website Redesign Required
**Priority:** URGENT - Incorrect brand positioning currently live

---

## Executive Summary

Sajecy Solutions is being repositioned from a generic IT services company to a **Data Center and Networking Infrastructure Specialist**. This document establishes the correct brand identity, visual system, messaging framework, and content strategy to reflect our true capabilities and market positioning.

**Core Positioning Statement:**
*"Sajecy Solutions designs, builds, and operates enterprise data center and network infrastructure. We are the physical foundation specialists who ensure your critical infrastructure runs 24/7."*

---

## Table of Contents

1. [Brand Foundation](#brand-foundation)
2. [Visual Identity System](#visual-identity-system)
3. [Service Architecture](#service-architecture)
4. [Messaging Framework](#messaging-framework)
5. [Content Templates](#content-templates)
6. [Visual Guidelines](#visual-guidelines)
7. [Implementation Roadmap](#implementation-roadmap)

---

## Brand Foundation

### Purpose
**Why we exist:**
To provide the physical and network infrastructure foundation that enables enterprise digital transformation.

### Vision
**Where we're going:**
To be the trusted infrastructure partner for enterprises who need expert data center and network operations they can rely on 24/7.

### Mission
**How we'll get there:**
By delivering end-to-end infrastructure services—from design and build to run and optimize—backed by certified specialists and always-on support.

### Core Values

1. **Expertise First**
   We don't just manage infrastructure—we build it. Our team holds industry certifications in fiber optics, structured cabling, and network engineering.

2. **Always Available**
   24/7/365 operations through our NOC and Smart Hands services. When infrastructure fails, we're already responding.

3. **Physical Meets Digital**
   We understand both Layer 1 (physical) and Layer 3 (network), delivering complete solutions from cable to configuration.

4. **Enterprise-Grade Reliability**
   Hyperscale data center experience applied to every project, regardless of size.

5. **End-to-End Ownership**
   Design → Build → Run. One partner, complete lifecycle accountability.

### Brand Personality

**We are:**
- **Confident & Experienced** - Not boastful, but quietly competent
- **Hands-On & Practical** - We're in the data center, not just monitoring remotely
- **Technical & Precise** - We speak the language of infrastructure
- **Reliable & Steady** - No drama, no downtime
- **Professional & Enterprise-Focused** - We serve serious infrastructure needs

**We are not:**
- Flashy or trendy
- Consumer-focused or small business oriented
- Pure software/cloud (we're infrastructure-first)
- Generalist IT support

### Brand Promise

**What we deliver:**
*"Expert infrastructure services delivered by certified specialists who are available when you need them—24/7, on-site or remote."*

---

## Visual Identity System

### Color Palette

#### Primary Colors

```css
/* Dark Foundation - Main brand color */
--brand-primary: #0D1B2A;
/* Alternative primary for variation */
--brand-primary-alt: #1B263B;

/* Description: Deep navy/black that conveys enterprise reliability,
   technical precision, and data center professionalism */
```

#### Secondary Colors

```css
/* Medium Blue - Supporting elements */
--brand-secondary: #415A77;

/* Description: Professional medium blue for headers,
   secondary navigation, and supporting UI elements */
```

#### Accent Colors

```css
/* Steel Blue - Tertiary accents */
--brand-accent: #778DA9;

/* Highlight Blue - Interactive elements, CTAs */
--brand-highlight: #52B2CF;

/* Description: Steel blue for subtle accents and backgrounds.
   Highlight blue for buttons, links, and interactive states */
```

#### Neutral Colors

```css
/* Light backgrounds and surfaces */
--neutral-light: #F5F5F5;
--neutral-off-white: #E0E1DD;

/* Text colors */
--text-primary: #0D1B2A;
--text-secondary: #415A77;
--text-tertiary: #778DA9;
--text-light: #F5F5F5;

/* Borders and dividers */
--border-light: #E0E1DD;
--border-medium: #778DA9;
```

#### Functional Colors

```css
/* Status indicators */
--success: #10B981; /* Network up, systems operational */
--warning: #F59E0B; /* Maintenance mode, warnings */
--error: #EF4444; /* Critical alerts, downtime */
--info: #52B2CF; /* General information, matches highlight */
```

### Color Usage Guidelines

**Primary (#0D1B2A/#1B263B):**
- Main navigation backgrounds
- Hero section overlays
- Footer backgrounds
- Section dividers
- Premium card backgrounds

**Secondary (#415A77):**
- Subheadings
- Secondary buttons
- Icon containers
- Hover states
- Table headers

**Accent (#778DA9):**
- Background tints
- Supporting graphics
- Inactive states
- Light dividers

**Highlight (#52B2CF):**
- Primary CTAs
- Active links
- Focus indicators
- Iconography accents
- Hover effects on interactive elements

**Usage Ratios:**
- Primary (Dark): 60%
- Neutral (Light): 30%
- Accent/Highlight: 10%

### Typography System

#### Primary Font Stack

```css
/* Brand Typography */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
--font-headings: 'Space Grotesk', 'Inter', sans-serif; /* For display text */
--font-mono: 'JetBrains Mono', 'Courier New', monospace; /* For technical specs */
```

**Rationale:**
- **Inter**: Clean, technical, excellent readability at all sizes
- **Space Grotesk**: Modern geometric sans for impactful headlines
- **JetBrains Mono**: Technical specifications, code snippets, system outputs

#### Type Scale

```css
/* Display (Marketing/Hero only) */
--text-display: 64px / 1.1 / 700;
--text-display-mobile: 40px / 1.2 / 700;

/* Headings */
--text-h1: 48px / 1.2 / 700;
--text-h1-mobile: 32px / 1.3 / 700;

--text-h2: 36px / 1.3 / 600;
--text-h2-mobile: 28px / 1.3 / 600;

--text-h3: 28px / 1.4 / 600;
--text-h3-mobile: 24px / 1.4 / 600;

--text-h4: 24px / 1.4 / 600;
--text-h4-mobile: 20px / 1.4 / 600;

/* Body Text */
--text-body-large: 18px / 1.6 / 400;
--text-body: 16px / 1.6 / 400;
--text-body-small: 14px / 1.5 / 400;

/* UI Elements */
--text-button: 16px / 1.2 / 500;
--text-caption: 12px / 1.4 / 400;
--text-label: 14px / 1.4 / 500;
```

#### Font Weights

- **Light (300):** Reserved for large display text only
- **Regular (400):** All body copy
- **Medium (500):** Buttons, labels, emphasis
- **Semibold (600):** Section headings, subheadings
- **Bold (700):** Main headings, hero text

### Logo System

#### Primary Logo
- Full wordmark + icon (lockup)
- Used on homepage hero, main navigation
- Minimum width: 180px
- Clear space: Equal to height of logomark on all sides

#### Secondary Mark
- Icon only (for app icons, favicons)
- Square format: 512x512px minimum
- Used when space is constrained

#### Logo Variations

**Dark Backgrounds:**
- White logo (#FFFFFF)
- Light blue accent (#52B2CF) optional

**Light Backgrounds:**
- Primary dark (#0D1B2A)
- Full color (if applicable)

**Usage Rules:**
- Never stretch or distort
- Never rotate
- Never apply effects (shadows, gradients, glows)
- Never place on busy backgrounds without overlay
- Maintain minimum contrast ratio 4.5:1

### Spacing System

```css
/* Base unit: 8px */
--space-unit: 8px;

/* Spacing Scale */
--space-0: 0;
--space-1: 4px;   /* 0.5 unit */
--space-2: 8px;   /* 1 unit */
--space-3: 12px;  /* 1.5 units */
--space-4: 16px;  /* 2 units */
--space-5: 24px;  /* 3 units */
--space-6: 32px;  /* 4 units */
--space-8: 48px;  /* 6 units */
--space-10: 64px; /* 8 units */
--space-12: 96px; /* 12 units */
--space-16: 128px; /* 16 units */
```

**Usage:**
- Component padding: 16px-24px
- Section spacing: 64px-96px
- Element margins: 8px-16px
- Grid gaps: 24px-32px

### Corner Radius

```css
--radius-small: 4px;   /* Buttons, inputs */
--radius-medium: 8px;  /* Cards, containers */
--radius-large: 16px;  /* Hero cards, feature boxes */
--radius-full: 9999px; /* Pills, circular elements */
```

### Elevation (Shadows)

```css
--shadow-small: 0 1px 3px rgba(13, 27, 42, 0.12),
                0 1px 2px rgba(13, 27, 42, 0.08);

--shadow-medium: 0 4px 6px rgba(13, 27, 42, 0.12),
                 0 2px 4px rgba(13, 27, 42, 0.08);

--shadow-large: 0 10px 20px rgba(13, 27, 42, 0.16),
                0 3px 6px rgba(13, 27, 42, 0.08);

--shadow-highlight: 0 0 20px rgba(82, 178, 207, 0.3);
/* For featured elements */
```

### Design Tokens (Complete)

```javascript
// Complete design token system for developers
export const sajeyBrand = {
  colors: {
    // Primary Palette
    primary: {
      main: '#0D1B2A',
      alt: '#1B263B',
    },
    secondary: {
      main: '#415A77',
    },
    accent: {
      steel: '#778DA9',
      highlight: '#52B2CF',
    },
    neutral: {
      light: '#F5F5F5',
      offWhite: '#E0E1DD',
    },
    text: {
      primary: '#0D1B2A',
      secondary: '#415A77',
      tertiary: '#778DA9',
      light: '#F5F5F5',
    },
    border: {
      light: '#E0E1DD',
      medium: '#778DA9',
    },
    functional: {
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#52B2CF',
    },
  },

  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      headings: "'Space Grotesk', 'Inter', sans-serif",
      mono: "'JetBrains Mono', 'Courier New', monospace",
    },
    fontSize: {
      display: '64px',
      h1: '48px',
      h2: '36px',
      h3: '28px',
      h4: '24px',
      bodyLarge: '18px',
      body: '16px',
      bodySmall: '14px',
      caption: '12px',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
    },
  },

  spacing: {
    unit: 8,
    scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128],
  },

  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    full: '9999px',
  },

  shadows: {
    small: '0 1px 3px rgba(13, 27, 42, 0.12), 0 1px 2px rgba(13, 27, 42, 0.08)',
    medium: '0 4px 6px rgba(13, 27, 42, 0.12), 0 2px 4px rgba(13, 27, 42, 0.08)',
    large: '0 10px 20px rgba(13, 27, 42, 0.16), 0 3px 6px rgba(13, 27, 42, 0.08)',
    highlight: '0 0 20px rgba(82, 178, 207, 0.3)',
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
};
```

---

## Service Architecture

### Service Hierarchy Model

```
TIER 1: PRIMARY SERVICES (80% Focus)
├── Data Center Services
├── Network Management
└── Network Infrastructure

TIER 2: SECONDARY SERVICES (20% Focus)
├── Cloud & Hybrid IT
├── Cybersecurity
├── AI Automation
├── Data Engineering
├── Service Desk
└── IT Asset Management
```

### Primary Services (HERO FOCUS)

#### 1. Data Center Services

**Tagline:** *"Build, Deploy, Optimize: Complete Data Center Solutions"*

**Core Capabilities:**
- **Rack & Stack Installation**
  - Equipment mounting and configuration
  - Cable management and organization
  - Power distribution setup
  - Thermal optimization

- **Data Center Build-Outs**
  - Greenfield construction support
  - Brownfield modernization
  - Capacity expansion
  - Hot/cold aisle configuration

- **Physical Infrastructure**
  - Structured cabling systems (Cat6, Cat6a, Cat7)
  - Fiber optic installation and testing
  - Power and UPS configuration
  - Environmental monitoring

- **Data Center Commissioning**
  - Pre-deployment testing
  - System validation
  - Performance baseline establishment
  - Documentation and handoff

- **DCIM Integration**
  - Asset discovery and mapping
  - Capacity planning
  - Environmental monitoring setup
  - Reporting and analytics configuration

**Key Messaging:**
- "From empty floor to operational facility"
- "Expert hands for every stage: Design → Build → Commission"
- "Certified installers, proven methodologies"

**Visual Elements:**
- Server rack installations
- Cable management systems
- Data center floor layouts
- Fiber optic terminations
- Technicians in data center environments

---

#### 2. Network Management

**Tagline:** *"24/7 Network Operations: Designed, Deployed, Monitored"*

**Core Capabilities:**
- **Network Architecture & Design**
  - Network topology design
  - Capacity planning
  - Redundancy and failover design
  - VLAN and subnet architecture

- **Network Provisioning & Configuration**
  - Router and switch deployment
  - Firewall configuration
  - Load balancer setup
  - Network device hardening

- **Managed LAN/WAN Services**
  - 24/7 monitoring and management
  - Performance optimization
  - Troubleshooting and remediation
  - Change management

- **Wi-Fi Deployment**
  - Wireless site surveys (WAP placement)
  - RF spectrum analysis and tuning
  - Controller configuration
  - Coverage optimization

- **Network Assessment & Audit**
  - Infrastructure health checks
  - Security posture assessment
  - Performance analysis
  - Capacity planning

- **24/7 NOC (Network Operations Center)**
  - Real-time monitoring
  - Incident detection and response
  - Escalation management
  - SLA reporting

- **Smart Hands Services**
  - On-site support at colocation facilities
  - Physical intervention (reboots, replacements)
  - Visual verification
  - Emergency response

**Key Messaging:**
- "Never sleep on network issues—our NOC is always watching"
- "From design to deployment to 24/7 management"
- "Smart Hands when you need them, where you need them"

**Visual Elements:**
- Network operation centers (NOC)
- Monitoring dashboards
- Technicians configuring switches
- Wireless access points and heat maps
- Network topology diagrams

---

#### 3. Network Infrastructure

**Tagline:** *"The Physical Foundation of Reliable Connectivity"*

**Core Capabilities:**
- **Fiber Optic Installation & Testing**
  - Single-mode and multi-mode fiber
  - Fusion splicing and termination
  - OTDR testing and certification
  - Fiber documentation and labeling

- **Structured Cabling Design**
  - Horizontal and vertical cabling
  - Patch panel configuration
  - Cable pathway design
  - TIA/EIA standards compliance

- **Edge Computing Infrastructure**
  - Edge node deployment
  - Low-latency connectivity
  - Local compute resources
  - Distributed architecture

- **Colocation Support**
  - Cage setup and configuration
  - Cross-connect installation
  - Carrier coordination
  - Equipment migration

- **SDN/SD-WAN Implementation**
  - Software-defined networking deployment
  - SD-WAN controller setup
  - Policy configuration
  - Performance optimization

- **Network Interconnects**
  - Cross-connect installation
  - Direct cloud connectivity (AWS Direct Connect, Azure ExpressRoute)
  - Carrier coordination
  - Testing and validation

**Key Messaging:**
- "Layer 1 specialists who understand Layer 3"
- "Certified fiber optic installations"
- "From cable to configuration: complete infrastructure"

**Visual Elements:**
- Fiber optic cable installations
- Structured cabling in racks
- Cable testing equipment
- Edge computing nodes
- Cross-connect installations

---

### Secondary Services (SUPPORTING ROLE)

*These services support our primary infrastructure focus and modernization efforts.*

#### Cloud & Hybrid IT
**Positioning:** "Infrastructure-first cloud strategy"
- Hybrid connectivity (on-prem to cloud)
- Cloud migration physical infrastructure
- Private cloud build-outs
- Colocation to cloud strategies

#### Cybersecurity
**Positioning:** "Network security from the ground up"
- Network segmentation
- Firewall and IDS/IPS
- Zero-trust architecture
- Physical security integration

#### AI Automation
**Positioning:** "Intelligent infrastructure optimization"
- Network automation
- Predictive maintenance
- Capacity forecasting
- Automated provisioning

#### Data Engineering
**Positioning:** "Infrastructure performance analytics"
- Network telemetry
- Performance data pipelines
- Infrastructure monitoring data
- Capacity planning analytics

#### Service Desk
**Positioning:** "Infrastructure support when you need it"
- Network incident management
- Infrastructure ticket handling
- User connectivity support
- Asset tracking

#### IT Asset Management
**Positioning:** "Track every component, from cable to server"
- Hardware inventory
- Lifecycle management
- Procurement support
- Decommissioning services

---

## Messaging Framework

### Brand Voice Principles

**Tone Attributes:**
1. **Confident** - We know infrastructure inside and out
2. **Precise** - Technical accuracy matters
3. **Reliable** - Steady and dependable
4. **Practical** - Solutions over theory
5. **Professional** - Enterprise-grade always

**Writing Style:**
- **Active voice:** "We build data centers" not "Data centers are built"
- **Clear and direct:** No fluff or marketing speak
- **Technical but accessible:** Use industry terms, but explain complex concepts
- **Benefit-focused:** Lead with outcomes, support with capabilities
- **Concrete examples:** "24/7 NOC monitoring" not "always available"

**Do's:**
- Use specific technical terms correctly (fiber optic, Cat6a, OTDR)
- Highlight certifications and standards compliance
- Emphasize 24/7 availability and hands-on service
- Show depth of expertise through details
- Use real metrics and SLAs

**Don'ts:**
- Avoid generic IT buzzwords without context
- Don't oversimplify technical topics
- Skip vague promises ("best in class," "world-class")
- Avoid consumer-focused language
- Don't hide behind jargon—explain when needed

### Core Messaging Pillars

#### Pillar 1: Physical Infrastructure Expertise
**Message:** "We build and maintain the physical foundation of enterprise IT."

**Supporting Points:**
- Certified specialists in fiber optics, structured cabling, and network installation
- Hands-on experience from Layer 1 to Layer 3
- Proven methodologies for data center build-outs
- Standards-compliant installations (TIA/EIA, ISO)

**Use Cases:**
- Homepage hero
- About page
- Service category pages
- Case studies

---

#### Pillar 2: End-to-End Delivery
**Message:** "Design → Build → Run: Complete lifecycle infrastructure management."

**Supporting Points:**
- Architecture and design services
- Installation and deployment
- 24/7 operations and monitoring
- Ongoing optimization and support

**Use Cases:**
- Service overview pages
- Process explanations
- Client journey mapping
- Proposal templates

---

#### Pillar 3: 24/7 Operations
**Message:** "Always-on support through NOC and Smart Hands services."

**Supporting Points:**
- 24/7/365 Network Operations Center
- Smart Hands on-site response
- Real-time monitoring and alerting
- SLA-backed response times

**Use Cases:**
- Network Management pages
- Support/contact pages
- Service level descriptions
- Competitive differentiation

---

#### Pillar 4: Proven at Scale
**Message:** "Hyperscale data center experience applied to every project."

**Supporting Points:**
- Enterprise and hyperscale facility experience
- Scalable methodologies
- Proven processes and documentation
- Quality assurance at every stage

**Use Cases:**
- Credibility building
- Case studies
- Client testimonials
- RFP responses

---

#### Pillar 5: Certified Specialists
**Message:** "Industry-certified technicians and engineers on every project."

**Supporting Points:**
- Fiber optic certifications (CFOT, CFOS)
- Network certifications (CCNA, CCNP, etc.)
- Data center certifications (DCCA, CDCP)
- Manufacturer-specific training

**Use Cases:**
- About/team pages
- Service quality assurance
- Technical capability statements
- Competitive positioning

---

### Hero Messaging Library

**Primary Headlines (Homepage Hero):**
1. "Design, Build, and Run Your Data Center Infrastructure"
2. "Expert Data Center & Network Infrastructure Services"
3. "Physical Infrastructure Specialists: From Rack to Network"
4. "Enterprise Data Center Solutions, Built by Experts"
5. "We Don't Just Manage Networks. We Build Them."
6. "24/7 Data Center Operations & Network Management"
7. "From Cable to Cloud: Complete Infrastructure Solutions"

**Supporting Subheadings:**
- "Certified specialists delivering end-to-end data center and network infrastructure services"
- "Design → Build → Run: Complete lifecycle infrastructure management with 24/7 support"
- "Rack & Stack, Network Deployment, 24/7 NOC—Your complete infrastructure partner"
- "Expert hands. Expert results. 24/7."

**Call-to-Action Options:**
- "Discuss Your Infrastructure Project"
- "Schedule an Infrastructure Assessment"
- "Talk to Our Specialists"
- "Get a Network Audit"
- "Request Smart Hands Support"

---

### Service Page Messaging Templates

#### Template: Data Center Services

**Hero:**
*"Complete Data Center Solutions: From Design to Deployment to Operations"*

**Introduction:**
"Sajecy Solutions delivers end-to-end data center services—from initial design and build-out to rack installations and ongoing commissioning. Our certified specialists ensure your data center infrastructure is built right, deployed efficiently, and optimized for performance."

**Key Benefits:**
- Certified installers with hyperscale experience
- Standards-compliant installations (TIA/EIA, ISO)
- Complete documentation and handoff
- Design → Build → Commission lifecycle support

**Services List:**
[Detailed capability breakdown with technical specifics]

**CTA:** "Plan Your Data Center Project"

---

#### Template: Network Management

**Hero:**
*"24/7 Network Operations: Designed, Deployed, and Monitored"*

**Introduction:**
"Our Network Operations Center (NOC) and Smart Hands teams provide around-the-clock monitoring, management, and on-site support for your network infrastructure. From initial architecture design to deployment and ongoing optimization, we're your always-available network partner."

**Key Benefits:**
- 24/7/365 NOC monitoring and support
- Smart Hands on-site response
- Proactive issue detection and resolution
- SLA-backed response times

**Services List:**
[Detailed capability breakdown with technical specifics]

**CTA:** "Get 24/7 Network Support"

---

#### Template: Network Infrastructure

**Hero:**
*"The Physical Foundation of Reliable Connectivity"*

**Introduction:**
"From fiber optic installations to structured cabling and edge computing deployments, we build the physical network infrastructure that connects your business. Our certified fiber optic technicians and cabling specialists ensure every connection meets industry standards."

**Key Benefits:**
- Certified fiber optic specialists (CFOT, CFOS)
- TIA/EIA compliant structured cabling
- Complete testing and documentation
- Layer 1 to Layer 3 expertise

**Services List:**
[Detailed capability breakdown with technical specifics]

**CTA:** "Start Your Infrastructure Build"

---

### Competitive Differentiation Statements

**Vs. Pure MSPs:**
"We don't just monitor your infrastructure—we build it. From fiber optic installation to rack and stack deployment, we're hands-on specialists who understand the physical layer."

**Vs. General IT Services:**
"We're not generalists—we're data center and network infrastructure specialists. Our team holds industry certifications and has hands-on experience at hyperscale facilities."

**Vs. Equipment Vendors:**
"We're vendor-agnostic partners focused on your outcomes, not product sales. We design solutions that work for your environment and support them 24/7."

**Vs. Large Integrators:**
"Enterprise-grade expertise with personalized service. You won't get a junior team—our certified specialists work directly on your project."

---

### Value Proposition Statements

**For Data Center Managers:**
"Expert rack and stack, structured cabling, and commissioning services that ensure your data center is built right the first time."

**For Network Operations Teams:**
"Extend your team with our 24/7 NOC and Smart Hands services—expert support exactly when and where you need it."

**For Facilities Managers:**
"Complete physical infrastructure management—from fiber installation to power configuration to environmental monitoring."

**For IT Infrastructure Directors:**
"End-to-end infrastructure partner: We design it, build it, and run it—with SLA-backed reliability."

**For Colocation Customers:**
"Smart Hands services at your colocation facility—our technicians are your hands-on team on-site."

**For Cloud Migration Teams:**
"Build the physical foundation for your hybrid cloud strategy—from data center connectivity to direct cloud interconnects."

---

## Content Templates

### Homepage Content Structure

```
┌─────────────────────────────────────────┐
│ NAVIGATION                              │
│ [Logo] Services | Solutions | About | Contact
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ HERO SECTION                            │
│ [Dark background with data center image │
│  Overlay with subtle blue accent]       │
│                                          │
│ H1: Design, Build, and Run Your Data    │
│     Center Infrastructure                │
│                                          │
│ Subhead: Certified specialists delivering│
│ end-to-end data center and network      │
│ infrastructure services with 24/7 support│
│                                          │
│ [CTA: Discuss Your Project] [Secondary: │
│  View Our Services]                      │
│                                          │
│ Trust Indicators: [Icon] 24/7 NOC       │
│ [Icon] Certified Specialists [Icon]     │
│ Hyperscale Experience                    │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ PRIMARY SERVICES SECTION                │
│                                          │
│ Headline: "Expert Infrastructure        │
│ Services Across Every Layer"            │
│                                          │
│ [3-Column Grid - Equal prominence]      │
│                                          │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│ │  Data   │ │ Network │ │ Network │   │
│ │ Center  │ │ Manage  │ │ Infra   │   │
│ │ Services│ │  ment   │ │structure│   │
│ │         │ │         │ │         │   │
│ │ Rack &  │ │ 24/7    │ │ Fiber   │   │
│ │ Stack   │ │ NOC     │ │ Optic   │   │
│ │ Build   │ │ Smart   │ │ Cabling │   │
│ │ Outs    │ │ Hands   │ │ Edge    │   │
│ │ DCIM    │ │ Managed │ │ Deploy  │   │
│ │         │ │ LAN/WAN │ │         │   │
│ │ [Learn  │ │ [Learn  │ │ [Learn  │   │
│ │  More]  │ │  More]  │ │  More]  │   │
│ └─────────┘ └─────────┘ └─────────┘   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ VALUE PROPOSITION SECTION               │
│                                          │
│ Headline: "Why Infrastructure Teams     │
│ Choose Sajecy Solutions"                │
│                                          │
│ [Icon] Physical Infrastructure Experts  │
│ We build and maintain the physical      │
│ foundation—from cable to rack to network│
│                                          │
│ [Icon] Design → Build → Run Model       │
│ Complete lifecycle management from      │
│ architecture through 24/7 operations    │
│                                          │
│ [Icon] 24/7 Operations Support          │
│ NOCaaS and Smart Hands services ensure  │
│ always-on infrastructure reliability    │
│                                          │
│ [Icon] Proven at Scale                  │
│ Hyperscale data center experience       │
│ applied to projects of every size       │
│                                          │
│ [Icon] Certified Specialists            │
│ Industry-certified technicians and      │
│ engineers on every project              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ CAPABILITIES HIGHLIGHT                  │
│                                          │
│ Headline: "From Layer 1 to Layer 3:     │
│ Complete Infrastructure Expertise"      │
│                                          │
│ [Split layout with image]               │
│                                          │
│ Left: Image of technician working in    │
│ data center (fiber installation,        │
│ cable management, rack deployment)      │
│                                          │
│ Right:                                   │
│ - Fiber Optic Installation & Testing    │
│ - Structured Cabling (Cat6/Cat7)        │
│ - Rack & Stack Deployment               │
│ - Network Provisioning                  │
│ - Wi-Fi Site Surveys & Deployment       │
│ - 24/7 Network Monitoring               │
│ - Data Center Commissioning             │
│ - Smart Hands On-Site Support           │
│                                          │
│ [CTA: View All Capabilities]            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ CASE STUDY / PROOF POINT                │
│                                          │
│ Featured Project Highlight              │
│ [If available - otherwise use           │
│  capability-focused content]            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ SECONDARY SERVICES (Brief)              │
│                                          │
│ Headline: "Complete IT Infrastructure   │
│ Support"                                 │
│                                          │
│ "Beyond our core data center and network│
│ specialization, we provide comprehensive│
│ infrastructure support:"                 │
│                                          │
│ - Cloud & Hybrid IT (infrastructure-    │
│   focused connectivity)                  │
│ - Network Security & Cybersecurity      │
│ - AI-Powered Network Optimization       │
│ - Infrastructure Analytics              │
│ - Service Desk & IT Asset Management    │
│                                          │
│ [Subtle presentation, not equal weight] │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ CALL TO ACTION SECTION                  │
│                                          │
│ Headline: "Ready to Build Reliable      │
│ Infrastructure?"                         │
│                                          │
│ Subhead: "Discuss your data center or   │
│ network project with our specialists"   │
│                                          │
│ [CTA: Schedule a Consultation]          │
│ [Secondary: Request an Assessment]      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ FOOTER                                  │
│ [Services] [Company] [Contact] [Legal]  │
└─────────────────────────────────────────┘
```

---

### Service Page Template: Data Center Services

```markdown
# Data Center Services
## Complete Data Center Solutions: From Design to Deployment to Operations

---

### Overview

Sajecy Solutions delivers end-to-end data center services that ensure your critical infrastructure is built right, deployed efficiently, and optimized for performance. Our certified specialists bring hyperscale experience to projects of every size—from single-rack deployments to complete facility build-outs.

**Our Approach: Design → Build → Run**

We don't just install equipment—we're your partner across the entire data center lifecycle. From initial architecture and design through physical deployment and ongoing commissioning, we ensure every component meets enterprise standards.

---

### Core Capabilities

#### 1. Rack & Stack Installation

Professional equipment mounting and configuration services that ensure optimal performance and efficient use of data center space.

**What We Deliver:**
- Equipment mounting and secure installation
- Professional cable management and organization
- Power distribution and redundancy setup
- Thermal optimization and airflow management
- Documentation and as-built drawings

**Standards & Certifications:**
- TIA-942 data center standards compliance
- Certified installers with OEM training
- Quality assurance at every stage

**Typical Timeline:** 1-2 weeks per rack (scalable)

---

#### 2. Data Center Build-Outs

Complete data center construction and modernization services—from greenfield builds to brownfield upgrades.

**What We Deliver:**
- Greenfield data center construction support
- Brownfield facility modernization
- Capacity expansion and densification
- Hot/cold aisle configuration and optimization
- Raised floor installation coordination

**Our Methodology:**
- Detailed site assessment and planning
- Phased deployment to minimize disruption
- Coordination with contractors and vendors
- Testing and validation at every milestone
- Complete handoff documentation

**Project Scale:** 500 sq ft to 50,000+ sq ft

---

#### 3. Physical Infrastructure

Structured cabling, power, and environmental systems that form the foundation of reliable data centers.

**Structured Cabling:**
- Cat6, Cat6a, and Cat7 installations
- Fiber optic backbone (single-mode and multi-mode)
- Professional cable management systems
- Testing and certification (Fluke DSX/OTDR)
- Comprehensive documentation and labeling

**Power & Environmental:**
- UPS installation and configuration
- PDU deployment and circuit mapping
- Environmental monitoring setup
- Temperature and humidity sensors
- Integration with DCIM platforms

**Standards Compliance:**
- TIA/EIA-568 structured cabling standards
- ISO/IEC 11801 international standards
- BICSI certification standards

---

#### 4. Data Center Commissioning

Comprehensive testing and validation to ensure your data center is ready for production workloads.

**Pre-Deployment Testing:**
- Power and cooling system validation
- Network connectivity testing
- Environmental monitoring verification
- Failover and redundancy testing
- Load testing and capacity validation

**Performance Baseline:**
- Establish performance metrics
- Document thermal profiles
- Power consumption mapping
- Network latency and throughput testing

**Deliverables:**
- Commissioning report with test results
- As-built documentation
- Operations runbook
- Training for facilities team

---

#### 5. DCIM Integration

Data Center Infrastructure Management system deployment and configuration for complete visibility.

**What We Deliver:**
- DCIM platform selection and deployment
- Asset discovery and mapping
- Real-time monitoring configuration
- Capacity planning dashboards
- Power and cooling analytics
- Integration with existing management tools

**Supported Platforms:**
- Nlyte, Sunbird, FNT, and others
- Custom integration development
- API connectivity and automation

**Benefits:**
- Real-time infrastructure visibility
- Proactive capacity planning
- Optimized power and cooling
- Faster troubleshooting

---

### Why Choose Sajecy Solutions for Data Center Services?

**Certified Specialists**
Our team holds industry certifications including BICSI, DCCA, CDCP, and manufacturer-specific credentials.

**Proven Methodologies**
We apply proven processes from hyperscale facilities to ensure quality and efficiency at any scale.

**Standards Compliance**
Every installation meets or exceeds TIA, ISO, and industry standards with complete testing and documentation.

**End-to-End Ownership**
From initial design through ongoing commissioning, we're accountable for results—not just tasks.

---

### Service Levels & Support

**Standard Installation**
- Business hours deployment
- 5-day delivery for standard racks
- Documentation within 48 hours of completion

**Expedited Installation**
- 24/7 deployment availability
- 2-3 day delivery for standard racks
- Real-time documentation updates

**Ongoing Commissioning**
- Monthly capacity assessments
- Quarterly infrastructure audits
- Annual optimization reviews
- 24/7 NOC monitoring integration

---

### Get Started

**Ready to plan your data center project?**

Our specialists will assess your requirements, provide detailed recommendations, and deliver a comprehensive project plan.

[Schedule a Consultation] [Request a Quote]

**Typical Engagement Process:**
1. Initial consultation and site assessment (1 week)
2. Detailed design and planning (2-3 weeks)
3. Deployment and installation (timeline varies)
4. Testing and commissioning (1-2 weeks)
5. Handoff and ongoing support

---

### Related Services

- **Network Management:** 24/7 NOC and monitoring for your data center network
- **Network Infrastructure:** Fiber optic and structured cabling installation
- **Smart Hands Services:** On-site support at colocation facilities

[Explore All Services]
```

---

### Service Page Template: Network Management

```markdown
# Network Management Services
## 24/7 Network Operations: Designed, Deployed, and Monitored

---

### Overview

Our Network Operations Center (NOC) and Smart Hands teams provide around-the-clock monitoring, management, and on-site support for your network infrastructure. From initial architecture design to deployment and ongoing optimization, we're your always-available network partner.

**What Sets Us Apart:**
- 24/7/365 NOC monitoring and support
- Smart Hands on-site response at colocation facilities
- Proactive issue detection and resolution
- SLA-backed response times
- Certified network engineers and technicians

---

### Core Capabilities

#### 1. Network Architecture & Design

Strategic network planning that balances performance, reliability, and scalability.

**What We Deliver:**
- Network topology design and documentation
- Capacity planning and growth forecasting
- Redundancy and failover architecture
- VLAN and subnet design
- Security zone segmentation
- Network standards and policies

**Design Principles:**
- High availability and fault tolerance
- Scalable and future-proof architecture
- Security-first design
- Performance optimization
- Vendor-agnostic solutions

**Deliverables:**
- Network architecture diagrams
- IP addressing scheme
- VLAN design documentation
- Implementation roadmap

---

#### 2. Network Provisioning & Configuration

Expert deployment of routers, switches, firewalls, and network appliances.

**What We Deliver:**
- Router and switch installation and configuration
- Firewall deployment and rule management
- Load balancer setup and optimization
- Network device hardening and security
- Configuration backup and version control
- Migration from legacy systems

**Supported Platforms:**
- Cisco, Juniper, Arista, HP/HPE
- Palo Alto, Fortinet, Checkpoint (firewalls)
- F5, Citrix (load balancers)
- Vendor-agnostic approach

**Configuration Standards:**
- Industry best practices
- Security baseline configurations
- Change management processes
- Complete documentation

---

#### 3. Managed LAN/WAN Services

Comprehensive management of your local and wide-area networks with 24/7 monitoring.

**What We Monitor:**
- Device health and availability
- Network performance and latency
- Bandwidth utilization
- Error rates and packet loss
- Security events and anomalies
- Configuration changes

**What We Manage:**
- Proactive issue detection
- Incident response and remediation
- Performance optimization
- Capacity planning
- Change implementation
- Regular maintenance windows

**Service Level Agreement:**
- 24/7/365 monitoring
- 15-minute initial response (critical)
- 1-hour response (high priority)
- Monthly performance reports
- Quarterly business reviews

---

#### 4. Wi-Fi Deployment & Optimization

Enterprise wireless network design, deployment, and management.

**Wireless Site Surveys:**
- Predictive modeling and planning
- On-site RF surveys (active and passive)
- Access point placement optimization
- Coverage and capacity analysis
- Interference identification
- Heat map generation

**Deployment Services:**
- Controller-based wireless deployment
- Access point installation and mounting
- Power over Ethernet (PoE) configuration
- SSID and security policy setup
- Guest network isolation
- Roaming optimization

**Ongoing Optimization:**
- RF spectrum analysis
- Channel and power tuning
- Performance monitoring
- Client troubleshooting
- Firmware management
- Capacity expansion planning

---

#### 5. Network Assessment & Audit

Comprehensive evaluation of your network infrastructure to identify risks and opportunities.

**Assessment Areas:**
- Network architecture review
- Device configuration audit
- Security posture evaluation
- Performance analysis
- Capacity assessment
- Compliance verification

**Deliverables:**
- Executive summary with findings
- Detailed technical report
- Risk assessment matrix
- Prioritized recommendations
- Remediation roadmap
- Cost-benefit analysis

**Timeline:** 2-4 weeks (varies by scope)

---

#### 6. 24/7 NOC (Network Operations Center)

Around-the-clock monitoring and management by certified network engineers.

**What Our NOC Delivers:**
- Real-time network monitoring
- Automated alerting and escalation
- Incident detection and response
- Performance trend analysis
- Proactive maintenance
- SLA reporting and compliance

**Monitoring Capabilities:**
- Device health (routers, switches, firewalls)
- Circuit availability and performance
- Application performance
- Security event correlation
- Environmental monitoring (temperature, power)
- Custom monitoring for critical applications

**Response Process:**
1. Automated detection and alerting
2. NOC engineer assessment (within 15 minutes)
3. Initial troubleshooting and diagnosis
4. Escalation to Smart Hands (if physical intervention needed)
5. Remediation and verification
6. Incident documentation and reporting

---

#### 7. Smart Hands Services

On-site technical support at your colocation facilities or remote data centers.

**When You Need Smart Hands:**
- Equipment reboots or power cycling
- Cable reconnection or replacement
- Visual verification of device status
- Physical access to consoles
- Hardware swaps or upgrades
- Emergency response

**What We Provide:**
- Certified technicians on-site
- Video verification of work performed
- Photo documentation
- Coordination with NOC team
- Emergency response availability
- Regular scheduled tasks

**Service Areas:**
- Colocation facilities nationwide
- Remote data centers
- Branch office locations
- Emergency dispatch available

**Response Times:**
- Standard: 4-hour response
- Priority: 2-hour response
- Emergency: 1-hour response

---

### Why Choose Sajecy Solutions for Network Management?

**Always Available**
Our 24/7 NOC and Smart Hands teams ensure you have expert support exactly when and where you need it.

**Certified Engineers**
Our team holds industry certifications including CCNA, CCNP, CWNA, and manufacturer-specific credentials.

**Proactive Management**
We detect and resolve issues before they impact your business—not just react to outages.

**Transparent Reporting**
Monthly SLA reports, performance dashboards, and quarterly business reviews keep you informed.

---

### Service Tiers

**NOC Monitoring**
- 24/7 device and circuit monitoring
- Automated alerting
- Incident documentation
- Monthly SLA reporting

**Managed Network Services**
- Everything in NOC Monitoring
- Proactive maintenance
- Configuration management
- Performance optimization
- Quarterly network reviews

**Complete Network Operations**
- Everything in Managed Services
- Smart Hands on-site support
- Emergency response
- Change implementation
- Network engineering on-demand
- Dedicated account management

---

### Get Started

**Extend your network operations team with 24/7 expert support.**

Our specialists will assess your network, design a monitoring and management plan, and provide transparent SLA-backed service.

[Schedule a Network Assessment] [Discuss NOC Services]

---

### Related Services

- **Network Infrastructure:** Fiber optic and structured cabling installation
- **Data Center Services:** Complete data center build and operations
- **Cybersecurity:** Network security and zero-trust architecture

[Explore All Services]
```

---

### Service Page Template: Network Infrastructure

```markdown
# Network Infrastructure Services
## The Physical Foundation of Reliable Connectivity

---

### Overview

From fiber optic installations to structured cabling and edge computing deployments, we build the physical network infrastructure that connects your business. Our certified fiber optic technicians and cabling specialists ensure every connection meets industry standards and delivers the performance your network demands.

**Layer 1 to Layer 3 Expertise**

We understand that reliable network performance starts with quality physical infrastructure. Our team brings both hands-on installation expertise and deep network engineering knowledge to every project.

---

### Core Capabilities

#### 1. Fiber Optic Installation & Testing

Professional fiber optic cable installation, termination, and certification.

**Fiber Types:**
- Single-mode fiber (OS1, OS2)
- Multi-mode fiber (OM3, OM4, OM5)
- Indoor and outdoor rated cables
- Armored and plenum-rated options

**Installation Services:**
- Cable pathway design and preparation
- Fiber pulling and placement
- Fusion splicing (core alignment)
- Mechanical splicing
- Connector termination (LC, SC, ST, MTP/MPO)
- Cable management and protection

**Testing & Certification:**
- OTDR testing (distance, loss, reflectance)
- Light source and power meter testing
- Visual fault location
- End-face inspection (microscopy)
- Comprehensive test reports
- Certification per TIA/ISO standards

**Certifications:**
- CFOT (Certified Fiber Optic Technician)
- CFOS (Certified Fiber Optic Specialist)
- Manufacturer-specific training (Corning, CommScope)

---

#### 2. Structured Cabling Design & Installation

Complete structured cabling systems for enterprise networks.

**Cabling Types:**
- Cat6 (1 Gbps)
- Cat6a (10 Gbps)
- Cat7/Cat8 (high-performance applications)
- Shielded and unshielded options

**System Components:**
- Horizontal cabling (workstation to TR)
- Vertical cabling (backbone between floors)
- Patch panels and cross-connects
- Cable management systems
- Grounding and bonding
- Labeling and documentation

**Design Considerations:**
- TIA-568 standards compliance
- Channel length limitations
- Future capacity planning
- Separation from power and EMI sources
- Pathway and space requirements
- Cooling and airflow impact

**Testing & Certification:**
- Fluke DSX CableAnalyzer testing
- Full channel certification
- Alien crosstalk testing (for 10GbE)
- Comprehensive cable management inspection
- As-built documentation

---

#### 3. Edge Computing Infrastructure

Physical infrastructure for distributed edge computing nodes.

**What We Deploy:**
- Edge micro data centers
- Ruggedized compute enclosures
- Low-latency connectivity
- Redundant power and cooling
- Remote management connectivity
- Physical security integration

**Use Cases:**
- IoT data processing
- Content delivery optimization
- Manufacturing and industrial automation
- Retail and branch office compute
- 5G edge applications

**Infrastructure Components:**
- Compact server racks
- Edge switches and routers
- Local storage systems
- UPS and power management
- Environmental monitoring
- Fiber and copper connectivity to core

---

#### 4. Colocation Support Services

Complete infrastructure support for colocation facility deployments.

**Cage Setup & Configuration:**
- Cage/cabinet space planning
- Equipment layout design
- Power circuit mapping
- Cooling optimization
- Cable pathway planning

**Cross-Connect Installation:**
- Fiber cross-connects
- Copper cross-connects
- Meet-me room (MMR) connectivity
- Carrier coordination
- Testing and documentation

**Equipment Migration:**
- Pre-migration planning and assessment
- Coordinated transport logistics
- Rack and stack at new facility
- Connectivity verification
- Cutover and validation

**Ongoing Support:**
- Smart Hands services
- Equipment additions/removals
- Cable management maintenance
- Inventory tracking

---

#### 5. SDN/SD-WAN Implementation

Physical infrastructure and configuration for software-defined networking.

**SD-WAN Deployment:**
- Edge device installation
- WAN circuit connectivity
- Controller deployment
- Policy configuration
- Performance optimization
- Failover testing

**SDN Infrastructure:**
- White-box switch deployment
- Overlay network configuration
- Controller integration
- Network automation setup
- Monitoring and analytics

**Benefits:**
- Centralized management
- Application-aware routing
- Automated failover
- Cost optimization
- Enhanced security

---

#### 6. Network Interconnects

Direct connectivity between data centers, cloud providers, and carriers.

**Cross-Connect Services:**
- Carrier cross-connect installation
- Data center interconnect (DCI)
- Meet-me room coordination
- Testing and validation
- Documentation and labeling

**Direct Cloud Connectivity:**
- AWS Direct Connect setup
- Azure ExpressRoute installation
- Google Cloud Interconnect
- Oracle FastConnect
- IBM Cloud Direct Link

**Process:**
1. Letter of Authorization (LOA) coordination
2. Circuit design and pathway planning
3. Physical installation (fiber/copper)
4. Testing and validation
5. Handoff and documentation

**Benefits:**
- Lower latency to cloud resources
- Predictable network performance
- Enhanced security (private connectivity)
- Cost savings on data transfer

---

### Why Choose Sajecy Solutions for Network Infrastructure?

**Certified Specialists**
Our technicians hold CFOT, CFOS, BICSI, and manufacturer certifications for all major cabling systems.

**Standards Compliance**
Every installation meets TIA/EIA-568, ISO/IEC 11801, and BICSI standards with complete testing and certification.

**Complete Documentation**
As-built drawings, test reports, cable labeling, and operations documentation for every project.

**Layer 1 to Layer 3 Knowledge**
We understand how physical infrastructure impacts network performance—and design accordingly.

---

### Service Delivery Model

**Phase 1: Assessment & Design**
- Site survey and assessment
- Requirements gathering
- Design and architecture
- Material selection
- Project timeline and costing

**Phase 2: Installation**
- Pathway preparation
- Cable installation
- Termination and splicing
- Cable management
- Physical security

**Phase 3: Testing & Certification**
- Comprehensive testing per standards
- Troubleshooting and remediation
- Certification documentation
- As-built drawing updates

**Phase 4: Handoff & Support**
- Documentation delivery
- Training for operations team
- Warranty registration
- Ongoing support options

---

### Get Started

**Build reliable network infrastructure from the ground up.**

Our specialists will assess your requirements, design a standards-compliant solution, and deliver certified installation.

[Schedule an Infrastructure Assessment] [Discuss Your Project]

---

### Related Services

- **Network Management:** 24/7 monitoring and management of your network
- **Data Center Services:** Complete data center infrastructure
- **Smart Hands Services:** On-site support at your facilities

[Explore All Services]
```

---

### About Page Content Template

```markdown
# About Sajecy Solutions
## Physical Infrastructure Specialists for Enterprise Data Centers and Networks

---

### Who We Are

Sajecy Solutions is a data center and network infrastructure specialist delivering end-to-end services from design and build to 24/7 operations. Our certified technicians and engineers bring hyperscale facility experience to enterprises who need reliable, standards-compliant infrastructure they can depend on.

**Founded on Hands-On Expertise**

We're not consultants who design and walk away—we're the specialists who build, deploy, and operate your infrastructure. From fiber optic installations to rack and stack deployments to 24/7 NOC operations, we're accountable for results.

---

### Our Expertise

**Data Center Services**
- Rack & Stack Installation
- Data Center Build-Outs
- Physical Infrastructure (Cabling, Power, Cooling)
- Data Center Commissioning
- DCIM Integration

**Network Management**
- Network Architecture & Design
- Network Provisioning & Configuration
- Managed LAN/WAN Services
- Wi-Fi Deployment & Optimization
- 24/7 NOC Operations
- Smart Hands On-Site Support

**Network Infrastructure**
- Fiber Optic Installation & Testing
- Structured Cabling (Cat6/Cat6a/Cat7)
- Edge Computing Infrastructure
- Colocation Support
- SDN/SD-WAN Implementation
- Network Interconnects

---

### Our Approach: Design → Build → Run

**Design**
We start with your requirements and design infrastructure that balances performance, reliability, scalability, and cost.

**Build**
Our certified installers deploy your infrastructure to exacting standards with complete testing and documentation.

**Run**
Our 24/7 NOC and Smart Hands teams provide ongoing monitoring, management, and on-site support.

---

### Certifications & Standards

Our team holds industry certifications including:

**Fiber Optic & Cabling:**
- CFOT (Certified Fiber Optic Technician)
- CFOS (Certified Fiber Optic Specialist)
- BICSI Certifications
- Manufacturer-specific training (Corning, CommScope, etc.)

**Network Engineering:**
- Cisco CCNA, CCNP
- Juniper JNCIA, JNCIS
- Wireless CWNA certifications
- Vendor-specific certifications

**Data Center:**
- CDCP (Certified Data Center Professional)
- DCCA (Data Center Certified Associate)
- TIA-942 training

**Standards Compliance:**
- TIA/EIA-568 Structured Cabling
- ISO/IEC 11801 International Standards
- TIA-942 Data Center Standards
- BICSI Data Center Design

---

### What Sets Us Apart

**Physical Infrastructure Experts**
We don't just manage infrastructure—we build it. From Layer 1 to Layer 3, we understand how every component impacts performance.

**24/7 Operations**
Our NOC and Smart Hands teams provide around-the-clock monitoring and on-site support when you need it.

**Proven at Scale**
We bring hyperscale data center experience to projects of every size, ensuring enterprise-grade quality.

**End-to-End Accountability**
One partner for design, build, and run—complete lifecycle ownership and responsibility.

**Standards-Compliant**
Every installation meets or exceeds industry standards with complete testing, certification, and documentation.

---

### Industries We Serve

- **Enterprise Data Centers:** On-premises and hybrid infrastructure
- **Colocation Providers:** Infrastructure deployment and Smart Hands support
- **Healthcare:** HIPAA-compliant infrastructure and high-availability networks
- **Finance:** Secure, redundant infrastructure for critical applications
- **Cloud Service Providers:** Interconnect and edge infrastructure
- **Manufacturing:** Industrial networking and edge computing
- **Education:** Campus networking and data center operations

---

### Our Commitment

**Quality:** Standards-compliant installations with complete testing
**Transparency:** Clear communication, detailed documentation, regular reporting
**Accountability:** SLA-backed service levels and measurable results
**Availability:** 24/7/365 support when you need it
**Expertise:** Certified specialists on every project

---

### Get in Touch

**Ready to discuss your infrastructure project?**

[Schedule a Consultation] [Contact Our Team]

**Headquarters:** [Address]
**24/7 NOC:** [Phone]
**Email:** [Contact Email]
```

---

## Visual Guidelines

### Photography & Imagery Standards

#### Primary Image Categories

**1. Data Center Environments (60% of imagery)**
- Server rack installations (properly lit, clean, professional)
- Cable management systems (showing organized fiber/copper)
- Data center floor views (hot/cold aisles, raised floors)
- Technicians working in data centers (PPE, professional appearance)
- Fiber optic terminations and testing equipment
- Network equipment installations (routers, switches in racks)

**Image Qualities:**
- Professional lighting (avoid dim/dark environments)
- Sharp focus on technical details
- Clean, organized installations (showcase quality)
- Real data center environments (not stock photos)
- Industrial aesthetic (darker tones, blue accent lighting)

---

**2. Network Infrastructure (30% of imagery)**
- Fiber optic cables and connectors (macro shots)
- Structured cabling in racks (showing organization)
- Network switches with proper patching
- Wireless access points in enterprise environments
- Testing equipment in use (OTDR, cable certifiers)
- Network operations center (NOC) environments

**Image Qualities:**
- Technical precision visible
- Professional installation quality
- Equipment with visible branding (legitimate, not stock)
- Hands-on work being performed
- Detail shots showing craftsmanship

---

**3. Technical Personnel (10% of imagery)**
- Certified technicians at work (safety gear, professional)
- Engineers reviewing network diagrams
- NOC operators monitoring systems
- Team collaboration on projects
- Training and certification activities

**Image Qualities:**
- Diverse team representation
- Professional appearance and PPE
- Active work being performed (not posed)
- Enterprise environment context
- Focused and competent demeanor

---

#### Image Treatment Guidelines

**Color Grading:**
- Slight desaturation for professional tone
- Enhance blues to align with brand palette
- Maintain darker tones (avoid overly bright images)
- Subtle vignetting for focus
- Consistent treatment across site

**Overlays for Hero Sections:**
```css
/* Dark gradient overlay for text legibility */
background: linear-gradient(
  135deg,
  rgba(13, 27, 42, 0.85) 0%,
  rgba(27, 38, 59, 0.75) 50%,
  rgba(65, 90, 119, 0.65) 100%
);

/* Alternative: Solid overlay with blue accent */
background: linear-gradient(
  to right,
  rgba(13, 27, 42, 0.95) 0%,
  rgba(13, 27, 42, 0.85) 60%,
  rgba(82, 178, 207, 0.1) 100%
);
```

**Aspect Ratios:**
- Hero sections: 21:9 or 16:9 (wide landscape)
- Service cards: 4:3 or 1:1
- Case study headers: 16:9
- Background sections: Full-width with parallax

---

#### Imagery to AVOID

**Never Use:**
- Generic office environments with people at desks
- Abstract technology backgrounds (circuit boards, binary code)
- Consumer-grade equipment or home office setups
- Overly staged or posed photos
- Stock photos with visible watermarks or generic models
- Bright, colorful, "tech startup" aesthetic
- Illustrations or cartoons (unless for iconography)

**Why:**
These convey consumer IT services or generic tech—not enterprise infrastructure specialists.

---

### Icon & Illustration Style

#### Icon System

**Style Attributes:**
- **Line-based:** Stroke icons, not solid fills
- **Geometric:** Clean, technical precision
- **Consistent weight:** 2px stroke weight
- **Minimal detail:** Clear at small sizes
- **Professional tone:** Industrial, not playful

**Color Usage:**
- Primary state: Accent blue (#52B2CF)
- Hover/active: Highlight blue (#52B2CF at 100%)
- Inactive: Steel blue (#778DA9)
- On dark backgrounds: White or light gray

**Icon Categories:**
- Service icons (data center, network, fiber optic)
- Technology icons (rack, cable, switch, router)
- Process icons (design, build, run)
- Status icons (operational, warning, critical)
- Feature icons (24/7, certified, secure)

**Recommended Icon Library:**
- Lucide Icons (technical, clean)
- Heroicons (professional, consistent)
- Phosphor Icons (geometric, flexible)
- Custom icons for specialized infrastructure

---

#### Illustration Guidelines

**When to Use Illustrations:**
- Network topology diagrams
- Data center layout visualizations
- Process flow diagrams
- Architecture schematics
- Infographics for complex concepts

**Style:**
- Technical and schematic (not decorative)
- Isometric or orthographic views
- Brand color palette only
- Precise and to-scale when representing architecture
- Minimal embellishment

**Example Use Cases:**
- "Design → Build → Run" process visualization
- Network architecture diagrams
- Service delivery timelines
- Infrastructure layer breakdowns (Layer 1-3)

---

### Layout & Grid System

#### Responsive Grid

```css
/* Desktop Grid (1440px+) */
--grid-columns: 12;
--grid-gap: 32px;
--container-max-width: 1280px;

/* Tablet Grid (768px - 1439px) */
--grid-columns: 8;
--grid-gap: 24px;
--container-max-width: 100%;

/* Mobile Grid (< 768px) */
--grid-columns: 4;
--grid-gap: 16px;
--container-max-width: 100%;
```

#### Section Spacing

```css
/* Vertical rhythm */
--section-spacing-large: 128px; /* Major sections (desktop) */
--section-spacing-medium: 96px; /* Standard sections (desktop) */
--section-spacing-small: 64px;  /* Related content (desktop) */

/* Mobile adjustments */
@media (max-width: 768px) {
  --section-spacing-large: 80px;
  --section-spacing-medium: 64px;
  --section-spacing-small: 48px;
}
```

#### Component Spacing

**Cards:**
- Internal padding: 24px-32px
- Gap between cards: 24px-32px
- Border radius: 8px

**Buttons:**
- Padding: 12px 24px (standard)
- Padding: 16px 32px (large CTA)
- Border radius: 4px
- Minimum touch target: 44px height

**Forms:**
- Input padding: 12px 16px
- Input height: 48px
- Label spacing: 8px
- Field spacing: 16px

---

### Animation & Motion

#### Motion Principles

**Purpose-Driven:**
- Guide attention to key actions
- Provide feedback on interactions
- Communicate state changes
- Enhance (not distract from) content

**Performance:**
- GPU-accelerated properties only (transform, opacity)
- 60fps minimum
- Respect `prefers-reduced-motion`

#### Animation Timing

```css
/* Easing functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Durations */
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;
```

#### Common Animations

**Button Hover:**
```css
.button {
  transition: background-color 250ms ease-out,
              transform 150ms ease-out;
}

.button:hover {
  background-color: var(--brand-highlight);
  transform: translateY(-2px);
}
```

**Card Hover:**
```css
.card {
  transition: box-shadow 250ms ease-out,
              transform 250ms ease-out;
}

.card:hover {
  box-shadow: var(--shadow-large);
  transform: translateY(-4px);
}
```

**Fade-In on Scroll:**
```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 500ms ease-out,
              transform 500ms ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Loading States:**
```css
/* Subtle pulse for loading indicators */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

### Accessibility Standards

#### Color Contrast

**WCAG AA Compliance (Minimum):**
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

**Verified Combinations:**
✅ `#0D1B2A` on `#F5F5F5` - 14.8:1 (AAA)
✅ `#415A77` on `#F5F5F5` - 7.2:1 (AAA)
✅ `#778DA9` on `#0D1B2A` - 5.1:1 (AA Large)
✅ `#52B2CF` on `#0D1B2A` - 6.8:1 (AAA)
✅ `#F5F5F5` on `#0D1B2A` - 14.8:1 (AAA)

**Test All Custom Combinations:**
Use WebAIM Contrast Checker or browser DevTools

#### Typography Accessibility

- Minimum body text: 16px
- Line height: 1.5 minimum (1.6 preferred)
- Paragraph width: 60-80 characters max
- Avoid all-caps for body text
- Sufficient spacing between interactive elements

#### Interactive Element Requirements

- Minimum touch target: 44x44px
- Visible focus indicators
- Keyboard navigation support
- ARIA labels for icon-only buttons
- Skip navigation links
- Semantic HTML structure

#### Motion & Animation

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Component Library Specifications

#### Primary Button

```css
.button-primary {
  /* Visual */
  background-color: var(--brand-highlight);
  color: var(--text-light);
  border: none;
  border-radius: var(--radius-small);
  padding: 12px 24px;

  /* Typography */
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2;

  /* Interaction */
  cursor: pointer;
  transition: background-color 250ms ease-out,
              transform 150ms ease-out,
              box-shadow 250ms ease-out;

  /* Accessibility */
  min-height: 44px;
  min-width: 44px;
}

.button-primary:hover {
  background-color: #3FA1BD; /* Slightly darker */
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.button-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-small);
}

.button-primary:focus-visible {
  outline: 2px solid var(--brand-highlight);
  outline-offset: 2px;
}
```

#### Secondary Button

```css
.button-secondary {
  background-color: transparent;
  color: var(--brand-highlight);
  border: 2px solid var(--brand-highlight);
  border-radius: var(--radius-small);
  padding: 10px 22px; /* Adjusted for border */

  /* Typography */
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 500;

  /* Interaction */
  cursor: pointer;
  transition: background-color 250ms ease-out,
              color 250ms ease-out,
              border-color 250ms ease-out;
}

.button-secondary:hover {
  background-color: var(--brand-highlight);
  color: var(--text-light);
}
```

#### Service Card

```css
.service-card {
  /* Layout */
  display: flex;
  flex-direction: column;
  padding: 32px;

  /* Visual */
  background-color: #FFFFFF;
  border-radius: var(--radius-medium);
  box-shadow: var(--shadow-small);

  /* Interaction */
  transition: box-shadow 250ms ease-out,
              transform 250ms ease-out;
}

.service-card:hover {
  box-shadow: var(--shadow-large);
  transform: translateY(-4px);
}

.service-card__icon {
  width: 48px;
  height: 48px;
  color: var(--brand-highlight);
  margin-bottom: 16px;
}

.service-card__title {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.service-card__description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 20px;
  flex-grow: 1; /* Push CTA to bottom */
}

.service-card__cta {
  align-self: flex-start;
}
```

#### Hero Section

```css
.hero {
  /* Layout */
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;

  /* Visual */
  background-color: var(--brand-primary);
  background-image: url('/images/hero-datacenter.jpg');
  background-size: cover;
  background-position: center;

  /* Spacing */
  padding: 96px 0;
}

.hero::before {
  /* Dark overlay */
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(13, 27, 42, 0.85) 0%,
    rgba(27, 38, 59, 0.75) 50%,
    rgba(65, 90, 119, 0.65) 100%
  );
  z-index: 1;
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero__title {
  font-size: 48px;
  font-weight: 700;
  color: var(--text-light);
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero__subtitle {
  font-size: 20px;
  line-height: 1.6;
  color: var(--neutral-off-white);
  margin-bottom: 32px;
}

.hero__cta-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    min-height: 500px;
    padding: 64px 0;
  }

  .hero__title {
    font-size: 32px;
  }

  .hero__subtitle {
    font-size: 18px;
  }
}
```

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1-2)

**Design System Setup**
- [ ] Create design tokens file (colors, typography, spacing)
- [ ] Set up CSS custom properties
- [ ] Define component library structure
- [ ] Establish naming conventions

**Brand Assets**
- [ ] Finalize logo system (if not already done)
- [ ] Create color swatches for design tools
- [ ] Select and license typography (Inter, Space Grotesk)
- [ ] Source/create appropriate imagery

**Content Framework**
- [ ] Audit existing content against new positioning
- [ ] Write core messaging for homepage
- [ ] Draft primary service page content
- [ ] Update About page content

---

### Phase 2: Core Pages (Week 3-4)

**Homepage Redesign**
- [ ] Implement new hero section (dark theme, data center imagery)
- [ ] Create primary services section (equal prominence for 3 core services)
- [ ] Build value proposition section
- [ ] Add capabilities highlight section
- [ ] Update footer with new branding

**Primary Service Pages**
- [ ] Data Center Services page (complete rewrite)
- [ ] Network Management page (complete rewrite)
- [ ] Network Infrastructure page (complete rewrite)
- [ ] Ensure consistent structure and depth

**Navigation Update**
- [ ] Restructure main navigation (prioritize core services)
- [ ] Update service hierarchy in menus
- [ ] Ensure mobile navigation reflects new structure

---

### Phase 3: Supporting Content (Week 5-6)

**Secondary Service Pages**
- [ ] Update Cloud & Hybrid IT (supporting role, not hero)
- [ ] Update Cybersecurity (network security focus)
- [ ] Update AI Automation (infrastructure optimization angle)
- [ ] Reframe Data Engineering (infrastructure analytics)
- [ ] Adjust Service Desk (infrastructure support)
- [ ] Update IT Asset Management (hardware tracking)

**About & Contact**
- [ ] Rewrite About page (infrastructure specialist positioning)
- [ ] Update team/certifications (highlight relevant credentials)
- [ ] Create contact page with service inquiry options
- [ ] Add NOC/Smart Hands contact information

**Case Studies/Portfolio**
- [ ] Develop infrastructure-focused case studies
- [ ] Highlight data center and network projects
- [ ] Create visual proof points (before/after, metrics)
- [ ] Add client testimonials (if available)

---

### Phase 4: Visual Refinement (Week 7)

**Imagery**
- [ ] Replace all generic IT stock photos
- [ ] Source/create data center environment photos
- [ ] Add network infrastructure imagery
- [ ] Ensure consistent color grading and treatment
- [ ] Optimize all images for web performance

**Component Polish**
- [ ] Refine button styles and hover states
- [ ] Ensure consistent card designs
- [ ] Implement subtle animations (hover, scroll)
- [ ] Test responsive behavior across breakpoints
- [ ] Verify accessibility (contrast, keyboard nav, screen readers)

**Brand Consistency Audit**
- [ ] Review all pages for color usage
- [ ] Check typography consistency
- [ ] Verify spacing and layout adherence
- [ ] Test dark theme throughout site

---

### Phase 5: Testing & Launch (Week 8)

**Quality Assurance**
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness testing (iOS, Android)
- [ ] Accessibility audit (WCAG AA compliance)
- [ ] Performance testing (PageSpeed, Lighthouse)
- [ ] Broken link checking
- [ ] Form testing (contact, inquiry)

**SEO & Metadata**
- [ ] Update page titles (infrastructure focus)
- [ ] Rewrite meta descriptions
- [ ] Update Open Graph tags
- [ ] Create new sitemap
- [ ] Submit to search engines

**Documentation**
- [ ] Create style guide for team reference
- [ ] Document component usage
- [ ] Provide content templates for future pages
- [ ] Create brand messaging guide

**Launch**
- [ ] Final stakeholder review
- [ ] Deploy to production
- [ ] Monitor analytics for user behavior
- [ ] Gather feedback
- [ ] Plan iteration based on data

---

### Ongoing Maintenance

**Monthly:**
- [ ] Review brand consistency across new content
- [ ] Update case studies and testimonials
- [ ] Monitor website performance
- [ ] Check for broken links or outdated content

**Quarterly:**
- [ ] Audit competitor positioning
- [ ] Review messaging effectiveness
- [ ] Update service offerings as needed
- [ ] Refine based on customer feedback

**Annually:**
- [ ] Comprehensive brand audit
- [ ] Evaluate visual refresh needs
- [ ] Update certifications and credentials
- [ ] Review and update case studies

---

## Brand Compliance Checklist

Use this checklist for every new page, feature, or content piece:

### Visual Compliance
- [ ] Uses approved color palette only
- [ ] Typography follows brand system (Inter/Space Grotesk)
- [ ] Spacing adheres to 8px grid system
- [ ] Images match brand aesthetic (data center/network focus)
- [ ] Logo usage follows guidelines (size, clear space, contrast)
- [ ] Dark, industrial aesthetic maintained
- [ ] Subtle blue accents applied correctly

### Content Compliance
- [ ] Messaging emphasizes infrastructure expertise
- [ ] Primary services (Data Center, Network) are prominent
- [ ] Secondary services positioned as supporting
- [ ] Technical accuracy verified
- [ ] Voice is confident, professional, hands-on
- [ ] Certifications and standards mentioned
- [ ] 24/7 availability highlighted where relevant

### Technical Compliance
- [ ] WCAG AA accessibility standards met
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Performance optimized (fast load times)
- [ ] SEO best practices followed
- [ ] Forms and CTAs functional
- [ ] Analytics tracking implemented

### Experience Compliance
- [ ] Clear hierarchy (primary services first)
- [ ] Easy navigation to core offerings
- [ ] Consistent component behavior
- [ ] Intuitive user journey
- [ ] Fast, reliable performance
- [ ] Professional, enterprise-grade feel throughout

---

## Quick Reference Guide

### When to Use Each Color

| Element | Color | Variable |
|---------|-------|----------|
| Main navigation background | Dark Blue/Black | `--brand-primary` |
| Hero section overlay | Dark Blue gradient | `linear-gradient(...)` |
| Body text | Very Dark Blue | `--text-primary` |
| Subheadings | Medium Blue | `--text-secondary` |
| Primary CTA button | Highlight Blue | `--brand-highlight` |
| Secondary button border | Highlight Blue | `--brand-highlight` |
| Icon accents | Highlight Blue | `--brand-highlight` |
| Section backgrounds (light) | Off-White | `--neutral-light` |
| Card backgrounds | White | `#FFFFFF` |
| Borders/dividers | Light Gray | `--border-light` |

### When to Use Each Font

| Element | Font | Weight |
|---------|------|--------|
| Display headlines | Space Grotesk | 700 |
| H1-H4 headings | Space Grotesk | 600-700 |
| Body text | Inter | 400 |
| Buttons | Inter | 500 |
| Labels | Inter | 500 |
| Technical specs | JetBrains Mono | 400 |

### Common Component Patterns

**Hero Section:**
- Dark background with data center image
- Gradient overlay for text legibility
- White heading + light subtitle
- Primary CTA (highlight blue) + secondary CTA (outline)
- Trust indicators below CTAs

**Service Card:**
- White background
- Icon at top (highlight blue)
- Heading (primary dark)
- Description (secondary gray)
- Link/button at bottom
- Subtle shadow, lift on hover

**Section Layout:**
- Light background or white
- Centered heading
- Optional subheading
- Content in grid (3-column desktop, 1-column mobile)
- Ample spacing (96px between sections)

---

## Messaging Dos and Don'ts

### DO Say:
✅ "24/7 NOC monitoring and Smart Hands support"
✅ "Certified fiber optic specialists (CFOT, CFOS)"
✅ "TIA-942 compliant data center installations"
✅ "Design → Build → Run lifecycle management"
✅ "Hyperscale data center experience"
✅ "Layer 1 to Layer 3 infrastructure expertise"
✅ "Rack and stack deployment with complete documentation"
✅ "Standards-compliant structured cabling"

### DON'T Say:
❌ "World-class IT solutions"
❌ "Cutting-edge technology"
❌ "Digital transformation partner" (too generic)
❌ "Full-service IT provider" (too broad)
❌ "Innovative cloud solutions" (not our primary focus)
❌ "Best-in-class service" (vague)
❌ "Technology consulting" (we're hands-on, not consultants)
❌ "End-user support" (unless in context of service desk)

---

## Contact Information for Brand Queries

**Brand Owner:** [Name]
**Implementation Lead:** [Name]
**Content Review:** [Name]
**Design Review:** [Name]

**Questions?** Refer to this document first. If clarity is needed, contact the brand owner before making decisions that deviate from these guidelines.

---

## Appendix: Design Token Export

```css
:root {
  /* Colors - Primary */
  --brand-primary: #0D1B2A;
  --brand-primary-alt: #1B263B;
  --brand-secondary: #415A77;
  --brand-accent: #778DA9;
  --brand-highlight: #52B2CF;

  /* Colors - Neutral */
  --neutral-light: #F5F5F5;
  --neutral-off-white: #E0E1DD;

  /* Colors - Text */
  --text-primary: #0D1B2A;
  --text-secondary: #415A77;
  --text-tertiary: #778DA9;
  --text-light: #F5F5F5;

  /* Colors - Border */
  --border-light: #E0E1DD;
  --border-medium: #778DA9;

  /* Colors - Functional */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #52B2CF;

  /* Typography - Font Family */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-headings: 'Space Grotesk', 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;

  /* Typography - Font Size */
  --text-display: 64px;
  --text-h1: 48px;
  --text-h2: 36px;
  --text-h3: 28px;
  --text-h4: 24px;
  --text-body-large: 18px;
  --text-body: 16px;
  --text-body-small: 14px;
  --text-caption: 12px;

  /* Typography - Font Weight */
  --weight-light: 300;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  /* Typography - Line Height */
  --line-height-tight: 1.2;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.6;

  /* Spacing */
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-8: 48px;
  --space-10: 64px;
  --space-12: 96px;
  --space-16: 128px;

  /* Border Radius */
  --radius-small: 4px;
  --radius-medium: 8px;
  --radius-large: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-small: 0 1px 3px rgba(13, 27, 42, 0.12), 0 1px 2px rgba(13, 27, 42, 0.08);
  --shadow-medium: 0 4px 6px rgba(13, 27, 42, 0.12), 0 2px 4px rgba(13, 27, 42, 0.08);
  --shadow-large: 0 10px 20px rgba(13, 27, 42, 0.16), 0 3px 6px rgba(13, 27, 42, 0.08);
  --shadow-highlight: 0 0 20px rgba(82, 178, 207, 0.3);

  /* Transitions */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0.0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;

  /* Breakpoints (for JS use) */
  --breakpoint-mobile: 320px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
  --breakpoint-wide: 1440px;
}
```

---

## Document Control

**Version:** 1.0
**Status:** Active
**Last Updated:** October 19, 2025
**Next Review:** January 19, 2026

**Change Log:**
- v1.0 (Oct 19, 2025): Initial brand repositioning document created

**Distribution:**
- Design team
- Development team
- Marketing/content team
- Executive stakeholders

**Approval:**
- [ ] Brand Owner
- [ ] Marketing Director
- [ ] Design Lead
- [ ] Development Lead

---

*This document establishes the complete brand repositioning for Sajecy Solutions from a generic IT services company to a specialized Data Center and Networking Infrastructure provider. All website content, design, and messaging must align with these guidelines.*
