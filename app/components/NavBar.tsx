import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed top-0 w-full flex py-5 px-20 bg-blue-300 text-gray-600'>
        
        <ul className='flex gap-10 text-lg'>
            <Link href="/" className='hover:text-white transition-colors'>
                Home
            </Link>
            <Link href="/about" className='hover:text-white transition-colors'>
                About
            </Link>
            <Link href="/projects" className='hover:text-white transition-colors'>
                Projects
            </Link>
            <Link href="/contact" className='hover:text-white transition-colors'>
                Contact
            </Link>
        </ul>
    </nav>
  )
}

export default NavBar