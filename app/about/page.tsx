import React from 'react'
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import InfoCard from '../components/InfoCard';
import Highlight from '../components/Highlight';


const page = () => {
  return (
    <Container>
      <PageTitle>About Me</PageTitle>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-12">
        <InfoCard title="EDUCATION">
          <div>
            <div>
              <ul className="list-disc pl-6 space-y-6">
                <li>B.S. in Computer Science at Texas Christian University.</li>
                <li>Minoring in Mathematics and General Business.</li>
                <li>Graduating in Spring 2026.</li>
              </ul> 
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4 text-center">AWARDS</h2>
              <ul className="list-disc pl-6 space-y-6">
                <li>TCU Chancellor's Scholar (University’s Most Prestigious Academic Scholarship).</li>
                <li>TCU Scholar (Earned for achieving a 4.0 GPA).</li>
                <li>TCU Dean's Honor List.</li>
              </ul>
            </div>
          </div>
          </InfoCard>

        <InfoCard title="SKILLS">
            <section className="mb-4">
              <h3 className="font-semibold text-xl mb-2 underline">Languages</h3>
              <ul className="grid grid-cols-3 gap-x-6 gap-y-1 list-disc pl-6">
                <li>Java</li>
                <li>C/C++</li>
                <li>Python</li>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>SQL</li>
                <li>LaTeX</li>
              </ul>
            </section>

            <section className="mb-4">
              <h3 className="font-semibold text-xl mb-2 underline">Frameworks / Libraries</h3>
              <ul className="grid grid-cols-3 gap-x-6 gap-y-1 list-disc pl-6">
                <li>React</li>
                <li>Next.js</li>
                <li>Vue.js</li>
                <li>Laravel</li>
                <li>Livewire</li>
                <li>SpringBoot</li>
                <li>Node.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-2 underline">Tools / Platforms</h3>
              <ul className="grid grid-cols-3 gap-x-6 gap-y-1 list-disc pl-6">
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>IntelliJ IDEA</li>
                <li>MySQL</li>
                <li>Docker</li>
                <li>Vercel</li>
              </ul>
            </section>
        </InfoCard>

        <InfoCard title="RELEVANT COURSEWORK">
          <ul className="list-disc pl-6 space-y-4">
            <li>Data Structures</li>
            <li>Analysis of Algorithms</li>
            <li>Software Engineering</li>
            <li>Artificial Intelligence</li>
            <li>Operating Systems</li>
            <li>Cloud Computing</li>
            <li>Database Systems</li>
            <li>Web Technologies</li>
            <li>Unix/Linux System Administration</li>
            <li>Computer System Fundamentals</li>
          </ul>
        </InfoCard>

        <div className="lg:col-span-3 text-justify text-white bg-white/30 p-6 rounded-2xl mt-6 border border-white">
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
            At TCU, I’ve been active in organizations such as <Highlight>SHPE</Highlight> (Society of Hispanic Professional Engineers), <Highlight>SWE
            </Highlight> (Society of Women Engineers), <Highlight>Women in Computer Science</Highlight>, and the <Highlight>Robotics and AI Club</Highlight>. 
            Furthermore, I was recently voted <Highlight>Vice President of the Computer Science Society</Highlight>. I’ve also gained valuable 
            experience working as an <Highlight>IT Assistant</Highlight> and <Highlight>Horned Frog Hospitality Ambassador</Highlight>, roles that 
            strengthened both my technical and interpersonal skills. In Spring 2025 I was honored as a <Highlight>TCU Scholar</Highlight> and named to the 
            <Highlight>Dean’s Honor List</Highlight> for achieving a 4.0 GPA.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default page