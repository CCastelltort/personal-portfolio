import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";


const NavBar = () => {
  return (
    <nav className='fixed top-0 w-full flex py-5 px-20 text-black justify-between'>
        
        {/*Navigation Links*/}
        <ul className='flex gap-10 text-lg font-bold text-white'>
            <Link href="/" className='hover:text-black transition-colors'>
                Home
            </Link>
            <Link href="/about" className='hover:text-black transsition-colors'>
                About
            </Link>
            <Link href="/projects" className='hover:text-black transition-colors'>
                Projects
            </Link>
            <Link href="/contact" className='hover:text-black transition-colors'>
                Contact
            </Link>
        </ul>

        {/* Social Buttons*/}
        <div className="flex gap-4">
          <a
            href="https://github.com/CCastelltort"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-1justify-center bg-black shadow-md rounded-xl hover:bg-gray-700 transition"
          >
            <FaGithub className="text-2xl mr-2 text-white" />
            <span className="text-lg font-semibold text-white">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/carlota-castelltort-pinto/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-1 justify-center bg-blue-800 shadow-md rounded-xl hover:bg-blue-700 transition"
          >
            <FaLinkedin className="text-2xl text-white mr-2" />
            <span className="text-lg font-semibold text-white">LinkedIn</span>
          </a>
        </div>
    </nav>
  )
}

export default NavBar