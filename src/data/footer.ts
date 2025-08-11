export interface FooterLink {
  readonly id: string;
  readonly text: string;
  readonly href: string;
}

export interface FooterSection {
  readonly id: string;
  readonly title: string;
  readonly links: FooterLink[];
}

export interface SocialLink {
  readonly id: string;
  readonly ariaLabel: string;
  readonly href: string;
  readonly icon: string;
}

export const footerSections: FooterSection[] = [
  {
    id: 'support',
    title: 'Support',
    links: [
      { id: 'help-center', text: 'Help Center', href: '/help/home?from=footer' },
      { id: 'aircover', text: 'AirCover', href: '/aircover' },
      { id: 'anti-discrimination', text: 'Anti-discrimination', href: '/against-discrimination' },
      { id: 'disability-support', text: 'Disability support', href: '/accessibility' },
      { id: 'cancellation-options', text: 'Cancellation options', href: '/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19' },
      { id: 'report-concern', text: 'Report neighborhood concern', href: '/neighbors' }
    ]
  },
  {
    id: 'hosting',
    title: 'Hosting',
    links: [
      { id: 'airbnb-your-home', text: 'Airbnb your home', href: '/host/homes?from_footer=1' },
      { id: 'airbnb-your-experience', text: 'Airbnb your experience', href: '/host/experiences' },
      { id: 'airbnb-your-service', text: 'Airbnb your service', href: '/host/services' },
      { id: 'aircover-for-hosts', text: 'AirCover for Hosts', href: '/aircover-for-hosts' },
      { id: 'hosting-resources', text: 'Hosting resources', href: '/resources' },
      { id: 'community-forum', text: 'Community forum', href: "https://community.withairbnb.com/t5/Community-Center/ct-p/community-center" },
      { id: 'hosting-responsibly', text: 'Hosting responsibly', href: '/help/responsible-hosting' },
      { id: 'airbnb-friendly-apartments', text: 'Airbnb-friendly apartments', href: '/airbnb-friendly' },
      { id: 'join-hosting-class', text: 'Join a free Hosting class', href: "https://introtohostingonairbnbwebinars.splashthat.com/" },
      { id: 'find-co-host', text: 'Find a co‑host', href: '/host/co-hosts' }
    ]
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    links: [
      { id: 'summer-release', text: '2025 Summer Release', href: '/release' },
      { id: 'newsroom', text: 'Newsroom', href: '/press/news' },
      { id: 'careers', text: 'Careers', href: '/careers' },
      { id: 'investors', text: 'Investors', href: "https://investors.airbnb.com/" },
      { id: 'gift-cards', text: 'Gift cards', href: '/giftcards' },
      { id: 'emergency-stays', text: 'Airbnb.org emergency stays', href: "https://www.airbnb.org/?locale=en" }
    ]
  }
] as const;

export const footerLinks: FooterLink[] = [
  { id: 'terms', text: 'Terms', href: '/terms' },
  { id: 'sitemap', text: 'Sitemap', href: '/sitemaps/v2' },
  { id: 'privacy', text: 'Privacy', href: '/terms/privacy_policy' },
  { id: 'privacy-choices', text: 'Your Privacy Choices', href: '/help/sale-share-opt-out' }
] as const;

export const socialLinks: SocialLink[] = [
  { id: 'facebook', ariaLabel: 'Navigate to Facebook', href: "https://www.facebook.com/airbnb", icon: "https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-11.svg" },
  { id: 'twitter', ariaLabel: 'Navigate to Twitter', href: "https://twitter.com/airbnb", icon: "https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-12.svg" },
  { id: 'instagram', ariaLabel: 'Navigate to Instagram', href: "https://instagram.com/airbnb", icon: "https://c.animaapp.com/me7emf7wZc0xCu/assets/icon-13.svg" }
] as const;
