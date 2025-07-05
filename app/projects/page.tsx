import React from 'react'
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';

const projects = [
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
    title: "Project 2",
    description: [
      "Built using Vue.js with Bluetooth integration.",
      "Controlled an Arduino device from a web interface.",
      "Enabled real-time data syncing via Bluetooth LE."
    ],
    image: "/images/project1.png",
    tag: ["Python", "A*", "Heuristics"],
    github: "",
    demo: "https://github.com"
  },
  {
    title: "Project 3",
    description: [
      "Built using Vue.js with Bluetooth integration.",
      "Controlled an Arduino device from a web interface.",
      "Enabled real-time data syncing via Bluetooth LE."
    ],
    image: "/images/project1.png",
    tag: ["Python", "A*", "Heuristics"],
    github: "",
  }
]

const page = () => {
  return (
    <Container>
      <PageTitle>Projects</PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-20">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/30 p-6 rounded-2xl text-white border border-white transition-transform hover:scale-105">
              <h2 className="text-2xl font-bold mb-2 text-center">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tag.map((tag, idx) => (
                  <span key={idx} className="bg-blue-300 text-black px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-4">
                <ul className="list-disc text-white mb-2 pl-6 space-y-2">
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="flex justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-md max-h-60 object-contain"
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-black px-2 py rounded-lg hover:bg-gray-800">GitHub</a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-green-700 px-2 py rounded-lg hover:bg-green-800">Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
    </Container>
  )
}

export default page