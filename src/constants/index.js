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
  ucsd,
  hku,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: cplusplus,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "Backend",
  },
  {
    imageUrl: dynamodb,
    name: "DynamoDB",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
];

export const work_experience = {
  section_title: "Work Experience",
  section_description: "I've worked as Software Engineer since graduation",
  experiences: [
    {
      title: "Software Development Engineer",
      company_name: "Amazon.com",
      icon: amazon,
      iconBg: "#ffe0b3",
      date: "May 2020 - Present",
      points: [
        "Design, develop, test and maintain highly-scalable RESTful microservices using Java and AWS infrastructure ecosystems",
        "Collaborate with cross-functional teams including product managers and other developers to create high-quality products.",
        "Implement distributed software applications, tools and systems with best practice engineering standards.",
        "Articulate technical challenges with a robust, scalable and supportable solutions within the overall system architecture.",
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "University of California, San Diego",
      icon: ucsd,
      iconBg: "#a2d2ff",
      date: "Sep 2019 - Mar 2020",
      points: [
        "Teaching Assistant for CSE 224 and 124: Networked Systems and Services",
        "Hold discussion sections, office hours, grading exams and set up projects infrastructure",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company_name: "Amazon.com",
      icon: amazon,
      iconBg: "#ffe0b3",
      date: "Jun 2019 - Sep 2019",
      points: [
        "Design, develop and test full-stack software for on-device test management service",
        "Implement backend RESTful web service using Python and Flask",
        "Implement UI using HTML, CSS and JavaScript",
      ],
    },
  ],
};

export const education = {
  section_title: "Education",
  section_description: "Schools",
  experiences: [
    {
      title: "University of California, San Diego",
      company_name: "Master of Science, Major in Computer Science",
      icon: ucsd,
      iconBg: "#a2d2ff",
      date: "Sep 2018 - Mar 2020",
      points: [
        "Academics: 3.96 Cumulative GPA",
        "Specialization: Distributed Systems, Communication Networks, Operating System, Compiler Design, Software Engineering",
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
        "Academics: 3.87 cumulative GPA (First Class Honors)",
        "Honors: HKU Dean’s Honors List, IET’s Outstanding Electrical Power and Energy Engineering Student Award",
        "Scholarships: HKE Scholarship, CLP Scholarship, Chevalier Scholarship, YT Scholarship, Entrance Scholarship",
      ],
    },
    {
      title: "University of California, Berkeley",
      company_name: "Summer Exchange in Computer Science",
      icon: ucsd,
      iconBg: "#a2d2ff",
      date: "Jun 2015 - Aug 2015",
      points: [
        "Academics: 3.85 Cumulative GPA",
        "Coursework: Algorithms and Data Structures, Computer Architecture, Object-Oriented Programming",
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

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
