
import { useState } from 'react'
import './App.css'
import { GridScan } from '../components/GridScan.jsx'
import Services from './pages/Services.jsx'
import Navbar from '../components/Navbar.jsx'
import Homepage from './pages/Homepage.jsx'
import Footer from '../components/Footer.jsx'
import Abouts from './pages/Abouts.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Homepage />;
      case 'about': return <Abouts />;
      case 'services': return <Services />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Homepage />;
    }
  };

  return (
    <>
    <header>
    <Navbar onNavigate={setCurrentPage} />
    </header>
      <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1, backgroundColor: '#000000' }}>
        <GridScan
          sensitivity={0.55}
          lineThickness={1.5}
          linesColor="#005588" 
          gridScale={0.1}
          scanColor="#00aaff"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>
      <main style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        {renderPage()}
      </main>
  
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
