
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  venue: "venue",
  contact: "contact",
  conferencetracks: "conferencetracks",
};


export const navLinks = [
  {
    id: navigationPaths.about,
    title: "Call For Papers",
  },
  {
    id: navigationPaths.conferencetracks,
    title: " Conference Tracks",
  },
  {
    id: navigationPaths.venue,
    title: " Venue",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Cutting-edge research presentations",
    icon: web,
  },
  {
    title: "Networking opportunities",
    icon: mobile,
  },
  {
    title: "Workshops and panel discussions",
    icon: backend,
  },
  {
    title: "Industry-academia collaborations",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Intelligent Physical Systems",
    icon: nickelfox,
    iconBg: "#E6DEDD",
    date: "Track I",
    points: [
      "Internet of Things",
      "Smart Grid",
      "Electric Vehicles",
      "Edge Computing",
      "Smart Energy System",
    ],
  },
    {
    title: "Computational Intelligence",
    icon: skillrisers,
    iconBg: "#E6DEDD",
    date: "Track II",
    points: [
      "AI",
      "Machine Learning",
      "Computer Vision",
      "Data Science",
      "Fuzzy Logic",
      "Evolutionary Computation",
    ],
  },
  {
    title: "Cyber Security & Forensics",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "Track III",
    points: [
      "Cyber Security",
      "Cyber Forensics",
      "Ethical Hacking",
      "Block Chain",
      "VAPT",
      "Cloud Security",
    ],
  },
];

const projects = [
  {
    name: "Zeal Web",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
];

const personalInfo = {
  name: "NCICPS 25",
  fullName: "NCICPS 25",
  email: "raishridhar619@gmail.com",
  role: "Software Developer",
  about: `NCICPS'25 invites full paper submissions in various tracks. All accepted papers will be published in the conference proceedings, and selected papers will be published in the International Journal of Science Technology and Innovation (IJSTI).

We welcome innovative research, case studies, and practical applications in the fields of Intelligent Cyber Physical Systems, Computational Intelligence, and Cyber Security & Forensics.!`,
  projectsIntro: `The 2nd National Conference on Intelligent Cyber Physical Systems (NCICPS'25) is a premier gathering of researchers, practitioners, and innovators in the field of cyber-physical systems and their intelligent applications.

Join us in shaping the future of intelligent systems and their impact on our interconnected world.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1_NHldQN0ZIFYLWTpNZhz3ZRKMmARYsA1/view?pli=1",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/",
      icon: github,
    },
  },
};

export {
  services,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
