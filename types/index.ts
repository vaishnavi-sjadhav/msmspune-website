export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  children?: { label: string; href: string }[];
}

export interface HighlightItem {
  id: string;
  title: string;
  icon: "education" | "development" | "industry" | "career";
}

export interface FeatureCard {
  id: string;
  title: string;
  image: string;
  icon: "academic" | "environment" | "student";
  href: string;
}

export interface NewsItem {
  id: string;
  title: string;
  href: string;
  date?: string;
  category?: string;
}

export interface SocialLink {
  platform: "facebook" | "linkedin" | "youtube" | "twitter" | "instagram";
  href: string;
  label: string;
}

export interface MatrixEvent {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  organizedBy: string;
  image: string;
  date?: string;
  venue?: string;
  description?: string;
  accentColor?: string;
}

export interface PlacementStudent {
  id: string;
  name: string;
  program: string;
  company: string;
  companyLogo?: string;
  image: string;
  package?: string;
  batch: string;
}

export interface BatchPlacementData {
  batchId: string;
  batchLabel: string;
  period: string;
  stats: {
    placementRate: string;
    recruitingPartners: string;
    highestPackage: string;
    averagePackage: string;
  };
  students: PlacementStudent[];
}
