import React from 'react'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import projects from '../data/projects'

const page = () => {
  return (
    <Container>
      <PageTitle>Projects</PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-20">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-white/30 p-6 rounded-2xl text-white border border-white">
              <h2 className="text-2xl font-bold mb-2 text-center">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tag.map((tag, idx) => (
                  <span key={idx} className="bg-blue-300 text-black px-3 py-1 rounded-full text-sm">{tag}</span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 flex-grow">
                <ul className="list-disc text-white mb-2 pl-6 h-full flex flex-col justify-between">
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="flex justify-center h-full">
                  <div className="h-full w-full overflow-hidden rounded-xl shadow-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
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