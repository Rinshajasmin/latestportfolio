import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
import Works from './Components/Works/Works'
import Experience from './Components/Experience/Experience'
import Contact from './Components/Contact/Contact'
import Background from './Components/Background/Background'

const Portfolio = () => {
  return (
    <div className='bg-[#050414]'>
        <div></div>
         <Background/>
        <div className='relative pt-20'>
            <Navbar/>
            <About/>
            <Skills/>
            <Education/>
            <Experience/>
            <Education/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    </div>

    
  )
}

export default Portfolio
