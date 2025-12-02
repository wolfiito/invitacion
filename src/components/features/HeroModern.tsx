// src/components/features/HeroModern.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface HeroProps {
  tagline: string;
  names: string[];
  date: string;
  backgroundImage: string;
}

// DEFINICIÓN DE ANIMACIONES (Variantes)
// Esto permite orquestar que los elementos entren uno tras otro
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Cada hijo espera 0.3s antes de entrar
      delayChildren: 0.5,   // Todo espera 0.5s iniciales
    }
  }
};

const itemVariants = {
  hidden: { y: "100%", opacity: 0 }, // Empieza abajo y transparente
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 1, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]// Curva "Apple" suave
    }
  }
};

export const HeroModern = ({ tagline, names, date, backgroundImage }: HeroProps) => {
  // Parallax suave para cuando scrollean
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]); 

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row bg-[#FAFAF9]">
      
      {/* 1. IMAGEN DE FONDO (Con efecto Ken Burns infinito) */}
      <div className="absolute inset-0 md:relative md:w-7/12 md:order-2 h-full z-0 overflow-hidden">
        
        {/* Overlay solo móvil */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 md:hidden z-10" />
        
        <motion.div 
          style={{ y: yBg }} // Conectamos el Parallax
          className="w-full h-full"
        >
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }} // Zoom out inicial suave
            transition={{ duration: 2, ease: "easeOut" }}
            src={backgroundImage} 
            alt="Pareja" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </div>

      {/* 2. CONTENIDO (Con Coreografía de Entrada) */}
      <div className="relative z-10 w-full md:w-5/12 h-full flex flex-col justify-end md:justify-center pb-20 md:pb-0 px-6 md:px-20 md:order-1">
        
        <motion.div 
          variants={containerVariants} // Asignamos el director de orquesta
          initial="hidden"
          animate="visible"
          className="text-center md:text-left space-y-2 md:space-y-4"
        >
          
          {/* Tagline */}
          <div className="overflow-hidden"> {/* La máscara para el efecto reveal */}
            <motion.p variants={itemVariants} className="text-white/80 md:text-wedding-secondary uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4">
              {tagline}
            </motion.p>
          </div>

          {/* Nombres Grandes */}
          <div className="font-serif leading-[0.9] text-white md:text-wedding-primary mix-blend-overlay md:mix-blend-normal">
            
            <div className="overflow-hidden">
              <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl block">
                {names[0]}
              </motion.h1>
            </div>
            
            <div className="overflow-hidden my-2 md:my-0">
              <motion.span variants={itemVariants} className="block text-4xl md:text-6xl text-white/80 md:text-wedding-secondary italic font-light md:-ml-6">
                &
              </motion.span>
            </div>
            
            <div className="overflow-hidden">
              <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl block md:ml-16">
                {names[1]}
              </motion.h1>
            </div>

          </div>

          {/* Separador y Fecha */}
          <div className="overflow-hidden pt-6 md:pt-8">
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center gap-6">
              <div className="hidden md:block h-px w-16 bg-wedding-secondary"></div>
              <p className="text-lg md:text-xl text-white/90 md:text-wedding-primary/80 font-serif tracking-widest">
                {date}
              </p>
            </motion.div>
          </div>

          {/* Botón */}
          <div className="overflow-hidden pt-8">
            <motion.div variants={itemVariants}>
               <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-500",
                    "border border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-wedding-primary", // Estilo Móvil Glassmorphism
                    "md:border-none md:bg-wedding-primary md:text-white md:hover:bg-wedding-primary/90" // Estilo Desktop
                  )}
               >
                  Confirmar Asistencia <ArrowDown className="w-4 h-4 animate-bounce" />
               </motion.button>
            </motion.div>
          </div>

        </motion.div>
      </div>

    </section>
  );
};