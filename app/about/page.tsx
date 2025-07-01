import React from 'react'
import Highlight from '../components/Highlight';
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';

const page = () => {
  return (
    <Container>
      <PageTitle>About Me</PageTitle>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-12">
        <div className="bg-white/30 p-6 rounded-2xl shadow-md text-white text-justify transition-transform duration-300 hover:scale-105 border border-white">
          <h2 className='text-2xl font-bold mb-4'>Education</h2> 
          <ul className='list-disc pl-6 space-y-2'>
            <li>Computer Science student at Texas Christian Universtiy.</li>
            <li>Minoring in Mathematics and General Business.</li>
            <li>Graduating in Spring 2026.</li>
          </ul>
        </div>

        <div className="bg-white/30 p-6 rounded-2xl shadow-md text-white text-justify transition-transform duration-300 hover:scale-105 border border-white">
          <h2 className='text-2xl font-bold mb-4'>Awards</h2> 
          <ul className='list-disc pl-6 space-y-2'>
            <li>TCU Chancellor's Scholar (University’s Most Prestigious Academic Scholarship).</li>
            <li>TCU Scholar (Earned for achieving a 4.0 GPA).</li>
            <li>TCU Dean's Honor List.</li>
          </ul>
        </div>

        <div className="bg-white/30 p-6 rounded-2xl shadow-md text-white text-justify transition-transform duration-300 hover:scale-105 border border-white">
          <h2 className='text-2xl font-bold mb-4'>Experience</h2> 
          <ul className='list-disc pl-6 space-y-2'>
            <li>Full-Stack Developer Intern at Creagia.</li>
            <li>IT Student Assistant at Texas Christian University.</li>
            <li>Vice President of the Computer Science Society at Texas Christian University.</li>
          </ul>
        </div>
        <div className="bg-white/30 p-6 rounded-2xl shadow-md text-white lg:col-span-3 text-justify mt-6 transition-transform duration-300 hover:scale-102 border border-white">
          <p>
            Hi! I’m Carlota Castelltort Pinto, a senior at Texas Christian University (TCU) pursuing a <Highlight>B.S.
            in Computer Science</Highlight> with minors in Mathematics and General Business. I’m passionate about <Highlight>software 
            engineering, AI,</Highlight> and <Highlight>web development</Highlight>, and as I prepare to graduate in <Highlight>Spring 
            2026</Highlight>, I’m excited to keep growing as a developer and contribute to innovative and impactful projects. 
          </p>
          <br></br>
          <p>Originally from Spain, I began my college journey at Cisco College, where I was a player of the women’s 
            basketball team. That experience instilled in me strong values of <Highlight>commitment, teamwork, leadership, communication</Highlight>, 
            and <Highlight>time management</Highlight>. While at Cisco, I earned consistent academic honors, including the <Highlight>President’s List, 
            Dean’s List</Highlight>, and selection to the <Highlight>NTJCAC All-Academic Team</Highlight>.
          </p>
          <br></br>
          <p>I later transferred to TCU, where I was awarded the <Highlight>prestigious Chancellor’s Scholarship</Highlight>, recognizing 
            the top 1% of applicants for <Highlight>academic excellence, leadership, and potential to contribute meaningfully 
            to the university community</Highlight>.
          </p>
          <br></br>
          <p>
            At TCU, I’ve been active in organizations such as <Highlight>SHPE</Highlight> (Society of Hispanic Professional Engineers), 
            <Highlight>SWE</Highlight> (Society of Women Engineers), <Highlight>Women in Computer Science</Highlight>, and the <Highlight>Robotics and AI Club</Highlight>. Furthermore, I was
            recently voted <Highlight>Vice President of the Computer Science Society</Highlight>. I’ve also gained valuable experience working as 
            an <Highlight>IT Assistant</Highlight> and <Highlight>Horned Frog Hospitality Ambassador</Highlight>, roles that strengthened both my 
            technical and interpersonal skills. In Spring 2025 I was honored as a <Highlight>TCU Scholar</Highlight> and named to the 
            <Highlight>Dean’s Honor List</Highlight> for achieving a 4.0 GPA.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default page