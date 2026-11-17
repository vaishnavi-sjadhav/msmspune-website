import { NavItem } from "@/types";

export const BRAND_CONFIG = {
  name: "MATRIX",
  subName: "School of Management Studies",
  fullName: "Matrix School of Management Studies (MSMS Pune)",
  tagline: "Learn • Lead • Grow",
  foundedYear: 2010,
  location: "Matrix School of Management Studies, Pune, Maharashtra – 411041",
  phone: "+91-20-2435 6000",
  email: "admissions@matrix.edu.in",
  applyUrl: "/admissions/enquiry",
};

export const HERO_CONTENT = {
  titleLine1: "Empowering Minds,",
  titleLine2: "Brewing Futures",
  description:
    "MSMS PUNE: A legacy of academic excellence and holistic development, rooted in Pune since 1917. Dedicated to fostering innovation and community.",
  primaryCtaText: "Apply Now",
  primaryCtaLink: "/admissions/enquiry",
  secondaryCtaText: "Explore Campus Video",
};

export const ADMISSION_PAGES = [
  {
    num: "1",
    title: "Admission Overview",
    label: "Admission Overview",
    href: "/admissions",
    description: "Begin your MBA journey with Matrix School of Management Studies",
    badge: "Overview",
    icon: "🎓",
  },
  {
    num: "2",
    title: "Eligibility Criteria",
    label: "Eligibility Criteria",
    href: "/admissions/eligibility",
    description: "Academic qualifications, entrance exams (CET/CAT/CMAT) & requirements",
    badge: "Requirements",
    icon: "📋",
  },
  {
    num: "3",
    title: "Admission Process",
    label: "Admission Process",
    href: "/admissions/process",
    description: "Step-by-step CET Cell CAP process, document verification & seat confirmation",
    badge: "Steps",
    icon: "🚀",
  },
  {
    num: "4",
    title: "Fee Structure",
    label: "Fee Structure",
    href: "/admissions/fees",
    description: "Transparent MBA fee breakdown, payment schedules & installment options",
    badge: "Fees",
    icon: "💳",
  },
  {
    num: "5",
    title: "Required Documents",
    label: "Required Documents",
    href: "/admissions/documents",
    description: "Comprehensive checklist of certificates, entrance scorecards & photos",
    badge: "Checklist",
    icon: "📁",
  },
  {
    num: "6",
    title: "Scholarships",
    label: "Scholarships",
    href: "/admissions/scholarships",
    description: "Merit-based scholarships, government schemes & special category grants",
    badge: "Grants",
    icon: "🏆",
  },
  {
    num: "7",
    title: "Admission Enquiry",
    label: "Admission Enquiry",
    href: "/admissions/enquiry",
    description: "Direct counselor assistance, campus visits & enquiry application form",
    badge: "Connect",
    icon: "✍️",
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
    isActive: false,
  },
  {
    label: "About Us",
    href: "/about-us",
    dropdown: [
      { label: "Our Legacy", description: "Historic milestones of excellence", href: "/#about" },
      { label: "Leadership & Vision", description: "Governing board & chancellor message", href: "/#leadership" },
      { label: "Accreditation & Approvals", description: "AICTE approved, DTE recognized, NAAC A++", href: "/#accreditation" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    isActive: true,
    dropdown: ADMISSION_PAGES.map((page) => ({
      label: page.label,
      description: page.description,
      href: page.href,
    })),
  },
  {
    label: "Placements",
    href: "/placements",
    dropdown: [
      { label: "Placement Statistics", description: "100% placement record with top Fortune 500 recruiters", href: "/#placements" },
      { label: "Our Top Recruiters", description: "Amazon, Deloitte, ICICI, TCS, HDFC, Infosys", href: "/#recruiters" },
      { label: "Internship & Live Projects", description: "Mandatory corporate summer internships", href: "/#internships" },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    dropdown: [
      { label: "Student Clubs & Committees", description: "Over 25+ student-driven leadership societies", href: "/#clubs" },
      { label: "Modern Infrastructure", description: "Smart classrooms, digital amphitheater & auditorium", href: "/#infra" },
      { label: "Sports & Recreation", description: "Indoor sports complex, gym & athletic grounds", href: "/#sports" },
    ],
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const QUICK_SEARCH_LINKS = [
  { title: "MBA Admission 2026 Process", category: "Admissions", href: "/admissions/process" },
  { title: "Fee Structure & Installments", category: "Fees", href: "/admissions/fees" },
  { title: "Eligibility Criteria (CET/CAT)", category: "Eligibility", href: "/admissions/eligibility" },
  { title: "Required Documents Checklist", category: "Documents", href: "/admissions/documents" },
  { title: "Government & Merit Scholarships", category: "Scholarships", href: "/admissions/scholarships" },
  { title: "Contact Admissions Office", category: "Enquiry", href: "/admissions/enquiry" },
];
