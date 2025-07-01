'use client'

import { useEffect, useState } from "react";
import Container from './components/Container';
import PageTitle from './components/PageTitle';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const lines = [
    { text: "My name is Carlota Castelltort Pinto", padding: "pl-0" },
    { text: "I am a senior at Texas Christian University", padding: "pl-10" },
    { text: "I am pursuing a B.S. in Computer Science", padding: "pl-20" },
    { text: "With minors in Mathematics and General Business", padding: "pl-40" },
  ];

  return (
    <Container>
      <PageTitle>Hi! Welcome to my Portfolio!</PageTitle>

      {/*Basic information about me */}
      <div className="flex-grow flex flex-col justify-evenly text-gray-600 text-lg">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`${line.padding} transition-transform duration-700 ease-out transform ${
              loaded ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <div className="bg-white/30 border border-white rounded-xl px-6 py-4 text-white shadow-sm w-fit">
              {line.text}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
