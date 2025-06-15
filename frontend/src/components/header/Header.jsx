import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
function Header() {
  return (
    <div>
        <nav className="bg-blue-200 shadow-md fixed top-0 left-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    {/* Logo */}
    <a  href="/" className="text-xl font-bold hover:text-white text-purple-700">GII</a>

    {/* Nav Links */}
    <div className="hidden md:flex space-x-8 mr-2 text-gray-800 text-lg">
      <a href="/" className="text-purple-700 hover:text-white">Home</a>
      <a href="/about" className="text-purple-700 hover:text-white">About</a>
      <a href="/projects" className="text-purple-700 hover:text-white">Project</a>
      <a href="/contact" className="text-purple-700 hover:text-white">Contact</a>
      <a href="/account" className='mt-2'>{<FaUserAlt color='rgb(126 34 206)'/>}</a>
    </div>
    
  </div>
</nav>
      
    </div>
  )
}

export default Header
