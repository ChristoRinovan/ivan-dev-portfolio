import { FaCode, FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { PiFileCssDuotone } from "react-icons/pi";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import type { IconType } from "react-icons";
import { FaNodeJs } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

type Skill = {
  id: number;
  iconCard: IconType;
  title: string;
  description: string;
  iconGrid: {
    icon: IconType;
    name: string;
  }[];
};

export const skills: Skill[] = [
  {
    id: 1,
    iconCard: FaCode,
    title: "Front-End",
    description: "Building responsive and interactive user interfaces.",
    iconGrid: [
      { icon: FaReact, name: "ReactJS" },
      { icon: FaHtml5, name: "HTML5" },
      { icon: PiFileCssDuotone, name: "CSS" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "TailwindCSS" },
      { icon: RiNextjsLine, name: "Next.JS" },
    ],
    
  },
   {
    id: 2,
    iconCard: AiFillDatabase,
    title: "Back-End",
    description: "Creating APIs, server logic, and database integration.",
    iconGrid: [
      { icon: FaNodeJs, name: "Node.JS" },
      { icon: IoSettingsOutline, name: "REST API" },
    
    ],
    
  },
   {
    id: 3,
    iconCard: FaDev,
    title: "DevOps & Tools",
    description: "Tools i use to manage, test, and deploy projects.",
    iconGrid: [
      { icon: SiVercel, name: "Vercel" },
      { icon: FaGitAlt, name: "Git" },
      { icon: FaGithub , name: "GitHub" },
      { icon: SiPostman, name: "Postman" },
      { icon: FaDocker, name: "Docker" },
    
    ],
    
  },
];


