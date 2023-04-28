import { StaticImageData } from "next/image";
import RenePeterWorkImage from "@/assets/portfolio-ss.png";
import EcmWorkImage from "@/assets/ecm-ss.png";
import KiskadeeWorkImage from "@/assets/task-manager-ss.png";
import TTPayWorkImage from "@/assets/ttpayroll-ss.png";

type Project = {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  summary: string;
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    image: RenePeterWorkImage,
    imageAlt: "Rene Peter Portfolio",
    title: "Personal Portfolio",
    summary:
      "A simple website built with NextJS to illustrate who I am, my skills, experiences and what technologies I&apos;ve worked with both in the past and currently.",
    tags: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Frontend",
      "Static Site Generation",
    ],
    url: "https://renepeter.xyz",
  },
  {
    image: KiskadeeWorkImage,
    imageAlt: "Task Manager Module",
    title: "Task Management System - Ship With Kiskadee",
    summary:
      "Client requested a task management module to be built as an extension of their main business application, and accessible through their internal NextJS web-app. A system was implemented utilizing existing authentication methods, multiple views, assignments, deadlines, comments and statistics to be used for KPIs.",
    tags: [
      "NextJS",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Frontend",
      "Static Site Generation",
    ],
  },
  {
    image: TTPayWorkImage,
    imageAlt: "TTPay website",
    title: "TTPay Website",
    summary:
      "As one of the premier payroll solutions in Trinidad and Tobago, TTPay needed to position itself as a leader that keeps up with the times. A simple design refresh along with a modern version of the iconic TTPay logo allowed the website to step into the modern era.",
    tags: ["Static website", "HTML", "CSS", "TailwindCSS", "Frontend", "PHP"],
    url: "https://www.ttpayroll.com/",
  },
  {
    image: EcmWorkImage,
    imageAlt: "ECM Trinidad Limited",
    title: "ECM Trinidad Limited",
    summary:
      "Client needed a new website to better represent their entry into the residential and commercial market within their industry. Website needed to be managed by a content management system and include a catalog of brands as well as product categories that the company offers.",
    tags: [
      "Laravel",
      "PHP",
      "MariaDB",
      "Memcached",
      "Content Management System",
      "Newsletter",
      "Bootstrap",
      "jQuery",
      "Full-Stack",
    ],
    url: "https://ecmtt.com/",
  },
];
