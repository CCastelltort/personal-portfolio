import React from 'react'

const projects = [
  {
    title: "Project 1",
    description: "Project 1 description...",
    tag: ["Vue.js", "Arduino", "Bluetooth"],
    github: "https://github.com",
    demo: "https://github.com"
  },
  {
    title: "Project 2",
    description: "Project 2 description...",
    tag: ["Python", "A*", "Heuristics"],
    github: ""
  },
  {
    title: "Project 3",
    description: "Project 3 description...",
    tag: ["Python", "A*", "Heuristics"],
    github: ""
  }
]

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-10 flex flex-col">
      <div className="flex justify-center pt-32">
        <h1 className="text-5xl font-bold font-sans">Projects</h1>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-20">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-transform hover:scale-105">
            <h2 className="text-2xl font-bold mb-2 text-center">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tag.map((tag, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page