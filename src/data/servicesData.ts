import { ServiceDetail } from '../types';

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'brand-identity',
    category: 'BRANDING',
    title: 'Brand Identity',
    tagline: 'Logo design, visual identity & brand systems.',
    description: 'We build cohesive, memorable brand foundations that communicate your values with undeniable authority and distinction.',
    icon: 'Sparkles',
    items: [
      'Logo Design (Primary, Secondary & Sub-marks)',
      'Brand Identity Systems & Visual Language',
      'Comprehensive Brand Guidelines (Typography & Color Specs)',
      'Brand Revamp & Strategic Rebranding',
      'Corporate Identity & Iconography'
    ],
    deliverablesSummary: 'Vector source files (AI, EPS, SVG), High-Res PNG/PDF, Style Guide manual'
  },
  {
    id: 'social-media',
    category: 'SOCIAL MEDIA',
    title: 'Social Media Design',
    tagline: 'Creative posts, campaigns & digital content.',
    description: 'Stop the scroll with high-converting graphics, branded grids, and motion-ready carousel creatives tailored for engagement.',
    icon: 'Share2',
    items: [
      'Instagram Grid & Carousel Post Creatives',
      'Stories, Highlights & Engaging Reel Covers',
      'Facebook Ad & Organic Banner Creatives',
      'High-Impact Social Media Campaigns',
      'Digital Performance Advertisements & Retargeting Graphics'
    ],
    deliverablesSummary: 'Pixel-perfect dimensions (1:1, 4:5, 9:16), Editable Canva/PSD templates, ready-to-publish exports'
  },
  {
    id: 'print-design',
    category: 'PRINT',
    title: 'Print Design',
    tagline: 'Posters, brochures, flyers & promotional materials.',
    description: 'Tactile marketing materials engineered for tangible impact, calibrated with precision CMYK color profiles for flawless press printing.',
    icon: 'Printer',
    items: [
      'Event, Commercial & Promo Posters',
      'Flyers, Pamphlets & Direct Mailers',
      'Bi-Fold, Tri-Fold & Multi-Page Brochures',
      'Product Catalogues & Lookbooks',
      'Luxury Business Cards & Finishes',
      'Large Format Banners & Street Hoardings',
      'Restaurant & Hospitality Menus',
      'Custom Event & VIP Invitations'
    ],
    deliverablesSummary: '300 DPI CMYK Print-ready PDFs with bleed marks, vector outlines & source files'
  },
  {
    id: 'packaging-design',
    category: 'PACKAGING',
    title: 'Packaging & Labels',
    tagline: 'Labels, product packaging & retail designs.',
    description: 'Turn shelf browsers into buyers with custom packaging architecture, dielines, and retail-grade product labels that command attention.',
    icon: 'PackageCheck',
    items: [
      'Consumer Product Packaging & Cartons',
      'Custom Product Labels, Wraps & Stickers',
      'Folding Box & Rigid Packaging Design',
      'Eco Pouch & Flexible Bag Design',
      'Product Hangtags, Inserts & Unboxing Cards'
    ],
    deliverablesSummary: 'Exact dielines, 3D photorealistic mockups, print-certified production files'
  },
  {
    id: 'business-design',
    category: 'BUSINESS',
    title: 'Business & Corporate Design',
    tagline: 'Corporate profiles, pitch decks & executive stationery.',
    description: 'Equip your executive team with sleek, authoritative collateral that impresses investors, partners, and enterprise clients.',
    icon: 'Briefcase',
    items: [
      'Company Profiles & Capability Decks',
      'High-Stakes Pitch Presentations (PowerPoint / Keynote)',
      'Official Letterheads & Digital Word Templates',
      'Accreditation Certificates & Awards',
      'Complete Corporate Stationery Suites'
    ],
    deliverablesSummary: 'Interactive PDF presentations, editable document templates, complete corporate vector assets'
  },
  {
    id: 'digital-creative',
    category: 'DIGITAL',
    title: 'Creative & Digital Visuals',
    tagline: 'Web graphics, banners, thumbnails & digital visuals.',
    description: 'Elevate your online presence with sharp web banners, viral YouTube thumbnails, bespoke infographics, and advanced retouching.',
    icon: 'Layers',
    items: [
      'High-CTR YouTube Thumbnails & Channel Art',
      'Website Hero Banners & Landing Graphics',
      'Data-Rich Infographics & Visual Explanations',
      'High-End Photo Editing & Color Grading',
      'Commercial Image Retouching & Composite Art',
      'Custom Creative Digital Artwork'
    ],
    deliverablesSummary: 'Optimized WebP, PNG, SVG assets for ultra-crisp display on Retina and 4K screens'
  }
];

export const MAIN_SERVICES_OVERVIEW = [
  {
    name: 'BRANDING',
    desc: 'Logo design, visual identity & brand systems.',
    icon: 'ShieldCheck',
    color: '#7C3AED'
  },
  {
    name: 'SOCIAL MEDIA',
    desc: 'Creative posts, campaigns & digital content.',
    icon: 'Smartphone',
    color: '#A855F7'
  },
  {
    name: 'PRINT DESIGN',
    desc: 'Posters, brochures, flyers & promotional materials.',
    icon: 'Printer',
    color: '#7C3AED'
  },
  {
    name: 'PACKAGING',
    desc: 'Labels, product packaging & retail designs.',
    icon: 'Box',
    color: '#A855F7'
  },
  {
    name: 'ADVERTISING',
    desc: 'Campaign creatives, promotional graphics & digital ads.',
    icon: 'Megaphone',
    color: '#7C3AED'
  },
  {
    name: 'DIGITAL DESIGN',
    desc: 'Web graphics, banners, thumbnails & digital visuals.',
    icon: 'Layout',
    color: '#A855F7'
  }
];
