
import { Publication, Project, Education } from './types';

export const PERSONAL_INFO = {
  name: "Harshita Hiranyamayi",
  title: "Engineering Applicant 2026 | Tech Innovator | Athlete",
  affiliation: "Prospective Undergraduate | SUSTech Shenzhen",
  department: "Bachelor of Engineering",
  location: "India",
  email: "harshita.h@example.edu",
  bio: "I am a naturally curious builder who loves dismantling things to understand how they work. From my 2020 'Rakshak Bot' innovation to becoming a Regional Badminton Champion, I combine a competitive athletic drive with a deep passion for technology. My mission is to build AI-empowered healthcare devices in the short term, eventually reaching for the stars in the satellite and space industry."
};

export const ACHIEVEMENTS: Publication[] = [
  {
    id: "a1",
    title: "Regional Level Badminton Champion",
    authors: "Competitive player since 2018; 2023 Regional Winner; Multiple district medals",
    journal: "Sports Excellence - Regional Circuit",
    year: 2023,
    link: "#"
  },
  {
    id: "a2",
    title: "Athletic Versatility Medals",
    authors: "Secured top positions in Tug of War, 200m Run, Throwball, and Relay",
    journal: "Annual Sports Meet",
    year: 2022,
    link: "#"
  },
  {
    id: "a3",
    title: "Innovation Fair Finalist",
    authors: "Showcased 'Rakshak Bot' to industry mentors and school board",
    journal: "National Level Innovation Competition",
    year: 2020,
    link: "#"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Rakshak Bot (Road Safety)",
    description: "I built a functional hardware prototype that uses ultrasonic sensors to detect vehicle proximity and alert drivers. I programmed the system to automatically trigger emergency SMS alerts containing GPS coordinates to local hospitals and police stations immediately upon impact detection.",
    tags: ["Robotics", "Safety Engineering", "IoT", "Coding"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p2",
    title: "Healthcare AI Architecture",
    description: "I developed a conceptual model for an AI diagnostic tool focused on low-cost early detection of chronic diseases. I mapped out the data flow from handheld sensors to a central neural network, prioritizing speed and accuracy for rural clinical use.",
    tags: ["Healthcare AI", "Neural Networks", "Product Design"],
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p3",
    title: "Structural Arts Integration",
    description: "I completed two years of intensive diploma work where I translated complex engineering structures into precise geometric sketches. This practice honed my ability to visualize 3D spatial relationships, which I now apply to CAD modeling and architectural drafting.",
    tags: ["Fine Arts", "Geometric Drafting", "Visual Design"],
    imageUrl: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800"
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: "Diploma in Fine Arts (3rd Year Final)",
    institution: "Arts Academy",
    period: "2023 - 2026",
    details: "I started this 3-year professional course in 2023. I have successfully completed Year 1 and Year 2. My final graduation examination is scheduled for May 2026."
  },
  {
    degree: "12th Grade Board (Science Stream)",
    institution: "Senior Secondary Excellence School",
    period: "2024 - 2025",
    details: "Focusing on Physics, Chemistry, and Mathematics. I am maintaining a consistent academic record with a predicted score of 85% or above."
  },
  {
    degree: "10th Grade Board",
    institution: "Secondary School",
    period: "2023",
    details: "I graduated with high honors and a distinction score of 90%, placing me in the top tier of my graduating class."
  }
];
