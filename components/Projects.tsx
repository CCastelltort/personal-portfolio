import React from 'react'
import Container from './ui/Container'
import PageTitle from './ui/PageTitle'
import projects from '@/data/projects'

const Projects = () => {
  return (
    <Container>
      <PageTitle>Projects</PageTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-10 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col bg-white/30 p-6 rounded-2xl text-white border border-white">
              <h2 className="text-2xl font-bold mb-2 text-center">{project.title}</h2>
              
              <div className='flex justify-between'> 
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tag.map((tag, idx) => (
                    <span key={idx} className="bg-blue-300 text-black px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
                {project.inProgress && (
                  <span className="bg-yellow-400 text-black italic px-2 rounded-lg self-start h-fit text-center">
                    In Progress
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 flex-grow">
                <ul className="list-disc text-white mb-2 pl-6 h-full flex flex-col space-y-4">
                  {project.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
                  <div className="w-full overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-left"
                    />
                  </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="flex gap-4 justify-center">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-black px-2 py rounded-lg hover:bg-gray-700">Vist Repository</a>
                  )}

                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-green-700 px-2 py rounded-lg hover:bg-green-800">Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
    </Container>
  )
}

export default Projects