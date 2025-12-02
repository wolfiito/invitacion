import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export const FadeIn = ({ children, delay = 0, direction = "up", className = "" }: Props) => {
  
  // Definimos de dónde viene el movimiento
  const directions = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] // Aplica la posición inicial según la dirección
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true, margin: "-50px" }} // Se activa cuando entra en pantalla un poco (-50px)
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Curva "Spring" suave (muy Apple)
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};