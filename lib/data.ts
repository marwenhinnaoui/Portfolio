import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import phonebookImg from "@/public/educo.png";
import stressImg from "@/public/colistn.png";
import covidImg from "@/public/lookup.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Technology (B.Tech)",
    location: "KIET - Korangi",
    description:
      "Aspiring AI engineer pursuing B.Tech in Computer Science and Engineering with AI specialization at KIET College.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Higher Secondary Education(M.P.C)",
    location: "Sri Chaitanya - Kakinada",
    description:
      "I completed my intermediate education at Sri Chaitanya College, where I specialized in the M.P.C (Mathematics, Physics, and Chemistry) branch.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Secondary Education",
    location: "CAMP - Ramachandrapuram",
    description:
      "I completed my secondary education (S.S.C) at Costal Andhra Medium Public School, graduating in 2019",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2019",
  },
] as const;

export const projectsData = [
  {
    title: "Educo Mobile App",
    description:
      "Educo is a school management solution aimed at enhancing communication and learning within educational institutions. It offers various features to facilitate interactions among students, teachers, and parents, supporting educational and administrative processes.",
    tags: ["Ionic", "Angular", "Firebase"],
    imageUrl: phonebookImg,
  },
  {
    title: "Lookup Mobile App",
    description:
      "Lookup is a mobile application designed to facilitate seamless access to comprehensive information within Tunisia. Whether you're searching for business details, contact information, or specific services, Lookup.tn provides a user-friendly platform to find what you need efficiently.",
    tags: ["React Native"],
    imageUrl: covidImg,
  },
  {
    title: "Colis.tn Package Devilery Platform ",
    description:
      "Colis.tn is a platform that simplifies package delivery for clients and transports. It manages the entire process from order to delivery, offering real-time tracking, and notifications for clients.",
    tags: ["ReactJs", "Redux", "Flutter", "Django", "MongoDB"],
    imageUrl: stressImg,
  },
 
] as const;

export const skillsData = [
  "ReactJs",
  "Redux",
  "Ionic",
  "Angular",
  "React Native",
  "Flutter",
  "HTML5",
  "CSS3",
  "SASS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Django",
  "MongoDB",
  "SQL",
  "NoSQL",
  "Express",
  "React",
  "Git",
  "Github",
  "Python",
  "Scrum",
  
] as const;
