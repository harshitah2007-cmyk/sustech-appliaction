
import { Publication, Project, Education } from './types';

export const PERSONAL_INFO = {
  name: "Harshita Hiranyamayi",
  title: "Aspiring Engineer | Builder | Athlete",
  affiliation: "SUSTech Undergraduate Applicant 2026",
  department: "Bachelor of Engineering",
  location: "India",
  email: "harshita.h@example.edu",
  bio: "A builder by nature and a competitor by spirit. From winning Regional Badminton Championships to coding 'Rakshak Bot' for road safety, I thrive at the intersection of logic and creativity. My curiosity drives me to understand how things work, with a short-term goal of empowering healthcare through AI and a long-term vision in the satellite and space industry."
};

export const ACHIEVEMENTS: Publication[] = [
  {
    id: "a1",
    title: "Regional Badminton Champion 2023",
    authors: "Secured 1st Place in Regional Singles Circuit",
    journal: "Sports Excellence",
    year: 2023,
    link: "#"
  },
  {
    id: "a2",
    title: "Multi-Sport Medalist",
    authors: "Gold/Silver in Tug of War, 200m Run, Throwball, & Relay",
    journal: "Annual Athletic Meet",
    year: 2022,
    link: "#"
  },
  {
    id: "a3",
    title: "Rakshak Bot Prototype",
    authors: "National Level School Competition Participant",
    journal: "Innovation & Robotics",
    year: 2020,
    link: "#"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Rakshak Bot (Road Safety)",
    description: "An intelligent device designed to alert drivers of safe distances and instantly notify police/hospitals in case of accidents. This project sparked my passion for coding apps and hardware design.",
    tags: ["Arduino", "Sensors", "Safety Tech", "IoT"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p2",
    title: "Healthcare AI Concept",
    description: "Conceptual framework for AI-empowered diagnostic tools to assist in rural healthcare accessibility. (Short-term career goal focus).",
    tags: ["AI", "Healthcare", "UX Design"],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p3",
    title: "Fine Arts Diploma Portfolio",
    description: "A two-year intensive study in fine arts, applying geometric principles to visual storytelling. This artistic lens helps me design more intuitive engineering interfaces.",
    tags: ["Visual Arts", "Design Thinking", "Drafting"],
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800"
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: "12th Grade Board (Pre-University)",
    institution: "Secondary Excellence Academy",
    period: "2024 - 2025",
    details: "Currently tracking 85%+ predicted score. Core focus on Physics and Mathematics."
  },
  {
    degree: "Diploma in Fine Arts",
    institution: "Creative Arts Institute",
    period: "2021 - 2023",
    details: "Completed with high honors. Specialized in structural sketching and aesthetic composition."
  },
  {
    degree: "10th Grade Board",
    institution: "Secondary School",
    period: "2021",
    details: "Graduated with a Distinction score of 90%."
  }
];
