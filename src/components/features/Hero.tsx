import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "../../assets/fondobosque.jpg";

export const Hero = () => {
    // 1. Detectamos el scroll de toda la página
    const { scrollY } = useScroll();
    
    // 2. Creamos la magia: 
    // Cuando el scroll va de 0px a 500px, la imagen se mueve solo 0px a 250px.
    // Esto hace que la imagen parezca estar "más lejos" (se mueve más lento).
    const y = useTransform(scrollY, [0, 500], [0, 250]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]); // El texto se desvanecerá al bajar
  
    return (
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
        
        {/* 3. Aplicamos el movimiento a la imagen de fondo */}
        <motion.div 
          style={{ y }} // <--- Aquí conectamos el Parallax
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src={heroBg} 
            alt="Fondo Bosque" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/20" /> {/* Oscurecer un poco para contraste */}
        </motion.div>
  
        {/* Contenido (Texto) - Este se mueve normal, creando el contraste de velocidad */}
        <motion.div 
          style={{ opacity }} // El texto desaparece suavemente al bajar
          className="relative z-10 max-w-4xl mx-auto space-y-6"
        >
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white/90 uppercase tracking-[0.3em] text-sm font-bold"
          >
            ¡Nos Casamos!
          </motion.p>
  
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-8xl text-white drop-shadow-lg"
          >
            Cecilia <span className="text-wedding-rose italic font-light">&</span> Alejandro
          </motion.h1>
  
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8 }}
             className="inline-block border-y border-white/50 py-2 px-8 mt-4"
          >
            <p className="text-white text-xl font-serif tracking-widest">
              25 . OCT . 2025
            </p>
          </motion.div>
        </motion.div>
  
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity }} // También desaparece al bajar
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
  
      </section>
    );
  };