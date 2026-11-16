import { MatrixEvent } from "@/types";

export const EVENTS_DATA: {
  sectionTitle: string;
  sectionSubtitle: string;
  viewAllLink: { label: string; href: string };
  events: MatrixEvent[];
} = {
  sectionTitle: "Matrix Events",
  sectionSubtitle: "CAMPUS LIFE & STUDENT INITIATIVES",
  viewAllLink: {
    label: "View All Events",
    href: "#all-events",
  },
  events: [
    {
      id: "health-checkup-camp",
      title: "Health Check Up Camp",
      category: "HEALTH & WELLNESS",
      subtitle: "Student Health Check-up Camp",
      organizedBy: "Organized By IQAC",
      image: "/images/event 1.png",
      date: "September 18, 2025",
      venue: "MSMS Campus Clinic & Auditorium",
      description:
        "Comprehensive health screening program organized by the Internal Quality Assurance Cell (IQAC) ensuring student health, wellness, and medical awareness across all batches.",
    },
    {
      id: "disaster-management",
      title: "Disaster Management",
      category: "SAFETY & PREPAREDNESS",
      subtitle: "Session On Disaster Management",
      organizedBy: "Organized By IQAC",
      image: "/images/event 2.png",
      date: "October 10, 2025",
      venue: "Management Seminar Hall",
      description:
        "Practical session on disaster preparedness, fire safety, crisis evacuation protocols, and emergency leadership training for management graduates.",
    },
    {
      id: "stay-healthy-stay-wealthy",
      title: "Stay Healthy Stay Wealthy",
      category: "EXECUTIVE WELLNESS",
      subtitle: "Session On Stay Healthy Stay Wealthy",
      organizedBy: "Organized By IQAC",
      image: "/images/event 3.png",
      date: "November 04, 2025",
      venue: "Auditorium Main Hall",
      description:
        "Special motivational symposium connecting mental wellness, physical vitality, and executive performance for thriving careers in modern management.",
      accentColor: "#d97768",
    },
    {
      id: "indoor-sports-competition",
      title: "Indoor Sports Competition",
      category: "ANNUAL SPORTS MEET",
      subtitle: "Indoor Sports Competition",
      organizedBy: "Organized By IQAC",
      image: "/images/event 4.png",
      date: "December 12, 2025",
      venue: "Sports & Recreation Center",
      description:
        "Annual indoor athletics, agility tournaments, and team bonding competitions fostering strategy, teamwork, and active sportsmanship.",
    },
  ],
};
