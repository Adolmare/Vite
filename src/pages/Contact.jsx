import React, { useState, useRef } from 'react';
import ContactItem from '../../components/ContactItem';
import InputGroup from '../../components/InputGroup';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, message: '', type: '' }); // Para feedback
  const form = useRef();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: 'Iniciando transmisión...', type: 'info' });
    const apiUrl = import.meta.env.VITE_API_URL_MAIL;
    try {
      const response = await fetch(`${apiUrl}/api/enviar-contacto/`, { // Ajusta tu URL de Django
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,   // Asegúrate de que coincida con lo que espera Django
          email: formState.email,
          message: formState.message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, message: 'Protocolo completado. Mensaje enviado.', type: 'success' });
        setFormState({ name: '', email: '', message: '' }); // Limpiar formulario
      } else {
        throw new Error(data.message || 'Error en el servidor');
      }
    } catch (error) {
      setStatus({ loading: false, message: 'Fallo en la conexión: ' + error.message, type: 'error' });
    }
  };

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
             ¿Listo para optimizar tus procesos y llevar tu negocio al siguiente nivel?
          </p>
        </header>

        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 mb-20 md:mb-32">
            
            <div className="space-y-8 animate-[slideInLeft_0.8s_ease-out]">
                <div className="bg-[#0a0f1e]/40 border border-[#00aaff]/20 p-8 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                        Canales de Comunicación
                    </h3>
                    <div className="space-y-6">
                        <ContactItem icon="📧" label="Email" value="devlfo@gmail.com" href="mailto:contact@devlfo.com" />
                        <ContactItem icon="📱" label="Phone" value="3146027803" href="tel:+573146027803" />
                        <ContactItem icon="📍" label="HQ" value="Monteria-Colombia" />
                    </div>
                </div>

                <div className="bg-[#0a0f1e]/40 border border-[#00aaff]/20 p-8 rounded-2xl backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-4">Disponibilidad</h3>
                    <p className="text-gray-400 mb-2">Lun - Viernes: 08:00 - 19:00 (Sync)</p>
                    <p className="text-gray-400">Sab - Dom: Solo Urgencias</p>
                </div>
            </div>

            <div className="animate-[slideInRight_0.8s_ease-out]">
                <form onSubmit={handleSubmit} ref={form} className="bg-[#0a1428]/60 border border-white/10 p-8 sm:p-10 rounded-2xl backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <div className="space-y-6">
                        <InputGroup 
                            label="Identificador (Nombre)" 
                            name="name" 
                            type="text" 
                            placeholder="John Doe" 
                            value={formState.name} 
                            onChange={handleChange} 
                            required 
                        />
                        <InputGroup 
                            label="Email de Respuesta (Email)" 
                            name="email" 
                            type="email" 
                            placeholder="john@example.com" 
                            value={formState.email} 
                            onChange={handleChange} 
                            required
                        />
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-bold text-[#00aaff] uppercase tracking-wider">Mensaje</label>
                            <textarea 
                                name="message"
                                rows="5"
                                value={formState.message}
                                onChange={handleChange}
                                placeholder="Describe los requisitos de tu proyecto..."
                                className="bg-black/40 border border-white/20 rounded-lg p-4 text-white focus:outline-none focus:border-[#00aaff] focus:ring-1 focus:ring-[#00aaff]/50 transition-all duration-300 resize-none placeholder-gray-600"
                                required
                            ></textarea>
                        </div>

                        {/* Mensaje de Estado */}
                        {status.message && (
                          <div className={`text-sm font-bold p-3 rounded border ${
                            status.type === 'success' ? 'bg-green-500/10 border-green-500 text-green-400' : 
                            status.type === 'error' ? 'bg-red-500/10 border-red-500 text-red-400' : 
                            'bg-blue-500/10 border-blue-500 text-blue-400'
                          }`}>
                            {status.message}
                          </div>
                        )}

                        <button 
                            type="submit" 
                            disabled={status.loading}
                            className={`
                            w-full py-4 mt-4 text-base font-bold text-black bg-[#00aaff] rounded-lg cursor-pointer uppercase tracking-[0.1em] border-none
                            shadow-[0_0_20px_rgba(0,170,255,0.4)] transition-all duration-300 ease-out
                            hover:bg-white hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,170,255,0.6)]
                            ${status.loading ? 'opacity-50 cursor-not-allowed' : ''}
                        `}>
                            {status.loading ? 'Transmitiendo...' : 'Enviar Mensaje'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;