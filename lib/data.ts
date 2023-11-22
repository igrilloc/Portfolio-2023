import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import plantsApp from "@/public/plantsApp.png";
import pokedex from "@/public/pokedex.png";
import lookEcommerce from "@/public/lookEcommerce.png";


export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;

export const experiencesData = [
  {
    title: "Graduated soyHenry bootcamp",
    location: "Buenos Aires, Argentina",
    description:
      "I graduated from Full Stack Developer at soyHenry Bootcamp. In it you will learn html, css, Javascript, using React-Redux in Frontend, NodeJS and Express for Backend development. Sequelize as ORM and PosgreSQL for database architecture and planning.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022"
  },
  {
    title: "Salesforce Developer",
    location: "Buenos Aires, Argentina",
    description:
      "I became a Salesforce developer through LabsXD's XDGen preparation course. I learned the use and management of Salesforce Administrator and Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023"
  },
  {
    title: "Omnistudio Developer",
    location: "Buenos Aires, Argentina",
    description:
      "I worked as a Salesforce developer for 1 year at LabsXD. With the use of Omnistudio technology, perform different tasks such as building Dataraptors, data mapping, building LWC using Javascript and Apex Classes.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023"
  }
] as const;

export const projectsData = [
  {
    title: "PlansApp Salesforce",
    description:
      "Project carried out on the Salesforce platform. Plant tracking, task automation and more.",
    tags: ["Apex classes", "LWC", "Apex Triggers", "Apex Testing", "SOQL"],
    imageUrl: plantsApp
  },
  {
    title: "Pokedex Salesforce",
    description:
      "Pokemons API integration project to Salesforce, using scheduler classes for massive data loading.",
    tags: ["Apex classes", "LWC", "Mock", "SOQL", "Apex Scheduler", "Apex Testing"],
    imageUrl: pokedex
  },
  {
    title: "Look E-commerce",
    description:
      "E-commerce that includes shopping cart, authentication, administrative panel and complete management (CRUD).",
    tags: ["React", "Redux", "NodeJS", "Express", "PosgreSQL", "Sequelize", "CSS"],
    imageUrl: lookEcommerce
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "Sequelize",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "APEX",
  "APEX Testing",
  "SOQL",
  "LWC",
  "Omnistudio"
] as const;