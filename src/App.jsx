import React from 'react'
import NavBar from './components/NavBar'
import Intro from './components/intro'
import About from './components/about'
import Technologies from './components/technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased'>
      <div className='flixed top-0 -z-10 h-full w-full'></div>
      <div className="fixed top-0 z-[-2] min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className='container mx-auto px-8'>
        <NavBar />
        <Intro />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App