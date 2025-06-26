import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-10 flex flex-col">
      <div className="flex justify-center pt-32">
        <h1 className="text-5xl font-bold font-sans">About Me</h1>
      </div>
      <div className="mt-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-blue-300  p-6 rounded-2xl shadow-md text-gray-600 text-justify">
          <p >Hi! I’m Carlota Castelltort Pinto, a senior at Texas Christian University (TCU) pursuing a <span className="text-black">B.S. 
            in Computer Science</span> with minors in Mathematics and General Business. I’m passionate about <span className="text-black">software 
            engineering and web development</span>, and as I prepare to <span className="text-black">graduate in Spring 2026</span>, I’m excited to keep 
            growing as a developer and contribute to innovative and impactful projects.
          </p>
        </div>

        <div className="bg-blue-300 p-6 rounded-2xl shadow-md text-gray-600 text-justify">
          <p>Originally from Spain, I began my college journey at Cisco College, where I was a player of the women’s 
            basketball team. That experience instilled in me strong values of <span className="text-black">commitment, teamwork, leadership, communication, 
            and time management</span>. While at Cisco, I earned consistent academic honors, including the <span className="text-black">President’s List, 
            Dean’s List, and selection to the NTJCAC All-Academic Team</span>.
          </p>
        </div>

        <div className="bg-blue-300 p-6 rounded-2xl shadow-md text-gray-600 text-justify">
          <p>I later transferred to TCU, where I was awarded the <span className="text-black">prestigious Chancellor’s Scholarship</span>, recognizing 
            the top 1% of applicants for <span className="text-black">academic excellence, leadership, and potential to contribute meaningfully 
            to the university community</span>.
          </p>
        </div>
        <div className="bg-blue-300 p-6 rounded-2xl shadow-md text-gray-600 lg:col-span-3 text-justify mt-6">
          <p>
            At TCU, I’ve been active in organizations such as <span className="text-black">SHPE (Society of Hispanic Professional Engineers), 
            SWE (Society of Women Engineers), and the Robotics and AI Club</span>. I’ve also gained valuable experience 
            working as an <span className="text-black">IT Assistant and Horned Frog Hospitality Ambassador</span>, roles that strengthened both my 
            technical and interpersonal skills. In Spring 2025 I was honored as a <span className="text-black">TCU Scholar and named to the 
            Dean’s Honor List for achieving a 4.0 GPA</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default page