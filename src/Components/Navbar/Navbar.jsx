import React from 'react'
import {FiMenu,FiX} from 'react-icons/fi'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className='bg-transparent'>
      <div className='text-white py-5 flux justify-between items-center'>
        <div className='text-lg font-semibold cursor-pointer'>
                    <span className="text-white">&lt;</span>

                   <span className="text-[FF8C1A ]">Portfolio</span>
                                      <span className="text-white">/&gt;</span>


        </div>
      </div>
    </nav>
  )
}

export default Navbar
