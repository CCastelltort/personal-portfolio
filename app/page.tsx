'use client'

import { useEffect, useState } from "react";
import Container from './components/Container';
import InfoCard from './components/InfoCard';
import projects from "./data/projects";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);


  const lines = [
    { text: "Welcome to my Personal Portfolio"},
    { text: "I am a senior at Texas Christian University"}, 
    { text: "I am pursuing a B.S. in Computer Science"},
    { text: "Minoring in Mathematics and General Business"},
  ];

  return (
    <Container>
      <div className=" flex flex-col justify-center items-center">
        <h2 className="text-lg sm:text-xl font-bold font-sans text-white pb-2">
          Hi! My name is
        </h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-white">
          Carlota Castelltort Pinto
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-12 min-h-[75vh]">

        {/*Basic information about me */}
        <div className="flex flex-col justify-between items-center md:items-start h-full w-full space-y-4">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`w-full max-w-sm sm:max-w-md md:max-w-full transition-transform duration-700 ease-out transform ${
                loaded ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white/30 border border-white rounded-xl px-6 py-4 text-white text-center">
                {line.text}
              </div>
            </div>
          ))}
        </div>

        {/*Picture + Link to projects */}
        <div className="flex flex-col justify-center items-center h-full">
          <img
            src="/profile.jpg"
            alt="Carlota"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full border-4 border-white object-cover mt-4"
          />
          <a
            href="/projects"
            className="mt-12 mb-4 text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            View My Projects →
          </a>
        </div>

        {/* COLUMN 3: Experience */}
        <div className="flex flex-col text-white justify-between h-full">
          {/* Experience */}
          <InfoCard title="Experience">
            <ul className="list-disc pl-6 space-y-6">
              <li>Full-Stack Developer Intern at Creagia.</li>
              <li>IT Student Assistant at Texas Christian University.</li>
              <li>Vice President of TCU's Computer Science Society.</li>
            </ul>
          </InfoCard>
  
          <div className="overflow-hidden fade-mask">
            <div
              className="flex flex-nowrap animate-scroll"
              style={{ animationDuration: '30s' }}
            >
              {/* duplicated projects for infinite scroll */}
              {[...projects, ...projects].map((project, i) => (
                <div
                  key={i}
                  className="inline-block w-56 flex-shrink-0 m-4 bg-white/30 rounded-lg p-4 border border-white"
                >
                  <h4 className="font-semibold text-center mb-2 break-words">{project.title}</h4>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
          
    </Container>
  );
}
