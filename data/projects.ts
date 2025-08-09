export type Project = {
    title: string;
    description: string[];
    image: string;
    tag: string[];
    github?: string;
    demo?: string;
    inProgress?: boolean;
}

const projects: Project[] = [
  {
    title: "TCU ROBO-CON 2025 – Best Design Award",
    description: [
      "Led a team of 5 in designing, assembling, and programming a custom Arduino Uno robot; developed a Bluetooth remote control system using the HM-10 module and Dabble app for real-time robot navigation",
      "Implemented a wall-following algorithm for autonomous maze navigation using an ultrasonic sensor mounted on a servo, enabling adaptive pathfinding and optimized motor control with PWM",
      "Contributed to a 3D-printed, tank-style chassis modeled in Blender"
    ],
    image: "/robocon.jpg",
    tag: ["C/C++", "Arduino", "Robotics"],
    github: "https://github.com/CCastelltort/ROBO-CON-2025",
  },
  {
    title: "Recipe Management System",
    description: [
      "Designed and populated a relational database using MySQL Workbench by creating an ER diagram, forward-engineering it into a normalized schema, and populating 9 tables with 500+ data entries",
      "Built a Python-based Command-Line Interface (CLI) integrating 8 optimized SQL queries for efficient data retrieval and modification, with cascading updates and deletes to maintain relational integrity",
    ],
    image: "/recipeManagement.png",
    tag: ["SQL", "MySQL", "Python"],
    github: "https://github.com/CCastelltort/recipe-management-system",
  },
  {
    title: "FrogCrew - Sports Broadcasting Management Platform",
    description: [
      "Develop the front end using Vue 3 for FrogCrew, a web-based scheduling and crew management platform for TCU Athletics Broadcasting, designed to streamline operations and improve coordination",
      "Implement features that enable administrators to assign shifts, publish schedules, track crew availability, and manage communications, while allowing crew members to view assignments, submit availability, and request shift swaps through an intuitive interface",
      "Collaborate with a backend developer to integrate a Spring Boot API, enabling secure role-based access and seamless data flow"
    ],
    image: "/frogCrew.jpg",
    tag: ["Vue.js", "JavaScript", "HTML", "CSS", "RESTful APIs"],
    github: "https://github.com/rileyhitthefan/CITE-30363-FrogCrew",
    inProgress: true,
  },
  {
    title: "AI-Integrated Jacket Design Prototype",
    description: [
      "Developed a prototype website for Revelia, an early-stage startup focused on AI-driven fashion customization.The prototype was created specifically for a startup competition, serving as a live demo to pitch Revelia’s business model and product vision",
      "Built using Next.js with the App Router, TypeScript, and Tailwind CSS with a focus on clean, modular architecture where each page was broken into reusable components for clarity and scalability",
      "The platform allows users to fully personalize their jackets, including colors, buttons, pockets, embroidery and more, or generate unique designs using an integrated AI model using natural language prompts"
    ],
    image: "/revelia.png",
    tag: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "",
    demo: "",
  },
  {
    title: "Project 3",
    description: [
      "Description 1",
      "Description 2",
      "Description 3"
    ],
    image: "/images/project1.png",
    tag: ["Tag1", "Tag2", "Tag3"],
    github: "",
    demo: "https://github.com",
    inProgress: true,
  }
];

export default projects;