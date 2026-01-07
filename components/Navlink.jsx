import React from 'react';

const NavLink = ({ children, onClick }) => {
    return (
        <li 
            onClick={onClick}
            className="text-[#c0c0c0] text-base font-medium tracking-wide 
            cursor-pointer transition-all duration-300 ease-in-out
            hover:text-white hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            {children}
        </li>
    )
}

export default NavLink;
