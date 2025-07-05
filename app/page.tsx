'use client'

import { useEffect, useState } from "react";
import Container from './components/Container';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const lines = [
    { text: "This is my Personal Portfolio", padding: "pl" },
    { text: "I am a senior at Texas Christian University", padding: "pl-5" },
    { text: "I am pursuing a B.S. in Computer Science", padding: "pl-10" },
    { text: "Minoring in Mathematics and General Business", padding: "pl-15" },
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
        <div className="flex flex-col items-center">
          <img
            src="/profile.jpg"
            alt="Carlota"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full border-4 border-white object-cover mt-4"
          />
          <a
            href="/projects"
            className="mt-10 mb-4 text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            View My Projects →
          </a>
        </div>

        {/* COLUMN 3: Skills + Coursework */}
            <div className="flex flex-col text-white">
              {/* Skills */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Skills</h3>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>JavaScript / TypeScript</li>
                  <li>React & Vue.js</li>
                  <li>Python, C++, Java</li>
                  <li>SQL / MySQL</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>

              {/* Coursework */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Relevant Coursework</h3>
                <ul className="space-y-2 list-disc list-inside text-sm">
                  <li>Data Structures & Algorithms</li>
                  <li>Operating Systems</li>
                  <li>Software Engineering</li>
                  <li>Database Systems</li>
                  <li>Web Technologies</li>
                </ul>
              </div>
            </div>

      </div>

    </Container>
  );
}
