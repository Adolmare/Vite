import React from "react";

const Homepage = () => {
  return (
    <div className="relative z-10 w-full h-full overflow-hidden flex flex-col items-center bg-black/60 font-sans text-white">
      
      {/* Content Wrapper fills available space and centers content */}
      <div className="flex-grow flex flex-col justify-center items-center w-full p-8 text-center">
        <header className="mb-12 max-w-[900px] animate-[fadeIn_1s_ease-out]">
          <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-extrabold tracking-tight m-0 uppercase 
            bg-gradient-to-br from-white to-[#00aaff] bg-clip-text text-transparent
            drop-shadow-[0_0_40px_rgba(0,170,255,0.6)] leading-tight">
            Devlfo Systems
          </h1>
          <p className="text-[clamp(1rem,2vw,1.5rem)] text-[#e0e0e0] mt-6 font-light tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Forjando el futuro del software y la automatización inteligente.
          </p>
        </header>

        <div>
          <button className="
            px-12 py-5 text-lg font-bold text-black bg-[#00aaff] rounded cursor-pointer uppercase tracking-[0.15em] border-none
            shadow-[0_0_25px_rgba(0,170,255,0.4)] transition-all duration-300 ease-out
            hover:scale-105 hover:bg-white hover:shadow-[0_0_40px_rgba(0,170,255,0.7)]
          ">
            Contratar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
