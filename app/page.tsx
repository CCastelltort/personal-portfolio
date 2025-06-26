'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const lines = [
    { text: "My name is Carlota Castelltort Pinto.", padding: "pl-0" },
    { text: "I am a senior at Texas Christian University.", padding: "pl-10" },
    { text: "I am pursuing a B.S. in Computer Science.", padding: "pl-20" },
    { text: "With minors in Mathematics and General Business.", padding: "pl-40" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-10 flex flex-col">
      <div className="flex justify-center pt-32">
        <h1 className="text-5xl font-bold font-sans">Hi! Welcome to my Portfolio!</h1>
      </div>
      <div className="flex-grow flex flex-col justify-evenly text-gray-600 pl-40 text-lg">
        {lines.map((line, index) => (
          <p
            key={index}
            className={`${line.padding} transition-transform duration-700 ease-out transform ${
              loaded ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {line.text}
          </p>
        ))}
      </div>
    </div>
  );
}
