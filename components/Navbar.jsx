import React, { useState } from 'react'
import NavLink from './Navlink';

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to handle navigation
  const handleNav = (page) => {
    if (onNavigate) onNavigate(page);
    setIsOpen(false);
  }

  return (
    <nav className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 
        bg-black/50 backdrop-blur-md 
        border border-white/10 
        transition-all duration-300 ease-in-out
        ${isOpen ? 'rounded-3xl px-8 py-6 flex-col w-[90%] max-w-[320px]' : 'rounded-full px-6 py-3 sm:px-10 sm:py-4 flex justify-center items-center'}`}>
        
        {/* Mobile Header / Toggle */}
        <div className={`${isOpen ? 'flex justify-between items-center w-full mb-6' : 'md:hidden flex items-center gap-4'}`}>
            <img 
                src="/Logonavbar.png" 
                alt="logo" 
                className="h-6 w-auto opacity-90 cursor-pointer" 
                onClick={() => handleNav('home')}
            />
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none p-1 transition-transform hover:scale-110"
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
            </button>
        </div>

        {/* Desktop Menu */}
        <ul className={`${isOpen ? 'hidden' : 'hidden md:flex'} gap-10 list-none m-0 p-0 items-center`}>
            <li className="flex items-center">
                <img 
                    src="/Logonavbar.png" 
                    alt="Logo" 
                    className="h-8 w-auto hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] cursor-pointer"
                    onClick={() => handleNav('home')}
                />
            </li>
            <NavLink onClick={() => handleNav('about')}>Acerca de Nostros</NavLink>
            <NavLink onClick={() => handleNav('projects')}>Proyectos</NavLink>
            <NavLink onClick={() => handleNav('contact')}>Contacto</NavLink>
            <NavLink onClick={() => handleNav('services')}>Servicios</NavLink>
        </ul>

        {/* Mobile Menu Items */}
        <ul className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-6 list-none m-0 p-0 items-center w-full`}>
            <NavLink onClick={() => handleNav('about')}>Acerca de Nosotros </NavLink>
            <NavLink onClick={() => handleNav('projects')}>Proyectos</NavLink>
            <NavLink onClick={() => handleNav('contact')}>Contacto</NavLink>
            <NavLink onClick={() => handleNav('services')}>Servicios</NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
