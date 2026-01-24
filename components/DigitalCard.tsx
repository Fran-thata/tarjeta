import React from 'react';

export const DigitalCard: React.FC = () => {
  return (
    <div className="w-full max-w-[430px] p-4">
      <div className="bg-card-bg rounded-[28px] p-[32px] px-[26px] shadow-[0_18px_40px_rgba(0,0,0,0.25)]">
        
        {/* Avatar */}
        <div className="flex justify-center mb-[18px]">
          <div className="w-[134px] h-[134px] rounded-full bg-accent-gold p-[3px] flex items-center justify-center">
            <img 
              src="https://res.cloudinary.com/ddpujsrsg/image/upload/v1768584740/WhatsApp_Image_2026-01-16_at_17.47.56_chhxoh.jpg" 
              alt="Foto de Fran Gales" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* Name & Role */}
        <h1 className="text-center font-bold text-[1.6rem] text-text-main mb-[4px]">
          FRAN GALES
        </h1>
        <div className="text-center text-[0.95rem] text-muted-text mb-[18px]">
          Estrategia y visibilidad moderna
        </div>

        {/* Description */}
        <p className="text-[0.96rem] leading-[1.55] text-text-body mb-[26px] text-left">
          Mejoro tu imagen corporativa y facilito una conexión más cercana con clientes y contactos en un solo click.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-[10px] mb-[26px]">
          
          {/* WhatsApp */}
          <a
            href="https://wa.me/34641066377?text=Hola%20Fran%2C%20he%20visto%20tu%20tarjeta%20digital."
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[14px] p-[13px_16px] text-[0.96rem] flex items-center justify-center gap-[10px] border-none cursor-pointer no-underline transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_10px_22px_rgba(0,0,0,0.25)] bg-btn-primary-bg text-btn-primary-text shadow-[0_8px_18px_rgba(0,0,0,0.35)] animate-sideMove"
          >
            <span className="w-[22px] h-[22px]">
              <svg viewBox="0 0 32 32" fill="#ffffff">
                <path d="M16 3C9.38 3 4 8.38 4 15c0 2.64.93 5.06 2.47 6.99L4 29l7.24-2.39C12.62 27.54 14.28 28 16 28c6.62 0 12-5.38 12-12S22.62 3 16 3zm0 22c-1.49 0-2.93-.37-4.2-1.06l-.3-.16-4.3 1.42 1.42-4.17-.18-.32C7.42 19.43 7 17.77 7 16c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9zm5.02-6.6c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.33-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01s-.48.07-.73.34c-.25.27-.96.94-.96 2.29 0 1.34.98 2.64 1.12 2.81.14.18 1.92 2.92 4.67 4.1 2.75 1.18 2.75.78 3.25.73.5-.05 1.62-.66 1.85-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.52-.34z"/>
              </svg>
            </span>
            <span>WhatsApp</span>
          </a>

          {/* Web */}
          <a
            href="https://masclientes.vip"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[14px] p-[13px_16px] text-[0.96rem] flex items-center justify-center gap-[10px] border-none cursor-pointer no-underline transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_10px_22px_rgba(0,0,0,0.25)] bg-btn-secondary-bg text-btn-secondary-text"
          >
            <span className="text-[22px] leading-none">🌐</span>
            <span>Ver página web</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fran-gales-608682238/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[14px] p-[13px_16px] text-[0.96rem] flex items-center justify-center gap-[10px] border-none cursor-pointer no-underline transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_10px_22px_rgba(0,0,0,0.25)] bg-btn-secondary-bg text-btn-secondary-text"
          >
            <span className="w-[22px] h-[22px]">
              <svg viewBox="0 0 24 24" fill="#1f2933">
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9h4v12H3zm7 0h3.7v1.8h.1c.5-.9 1.7-1.8 3.5-1.8C20.9 9 23 11 23 15v6h-4v-5.3c0-1.3-.02-3-1.9-3-1.9 0-2.2 1.4-2.2 2.9V21h-4z"/>
              </svg>
            </span>
            <span>Conectar en LinkedIn</span>
          </a>

        </div>

        {/* Brand */}
        <div className="text-center">
          <div className="font-bold text-[1.25rem] text-text-main mb-[3px]">masclientes.vip</div>
          <div className="text-[0.86rem] text-muted-text">Sistema de conexión e imagen corporativa</div>
        </div>

      </div>
    </div>
  );
};