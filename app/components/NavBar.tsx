import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed top-0 w-full flex py-5 px-20 text-black'>
        
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
    </nav>
  )
}

export default NavBar