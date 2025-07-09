'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {FiMenu, FiX } from 'react-icons/fi'

const MobilenNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className="px-6 py">
        {/* Hamburger Icon*/}
        <div className="flex justify-between items-center">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl"
            >
            {isOpen ? <FiX /> : <FiMenu />}
            </button>
            <div className="flex space-x-4">
                    <a
                    href="https://github.com/CCastelltort"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-2 py-1 justify-center bg-black rounded-xl hover:bg-gray-700 transition"
                    >
                    <FaGithub className="text-xl mr-2 text-white" />
                    <span className="text-md font-semibold text-white">GitHub</span>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/carlota-castelltort-pinto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-2 py-1 justify-center bg-blue-800 rounded-xl hover:bg-blue-700 transition"
                    >
                    <FaLinkedin className="text-xl text-white mr-2" />
                    <span className="text-md font-semibold text-white">LinkedIn</span>
                    </a>
                </div>
        </div>

        {isOpen && (
            <div className="flex flex-col items-center mt-4">
                <ul className='flex flex-col gap-4 text-lg font-bold text-white items-center'>
                    <Link href="/" className='hover:text-black transition-colors' onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className='hover:text-black transition-colors' onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/projects" className='hover:text-black transition-colors' onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link href="/contact" className='hover:text-black transition-colors' onClick={() => setIsOpen(false)}>Contact</Link>
                </ul>
            </div>
        )}
    </div>
  )
}

export default MobilenNav