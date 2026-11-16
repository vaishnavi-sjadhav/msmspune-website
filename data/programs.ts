export const FEATURED_PROGRAM = {
  kicker: "Flagship Academic Program",
  title: "Master of Business Administration (MBA)",
  description:
    "Our flagship 2-year full-time MBA program affiliated with Savitribai Phule Pune University (SPPU) and approved by AICTE, New Delhi, is tailored to equip future managers with strategic foresight, leadership agility, and dual-specialization mastery.",
  ctaText: "Explore MBA Specializations",
  ctaHref: "/programs",
  image: "/images/mba-grad-cap-clean.jpg",
};

export interface SpecializationProgram {

  id: string;
  category: "mba" | "mca" | "phd" | "executive";
  badge: string;
  title: string;
  shortTitle: string;
  tagline: string;
  image: string;
  duration: string;
  intake: string;
  affiliation: string;
  dteCode: string;
  highestPackage: string;
  averagePackage: string;
  description: string;
  keyElectives: string[];
  careerRoles: string[];
  topRecruiters: string[];
  semesterOutline: {
    sem: string;
    focus: string;
    courses: string[];
  }[];
}

export const PROGRAMS_DATA: SpecializationProgram[] = [
  {
    id: "marketing",
    category: "mba",
    badge: "Dual Specialization Major",
    title: "MBA in Marketing Management",
    shortTitle: "Marketing Management",
    tagline: "Drive brand growth, consumer psychology & digital marketing ecosystems",
    image: "/images/program-mba-marketing.jpg",
    duration: "2 Years (4 Semesters Full-Time)",
    intake: "60 Seats",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    dteCode: "6634",
    highestPackage: "₹24 LPA",
    averagePackage: "₹8.8 LPA",
    description:
      "Engineered for tomorrow's CMOs and growth strategists. Master customer journey mapping, algorithmic performance marketing, neuromarketing, and multi-channel brand leadership with live brand consulting projects.",
    keyElectives: [
      "Digital Marketing & SEO/SEM Strategies",
      "Consumer Behavior & Neuro-insights",
      "Omnichannel Retail & E-Commerce",
      "Product Strategy & Brand Positioning",
      "Strategic Sales & Key Account Management",
      "Marketing Analytics & Attribution Modeling",
    ],
    careerRoles: [
      "Brand & Product Manager",
      "Digital Marketing Lead",
      "Key Account Strategist",
      "Growth Marketing Specialist",
      "Market Research Consultant",
    ],
    topRecruiters: ["Deloitte", "Tata Motors", "Unilever", "Amazon", "Nykaa", "ITC Limited"],
    semesterOutline: [
      {
        sem: "Semester I",
        focus: "Management Foundations",
        courses: ["Managerial Economics", "Organizational Behavior", "Marketing Fundamentals", "Accounting for Decision Making"],
      },
      {
        sem: "Semester II",
        focus: "Advanced Functional Integration",
        courses: ["Consumer Behavior", "Services Marketing", "Integrated Marketing Communications", "Business Research Methods"],
      },
      {
        sem: "Semester III",
        focus: "Specialization Core & Summer Internship",
        courses: ["Digital Marketing Strategies", "Sales & Distribution Management", "B2B Marketing", "Summer Internship Defense (10 Weeks)"],
      },
      {
        sem: "Semester IV",
        focus: "Strategic Capstone & Global Marketing",
        courses: ["International Marketing", "Strategic Brand Management", "Marketing Analytics Capstone", "Comprehensive Viva Voce"],
      },
    ],
  },
  {
    id: "finance",
    category: "mba",
    badge: "Dual Specialization Major",
    title: "MBA in Financial Management",
    shortTitle: "Financial Management",
    tagline: "Master corporate valuation, investment banking & FinTech innovations",
    image: "/images/program-mba-finance.jpg",
    duration: "2 Years (4 Semesters Full-Time)",
    intake: "60 Seats",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    dteCode: "6634",
    highestPackage: "₹22 LPA",
    averagePackage: "₹9.2 LPA",
    description:
      "Prepare for high-impact roles in investment banking, private equity, treasury, and FinTech. Gain hands-on exposure to financial modeling, algorithmic trading, Bloomberg data streams, and M&A valuation.",
    keyElectives: [
      "Financial Modeling & Equity Research",
      "Mergers, Acquisitions & Corporate Valuation",
      "FinTech, Blockchain & Digital Banking",
      "Derivatives & Risk Management",
      "Wealth Management & Portfolio Analytics",
      "International Finance & Forex Markets",
    ],
    careerRoles: [
      "Investment Banking Associate",
      "Financial Risk Analyst",
      "Equity Research Specialist",
      "Corporate Treasurer",
      "FinTech Solutions Consultant",
    ],
    topRecruiters: ["KPMG", "ICICI Bank", "HDFC Bank", "Barclays", "Deloitte Financial", "Crisil"],
    semesterOutline: [
      {
        sem: "Semester I",
        focus: "Core Analytical Foundations",
        courses: ["Financial & Cost Accounting", "Managerial Economics", "Quantitative Techniques", "Corporate Law & Ethics"],
      },
      {
        sem: "Semester II",
        focus: "Corporate Finance & Markets",
        courses: ["Financial Management", "Capital Markets & Banking Operations", "Taxation & Fiscal Policy", "Research Methodology"],
      },
      {
        sem: "Semester III",
        focus: "Advanced Valuation & SIP",
        courses: ["Advanced Financial Management", "Equity Research & Portfolio Analysis", "Derivatives Trading", "10-Week Industry Internship"],
      },
      {
        sem: "Semester IV",
        focus: "M&A, FinTech & Strategic Defense",
        courses: ["Corporate Valuation & Restructuring", "FinTech & Algorithmic Modeling", "Financial Risk Management", "Capstone Viva"],
      },
    ],
  },
  {
    id: "analytics",
    category: "mba",
    badge: "High Demand Specialization",
    title: "MBA in Business Analytics & Systems",
    shortTitle: "Business Analytics",
    tagline: "Harness big data, predictive AI & digital enterprise transformation",
    image: "/images/program-mba-analytics.jpg",
    duration: "2 Years (4 Semesters Full-Time)",
    intake: "30 Seats",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    dteCode: "6634",
    highestPackage: "₹24 LPA",
    averagePackage: "₹9.5 LPA",
    description:
      "Bridge data science and executive decision-making. Learn predictive statistical modeling, Python, R, Tableau visualizations, cloud databases, and AI agent frameworks to solve complex organizational puzzles.",
    keyElectives: [
      "Business Intelligence & Tableau Visualization",
      "Machine Learning for Business Decision Making",
      "Python & R for Predictive Modeling",
      "Big Data Frameworks & SQL Engineering",
      "Supply Chain & Marketing Analytics",
      "Enterprise Cloud Systems & Cyber Strategy",
    ],
    careerRoles: [
      "Business Intelligence Manager",
      "Data Analytics Consultant",
      "Product Data Strategist",
      "Digital Transformation Lead",
      "AI Business Solutions Architect",
    ],
    topRecruiters: ["Infosys", "Deloitte Tech", "Capgemini", "Accenture", "TCS Digital", "Wipro"],
    semesterOutline: [
      {
        sem: "Semester I",
        focus: "Foundational Statistics & Systems",
        courses: ["Statistical Methods in Management", "Business Informatics", "Economics for Managers", "Management Principles"],
      },
      {
        sem: "Semester II",
        focus: "Programming & Data Architecture",
        courses: ["Python for Business Analytics", "Relational Database Management (SQL)", "Predictive Modeling Basics", "Operations Research"],
      },
      {
        sem: "Semester III",
        focus: "Machine Learning & Summer Project",
        courses: ["Applied Machine Learning in Business", "Data Visualization & Dashboards", "Big Data in Enterprise", "10-Week Analytics Internship"],
      },
      {
        sem: "Semester IV",
        focus: "AI Integration & Strategic Capstone",
        courses: ["AI Applications in Management", "Digital Enterprise Architecture", "Consulting Project Defense", "Comprehensive Viva"],
      },
    ],
  },
  {
    id: "hr",
    category: "mba",
    badge: "Dual Specialization Major",
    title: "MBA in Human Resource Management",
    shortTitle: "Human Resource Management",
    tagline: "Cultivate visionary leadership, organizational agility & people analytics",
    image: "/images/program-mba-hr.jpg",
    duration: "2 Years (4 Semesters Full-Time)",
    intake: "40 Seats",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    dteCode: "6634",
    highestPackage: "₹18 LPA",
    averagePackage: "₹8.0 LPA",
    description:
      "Transform human capital into a competitive advantage. Explore talent acquisition algorithms, labor law jurisprudence, performance management, DEI strategies, and modern People Analytics in hybrid workplaces.",
    keyElectives: [
      "Strategic Human Resource Management",
      "People Analytics & HR Metrics",
      "Industrial Relations & New Labour Codes",
      "Talent Acquisition & Global Mobility",
      "Organizational Development & Culture Transformation",
      "Compensation, Benefits & Total Rewards",
    ],
    careerRoles: [
      "HR Business Partner (HRBP)",
      "Talent Acquisition Lead",
      "Compensation & Benefits Specialist",
      "Organizational Development Consultant",
      "People Analytics Analyst",
    ],
    topRecruiters: ["Capgemini", "Tata Consultancy Services", "Cognizant", "Godrej", "Reliance", "L&T"],
    semesterOutline: [
      {
        sem: "Semester I",
        focus: "Behavioral Sciences & Management",
        courses: ["Individual & Group Dynamics", "Principles of HRM", "Managerial Communication", "Business Ethics & Law"],
      },
      {
        sem: "Semester II",
        focus: "Talent Systems & Industrial Frameworks",
        courses: ["Talent Planning & Recruitment", "Employee Relations & Grievance Redressal", "Performance Systems", "Research Methods"],
      },
      {
        sem: "Semester III",
        focus: "Strategic HR & People Analytics",
        courses: ["Strategic HRM & Leadership", "People Analytics with PowerBI", "Labour Jurisprudence & Compliance", "Summer Internship Project"],
      },
      {
        sem: "Semester IV",
        focus: "Culture Transformation & Global HR",
        courses: ["International HRM", "Organizational Development & Change", "Total Rewards Strategy", "Comprehensive Viva"],
      },
    ],
  },
  {
    id: "operations",
    category: "mba",
    badge: "Dual Specialization Major",
    title: "MBA in Operations & Supply Chain",
    shortTitle: "Operations & Supply Chain",
    tagline: "Optimize global supply lines, manufacturing ecosystems & Lean Six Sigma",
    image: "/images/program-mba-operations.jpg",
    duration: "2 Years (4 Semesters Full-Time)",
    intake: "40 Seats",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    dteCode: "6634",
    highestPackage: "₹20 LPA",
    averagePackage: "₹8.5 LPA",
    description:
      "Command end-to-end supply chain logistics and manufacturing ecosystems. Tailored for Pune's vibrant automotive and manufacturing hubs, integrating Lean Six Sigma, procurement automation, and warehouse robotics.",
    keyElectives: [
      "Global Supply Chain Logistics & Freight",
      "Lean Six Sigma & Total Quality Management",
      "Operations Planning & Inventory Control",
      "Procurement Automation & Vendor Sourcing",
      "Warehouse Engineering & Cold Chain Systems",
      "Project Management with Agile Frameworks",
    ],
    careerRoles: [
      "Supply Chain Operations Manager",
      "Procurement & Sourcing Lead",
      "Logistics & Fulfillment Strategist",
      "Operations Quality Consultant",
      "Plant Operations Head",
    ],
    topRecruiters: ["Tata Motors", "Mahindra & Mahindra", "Bajaj Auto", "Schneider Electric", "DHL Supply Chain", "Bosch"],
    semesterOutline: [
      {
        sem: "Semester I",
        focus: "Quantitative & Process Foundations",
        courses: ["Operations Management Principles", "Statistics for Business Operations", "Supply Chain Fundamentals", "Financial Accounting"],
      },
      {
        sem: "Semester II",
        focus: "Logistics & Planning Systems",
        courses: ["Materials & Inventory Management", "Supply Chain Modeling", "Quality Management Systems", "Research Methods"],
      },
      {
        sem: "Semester III",
        focus: "Lean Six Sigma & Summer Project",
        courses: ["Lean Manufacturing & Six Sigma", "Procurement & Sourcing Strategy", "Warehouse & Freight Operations", "10-Week Industry Internship"],
      },
      {
        sem: "Semester IV",
        focus: "Global Networks & Capstone",
        courses: ["Global Logistics & Trade Compliance", "Operations Strategy & Analytics", "Supply Chain Automation", "Capstone Viva"],
      },
    ],
  },
  {
    id: "mca",
    category: "mca",
    badge: "Post-Graduate IT Program",
    title: "Master of Computer Applications (MCA)",
    shortTitle: "MCA - Computer Applications",
    tagline: "Enterprise software architecture, full-stack engineering & cloud systems",
    image: "/images/program-mca.jpg",
    duration: "2 Years (4 Semesters Full-Time)",
    intake: "60 Seats",
    affiliation: "Savitribai Phule Pune University (SPPU)",
    dteCode: "6634",
    highestPackage: "₹18 LPA",
    averagePackage: "₹7.8 LPA",
    description:
      "A rigorous, technology-driven post-graduate degree for software architects and IT leaders. Covering modern full-stack development, cloud microservices, DevOps pipelines, cybersecurity, and applied artificial intelligence.",
    keyElectives: [
      "Full-Stack Web Engineering (React, Node, TypeScript)",
      "Cloud Architecture on AWS & Azure",
      "Mobile App Development (Flutter & Android)",
      "Cybersecurity, Cryptography & Compliance",
      "DevOps Automation & Docker/Kubernetes",
      "Applied Artificial Intelligence & Machine Learning",
    ],
    careerRoles: [
      "Full-Stack Software Engineer",
      "Cloud Solutions Architect",
      "Systems Analyst & Tech Consultant",
      "DevOps & Security Engineer",
      "Data Engineer",
    ],
    topRecruiters: ["Infosys", "Tata Consultancy Services", "Cognizant", "Persistent Systems", "Capgemini", "Zensar"],
    semesterOutline: [
      {
        sem: "Semester I",
        focus: "Computational Foundations & OOP",
        courses: ["Advanced Data Structures & Algorithms", "Database Management Systems (RDBMS & NoSQL)", "Java & Python Programming", "Operating Systems & Networking"],
      },
      {
        sem: "Semester II",
        focus: "Enterprise & Web Architectures",
        courses: ["Full-Stack Web Development", "Software Engineering & Agile", "Cloud Computing Basics", "Mobile Application Development"],
      },
      {
        sem: "Semester III",
        focus: "Advanced Systems & Industry Capstone",
        courses: ["DevOps & Containerization", "Artificial Intelligence & ML", "Information Security", "Full-Semester Industry Internship (6 Months)"],
      },
      {
        sem: "Semester IV",
        focus: "Major Software Project & Defense",
        courses: ["Enterprise Architecture Project", "Emerging Tech Elective", "Grand Project Defense & Code Review", "Comprehensive Examination"],
      },
    ],
  },
  {
    id: "phd",
    category: "phd",
    badge: "Doctoral Research",
    title: "Ph.D. in Management Studies",
    shortTitle: "Doctoral Studies (Ph.D.)",
    tagline: "Produce groundbreaking academic literature and managerial scholarship",
    image: "/images/program-phd.jpg",
    duration: "3 to 5 Years (Research-Based)",
    intake: "8 Research Scholars",
    affiliation: "Approved Research Centre - SPPU",
    dteCode: "6634",
    highestPackage: "Academic Fellowship & Grants",
    averagePackage: "Assistant Professorship & Policy Leads",
    description:
      "Matrix School of Management Studies is an officially recognized Research Centre under Savitribai Phule Pune University. Scholars conduct high-impact research in strategic management, consumer behavior, organizational culture, and green finance.",
    keyElectives: [
      "Advanced Research Methodologies & Qualitative Models",
      "Econometric Analysis & Structural Equation Modeling (SEM)",
      "Academic Publishing & Scopus/UGC-CARE Journal Writing",
      "Contemporary Paradigms in Strategic Management",
      "Research Ethics, IPR & Plagiarism Guidelines",
      "Doctoral Colloquium & Thesis Defense",
    ],
    careerRoles: [
      "University Professor & Dean",
      "Corporate Think Tank Researcher",
      "Economic Policy Advisor",
      "Management Consulting Senior Fellow",
      "Chief Innovation Officer",
    ],
    topRecruiters: ["Universities", "World Bank Policy Projects", "NITI Aayog Research Units", "McKinsey Global Institute", "IIMs & Premier B-Schools"],
    semesterOutline: [
      {
        sem: "Coursework Year 1",
        focus: "Research Methodology & Core Examination",
        courses: ["Advanced Quantitative Methods", "Research Philosophy & Literature Review", "Domain Specialization Paper", "SPPU Ph.D. Coursework Exam"],
      },
      {
        sem: "Year 2",
        focus: "Research Proposal & Topic Registration",
        courses: ["Research Advisory Committee Presentation", "Topic Confirmation (SPPU)", "Data Collection Framework", "Pilot Study Execution"],
      },
      {
        sem: "Year 3 & 4",
        focus: "Empirical Analysis & Publications",
        courses: ["Data Analysis with SPSS/R/SEM", "Publishing 2 Papers in Peer-Reviewed Scopus Journals", "National Conference Presentations", "Pre-Synopsis Submission"],
      },
      {
        sem: "Final Year",
        focus: "Thesis Submission & Defense",
        courses: ["Full Thesis Review & External Evaluation", "Open Viva Voce Defense at SPPU", "Degree Award Ceremony"],
      },
    ],
  },
];

export default PROGRAMS_DATA;

