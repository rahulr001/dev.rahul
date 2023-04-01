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
  python,
  shiash,
  intellecto,
  infox,
  portfolioAngular,
  portfolioReact,
  questTracler,
  treasureHunt,
} from "../Assets";

export const navLinks = [
  {
    id: "about",
    title: "< About />",
  },
  {
    id: "work",
    title: "< Work />",
  },
  {
    id: "projects",
    title: "< Projects />",
  },
  {
    id: "contact",
    title: "< Contact />",
  },
];
export const footerLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
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
    date: "{ November 2022 - Present }",
    points: [
      "Built RESTful APIs that served data to the JavaScript front-end, based on dynamically chosen user inputs that handled over 5000 concurrent users.",
      "Partnered with a developer to implement RESTful APIs in Django, enabling analytics team to increase reporting speed by 14%.",
      "Developed scalable and responsive web applications using React, Redux, and Tailwind-CSS.",
      "Designed and implemented user interfaces using HTML, CSS, and Material-UI.",
      "Utilized Git for version control and collaborated with team members on various projects.",
    ],
  },
  {
    title: "Full Stack Developer - Intern",
    company_name: "Shiash Info Solutions Private Limited",
    icon: shiash,
    iconBg: "#ffff",
    date: "{ July 2022 - September 2022 }",
    points: [
      "Developed full-stack web applications which processed, analyzed, and rendered data visually.",
      "Planned, wrote, and debugged web applications and software's with complete accuracy.",
      "Design and develop user interfaces using HTML, CSS, and JavaScript framework Angular.",
      "Test and debug code using tools such as Postman and Chrome DevTools.",
    ],
  },
  {
    title: "Game Developer - Intern",
    company_name: "Infox Technology",
    icon: infox,
    iconBg: "#ffff",
    date: "{ December 2021 - March 2022 }",
    points: [
      "Work on a team of game developers to develop and improve existing games using Unity game engine.",
      "Write clean, efficient, and well-documented code using C# programming language.",
      "Participate in game design discussions and contribute ideas for game mechanics and features.",
      "Collaborate with artists, designers, and other developers to ensure that the game meets the vision and goals of the project.",
    ],
  },
];

const projects = [
  {
    name: "PortFolio-React",
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
    image: portfolioReact,
    source_code_link: "https://github.com/rahulr001/dev.rahul.git",
  },

  {
    name: "Quest Tracker",
    description:
      "The Quest Tracker is a web application that helps users keep track of their tasks and goals. It is designed to be user-friendly and customizable, with the ability to create, edit, and delete tasks. The application also allows users to track their progress and view completed tasks.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: questTracler,
    source_code_link: "https://github.com/rahulr001/Quest-Tracker.git",
  },

  {
    name: "Hotel Reservation",
    description:
      "The Hotel Reservation System is a web application that allows customers to book and manage hotel reservations online. Customers can search for available hotels and rooms, view hotel amenities and details, and make online reservations. The application also includes a backend system for hotel administrators to manage hotel information, room availability, and reservations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: "tripguide",
    source_code_link:
      "https://github.com/rahulr001/Hotel-Reservation-Django-React.git",
  },
  {
    name: "Math Flash Cards",
    description:
      "The Math Flash Cards is a web application that helps students practice and improve their math skills. The application generates random math problems based on the user's chosen difficulty level and provides instant feedback on whether the user's answers are correct or incorrect. The application also includes a leaderboard that displays the top scores of all users.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "canva",
        color: "pink-text-gradient",
      },
    ],
    image: "tripguide",
    source_code_link: "https://github.com/rahulr001/Math-Flash-Cards.git",
  },
  {
    name: "PortFolio-Angular",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioAngular,
    source_code_link: "https://github.com/rahulr001/Rahul-R.git",
  },
  {
    name: "The Treasure Hunt",
    description:
      "The Treasure Hunt is an endless runner game developed in Unity where the player controls a character running through an infinite environment, collecting coins and avoiding obstacles. The game includes power-ups and upgrades that the player can collect to improve their score and increase their chances of survival.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tkinter",
        color: "green-text-gradient",
      },
      {
        name: "canva",
        color: "pink-text-gradient",
      },
    ],
    image: treasureHunt,
    source_code_link: "https://github.com/rahulr001/The-Treasure-Hunt.git",
  },
];

export { services, technologies, experiences, projects };
