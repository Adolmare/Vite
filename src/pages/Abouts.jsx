import React from "react";

const Abouts = () => {
  return (
    <div className="relative z-10 w-full h-full overflow-y-auto flex flex-col font-sans text-white bg-black/60">
      <div className="flex-grow flex flex-col items-center w-full pb-12 pt-28 px-4 sm:px-8">
        
        <header className="text-center mb-16 max-w-[900px] animate-[fadeIn_1s_ease-out]">
          <h2
            className="text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold tracking-tight uppercase 
            bg-gradient-to-br from-white to-[#00aaff] bg-clip-text text-transparent
            drop-shadow-[0_0_40px_rgba(0,170,255,0.6)]"
          >
            ¿Quienes Somos?
          </h2>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Arquitectos del mundo digital. Acortamos la distancia entre la imaginación y la ejecución.
          </p>
        </header>

        
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 md:mb-32">
          

          <div className="space-y-6 text-left animate-[slideInLeft_0.8s_ease-out]  pl-4">
            
            <p className="text-[#ccc] leading-7 text-lg">
              En Devlfo, no solo escribimos código, sino que diseñamos
              experiencias.Nacido de la pasión por la automatización y el
              diseño eficiente, nuestro colectivo tiene como objetivo redefinir
              la forma en que las empresas interactúan con la tecnología.
              Creemos en el poder de las soluciones elegantes para problemas
              complejos. Ya sea una plataforma web a gran escala o un script de
              microautomatización, cada línea de código se elabora con precisión
              y un propósito.
            </p>
            <p className="text-[#ccc] leading-7 text-lg">
              Nosotros creemos en el poder de las {"  "}
              <span className="text-[#00aaff] font-semibold">
                soluciones elegantes
              </span>{" "}
               para problemas complejos. Ya sea una plataforma web a gran escala o un script de
              microautomatización, cada línea de código se elabora con precisión y un propósito.
            </p>
          </div>

          
          <div className="grid grid-cols-2 gap-4 animate-[zoomIn_0.8s_ease-out]">
            <StatCard number="2+" label="Proyectos Completos" />
            {/* <StatCard number="95%" label="Retención de Clientes" /> */}
            {/* <StatCard number="24/7" label="Tiempo de Actividad del Sistema" /> */}
            <StatCard number="∞" label="Posibilidades" />
          </div>
        </div>

        
        <div className="w-full max-w-[1200px]">
          <h3 className="text-2xl font-bold text-center mb-10 uppercase tracking-widest text-[#00aaff] drop-shadow-[0_0_10px_rgba(0,170,255,0.3)]">
            Nuestros Valores Fundamentales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard title="Innovación" icon="💡">
              Siempre empujando los límites. Exploramos las últimas pilas tecnológicas para
              darte la ventaja competitiva|.
            </ValueCard>
            <ValueCard title="Precisión" icon="🎯">
              Desarrollo orientado al detalle. Nos obsesionamos con el rendimiento, la seguridad,
              y la escalabilidad.
            </ValueCard>
            <ValueCard title="Transparencia" icon="🔍">
              Comunicación clara en cada paso. Sin cajas negras, solo colaboración honesta.
            </ValueCard>
          </div>
        </div>
      </div>

    
    </div>
  );
};

const StatCard = ({ number, label }) => (
  <div
    className="bg-[#0a1428]/60 border border-[#00aaff]/20 p-6 rounded-lg text-center backdrop-blur-sm
    hover:border-[#00aaff]/50 hover:bg-[#0a1428]/90 hover:scale-105 transition-all duration-300 shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
  >
    <div className="text-3xl font-bold text-white mb-1 drop-shadow-[0_0_5px_rgba(0,170,255,0.8)]">
      {number}
    </div>
    <div className="text-[#00aaff] text-xs uppercase tracking-wider font-bold">
      {label}
    </div>
  </div>
);

const ValueCard = ({ title, icon, children }) => (
  <div
    className="bg-[#0a0f1e]/40 border border-white/5 p-8 rounded-xl 
    hover:bg-[#0a0f1e]/80 hover:-translate-y-2 hover:border-[#00aaff]/30 transition-all duration-300
    cursor-default"
  >
    <div className="text-4xl mb-4 filter drop-shadow-[0_0_8px_rgba(0,170,255,0.4)]">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-sm leading-relaxed">{children}</p>
  </div>
);

export default Abouts;
