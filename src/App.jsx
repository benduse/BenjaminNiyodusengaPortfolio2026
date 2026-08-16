import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import About from './components/About.jsx'
import TechStack from './components/TechStack.jsx'
import EngineeringMindset from './components/EngineeringMindset.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <TechStack />
        <EngineeringMindset />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
