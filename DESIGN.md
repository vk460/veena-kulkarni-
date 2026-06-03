---
name: Aurelian Void
colors:
  surface: '#151218'
  surface-dim: '#151218'
  surface-bright: '#3c383e'
  surface-container-lowest: '#100d12'
  surface-container-low: '#1e1a20'
  surface-container: '#221e24'
  surface-container-high: '#2c292e'
  surface-container-highest: '#373339'
  on-surface: '#e8e0e8'
  on-surface-variant: '#d1c5ae'
  inverse-surface: '#e8e0e8'
  inverse-on-surface: '#332f35'
  outline: '#9a907b'
  outline-variant: '#4e4634'
  surface-tint: '#f0c03e'
  primary: '#ffe5aa'
  on-primary: '#3e2e00'
  primary-container: '#f5c542'
  on-primary-container: '#6b5200'
  inverse-primary: '#765a00'
  secondary: '#fbabff'
  on-secondary: '#580065'
  secondary-container: '#ae05c6'
  on-secondary-container: '#ffd8fd'
  tertiary: '#ffdef5'
  on-tertiary: '#42283d'
  tertiary-container: '#e6c0dc'
  on-tertiary-container: '#6a4c64'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdf95'
  primary-fixed-dim: '#f0c03e'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#594400'
  secondary-fixed: '#ffd6fd'
  secondary-fixed-dim: '#fbabff'
  on-secondary-fixed: '#36003e'
  on-secondary-fixed-variant: '#7c008e'
  tertiary-fixed: '#ffd7f4'
  tertiary-fixed-dim: '#e1bbd7'
  on-tertiary-fixed: '#2b1327'
  on-tertiary-fixed-variant: '#5a3e54'
  background: '#151218'
  on-background: '#e8e0e8'
  surface-variant: '#373339'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 80px
    fontWeight: '900'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '900'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-padding-y: 160px
  container-max-width: 1280px
  gutter: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered for a high-end AI Architect portfolio, blending the precision of artificial intelligence with the prestige of architectural design. The brand personality is "Cinematic Technicalism"—it is authoritative, visionary, and unashamedly premium.

The aesthetic utilizes a **Minimalist-Glassmorphic** hybrid style. It relies on heavy whitespace (or "darkspace"), high-contrast accents, and translucent layers to create a sense of depth and digital sophistication. The goal is to evoke a feeling of "The Future, Curated," where the UI feels like a high-end physical gallery transformed into a digital interface. Movements should be fluid and intentional, mimicking the slow, sweeping pans of architectural cinematography.

## Colors

This design system employs an "Alternating Atmosphere" strategy. While the core identity is rooted in a deep magenta-black (Dark Mode), specific narrative sections transition into highly-refined light palettes to prevent visual fatigue and highlight academic credentials.

- **Deep Magenta-Black (#1a0518):** Used for the Hero and technical project showcases to create focus and mystery.
- **Aureate Gold (#f5c542):** Reserved for primary actions, success states, and highlight indicators. It signifies value and premium output.
- **Electric Magenta (#d946ef):** Used as a secondary accent for interactive triggers and decorative lighting effects.
- **Light Transitions:** Education, Certifications, and References utilize high-key, airy backgrounds (Lavender and Cream) with dark-magenta typography to maintain brand continuity while signaling a shift in content type.

## Typography

Typography is the primary structural element of this design system. It uses a high-contrast weight strategy.

- **Headlines:** Utilize **Plus Jakarta Sans** at a 900 weight. These should be set with tight letter-spacing and minimal line height to create a "block" effect that feels architectural and heavy.
- **Body:** **Hanken Grotesk** provides a sharp, contemporary feel for long-form reading, ensuring technical descriptions remain legible.
- **Technical Accents:** **Geist** is used for labels, metadata, and captions. Its monospaced-adjacent metrics lean into the AI/Developer nature of the portfolio.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain a gallery-like structure, transitioning to a fluid model on mobile.

- **Rhythm:** A strict 8px base unit is used for all internal component spacing. 
- **Section Breaks:** Large vertical padding (160px) is used to separate the dark and light sections, allowing the background transition to feel like a "reveal" rather than an abrupt change.
- **Desktop:** 12-column grid with wide 32px gutters to provide enough negative space for the typography to breathe.
- **Mobile:** 4-column grid with 20px margins. Headlines should scale aggressively to remain impactful on small screens.

## Elevation & Depth

Depth is conveyed through **Tonal Layering** and **Glassmorphism**, rather than traditional shadows.

1.  **Planes:** The background is the deepest level (#1a0518). Elements placed on top use the Surface color (#2a0a2a).
2.  **Translucency:** Cards and navigation bars should use a backdrop filter (`blur(12px)`) combined with a thin, low-opacity white border (1px).
3.  **Gold Accents:** The Primary Gold (#f5c542) is treated as a light source. It does not have a shadow; instead, it has a subtle outer glow (0px 0px 15px) of the same color when used on buttons or indicators.
4.  **Transitions:** As users scroll between dark and light sections, use a CSS `mix-blend-mode: difference` for fixed navigation elements to ensure they remain visible across shifting backgrounds.

## Shapes

The shape language is "Soft-Industrial." While the brand is premium, it avoids the playfulness of fully rounded "pill" shapes. 

- **Primary Radius:** A subtle 0.25rem (4px) radius is applied to buttons and small inputs to take the edge off without losing the architectural rigor.
- **Large Containers:** Project cards and featured sections use 0.75rem (12px) to create a sophisticated, framed appearance.
- **Interactive Elements:** Buttons maintain the 4px radius, emphasizing a precision-tooled aesthetic.

## Components

- **Buttons:** Primary buttons are Gold (#f5c542) with black text. Secondary buttons use a "Ghost" style: Magenta border, Magenta text, and a soft Magenta background on hover.
- **Project Cards:** Deep surface color (#2a0a2a) with a 1px border. On hover, the border color transitions to the Gold primary and the image within should scale slightly (1.05x).
- **Chips/Tags:** Used for "Skills" or "Tools." These use the `accent-soft` background with Magenta text, featuring the 4px roundedness.
- **Input Fields:** Minimalist design with only a bottom-border in the `border` color. On focus, the border animates to Gold and the label floats upward using the `label-caps` typography style.
- **Section Dividers:** Instead of lines, use the background color shift itself or a large-scale typographic "01", "02" in a low-opacity Magenta to mark the progression of the portfolio.
