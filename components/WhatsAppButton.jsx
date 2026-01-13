import React from 'react';

const WhatsAppButton = () => {
    return (
        <a 
            href="https://wa.me/573146027803" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] group flex items-center justify-center w-16 h-16 bg-[#0a1428] border border-[#00aaff]/50 rounded-full shadow-[0_0_20px_rgba(0,170,255,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(0,170,255,0.6)] hover:bg-[#00aaff] transition-all duration-300"
            aria-label="Contact on WhatsApp"
        >
            <svg 
                viewBox="0 0 24 24" 
                className="w-8 h-8 fill-[#00aaff] group-hover:fill-white transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.991.564 1.701.815 2.793.816h.003c3.181 0 5.768-2.586 5.769-5.767 0-3.18-2.588-5.766-5.769-5.766zM12 2C6.477 2 2 6.477 2 12c0 1.815.485 3.535 1.348 5.021L2.088 22l5.06-1.317A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm6.307 13.987c-.255-.128-1.512-.746-1.746-.831-.235-.086-.406-.128-.577.128-.171.256-.662.831-.811 1.002-.149.171-.299.192-.555.064-.256-.128-1.082-.399-2.061-1.272-.759-.677-1.272-1.514-1.421-1.77-.149-.256-.016-.395.112-.522.115-.115.256-.299.384-.448.128-.149.171-.256.256-.427.085-.17.043-.32-.021-.448-.064-.128-.577-1.389-.79-1.902-.208-.499-.419-.431-.577-.439l-.491-.009c-.171 0-.448.064-.683.32-.235.256-.896.875-.896 2.134 0 1.259.917 2.475 1.045 2.646.128.171 1.804 2.755 4.371 3.864.611.264 1.087.422 1.458.54.623.199 1.19.171 1.638.104.498-.075 1.512-.618 1.725-1.215.213-.597.213-1.109.149-1.215-.064-.107-.235-.171-.491-.299z"/>
            </svg>
            
            {/* Ping animation effect */}
            <span className="absolute flex h-full w-full">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00aaff] opacity-20"></span>
            </span>
        </a>
    );
};

export default WhatsAppButton;
