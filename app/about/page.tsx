import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen px-10 flex flex-col bg-gradient-to-r from-blue-700 to-purple-700">
      <div className="flex justify-center pt-32">
        <h1 className="text-5xl font-bold font-sans text-white">About Me</h1>
      </div>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white/30 p-6 rounded-2xl shadow-md text-white text-justify transition-transform duration-300 hover:scale-105 border border-white">
          <p >Hi! I’m Carlota Castelltort Pinto, a senior at Texas Christian University (TCU) pursuing a <span className="font-bold underline decoration-skip-ink">B.S. 
            in Computer Science</span> with minors in Mathematics and General Business. I’m passionate about <span className="font-bold underline">software engineering</span> and <span className="font-bold underline"> web development</span>, and as I prepare to graduate in <span className="font-bold underline">Spring 2026</span>, I’m excited to keep 
            growing as a developer and contribute to innovative and impactful projects.
          </p>
        </div>

        <div className="bg-white/30 p-6 rounded-2xl shadow-md text-white text-justify transition-transform duration-300 hover:scale-105 border border-white">
          <p>Originally from Spain, I began my college journey at Cisco College, where I was a player of the women’s 
            basketball team. That experience instilled in me strong values of <span className="font-bold underline">commitment, teamwork, leadership, communication, 
            and time management</span>. While at Cisco, I earned consistent academic honors, including the <span className="font-bold underline">President’s List, 
            Dean’s List, and selection to the NTJCAC All-Academic Team</span>.
          </p>
        </div>

        <div className="bg-white/30 p-6 rounded-2xl shadow-md text-white text-justify transition-transform duration-300 hover:scale-105 border border-white">
          <p>I later transferred to TCU, where I was awarded the <span className="font-bold underline">prestigious Chancellor’s Scholarship</span>, recognizing 
            the top 1% of applicants for <span className="font-bold underline">academic excellence, leadership, and potential to contribute meaningfully 
            to the university community</span>.
          </p>
        </div>
        <div className="bg-white/30 p-6 rounded-2xl shadow-md text-white lg:col-span-3 text-justify mt-6 transition-transform duration-300 hover:scale-102 border border-white">
          <p>
            At TCU, I’ve been active in organizations such as <span className="font-bold underline">SHPE (Society of Hispanic Professional Engineers), 
            SWE (Society of Women Engineers), and the Robotics and AI Club</span>. I’ve also gained valuable experience 
            working as an <span className="font-bold underline">IT Assistant and Horned Frog Hospitality Ambassador</span>, roles that strengthened both my 
            technical and interpersonal skills. In Spring 2025 I was honored as a <span className="font-bold underline">TCU Scholar and named to the 
            Dean’s Honor List for achieving a 4.0 GPA</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page