import GithubIcon from "../../public/assets/icons/github.svg";
import LinkedInIcon from "../../public/assets/icons/linkedin.svg";
import InstagramIcon from "../../public/assets/icons/instagram.svg";
import FrontendIcon from "../../public/assets/icons/frontend.svg";
import LeaderShipIcon from "../../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "../../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "../../public/assets/icons/freelance.svg";
import BackendIcon from "../../public/assets/icons/backend.svg";
import FullStackIcon from "../../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
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
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  {
    title: "Leadership",
    icon: <LeaderShipIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
   
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
  
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
  
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Video js",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.videojs.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
  ],
};

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Tech Lead at GDSC MVJCE",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
      "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
      "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
      "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Intern at DRDO CABS",
    icon: "/assets/company/drdo-cabs.png",
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Developed a Facility Bookings Manager for DRDO CABS using TypeScript, React, Node.js, Express, Prisma, and MySQL within a month.",
      "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
      "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
      "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to DRDO CABS's needs.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Tech team member at GDSC MVJCE",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "February 2022 - July 2023",
    points: [
      "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
      "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
      "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
      "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
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
    name: "videostori",
    description:
      "Interactive Video Platform allows users to create, edit, and manage videos enriched with interactive elements that drive viewer engagement. It goes beyond traditional video by adding features like clickable hotspots, lead forms, interactive timelines, quizzes, and call-to-action (CTA) buttons directly within the video player. These features enable users to make their content more dynamic, engaging, and personalized, allowing for real-time viewer interaction and feedback.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      }
    ],
    image: "/assets/projects/videostori.png",
    source_code_link: "#",
    deployed_link: "https://videostori.io",
  },
  {
    name: "Interactive video player",
    description:
      " Interactive Video Player is a highly engaging and customizable platform designed to revolutionize viewer interaction with video content. It was developed to integrate interactive elements into standard video playback, allowing users to enhance their video experience in various ways.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "video js",
        color: "pink-text-gradient",
      }
    ],
    image: "/assets/projects/player-i.png",
    source_code_link: "#",
    deployed_link: "https://videostori.io/p/IVy2QF",
  },
  {
    name: "Video Editor Tool",
    description:
      "A powerful, web-based video editor built using React and FFMPEG. This tool enables users to crop, trim, and merge videos, add custom audio tracks, and apply filters such as fade-in, fade-out, and volume control. It also supports exporting videos in multiple formats with a seamless user experience, designed for both beginners and professionals.",
    tags: [
      {
        name: "FFMPEG",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      
    ],
    image: "/assets/projects/video-editor.png",
    source_code_link:
      "https://github.com/inder419/video-editor",
    deployed_link:
      "https://editor.inderwithdev.in/",
  },
 
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/inder419",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/inderjeet-kumar-mern/",
  },
  
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/jeet_inder__mr_18/",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Software Developer",
  500,
  "Backend developer",
  500,
  " Team Lead at videostori",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
