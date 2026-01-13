
import { useState, Suspense, lazy } from 'react'
import './App.css'
import { GridScan } from '../components/GridScan.jsx'
import Navbar from '../components/Navbar.jsx'

const Services = lazy(() => import('./pages/Services.jsx'));
const Homepage = lazy(() => import('./pages/Homepage.jsx'));
const Abouts = lazy(() => import('./pages/Abouts.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Projects = lazy(() => import('./pages/Projects.jsx'));

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
        <Suspense fallback={<div className="flex items-center justify-center h-full text-[#00aaff]">Loading...</div>}>
          {renderPage()}
        </Suspense>
      </main>
    </>
  )
}

export default App
