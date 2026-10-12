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
  aiagents,
  roblox,
  csharp,
  grpc,
  mcp,
  berkeley,
} from "../assets/icons";

export const skills = [
  // Backend & Cloud (Core Strengths)
  {
    imageUrl: java,
    name: "Java",
    type: "Backend & Cloud",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend & Cloud",
  },
  {
    imageUrl: csharp,
    name: "C#",
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
  // Distributed Systems & APIs
  {
    imageUrl: grpc,
    name: "gRPC",
    type: "Distributed Systems",
  },
  {
    imageUrl: rest,
    name: "RESTful APIs",
    type: "Distributed Systems",
  },
  // AI Engineering
  {
    imageUrl: mcp,
    name: "MCP / AI Agents",
    type: "AI Engineering",
  },
  // Full-Stack
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Full-Stack",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Full-Stack",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Full-Stack",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Full-Stack",
  },
];

export const highlights = [
  {
    metric: "50x traffic surge",
    title: "Retry storm protection",
    detail: "3,000 → 150,000 TPS during a major AWS outage",
    where: "Amazon Alexa",
  },
  {
    metric: "9x faster",
    title: "Genomics data transfer",
    detail: "4 TiB in 8 minutes, down from 75",
    where: "AWS HealthOmics",
  },
  {
    metric: "6x capacity",
    title: "Multi-cell genomics platform",
    detail: "40K → 240K concurrent tasks",
    where: "AWS HealthOmics",
  },
  {
    metric: "AI triage agent",
    title: "Oncall triage in 2 minutes",
    detail: "Down from 20-30 minutes; 10 → 25 tickets resolved per week",
    where: "AWS",
  },
];

export const work_experience = {
  section_title: "Work Experience",
  section_description: "",
  experiences: [
    {
      title: "Senior Software Engineer",
      company_name: "Roblox",
      icon: roblox,
      iconBg: "#e2e8f0",
      date: "Sep 2026 - Present",
      points: [
        "Build backend services for the Roblox Avatar Marketplace, where users browse and buy avatar items, bundles and Looks, as high-traffic C#/.NET microservices behind REST and gRPC APIs",
        "Develop the personalization pipeline behind the shop's recommendation rows, an experiment-driven fetch, rank and filter flow that calls ML ranking services and is tuned through A/B tests",
        "Build event-driven pipelines that validate, moderate and index user-created Looks into vector-based search and recommendations",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "Amazon Web Services",
      icon: aws,
      iconBg: "#fff4e6",
      date: "Oct 2024 - Sep 2026",
      points: [
        "Designed and built system to parallelize S3 directory imports across AWS HealthOmics workflow engines (WDL, CWL, Nextflow), splitting single-node transfers into multiple concurrent tasks across shared filesystem; reduced 4 TiB imports from 75 minutes to 8 minutes (9x faster), saving 9,500+ customer-hours annually",
        "Architected multi-cell platform for AWS HealthOmics, splitting control and data planes across dedicated AWS accounts; scaled service capacity from 40K to 240K concurrent tasks (6x), enabling dedicated cells for top enterprise customers",
        "Built AI oncall triage agent (Bedrock, Lambda, DynamoDB) that diagnoses new tickets from logs and past resolutions; cut triage from 20-30 minutes to 2 minutes and raised tickets resolved per week from 10 to 25",
        "Led root-cause analysis for major AWS service outage and designed dependency caching fallback, cutting recovery time from hours to seconds and preventing cascading failures",
        "Designed code intelligence platform mapping components to tests and pipeline history, enabling blast radius analysis on every code review; cut release cycle from 27 days to 7 days (4x faster)",
        "Led development of multi-tenant data streaming platform (AWS Autoloop) enabling automotive OEMs to ingest, govern, and distribute vehicle telemetry across AWS; coordinated across 4 teams and unblocked flagship enterprise customer launch",
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
        "Led the redesign of cloud-device state synchronization for Echo Hub across 3 teams, making the cloud the source of truth with a pending transaction pattern; ended permanent out-of-sync failures and raised the product rating from 2.9 to 4.3",
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
        "Teaching Assistant for networking courses CSE 224 (Networked Systems, graduate) and CSE 124 (Networked Services); ran discussion sections and grading for 100+ students",
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
      icon: berkeley,
      iconBg: "#cbcbf9",
      date: "Jun 2015 - Aug 2015",
      points: [
        "Summer Exchange Program in Computer Science, 3.85 GPA",
        "Advanced Coursework: Algorithms and Data Structures, Computer Architecture, Object-Oriented Programming",
      ],
    },
  ],
};

export const projects = [
  {
    iconUrl: aiagents,
    theme: "btn-back-purple",
    name: "Autonomous Pair Programming",
    iconSize: "w-3/4 h-3/4",
    description:
      "Multi-agent code review system built as an MCP tool. A Driver agent writes the change and a Navigator agent plays devil's advocate, and the two debate in adversarial review loops until the code holds up, so the human reviewer starts from a cleaner draft. Quality gates are self-improving, evolving from real code review feedback. Presented internally.",
    skills: ["Python", "MCP", "AI Agents"],
    link: "",
  },
  {
    iconUrl: estate,
    theme: "btn-back-yellow",
    name: "TaxWise",
    description:
      "iOS investment tax management application that enables users to track transactions, analyze cumulative tax implications, and simulate investment scenarios.",
    skills: ["JavaScript", "React Native"],
    link: "/TaxWise",
    appStoreLink: "https://apps.apple.com/us/app/taxwise-investment-tax-tool/id6751554700",
  },
  {
    iconUrl: surfstore, // https://commons.wikimedia.org/wiki/File:Antu_seafile.svg
    theme: "btn-back-blue",
    name: "SurfStore",
    description:
      "Distributed cloud file storage service with geographic replication and fault-tolerant architecture using consensus algorithms.",
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
    iconUrl: housemateslogo,
    theme: "btn-back-green",
    name: "HouseMates",
    description:
      "Cross-platform mobile application for household task management with real-time synchronization across multiple users. Built full-stack solution using React Native frontend, Node.js backend, and a cloud database.",
    skills: ["JavaScript", "React Native"],
    link: "https://github.com/brandongautama/HouseMates",
  },
];

export const writing = {
  profile: "https://medium.com/@brandongautama",
  posts: [
    {
      title: "Building a Self-Improving AI Oncall Agent",
      summary:
        "How a retrieval-based AI agent cut oncall triage from 20-30 minutes to 2 minutes, and kept getting more accurate without retraining the model.",
      date: "Oct 2026",
      link: "https://medium.com/@brandongautama/building-a-self-improving-ai-oncall-agent-275d4f862b6c",
    },
    {
      title: "Designing for a 50x Retry Storm",
      summary:
        "How graceful degradation kept a cloud service answering through a 50x traffic surge during a major AWS outage.",
      date: "Oct 2026",
      link: "https://medium.com/@brandongautama/designing-for-a-50x-retry-storm-4926bf913437",
    },
    {
      title: "Message Delivery System using AWS Step Functions",
      summary:
        "Designing guaranteed message delivery to devices over an asynchronous channel, with acknowledgements and retries built on AWS Step Functions.",
      date: "Jul 2024",
      link: "https://medium.com/@brandongautama/message-delivery-system-using-aws-step-functions-23c8105a01f8",
    },
  ],
};
