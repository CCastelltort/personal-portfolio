import React from 'react'
import Container from '../components/Container';
import PageTitle from '../components/PageTitle';
import InfoCard from '../components/InfoCard';
import Highlight from '../components/Highlight';
import { education, awards } from '../data/education';
import { skills } from '../data/skills';
import { coursework } from '../data/coursework';
import { bio } from '../data/bio';
import reactStringReplace from 'react-string-replace';

const page = () => {
  return (
    <Container>
      <PageTitle>About Me</PageTitle>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-12">
        <InfoCard title="EDUCATION">
          <div>
            <div>
              <ul className="list-disc pl-6 space-y-6">
                {education.map((item, idx) => (
                  <li key={`edu-${idx}`}>{item}</li>
                ))}
              </ul> 
            </div>
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-4 text-center">AWARDS</h2>
              <ul className="list-disc pl-6 space-y-6">
                {awards.map((item, idx) => (
                  <li key={`award-${idx}`}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          </InfoCard>

        <InfoCard title="SKILLS">
            <section className="mb-4">
              <h3 className="font-semibold text-xl mb-2 underline">Languages</h3>
              <ul className="grid grid-cols-3 gap-x-6 gap-y-1 list-disc pl-6">
                {skills.languages.map((lang, idx) => (
                <li key={`lang-${idx}`}>{lang}</li>
              ))}
              </ul>
            </section>

            <section className="mb-4">
              <h3 className="font-semibold text-xl mb-2 underline">Frameworks / Libraries</h3>
              <ul className="grid grid-cols-3 gap-x-6 gap-y-1 list-disc pl-6">
                {skills.frameworks.map((fw, idx) => (
                <li key={`fw-${idx}`}>{fw}</li>
              ))}
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-xl mb-2 underline">Tools / Platforms</h3>
              <ul className="grid grid-cols-3 gap-x-6 gap-y-1 list-disc pl-6">
                {skills.tools.map((tool, idx) => (
                <li key={`tool-${idx}`}>{tool}</li>
              ))}
              </ul>
            </section>
        </InfoCard>

        <InfoCard title="RELEVANT COURSEWORK">
          <ul className="list-disc pl-6 space-y-4">
            {coursework.map((course, idx) => (
              <li key={`course-${idx}`}>{course}</li>
            ))}
          </ul>
        </InfoCard>

        <div className="lg:col-span-3 text-justify text-white bg-white/30 p-6 rounded-2xl border border-white">
          {bio.map((paragraph, idx) => (
            <p key={`bio-${idx}`} className="mb-6">
              {reactStringReplace(paragraph, /<Highlight>(.*?)<\/Highlight>/g, (match, i) => (
                <Highlight key={i}>{match}</Highlight>
              ))}
            </p>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default page