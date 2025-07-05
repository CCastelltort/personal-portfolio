'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {FiMenu, FiX } from 'react-icons/fi'

const MobilenNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <div className="px-6 py-4">
        {/* Hamburger Icon for phone screens */}
        <div className="flex justify-between items-center">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl w-full flex justify-center"
            >
            {isOpen ? <FiX /> : <FiMenu />}
            </button>
        </div>

        {isOpen && (
            <div className="flex flex-col items-center mt-4 md:hidden">
            <ul className='flex flex-col gap-4 text-lg font-bold text-white items-center'>
                <Link href="/" className='hover:text-black transition-colors' onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" className='hover:text-black transition-colors' onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/projects" className='hover:text-black transition-colors' onClick={() => setIsOpen(false)}>Projects</Link>
                <Link href="/contact" className='hover:text-black transition-colors' onClick={() => setIsOpen(false)}>Contact</Link>
            </ul>

            <div className="flex flex-col gap-4 mt-4">
                <a
                href="https://github.com/CCastelltort"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 justify-center bg-black shadow-md rounded-xl hover:bg-gray-700 transition"
                >
                <FaGithub className="text-2xl mr-2 text-white" />
                <span className="text-lg font-semibold text-white">GitHub</span>
                </a>
                <a
                href="https://www.linkedin.com/in/carlota-castelltort-pinto/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 justify-center bg-blue-800 shadow-md rounded-xl hover:bg-blue-700 transition"
                >
                <FaLinkedin className="text-2xl text-white mr-2" />
                <span className="text-lg font-semibold text-white">LinkedIn</span>
                </a>
            </div>
            </div>
        )}
    </div>
  )
}

export default MobilenNav