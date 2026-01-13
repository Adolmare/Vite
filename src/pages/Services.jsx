import React, { useState } from 'react'
import Footer from '../../components/Footer'

const Services = () => {
return (
    <div className="relative z-10 w-full h-full overflow-y-auto flex flex-col font-sans text-white bg-black/60">
      
 
      <div className="flex-grow flex flex-col justify-center items-center w-full pb-12 pt-24 px-4 sm:px-8">
        
        <header className="text-center mb-12 max-w-[900px] animate-[fadeIn_1s_ease-out]">
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-tight uppercase 
            bg-gradient-to-br from-white to-[#00aaff] bg-clip-text text-transparent
            drop-shadow-[0_0_40px_rgba(0,170,255,0.6)]">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Soluciones diseñadas para impulsar tu negocio en la era digital.
          </p>
        </header>
          
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] items-start">
          <ServiceCard
              title="Desarrollo de Software"
              icon="⚡"
              details={
                  <>
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                          La base de todo negocio digital exitoso es un software sólido y escalable. 
                          Desarrollamos soluciones a medida que no solo resuelven problemas actuales, 
                          sino que evolucionan con tu empresa. Desde portales corporativos hasta 
                          sistemas de gestión complejos de alto rendimiento.
                      </p>
                      <h5 className="text-[#00aaff] font-bold mb-2 text-sm uppercase tracking-wide">Tecnologías Principales</h5>
                      <div className="flex flex-wrap gap-2">
                          {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Django', 'Express', 'Node.js', 'Bootstrap'].map(tech => (
                              <span key={tech} className="px-2 py-1 bg-[#00aaff]/10 border border-[#00aaff]/30 rounded text-xs text-[#00aaff] font-mono">
                                  {tech}
                              </span>
                          ))}
                      </div>
                  </>
              }
          >
            Aplicaciones web, móviles y de escritorio de alto rendimiento adaptadas a
            la lógica específica de tu negocio. Construimos sistemas robustos que escalan.
          </ServiceCard>

          <ServiceCard
              title="Automatización Inteligente"
              icon="🤖"
              details={
                  <>
                      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                          La IA está redefiniendo la eficiencia. Integramos modelos de aprendizaje automático 
                          para predecir tendencias, chatbots de atención al cliente que nunca duermen, 
                          y agentes autónomos que manejan flujos de trabajo complejos sin intervención humana.
                      </p>
                      <h5 className="text-[#00aaff] font-bold mb-2 text-sm uppercase tracking-wide">Capacidades IA</h5>
                      <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside mb-4">
                          <li>Procesamiento de Lenguaje Natural (NLP)</li>
                          <li>Visión por Computadora</li>
                          <li>Automatización de Procesos (RPA)</li>
                          <li>Análisis Predictivo de Datos</li>
                      </ul>
                  </>
              }
          >
            Elimina tareas repetitivas con scripts personalizados, bots y flujos de trabajo impulsados por IA. Optimiza tus operaciones y concéntrate en lo que realmente importa.
          </ServiceCard>

          <ServiceCard
              title="Consultoría Tecnológica"
              icon="🌐"
              details={
                  <>
                       <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                          No solo escribimos código, te ayudamos a tomar las decisiones correctas. 
                          Ofrecemos auditorías profundas de tu infraestructura actual, planes de migración a la nube 
                          y estrategias de ciberseguridad para proteger tus activos digitales más valiosos.
                      </p>
                      <h5 className="text-[#00aaff] font-bold mb-2 text-sm uppercase tracking-wide">Servicios de Asesoría</h5>
                      <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                          <li>Arquitectura de Software y Nube</li>
                          <li>Transformación Digital</li>
                          <li>Optimización de DevOps</li>
                          <li>Auditoría de Seguridad</li>
                      </ul>
                  </>
              }
          >
            Orientación estratégica para navegar el panorama digital. Desde arquitectura en la nube hasta seguridad, diseñamos tu camino hacia el éxito.
          </ServiceCard>
        </div>

      </div>

      <Footer />
    </div>
  );
};

const ServiceCard = ({ title, icon, children, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
        group relative
        bg-[#0a0f1e]/60 backdrop-blur-md
        border border-[#00aaff]/20 rounded-xl p-10 text-left
        transition-all duration-500 ease-in-out cursor-pointer
        hover:border-[#00aaff]/60
        hover:bg-[#0a1428]/80
        ${isExpanded ? 'scale-[1.02] shadow-[0_0_30px_rgba(0,170,255,0.15)] ring-1 ring-[#00aaff]/50' : 'hover:-translate-y-2.5'}
      `}
    >
      <div className="text-[3rem] mb-6 drop-shadow-[0_0_10px_rgba(0,170,255,0.4)]">
        {icon}
      </div>
      <h3 className="text-2xl m-0 mb-4 text-white group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-[#aaa] leading-relaxed text-base m-0">
        {children}
      </p>

      {/* Expanded Content */}
      <div className={`
          overflow-hidden transition-all duration-500 ease-in-out
          ${isExpanded ? 'max-h-[500px] opacity-100 mt-6 pt-6 border-t border-white/10' : 'max-h-0 opacity-0'}
      `}>
          <h4 className="text-[#00aaff] font-bold mb-3 text-lg">Más Información</h4>
          {details}
      </div>
    </div>
  );
};

export default Services
