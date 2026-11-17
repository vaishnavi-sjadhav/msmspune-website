export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  badge?: string;
  dropdown?: {
    label: string;
    description?: string;
    href: string;
  }[];
}

export interface HeroContentProps {
  titleLine1: string;
  titleLine2: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  onExploreVideo?: () => void;
}

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}
