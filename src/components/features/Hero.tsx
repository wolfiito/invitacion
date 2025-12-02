// src/components/features/Hero.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

// 1. Definimos qué datos necesita este componente
interface HeroProps {
  tagline: string;
  names: string[];
  date: string;
  backgroundImage: string;
}

// 2. Recibimos las props
export const Hero = ({ tagline, names, date, backgroundImage }: HeroProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
      
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        {/* Usamos la imagen dinámica */}
        <img 
          src={backgroundImage} 
          alt="Fondo Boda" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto space-y-6">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/90 uppercase tracking-[0.3em] text-sm font-bold"
        >
          {tagline} {/* Texto dinámico */}
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-8xl text-white drop-shadow-lg"
        >
          {/* Nombres dinámicos con estilo */}
          {names[0]} <span className="text-wedding-rose italic font-light">&</span> {names[1]}
        </motion.h1>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
           className="inline-block border-y border-white/50 py-2 px-8 mt-4"
        >
          <p className="text-white text-xl font-serif tracking-widest">
            {date} {/* Fecha dinámica */}
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>

    </section>
  );
};