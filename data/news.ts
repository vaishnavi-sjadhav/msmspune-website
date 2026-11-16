import { NewsItem } from "@/types";

export const NEWS_DATA: {
  title: string;
  image: string;
  items: NewsItem[];
} = {
  title: "NEWS & UPDATES",
  image: "/images/diploma-scroll.jpg",
  items: [
    {
      id: "aicte-disclosure",
      title: "AICTE Disclosure for Academic Year 2025-26 has been updated.",
      href: "#aicte-disclosure",
    },
    {
      id: "admissions-open",
      title: "Admissions for MBA Program are now open.",
      href: "#admissions-open",
    },
    {
      id: "important-notice",
      title: "Matrix School of Management Studies – Important Notice.",
      href: "#important-notice",
    },
  ],
};
