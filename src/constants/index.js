import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  java,
  aws,
  rest,
  python,
  dynamodb,
  cplusplus,
  amazon,
  alexa,
  ucsd,
  hku,
  housemates,
  housemateslogo,
  surfstore,
  raft,
} from "../assets/icons";

export const skills = [
  // Backend & Cloud (Core Strengths)
  {
    imageUrl: java,
    name: "Java",
    type: "Backend & Cloud",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Backend & Cloud",
  },
  {
    imageUrl: dynamodb,
    name: "DynamoDB",
    type: "Backend & Cloud",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend & Cloud",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend & Cloud",
  },
  // Distributed Systems & Architecture
  {
    imageUrl: rest,
    name: "RESTful APIs",
    type: "Distributed Systems",
  },
  // Development Tools & Practices
  {
    imageUrl: git,
    name: "Git",
    type: "Development Tools",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Development Tools",
  },
  // Frontend & Full-Stack
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend & Full-Stack",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend & Full-Stack",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend & Full-Stack",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend & Full-Stack",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend & Full-Stack",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend & Full-Stack",
  },
];

export const work_experience = {
  section_title: "Work Experience",
  section_description: "",
  experiences: [
    {
      title: "Software Development Engineer",
      company_name: "Amazon Web Services",
      icon: aws,
      iconBg: "#fff4e6",
      date: "Oct 2024 - Present",
      points: [
        "Led development of multi-tenant data streaming platform (AWS Autoloop) enabling automotive companies to ingest, govern, and distribute vehicle data at scale; coordinated across 4 teams to unblock key enterprise customer launch, driving new revenue stream for AWS",
        "Delivered 7 workflow execution engine features for AWS HealthOmics across 3 engines, unblocking enterprise customer migration of thousands of workflows to AWS",
        "Led post-incident analysis for major AWS service outage and designed dependency caching fallback mechanism, reducing service recovery time from hours to seconds and improving resilience against cascading dependency failures",
        "Reduced deployment cycle by 4x (8 days to 2 days) by optimizing deployment strategy across pipeline waves; built consolidated health monitoring dashboard used daily to proactively identify production issues before customer impact",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "Amazon Alexa",
      icon: alexa,
      iconBg: "#d4f1ff",
      date: "May 2020 - Oct 2024",
      points: [
        "Architected and developed high-availability cloud orchestration service powering content delivery on millions of Alexa Echo Show devices worldwide at 35,000 TPS, integrating multiple content providers with real-time ranking for low-latency response delivery",
        "Proactively designed and built fault-tolerant retry storm protection with graceful degradation, absorbing 50x traffic surges (3,000 → 150,000 TPS) at 4x faster response time (360ms → 90ms); activated during major AWS outage preventing cascading failures across 5+ services",
        "Drove redesign of distributed state synchronization between cloud and device using pending transaction pattern, eliminating state inconsistencies, deadlocks, and out-of-sync failures across async workflows serving millions of devices",
        "Built scalable experimentation infrastructure decoupling experiment configuration from service code, enabling product managers to independently deploy A/B tests across all devices, reducing setup time from 2-3 days to under 10 minutes",
        "Mentored 2 interns and onboarded 3 team members; designed oncall pattern analysis mechanism adopted across multiple teams, systematically reducing high-severity ticket volume by 40%",
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "University of California, San Diego",
      icon: ucsd,
      iconBg: "#a2d2ff",
      date: "Sep 2019 - Mar 2020",
      points: [
        "Teaching Assistant for graduate-level courses CSE 224 (Networked Systems) and CSE 124 (Networked Services), supporting advanced distributed systems curriculum",
        "Facilitated discussion sections and office hours, mentored students on complex networking concepts, and managed grading for 100+ students while establishing project infrastructure",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company_name: "Amazon.com",
      icon: amazon,
      iconBg: "#ffe0b3",
      date: "Jun 2019 - Sep 2019",
      points: [
        "Designed and developed RESTful APIs and web interface for on-device test management service, enabling developers to run automated health checks across device fleets",
      ],
    },
  ],
};

export const education = {
  section_title: "Education",
  section_description: "",
  experiences: [
    {
      title: "University of California, San Diego",
      company_name: "Master of Science, Major in Computer Science",
      icon: ucsd,
      iconBg: "#a2d2ff",
      date: "Sep 2018 - Mar 2020",
      points: [
        "Master of Science in Computer Science, 3.96 GPA",
        "Specialized in Distributed Systems, Communication Networks, Operating Systems",
      ],
    },
    {
      title: "The University of Hong Kong",
      company_name:
        "Bachelor of Engineering, Major in Electrical Engineering and Minor in Finance",
      icon: hku,
      iconBg: "#b7e4c7",
      date: "Sep 2014 - Jun 2018",
      points: [
        "Bachelor of Engineering in Electrical Engineering with Finance Minor, 3.87 GPA (First Class Honors)",
        "Academic Recognition: Dean's Honors List, IET Outstanding Electrical Power and Energy Engineering Student Award",
        "Merit-based Scholarships: HKU Scholarship, CLP Scholarship, Chevalier Scholarship, YT Scholarship, Entrance Scholarship",
      ],
    },
    {
      title: "University of California, Berkeley",
      company_name: "Summer Exchange in Computer Science",
      icon: ucsd,
      iconBg: "#cbcbf9",
      date: "Jun 2015 - Aug 2015",
      points: [
        "Summer Exchange Program in Computer Science, 3.85 GPA",
        "Advanced Coursework: Algorithms and Data Structures, Computer Architecture, Object-Oriented Programming",
      ],
    },
  ],
};

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const productionProjects = [
  {
    iconUrl: estate,
    theme: "btn-back-yellow",
    name: "TaxWise",
    description:
      "iOS investment tax management application that enables users to track transactions, analyze cumulative tax implications, and simulate various investment scenarios for informed financial decisions.",
    skills: ["JavaScript", "ReactNative"],
    link: "/TaxWise",
    appStoreLink: "https://apps.apple.com/us/app/taxwise-investment-tax-tool/id6751554700",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-blue",
    name: "Portfolio Website",
    description:
      "Professional portfolio website showcasing software engineering experience and projects. Built with React, Tailwind CSS, and modern web technologies, featuring responsive design and optimized performance for seamless user experience.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/brandongautama/Portfolio",
    isCurrentSite: true,
  },
];

export const technicalProjects = [
  {
    iconUrl: housemateslogo,
    theme: "btn-back-green",
    name: "HouseMates",
    description:
      "Cross-platform mobile application for household task management with real-time synchronization across multiple users. Built full-stack solution using React Native frontend, Node.js backend, and cloud database architecture for seamless collaboration.",
    skills: ["JavaScript", "ReactNative"],
    link: "https://github.com/brandongautama/HouseMates",
  },
  {
    iconUrl: surfstore, // https://commons.wikimedia.org/wiki/File:Antu_seafile.svg
    theme: "btn-back-blue",
    name: "Cloud-based File Storage Service",
    description:
      "Distributed file storage system with global geographic distribution, implementing fault-tolerant architecture for high availability. Designed scalable backend using distributed consensus algorithms and cloud infrastructure for reliable file management.",
    skills: ["Python", "Java", "RPC", "AWS"],
    link: "https://github.com/brandongautama/SurfStore",
  },
  {
    iconUrl: raft,
    theme: "btn-back-black",
    name: "RAFT Protocol",
    description:
      "Implementation of RAFT distributed consensus algorithm for fault-tolerant distributed systems. Built robust leader election and log replication mechanisms to ensure data consistency across distributed nodes in network partition scenarios.",
    skills: ["Python", "RPC", "AWS"],
    link: "https://github.com/brandongautama/RAFT",
  },
  {
    iconUrl: github,
    theme: "btn-back-pink",
    name: "Gitlet",
    description: "Version control system replicating core Git functionality including branching, merging, and distributed repository management. Implemented efficient data structures and algorithms for version tracking and conflict resolution.",
    skills: ["Java"],
    link: "https://github.com/brandongautama/Gitlet",
  },
];

// Keep the original projects array for backward compatibility if needed elsewhere
export const projects = [...productionProjects, ...technicalProjects];
