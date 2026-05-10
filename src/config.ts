export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  target: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  videoPath: string
  eyebrow: string
  titleLine: string
  titleEmphasis: string
  subtitleLine1: string
  subtitleLine2: string
  ctaText: string
  ctaTargetId: string
}

export interface ManifestoConfig {
  sectionLabel: string
  text: string
}

export interface AnatomyPillar {
  label: string
  title: string
  body: string
}

export interface AnatomyConfig {
  sectionLabel: string
  title: string
  pillars: AnatomyPillar[]
}

export interface TierConfig {
  name: string
  price: string
  frequency: string
  journeys: string
  image: string
  description: string
  amenities: string[]
  ctaText: string
  ctaHref: string
}

export interface TiersConfig {
  sectionLabel: string
  title: string
  tiers: TierConfig[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export interface FooterConfig {
  ageGateText: string
  brandName: string
  brandTaglineLines: string[]
  columns: FooterColumn[]
  copyright: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Bridal Glamour | Makeup & Mehndi Artist",
  siteDescription: "Premium bridal makeup and mehndi services for your special day. Transform into the most beautiful version of yourself with our expert bridal artists.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "Bridal Glamour",
  links: [
    { label: "Services", target: "#anatomy" },
    { label: "Portfolio", target: "#portfolio" },
    { label: "Packages", target: "#tiers" },
    { label: "Reviews", target: "#feedback" },
    { label: "Contact", target: "#contact" },
  ],
}

export const heroConfig: HeroConfig = {
  videoPath: "videos/hero.mp4",
  eyebrow: "Bridal Makeup & Mehndi",
  titleLine: "Unveil Your",
  titleEmphasis: "Radiant Beauty",
  subtitleLine1: "Transform into the most stunning version of yourself",
  subtitleLine2: "on your special day with our expert bridal artistry.",
  ctaText: "Book Your Look",
  ctaTargetId: "#contact",
}

export const manifestoConfig: ManifestoConfig = {
  sectionLabel: "Our Philosophy",
  text: "Every bride deserves to feel like the most beautiful version of herself. We blend timeless elegance with modern artistry, creating bridal looks that capture your unique essence. From flawless makeup that lasts all day to intricate mehndi designs that tell your love story, we craft every detail with passion, precision, and an unwavering commitment to making your bridal dreams come true.",
}

export const anatomyConfig: AnatomyConfig = {
  sectionLabel: "What We Offer",
  title: "Our Bridal Services",
  pillars: [
    {
      label: "Bridal Makeup",
      title: "Flawless Bridal Makeup Artistry",
      body: "Our expert makeup artists specialize in creating long-lasting, camera-ready bridal looks tailored to your skin type, wedding theme, and personal style. Using premium products from international brands, we ensure your makeup stays flawless from the first photo to the final farewell. Whether you prefer a natural dewy glow or a bold glamorous look, we bring your vision to life with precision and care. Every session includes a personalized trial to perfect your dream bridal appearance.",
    },
    {
      label: "Bridal Mehndi",
      title: "Intricate Mehndi Designs",
      body: "Our mehndi artists are masters of traditional and contemporary henna artistry. From delicate floral patterns to elaborate bridal motifs featuring peacocks, paisleys, and personalized elements, we create stunning designs that tell your unique love story. Using only natural, skin-safe henna, our designs develop into a rich, deep color that lasts for weeks. Each bridal mehndi session is a relaxing, joyful experience as you prepare for your big day surrounded by beauty and tradition.",
    },
    {
      label: "Complete Package",
      title: "The Full Bridal Experience",
      body: "Our signature all-inclusive package combines expert makeup artistry with exquisite mehndi design for the complete bridal transformation. This premium experience includes multiple makeup sessions for all your wedding events, from engagement to reception, along with coordinated mehndi designs for each occasion. Enjoy priority booking, on-location service at your venue, touch-up kits, and a dedicated bridal consultant who ensures every detail is perfect. Let us handle your complete bridal beauty journey so you can focus on creating memories.",
    },
  ],
}

export const tiersConfig: TiersConfig = {
  sectionLabel: "Pricing",
  title: "Bridal Packages",
  tiers: [
    {
      name: "Essential Bridal",
      price: "15,000",
      frequency: "per session",
      journeys: "Perfect for intimate weddings",
      image: "/images/tier-01.jpg",
      description: "Our Essential Bridal package includes a complete makeup application with premium products, perfectly matched to your skin tone and wedding theme. Ideal for brides seeking elegant simplicity with professional results that photograph beautifully and last throughout the celebration.",
      amenities: [
        "Full bridal makeup application",
        "Premium international products",
        "Lashes and brow styling",
        "Skin prep and priming",
        "Long-lasting setting spray",
        "Touch-up mini kit included",
      ],
      ctaText: "Book Now",
      ctaHref: "#contact",
    },
    {
      name: "Royal Mehndi",
      price: "12,000",
      frequency: "per session",
      journeys: "Traditional artistry for your hands",
      image: "/images/tier-02.jpg",
      description: "The Royal Mehndi package delivers an elaborate bridal henna experience with intricate full-hand and forearm designs. Our master artists create custom patterns incorporating traditional motifs, hidden initials, and personalized elements that make your mehndi truly one-of-a-kind.",
      amenities: [
        "Full bridal mehndi (hands & arms)",
        "Custom design consultation",
        "Traditional & modern motifs",
        "Hidden names/initials included",
        "Natural, skin-safe henna",
        "Aftercare kit provided",
      ],
      ctaText: "Book Now",
      ctaHref: "#contact",
    },
    {
      name: "Grand Bridal",
      price: "35,000",
      frequency: "full package",
      journeys: "The complete bridal transformation",
      image: "/images/tier-03.jpg",
      description: "Our signature Grand Bridal package is the ultimate bridal beauty experience. Combining flawless makeup artistry with stunning mehndi design, this all-inclusive package covers multiple events with a dedicated artist, priority scheduling, and luxury add-ons to make you feel like royalty on your special day.",
      amenities: [
        "Bridal makeup + mehndi combo",
        "Multiple event coverage",
        "Personal bridal consultant",
        "On-location service",
        "Pre-wedding skin consultation",
        "Exclusive bridal touch-up kit",
        "Priority booking & support",
      ],
      ctaText: "Book Now",
      ctaHref: "#contact",
    },
  ],
}

export const footerConfig: FooterConfig = {
  ageGateText: "Where every bride becomes a masterpiece of elegance and grace.",
  brandName: "Bridal Glamour",
  brandTaglineLines: [
    "Premium Bridal Makeup",
    "& Mehndi Artistry",
    "Mumbai, India",
  ],
  columns: [
    {
      heading: "Services",
      links: [
        { label: "Bridal Makeup", href: "#anatomy" },
        { label: "Bridal Mehndi", href: "#anatomy" },
        { label: "Complete Package", href: "#tiers" },
        { label: "Portfolio", href: "#portfolio" },
      ],
    },
    {
      heading: "Packages",
      links: [
        { label: "Essential Bridal", href: "#tiers" },
        { label: "Royal Mehndi", href: "#tiers" },
        { label: "Grand Bridal", href: "#tiers" },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "Client Reviews", href: "#feedback" },
        { label: "Instagram", href: "#" },
        { label: "WhatsApp", href: "#" },
      ],
    },
  ],
  copyright: " 2025 Bridal Glamour. All rights reserved. Crafted with love for every bride.",
}
