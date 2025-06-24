import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed top-0 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-black'>
        
        <ul className='flex gap-10 text-lg'>
            <Link href="/" className='text-gray-300 hover:text-white transition-colors'>
                Home
            </Link>
            <Link href="/about" className='text-gray-300 hover:text-white transition-colors'>
                About
            </Link>
            <Link href="/projects" className='text-gray-300 hover:text-white transition-colors'>
                Projects
            </Link>
            <Link href="/contact" className='text-gray-300 hover:text-white transition-colors'>
                Contact
            </Link>
        </ul>
    </nav>
  )
}

export default NavBar