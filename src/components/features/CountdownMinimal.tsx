// src/components/features/CountdownMinimal.tsx
import { motion } from "framer-motion";
import { useCountdown } from "../../hooks/useCountdown"; // Reusamos tu lógica existente

interface Props {
  date: Date;
}

export const CountdownMinimal = ({ date }: Props) => {
  const timeLeft = useCountdown(date); // ¡Mismo hook, distinto diseño!

  return (
    <section className="py-12 bg-wedding-paper text-center">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="space-y-4"
      >
        <p className="font-serif text-xl italic text-wedding-secondary">
          Solo faltan...
        </p>
        
        {/* Diseño tipo texto corrido, muy elegante */}
        <div className="text-4xl md:text-6xl font-serif text-wedding-primary">
          <span>{timeLeft.days}d</span> : <span>{timeLeft.hours}h</span> : <span>{timeLeft.minutes}m</span>
        </div>
      </motion.div>
    </section>
  );
};
