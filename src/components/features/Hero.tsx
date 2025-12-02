import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "../../assets/fondobosque.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-wedding-paper flex flex-col items-center justify-center text-center px-4">
      
      {/* 1. Fondo con textura o Imagen (Placeholder de Bosque) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroBg} 
          alt="Fondo Bosque" 
          className="w-full h-full object-cover opacity-20" // Opacidad baja para que sea sutil
        />
        {/* Gradiente para suavizar la unión con el color de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-wedding-paper/30 via-transparent to-wedding-paper/80" />
      </div>

      {/* 2. Contenido Principal */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        
        {/* Pequeño texto superior */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-wedding-secondary uppercase tracking-[0.3em] text-sm font-sans font-bold"
        >
          ¡Nos Casamos!
        </motion.p>

        {/* Nombres (El impacto visual) */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-wedding-primary leading-tight"
        >
          Cecilia <span className="text-wedding-rose italic text-4xl md:text-6xl align-middle">&</span> Alejandro
        </motion.h1>

        {/* Fecha */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex items-center justify-center gap-4 text-wedding-primary/80 font-sans text-lg md:text-xl mt-4 border-t border-b border-wedding-sage/50 py-2 inline-block"
        >
          <span>Sábado</span>
          <span className="w-1.5 h-1.5 bg-wedding-secondary rounded-full"></span>
          <span>Algún día</span>
          <span className="w-1.5 h-1.5 bg-wedding-secondary rounded-full"></span>
          <span>En algún año</span>
        </motion.div>
      </div>

      {/* 3. Indicador de Scroll (Animado) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-wedding-primary/60"
      >
        <span className="text-xs uppercase tracking-widest mb-2 block font-sans">Desliza</span>
        <ChevronDown className="w-6 h-6 mx-auto" />
      </motion.div>

    </section>
  );
};