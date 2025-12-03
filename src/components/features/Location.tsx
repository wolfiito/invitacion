import { MapPin, ExternalLink } from "lucide-react";
import { SmartReveal } from "../ui/SmartReveal";

interface LocationProps {
  title: string;
  address: string;
  mapUrl: string;
  googleMapsEmbed: string;
  animationStyle?: "classic" | "blur" | "pop" | "pan";
}

export const Location = ({ 
  title, 
  address, 
  mapUrl, 
  googleMapsEmbed, 
  animationStyle = "blur" 
}: LocationProps) => {
  return (
    <section className="py-20 px-4 bg-wedding-paper relative overflow-hidden">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" className="text-wedding-secondary"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LADO IZQUIERDO: Información */}
        <div className="space-y-8 text-center md:text-left">
          
          {/* 1. Título entra primero */}
          <SmartReveal variant={animationStyle}>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="p-3 rounded-full bg-wedding-secondary/10">
                <MapPin className="w-6 h-6 text-wedding-secondary" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-wedding-secondary">
                Ubicación
              </span>
            </div>
            
            <h3 className="font-serif text-4xl md:text-5xl text-wedding-primary leading-tight">
              {title}
            </h3>
          </SmartReveal>

          {/* 2. Dirección entra después (delay 0.2) */}
          <SmartReveal variant={animationStyle} delay={0.2}>
            <p className="text-lg text-wedding-primary/70 font-sans leading-relaxed max-w-md mx-auto md:mx-0">
              {address}
            </p>
          </SmartReveal>

          {/* 3. Botón entra al final (delay 0.4) */}
          <SmartReveal variant={animationStyle} delay={0.4}>
            <a 
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-wedding-primary text-white rounded-full hover:bg-wedding-primary/90 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-wedding-primary/20"
            >
              <span>Ver en Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </SmartReveal>

        </div>

        {/* LADO DERECHO: Mapa */}
        {/* 4. El mapa entra con su propia animación (delay 0.3) */}
        <SmartReveal variant={animationStyle} delay={0.3}>
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 group">
             <iframe 
               src={googleMapsEmbed}
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="grayscale group-hover:grayscale-0 transition-all duration-700"
             ></iframe>
             
             {/* Overlay explicativo que desaparece al pasar el mouse (opcional) */}
             <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent pointer-events-none transition-colors" />
          </div>
        </SmartReveal>

      </div>
    </section>
  );
};