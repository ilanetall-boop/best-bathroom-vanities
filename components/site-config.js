/**
 * site-config.js — Best Bathroom Vanities
 * Loaded synchronously in <head> to set config & CSS variables before paint.
 */
window.SITE_CONFIG = {
  name: "Best Bathroom Vanities",
  domain: "best-bathroom-vanities.com",
  tagline: "Expert reviews & buying guides for the perfect bathroom vanity",
  logo: "images/bathroom-vanities-logo.svg",
  newsletterUrl: "https://script.google.com/macros/s/AKfycbxhUcinCHfLDqvtL6ko2bxreGTOv4yOkGPrO_hUC7v9AVXvjI0cAG9k2nVXKAkbN8kV/exec",
  affiliateTag: "bestbathroomvanities-20",
  gaId: "G-VM0QPH4BGB",
  colors: {
    primary: "#37474F",
    primaryLight: "#607D8B",
    primaryDark: "#263238",
    accent: "#26C6DA",
    accentDark: "#00ACC1"
  },
  nav: [
    { label: "Home", href: "index" },
    { label: "Articles", href: "articles" },
    { label: "Comparisons", href: "comparisons" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" }
  ],
  footer: {
    description: "Your trusted source for bathroom vanity reviews, comparisons, and buying guides. Find the perfect vanity for your bathroom renovation.",
    quickLinks: [
      { label: "All Articles", href: "articles" },
      { label: "Comparisons", href: "comparisons" },
      { label: "How We Research", href: "how-we-research" },
      { label: "About Us", href: "about" }
    ],
    legal: [
      { label: "Privacy Policy", href: "privacy" },
      { label: "Terms of Service", href: "terms" },
      { label: "Affiliate Disclosure", href: "disclosure" }
    ],
    network: [
      { label: "Best Bath Rugs", href: "https://www.bestbathrugs.com" },
      { label: "Best Shower Curtains", href: "https://best-shower-curtains.com" },
      { label: "Best Toilet Seats", href: "https://besttoiletseats.com" }
    ]
  },
  networkBanners: [
    {
      id: "best-bath-rugs",
      domain: "bestbathrugs.com",
      headline: "Looking for the Perfect Bath Rug?",
      description: "Discover our expert reviews of the best bath rugs — from ultra-absorbent to non-slip designs. Find your perfect match.",
      ctaText: "Browse Bath Rugs",
      bannerImage: "images/banner-bath-rugs.jpg",
      active: true
    },
    {
      id: "best-shower-curtains",
      domain: "best-shower-curtains.com",
      headline: "Need a New Shower Curtain?",
      description: "From waterproof liners to luxury hotel-style designs. Our experts tested the top shower curtains so you don't have to.",
      ctaText: "Browse Shower Curtains",
      bannerImage: "images/banner-shower-curtains.jpg",
      active: true
    },
    {
      id: "best-toilet-seats",
      domain: "besttoiletseats.com",
      headline: "Upgrading Your Toilet Seat?",
      description: "From bidet seats to soft-close designs. Expert reviews of the best toilet seats for comfort and hygiene.",
      ctaText: "Browse Toilet Seats",
      bannerImage: "images/banner-toilet-seats.jpg",
      active: true
    }
  ]
};

// Set CSS variables immediately
(function () {
  var c = window.SITE_CONFIG.colors;
  var r = document.documentElement.style;
  r.setProperty('--primary', c.primary);
  r.setProperty('--primary-light', c.primaryLight);
  r.setProperty('--primary-dark', c.primaryDark);
  r.setProperty('--accent', c.accent);
  r.setProperty('--accent-dark', c.accentDark);

  // Reserve header space to prevent CLS (layout shift)
  var s = document.createElement('style');
  s.textContent = '#site-header{min-height:89px;background:#fff;border-bottom:1px solid #e5e5e5;position:sticky;top:0;z-index:50}';
  document.head.appendChild(s);
})();
