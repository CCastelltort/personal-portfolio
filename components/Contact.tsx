import React from 'react';
import Container from './ui/Container';
import PageTitle from './ui/PageTitle';
import ContactForm from './ContactForm';
import InfoCard from './ui/InfoCard';

import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  
  return (
    <Container>
      <PageTitle>Contact Me</PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 pt-20">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md lg:max-w-xl">
            <InfoCard title="CONTACT INFORMATION">
              <ul className="space-y-4 text-white">
                <li className="flex items-center gap-2">
                  <MdEmail className="text-xl lg:text-2xl" />
                  <span className="text-md  lg:text-lg">
                      carlota.castelltort@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaLinkedin className="text-xl lg:text-2xl" />
                  <a
                    href="https://www.linkedin.com/in/carlota-castelltort-pinto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-md lg:text-lg"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaGithub className="text-xl lg:text-2xl" />
                  <a
                    href="https://github.com/CCastelltort"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-md lg:text-lg"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </InfoCard>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
        
      </div>
    </Container>
  )
}

export default Contact