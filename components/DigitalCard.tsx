import React from 'react';

export const DigitalCard: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between py-12 px-4 text-white overflow-hidden relative bg-[#0b2744]">
      
      {/* Animation Styles - Subtle balance */}
      <style>{`
        @keyframes balance {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-1.5deg); }
          75% { transform: rotate(1.5deg); }
        }
        .animate-balance {
          animation: balance 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#153a5f] to-transparent opacity-40 pointer-events-none"></div>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full max-w-[380px] flex-grow justify-center z-10 mt-[-20px]">
        
        {/* Avatar with Ring and Glow */}
        <div className="relative mb-6">
          <div className="absolute inset-[-20px] rounded-full bg-white opacity-20 blur-2xl"></div>
          <div className="w-48 h-48 rounded-full border-[5px] border-white shadow-[0_0_30px_rgba(255,255,255,0.4)] overflow-hidden relative z-10 bg-gray-200">
            <img 
              src="https://res.cloudinary.com/ddpujsrsg/image/upload/v1768584740/WhatsApp_Image_2026-01-16_at_17.47.56_chhxoh.jpg" 
              alt="Foto de Fran Gales" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl font-normal tracking-wide uppercase mb-12 text-center text-white drop-shadow-md">
          Fran Gales
        </h1>

        {/* Buttons Row */}
        <div className="flex flex-row w-full gap-2.5 justify-center items-stretch h-12 mb-10">
          
          {/* Web - Left */}
          <a
            href="https://masclientes.vip"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#16304b] border border-white/10 hover:bg-[#1f3f61] rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg backdrop-blur-sm"
          >
            <span className="text-base">🌐</span>
            <span className="text-[10px] font-medium text-white leading-tight">Ver web</span>
          </a>

          {/* WhatsApp - Center, Light & Subtle Balance */}
          <a
            href="https://wa.me/34641066377?text=Hola%20Fran%2C%20he%20visto%20tu%20tarjeta%20digital."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#dbebf9] text-[#0b2744] hover:bg-white rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 border border-white/50 animate-balance"
          >
            <svg viewBox="0 0 32 32" fill="currentColor" className="w-4 h-4 flex-shrink-0">
               <path d="M16 3C9.38 3 4 8.38 4 15c0 2.64.93 5.06 2.47 6.99L4 29l7.24-2.39C12.62 27.54 14.28 28 16 28c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 22c-1.49 0-2.93-.37-4.2-1.06l-.3-.16-4.3 1.42 1.42-4.17-.18-.32C7.42 19.43 7 17.77 7 16c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm5.02-6.6c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.33-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29 0 1.34.98 2.64 1.12 2.81.14.18 1.92 2.92 4.67 4.1 2.75 1.18 2.75.78 3.25.73.5-.05 1.62-.66 1.85-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.52-.34z"/>
            </svg>
            <span className="text-[10px] font-bold leading-tight text-center">WhatsApp</span>
          </a>

          {/* LinkedIn - Right */}
          <a
            href="https://www.linkedin.com/in/fran-gales-608682238/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#16304b] border border-white/10 hover:bg-[#1f3f61] rounded-xl flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-lg backdrop-blur-sm"
          >
             <div className="w-4 h-4 bg-white rounded-[2px] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="#0b2744" className="w-3.5 h-3.5">
                  <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zm7 0h3.7v1.8h.1c.5-.9 1.7-1.8 3.5-1.8C20.9 9 23 11 23 15v6h-4v-5.3c0-1.3-.02-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9V21h-4z"/>
                </svg>
             </div>
             <div className="flex flex-col leading-[0.8]">
               <span className="text-[7px] opacity-80 text-left text-white">Conectar en</span>
               <span className="text-[9px] font-bold text-left text-white">LinkedIn</span>
             </div>
          </a>

        </div>
      </div>

      {/* Footer (Simplified) */}
      <div className="w-full max-w-sm z-10 text-center pb-8">
        <div>
          <a href="https://masclientes.vip" target="_blank" rel="noopener noreferrer" className="block text-white font-bold text-lg tracking-wide hover:underline decoration-1 underline-offset-4">
            masclientes.vip
          </a>
          <div className="text-[10px] text-gray-300 font-light mt-1 tracking-wide">
            Sistema de conexión e imagen corporativa
          </div>
        </div>
      </div>
      
    </div>
  );
};