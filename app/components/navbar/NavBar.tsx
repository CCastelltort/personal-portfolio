'use client'

import React from 'react'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const NavBar = () => {
  return (
    <nav className='fixed top-0 w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-4 bg-gradient-to-r from-blue-700 to-purple-700 z-50'>
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between items-center w-full">
        <DesktopNav />
      </div>
      {/* Phone Layout */}
      <div className="md:hidden">
        <MobileNav />
      </div>

    </nav>
  )
}

export default NavBar