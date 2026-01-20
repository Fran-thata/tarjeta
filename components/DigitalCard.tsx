import React from 'react';

export const DigitalCard: React.FC = () => {
  return (
    <div className="w-full max-w-[380px] mx-auto p-4">
      <div className="bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] overflow-hidden">
        
        {/* Header Image */}
        <div className="w-full aspect-[3/4] relative">
          <img 
            src="https://res.cloudinary.com/ddpujsrsg/image/upload/v1768584740/WhatsApp_Image_2026-01-16_at_17.47.56_chhxoh.jpg" 
            alt="Foto de Fran Gales" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Name Section */}
        <div className="bg-white pt-6 pb-3 text-center">
          <h1 className="text-[#0b2744] font-bold text-3xl uppercase tracking-wide leading-none">
            FRAN GALES
          </h1>
        </div>

        {/* Dark Blue Info Section */}
        <div className="bg-[#0b2744] py-6 px-6 text-center">
          <h2 className="text-white text-base font-medium mb-3.5">
            Estrategia de visibilidad para negocios y profesionales
          </h2>
          <p className="text-white text-sm font-light leading-relaxed opacity-90">
            Mejoro tu presencia online con una solución clara y práctica que convierte interés en oportunidades reales.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="bg-white p-5">
          <div className="flex gap-2.5 justify-center items-stretch">
            
            {/* Web (Left) */}
            <a
              href="https://masreseñas.es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#bfdbfe] text-[#1e3a8a] rounded-xl py-3 px-1 flex flex-col items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">🌐</span>
              <span className="text-[0.75rem] font-bold leading-tight text-center">Ver página web</span>
            </a>

            {/* WhatsApp (Center) - With Heartbeat Animation */}
            <a
              href="https://wa.me/34641066377?text=Hola%20Fran%2C%20he%20visto%20tu%20tarjeta%20digital."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#0b2744] text-white rounded-xl py-3 px-1 flex flex-col items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md group animate-heartbeat"
            >
              <svg viewBox="0 0 32 32" fill="currentColor" className="w-6 h-6">
                <path d="M16 3C9.38 3 4 8.38 4 15c0 2.64.93 5.06 2.47 6.99L4 29l7.24-2.39C12.62 27.54 14.28 28 16 28c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 22c-1.49 0-2.93-.37-4.2-1.06l-.3-.16-4.3 1.42 1.42-4.17-.18-.32C7.42 19.43 7 17.77 7 16c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm5.02-6.6c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.33-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29 0 1.34.98 2.64 1.12 2.81.14.18 1.92 2.92 4.67 4.1 2.75 1.18 2.75.78 3.25.73.5-.05 1.62-.66 1.85-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.52-.34z"/>
              </svg>
              <span className="text-[0.75rem] font-medium">WhatsApp</span>
            </a>

            {/* LinkedIn (Right) */}
            <a
              href="https://www.linkedin.com/in/fran-gales-608682238/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#0077b5] text-white rounded-xl py-3 px-1 flex flex-col items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md group"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform">
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zm7 0h3.7v1.8h.1c.5-.9 1.7-1.8 3.5-1.8C20.9 9 23 11 23 15v6h-4v-5.3c0-1.3-.02-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9V21h-4z"/>
              </svg>
              <div className="flex flex-col items-center leading-none">
                <span className="text-[0.65rem] opacity-90">Conectar en</span>
                <span className="text-[0.75rem] font-bold">LinkedIn</span>
              </div>
            </a>

          </div>

          {/* Footer */}
          <div className="text-center mt-5">
            <a href="https://masreseñas.es" target="_blank" rel="noopener noreferrer" className="block text-[#0b2744] font-bold text-lg hover:underline decoration-2 underline-offset-4">
              masreseñas.es
            </a>
            <div className="text-[0.75rem] text-gray-500 mt-1">
              Sistema de conexión e imagen corporativa
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};