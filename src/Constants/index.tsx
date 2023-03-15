import {
  frontend,
  uiux,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  github,
  aws,
  django,
  mysql,
  postgresql,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  python,
  shiash,
  intellecto,
  infox,
} from "../Assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Web Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Developer",
    icon: uiux,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },

  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "PostgreSql",
    icon: postgresql,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Intellecto Global Services",
    icon: intellecto,
    iconBg: "#ffff",
    date: "November 2022 - Present",
    points: [
      "Built RESTful APIs that served data to the JavaScript front-end, based on dynamically chosen user inputs that handled over 5000 concurrent users.",
      "Partnered with a developer to implement RESTful APIs in Django, enabling analytics team to increase reporting speed by 14%.",
      "Tested software for bugs and operating speed, fixing bugs and documenting processes to increase efficiency by 18%.",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    company_name: "Shiash Info Solutions Private Limited",
    icon: shiash,
    iconBg: "#ffff",
    date: "July 2022 - September 2022",
    points: [
      "Developed full-stack web applications which processed, analyzed, and rendered data visually.",
      "Planned, wrote, and debugged web applications and software's with complete accuracy.",
      "Developed full-stack web application named 'Quest Tracker' to track and maintain employee data's and to assign and manage unique employee task or project management module.",
    ],
  },
  {
    title: "Game Developer - Intern",
    company_name: "Infox Technology",
    icon: infox,
    iconBg: "#ffff",
    date: "December 2021 - March 2022",
    points: [
      "Analyzed AR, VR technologies.",
      "Developed 3D models and implemented keyframe animations.",
      "Developed a 3D endless runner game named 'Treasure Hunt'.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PortFolio",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
