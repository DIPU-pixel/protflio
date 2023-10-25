import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  tictactoe,
  akprasha,
  quizey,
  voot,
  vendor,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "React",
    icon: frontend,
  },
  {
    title: "Redux",
    icon: backend,
  },
  {
    title: "Jest",
    icon: ux,
  },
  {
    title: "Git",
    icon: prototyping,
  },
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "APDCL",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Dec 2018 - Jan 2019",
  },
  {
    title: "Trainee",
    company_name: "Jspiders",
    icon: microverse,
    iconBg: "#333333",
    date: "June 2019 - Aug 2019",
  },
  {
    title: "UI Developer",
    company_name: "FlyNava technology",
    icon: kelhel,
    iconBg: "#333333",
    date: "Aug 2021 - May 2022",
  },
  {
    title: "React Developer",
    company_name: "Sales Captain ",
    icon: dcc,
    iconBg: "#333333",
    date: "Jun - August 2023",
  },
  {
    title: "Softwear Developer",
    company_name: "L&T Technology ",
    icon: dcc,
    iconBg: "#333333",
    date: "September 2022",
  },
];

const projects = [
  {
    id: "project-1",
    name: "TicTacToe",
    description: "Play this classic game agaisnt a friend or an unbeatable AI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    repo: "https://github.com/nawedzaman/tictactoe",
    demo: "https://tictactoe-nawedzaman.vercel.app/",
  },
  {
    id: "project-2",
    name: "Quizzey",
    description: "A fun quiz app.",
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
    image: quizey,
    repo: "https://github.com/nawedzaman/quizey",
    demo: "https://quizeey.netlify.app/",
  },
  {
    id: "project-3",
    name: "Vendor Dashboard",
    description: "This is a dashboard to maintain vendors.",
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
    image: vendor,
    repo: "https://github.com/nawedzaman/vendor-frontend",
    demo: "https://vendor-dashboard.onrender.com/",
  },
  {
    id: "project-4",
    name: "Voot",
    description: `A clone site for OTT platform VOOT`,
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
    image: voot,
    repo: "https://github.com/nawedzaman/voot",
    demo: "https://movie-metro.netlify.app/",
  },
  {
    id: "project-5",
    name: "Akprasha Music",
    description: "This is a music band landing page for Akprasha",
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
    image: akprasha,
    repo: "https://github.com/nawedzaman/akprasha",
    demo: "https://akprasha-music.web.app/",
  },
];

export { services, technologies, experiences, projects };
