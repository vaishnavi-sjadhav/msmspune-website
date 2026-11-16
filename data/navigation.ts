import { NavItem, SocialLink } from "@/types";

export const TOP_BAR_DATA = {
  location: "Pune",
  email: "info@msmspune.com",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "facebook", href: "https://facebook.com", label: "Facebook" },
  { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { platform: "youtube", href: "https://youtube.com", label: "YouTube" },
  { platform: "twitter", href: "https://x.com", label: "X (formerly Twitter)" },
  { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
];

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  {
    label: "Programs",
    href: "/programs",
    hasDropdown: true,
    children: [
      { label: "Master of Business Administration (MBA)", href: "/programs#mba" },
      { label: "MBA in Marketing Management", href: "/programs#marketing" },
      { label: "MBA in Financial Management", href: "/programs#finance" },
      { label: "MBA in Business Analytics & Systems", href: "/programs#analytics" },
      { label: "MBA in Human Resource Management", href: "/programs#hr" },
      { label: "MBA in Operations & Supply Chain", href: "/programs#operations" },
      { label: "Master of Computer Applications (MCA)", href: "/programs#mca" },
      { label: "Ph.D. in Management Studies", href: "/programs#phd" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    hasDropdown: true,
    children: [
      { label: "Eligibility Criteria", href: "/admissions#eligibility" },
      { label: "Selection Process", href: "/admissions#process" },
      { label: "Fee Structure", href: "/admissions#fees" },
      { label: "Scholarships", href: "/admissions#scholarships" },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/#campus" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_DATA = {
  motto: "Designed for a Better Tomorrow",
  description:
    "Nurturing global leaders through excellence in education, innovation, and industry engagement.",
  exploreLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about", hasArrow: true },
    { label: "Admissions", href: "/admissions", hasArrow: true },
    { label: "Placements", href: "/placements", hasArrow: true },
    { label: "Campus Life", href: "#events" },
    { label: "Careers", href: "#careers", hasBadge: true },
    { label: "Contact Us", href: "#contact" },
  ],
  academicsLinks: [
    { label: "MBA (Finance, HR, Marketing)", href: "#mba" },
    { label: "MCA (Computer Applications)", href: "#mca" },
    { label: "PGDM Program", href: "#pgdm" },
    { label: "Ph.D. in Management", href: "#phd" },
    { label: "Executive Education", href: "#exec-ed" },
    { label: "Skill Development Programs", href: "#skills" },
  ],
  contact: {
    location: "Pimpri-Chinchwad, Pune, Maharashtra, India",
    phone: "+91 20 1234 5678",
    email: "admissions@matrix.edu",
    website: "www.matrix.edu",
  },
  legalLinks: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Sitemap", href: "#sitemap" },
  ],
};
