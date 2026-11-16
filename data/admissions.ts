export const ADMISSIONS_DATA = {
  hero: {
    title: "TRANSFORM YOUR AMBITION",
    subtitle: "MBA Admissions 2026-2028 | Elevate Your Future",
    navItems: [
      { label: "Eligibility", href: "#eligibility" },
      { label: "Process", href: "#process" },
      { label: "Fees", href: "#fees" },
      { label: "Scholarships", href: "#scholarships" },
      { label: "Documents", href: "#documents" },
    ],
  },
  eligibility: {
    sectionIndex: "01 /",
    title: "ADMISSION ELIGIBILITY",
    generalCriteria: {
      percentage: "50%",
      label: "Graduation",
      category: "(General Category)",
    },
    reservedCriteria: {
      percentage: "45%",
      label: "Graduation",
      category: "(Reserved Categories)",
    },
    entranceTestsTitle: "Accepted Entrance Tests",
    entranceTests: [
      "MAH-MBA-CET",
      "CAT",
      "CMAT",
      "MAT",
      "ATMA",
      "XAT",
    ],
    image: "/images/admissions-library.jpg",
  },
  selectionProcess: {
    sectionIndex: "02 /",
    title: "THE SELECTION PROCESS",
    dteCode: "DTE Choice Code: 6634",
    steps: [
      {
        step: "01",
        title: "Entrance Exam",
        icon: "exam",
        description: "Submit non-zero test scores in CET/CAT/CMAT/MAT",
      },
      {
        step: "02",
        title: "DTE CAP Registration",
        icon: "register",
        description: "Online selection for Matrix School, Code: 6634",
      },
      {
        step: "03",
        title: "Scrutiny & Verification",
        icon: "verify",
        description: "E-verification at Facilitation Center (FC)",
      },
      {
        step: "04",
        title: "Seat Allotment & Reporting",
        icon: "allotment",
        description: "Confirm online & report to Pune campus with fees",
      },
    ],
  },
  fees: {
    sectionIndex: "03 /",
    title: "FEES & FINANCIAL ASSISTANCE",
    tableTitle: "FRA-Approved Fee Structure (AY 2026-27)",
    headers: ["Particulars", "General", "OBC / EBC", "SC / ST"],
    rows: [
      { particulars: "Tuition Fee", general: "₹1,05,000", obc: "₹52,500", scst: "Nil" },
      { particulars: "Development Fee", general: "₹15,000", obc: "₹15,000", scst: "₹15,000" },
      { particulars: "Total Annual Fee", general: "₹1,20,000", obc: "₹67,500", scst: "₹15,000" },
    ],
    circularPdfText: "Download Fee Circular (PDF)",
  },
  scholarships: {
    title: "Government Scholarships (MahaDBT)",
    items: [
      {
        title: "SC/ST 100% Waivers",
        description: "Full tuition fee waiver via Social Welfare Department (MahaDBT)",
      },
      {
        title: "EBC 50% Tuition Help",
        description: "50% tuition fee subsidy for Economically Backward Class students",
      },
    ],
    awardsTitle: "Merit-Based Awards",
    awardsDesc: "Special academic scholarships for top percentile scorers in CET & CAT",
    loanTitle: "Bank Loan Facilitation",
    loanDesc: "Official tie-ups with leading nationalized & private banks for quick sanction",
  },
  whyChoose: {
    sectionIndex: "04 /",
    title: "WHY CHOOSE MATRIX FOR MBA",
    features: [
      { label: "100% Placement Support", icon: "placement" },
      { label: "Industry-Aligned Curriculum", icon: "curriculum" },
      { label: "Top-tier Campus & Faculty", icon: "campus" },
    ],
    seminarImage: "/images/admissions-seminar.jpg",
    seminarLabel: "Interactive Business Seminar",
  },
  documentsChecklist: {
    sectionIndex: "05 /",
    title: "REQUIRED DOCUMENTS CHECKLIST",
    groups: [
      {
        title: "Academic",
        docs: [
          "CET / CAT Scorecard",
          "CAP Allotment Letter",
          "10th & 12th Marksheets",
          "Graduation Marksheets & Degree",
          "TC / Migration Certificate",
        ],
      },
      {
        title: "Identity",
        docs: [
          "Domicile Certificate",
          "Nationality Certificate",
          "Aadhaar Card",
          "Passport Size Photos (5)",
        ],
      },
      {
        title: "Category",
        docs: [
          "Caste Certificate",
          "Caste Validity Certificate",
          "Non-Creamy Layer (Valid)",
          "EWS Certificate (If applicable)",
          "Income Certificate",
        ],
      },
    ],
  },
  cta: {
    title: "READY TO TAKE THE LEAP?",
    helpdeskTitle: "Fast-response Helpdesk",
    helpdeskSubtitle: "Direct counselling & helpline",
    phone: "+91 98220 12345",
    address:
      "Survey No. 9/1/5 & 9/2/4, Next to Westerly Bypass Road, Ambegaon (Bk.), Pune – 411041",
    mapUrl:
      "https://maps.google.com/?q=Matrix+School+of+Management+Studies+Ambegaon+Pune",
  },
};
