import React from 'react';
import ContactItem from '../../components/ContactItem';
import WhatsAppButton from '../../components/WhatsAppButton';

const Contact = () => {
  return (
    <div className="relative z-10 w-full h-full overflow-y-auto flex flex-col font-sans text-white bg-black/60">
      <div className="flex-grow flex flex-col items-center w-full pb-12 pt-28 px-4 sm:px-8">
        
        <header className="text-center mb-16 max-w-[900px] animate-[fadeIn_1s_ease-out]">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-tight uppercase 
            bg-gradient-to-br from-white to-[#00aaff] bg-clip-text text-transparent
            drop-shadow-[0_0_40px_rgba(0,170,255,0.6)]">
            Iniciar Protocolo
          </h2>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
             Conecta con nosotros a través de nuestros canales oficiales.
          </p>
        </header>

        <div className="w-full max-w-[1000px] flex flex-col items-center gap-12 sm:gap-16 mb-20 md:mb-32">
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 animate-[fadeInUp_0.8s_ease-out]">
                <div className="bg-[#0a0f1e]/40 border border-[#00aaff]/20 p-8 rounded-2xl backdrop-blur-sm h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                        Canales de Comunicación
                    </h3>
                    <div className="space-y-6 flex-grow">
                        <ContactItem 
                            icon={<span className="text-2xl">📧</span>} 
                            label="Email" 
                            value="devlfo@gmail.com" 
                            href="mailto:devlfo@gmail.com" 
                        />
                         <ContactItem 
                            icon={
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.55-1.1-.06-.06-.11-.13-.2-.25v4.54c0 3.86-1.28 7.39-4.32 9.77-2.37 1.86-5.46 2.37-8.39 1.52-2.95-.86-5.11-3.16-5.83-6.15-.72-3.03.01-6.17 2.05-8.49 1.95-2.22 4.96-3.32 7.82-2.82.04.57.06 1.15.06 1.73.01 1.25.06 2.51.05 3.76-.02.16-.14.24-.26.31-1.39.82-2.3 2.19-2.37 3.79-.06 1.34.62 2.63 1.74 3.4 1.17.8 2.67.75 3.79-.24 1.1-.96 1.63-2.36 1.62-3.83-.01-4.73.01-9.45.01-14.18 0-.25-.01-.51.01-.76.02-.13.12-.25.22-.38z"/></svg>
                            } 
                            label="TikTok" 
                            value="@devlfo" 
                            href="https://tiktok.com/@devlfo" 
                        />
                        <ContactItem 
                            icon={
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            } 
                            label="Facebook" 
                            value="/devlfo" 
                            href="https://facebook.com/devlfo" 
                        />
                        <ContactItem 
                            icon={
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                            } 
                            label="Instagram" 
                            value="@devlfo" 
                            href="https://instagram.com/devlfo" 
                        />
                    </div>
                </div>

                <div className="bg-[#0a0f1e]/40 border border-[#00aaff]/20 p-8 rounded-2xl backdrop-blur-sm flex flex-col text-center ">
                    <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-4">Disponibilidad</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-[#00aaff] font-bold text-sm uppercase tracking-wider mb-1">Horario Laboral</p>
                            <p className="text-gray-300">Lunes - Viernes: 08:00 - 19:00 (Sync)</p>
                        </div>
                        <div>
                            <p className="text-[#00aaff] font-bold text-sm uppercase tracking-wider mb-1">Fin de Semana</p>
                            <p className="text-gray-300">Sábado - Domingo: Solo Urgencias</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default Contact;