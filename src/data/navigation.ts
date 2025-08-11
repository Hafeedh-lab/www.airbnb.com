export interface NavigationTab {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly ariaLabel: string;
  readonly badge?: string;
}

export const navigationTabs: NavigationTab[] = [
  {
    id: 'homes',
    label: 'Homes',
    href: '/homes',
    ariaLabel: 'Homes'
  },
  {
    id: 'experiences',
    label: 'Experiences',
    href: '/experiences',
    ariaLabel: 'Experiences, new',
    badge: 'NEW'
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    ariaLabel: 'Services, new',
    badge: 'NEW'
  }
] as const;
