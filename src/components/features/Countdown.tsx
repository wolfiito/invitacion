import { motion } from "framer-motion";
import { useCountdown } from "../../hooks/useCountdown";

interface CountdownProps {
  date: Date;
}

// Subcomponente para cada cajita de tiempo (para no repetir código)
const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-wedding-paper/80 backdrop-blur-sm border border-wedding-sage/30 p-3 md:p-6 rounded-lg shadow-sm min-w-[70px] md:min-w-[100px]">
    <span className="font-serif text-2xl md:text-4xl text-wedding-primary font-bold">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-xs md:text-sm uppercase tracking-widest text-wedding-secondary font-sans mt-1">
      {label}
    </span>
  </div>
);

export const Countdown = ({ date }: CountdownProps) => {
  const timeLeft = useCountdown(date);

  return (
    <section className="w-full py-16 px-4 bg-wedding-cream flex flex-col items-center justify-center">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8"
      >
        <h2 className="font-serif text-3xl md:text-4xl text-wedding-primary italic">
          Esperamos celebrar contigo en...
        </h2>

        {/* Grid del Contador */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <TimeBox value={timeLeft.days} label="Días" />
          <TimeBox value={timeLeft.hours} label="Hs" />
          <TimeBox value={timeLeft.minutes} label="Min" />
          <TimeBox value={timeLeft.seconds} label="Seg" />
        </div>

        <p className="max-w-md mx-auto text-wedding-primary/70 font-sans leading-relaxed px-4">
          Estamos preparando una noche mágica llena de alegría, buena comida y momentos inolvidables.
        </p>
      </motion.div>
    </section>
  );
};