// src/components/ui/SmartReveal.tsx
import { motion } from "framer-motion";
import { type ReactNode } from "react";

// 1. DEFINIMOS LAS PERSONALIDADES (VARIANTS)
const animationVyariants = {
  // CLÁSICO: Sube suavemente (Boda Elegante)
  classic: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  },
  
  // MODERNO: De borroso a nítido (Estilo Apple / Vercel)
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } // Curva suave
    }
  },
  
  // FIESTA: Rebote elástico (Cumpleaños / Informal)
  pop: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  },
  
  // CINEMÁTICO: Entra de lado (Muy editorial)
  pan: {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: "circOut" }
    }
  }
};

interface Props {
  children: ReactNode;
  variant?: "classic" | "blur" | "pop" | "pan"; // Las opciones disponibles
  delay?: number;
  className?: string;
}

export const SmartReveal = ({ children, variant = "classic", delay = 0, className = "" }: Props) => {
  return (
    <motion.div
      variants={animationVyariants as any} // Selecciona la animación según la prop
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }} // Se activa un poco antes de llegar
      transition={{ delay: delay }} // Retraso opcional
      className={className}
    >
      {children}
    </motion.div>
  );
};