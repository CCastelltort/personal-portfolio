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
    title: "TCU ROBO-CON 2025 - Best Design Award",
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
    title: "AI-Integrated Jacket Design Prototype",
    description: [
      "Developed a prototype website for Revelia, an early-stage startup focused on AI-driven fashion customization. The prototype was created specifically for a startup competition, serving as a live demo to pitch Revelia’s business model and product vision",
      "Built using Next.js with the App Router, TypeScript, and Tailwind CSS with a focus on clean, modular architecture where each page was broken into reusable components for clarity and scalability",
      "The platform allows users to fully personalize their jackets, including colors, buttons, pockets, embroidery and more, or generate unique designs using an integrated AI model using natural language prompts"
    ],
    image: "/revelia.png",
    tag: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
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
    title: "Hogwarts Artifacts - Backend",
    description: [
      "Developed a Spring Boot backend featuring RESTful APIs with clear, well-structured endpoints to efficiently manage wizards and artifacts through full CRUD operations, incorporating user authentication and role-based access using Spring Security with JWT",
      "Applied Test-Driven Development (TDD) following the Red, Green, Refactor cycle to build reliable, well-tested features. Utilized Spring MVC, Spring Data JPA, and IoC with dependency injection to create a clean, modular, and maintainable codebase",
      "Containerized by building a Docker image, and implemented CI/CD pipelines using GitHub Actions. Deployed to Azure App Service with staging environments, securely connecting to a MySQL database via Azure Key Vault"
    ],
    image: "/hogwartsBackend.png",
    tag: ["Spring Boot", "CRUD", "Docker", "Azure", "TDD", "CI/CD", "Spring Security"],
    github: "https://github.com/CCastelltort/hogwarts-artifacts-online"
  },
  {
    title: "Hogwarts Shopping Cart - Frontend",
    description: [
      "Built a Hogwarts-themed shopping cart with Vue 3 and Vite, essentially serving as a checkout page that displays selected items with their quantities, stock status (in stock or backorder), and prices. Quantities can be adjusted or items removed, and an order summary is provided with toggleable details, including subtotal (sum of products), shipping estimate (based on quantity), tax estimate, total amount, and a checkout button",
      "Implemented a component-based architecture showcasing Vue fundamentals, including v-model, v-if, computed properties, watchers, lifecycle hooks, props, slots, and more. Designed as a frontend learning project to demonstrate Vue's core features",
    ],
    image: "/hogwartsFrontend.png",
    tag: ["Vue 3", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/CCastelltort/hogwarts-shopping-cart-vue-components",
  },
  {
    title: "Mock Job Posting Platform",
    description: [
      "Built a mock job posting platform using Laravel and SQLite, leveraging models, controllers, factories, seeders, and tests, with user registration/login, role-based job creation, and detailed job views for logged-in users",
      "Implemented a search and filtering system, including a search bar to find specific jobs, and three job sections (Featured, Recently Posted, and Tags) with each section displaying jobs in a distinct order to enhance discoverability and user navigation",
      "Developed a component-based frontend for maintainable UI design and used Herd for environment management, ensuring a smooth development workflow",
    ],
    image: "/jobPosting.png",
    tag: ["Laravel", "PHP", "SQLite", "Herd"],
    github: "https://github.com/CCastelltort/Job-Posting",
  },
  {
    title: "Mock Microblogging Platform",
    description: [
      "Developed a mock Chirper microblogging platform using Laravel with Inertia and Vue 3, allowing users to post short messages ('Chirps') with authentication handled via Laravel Breeze",
      "Implemented secure data handling by displaying only the Chirp text, author name, and relative dates (via Day.js) while hiding sensitive details, and enforcing authorization so only Chirp authors can edit or delete their posts",
      "Added engagement features by sending email notifications for newly created Chirps using Laravel event listeners"
    ],
    image: "/chirper.png",
    tag: ["Laravel", "PHP", "Inertia.js", "Vue.js", "JavaScript"],
    github: "https://github.com/CCastelltort/chirper",
  },
  {
    title: "Personal Portfolio",
    description: [
      "Developed a responsive personal portfolio website using Next.js, React, TypeScript, and Tailwind CSS to showcase my skills, projects, and provide an easy way for visitors to contact me",
      "Implemented a modular code structure by extracting data into separate files and creating reusable components, improving maintainability and consistent layout",
      "Integrated EmailJS API to enable a fully functional contact form, allowing visitors to send messages directly from the website",
      "Deployed on Vercel with automatic CI/CD, while securely managing environment variables (e.g., EmailJS keys) via Vercel’s dashboard"
    ],
    image: "/portfolio.png",
    tag: ["Next.js", "React", "TypeScript", "Tailwind CSS", "EmailJS", "Vercel"],
    github: "https://github.com/CCastelltort/personal-portfolio",
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
];

export default projects;