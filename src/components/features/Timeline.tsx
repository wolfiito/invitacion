// src/components/features/Timeline.tsx
import { motion } from "framer-motion";
import { Heart, GlassWater, Utensils, Music, Sparkles } from "lucide-react";
import { cn } from "../../lib/utils";

// 1. Diccionario de iconos: Convierte texto "Heart" -> Componente <Heart />
const ICONS_MAP: any = {
  Heart: Heart,
  GlassWater: GlassWater,
  Utensils: Utensils,
  Music: Music,
  Sparkles: Sparkles,
};

// 2. Definimos qué forma tienen los datos que vamos a recibir
interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  iconName: string;
}

interface TimelineProps {
  events: TimelineEvent[]; // Recibe un array de eventos
}

// 3. El componente ahora recibe "events" como prop
export const Timeline = ({ events }: TimelineProps) => {
  return (
    <section className="py-16 md:py-24 px-2 md:px-4 bg-wedding-cream overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Título (Este sigue fijo por ahora) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 space-y-2 md:space-y-4"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-wedding-primary italic">
            El Itinerario
          </h2>
          <p className="text-wedding-primary/60 uppercase tracking-widest text-xs md:text-sm">
            Momentos Inolvidables
          </p>
        </motion.div>

        {/* Línea de tiempo */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-wedding-primary/20 -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => {
              // Buscamos el icono real usando el nombre
              const Icon = ICONS_MAP[event.iconName] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={cn(
                    "relative flex items-center w-full",
                    isEven ? "flex-row" : "flex-row-reverse"
                  )}
                >
                  <div className="w-1/2" />

                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-wedding-paper border-2 border-wedding-secondary z-10 shadow-sm">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-wedding-primary" />
                  </div>

                  <div className={cn(
                    "w-1/2", 
                    isEven ? "pl-6 md:pl-10 text-left" : "pr-6 md:pr-10 text-right"
                  )}>
                    <div className="bg-white/60 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white hover:border-wedding-sage/50 transition-colors shadow-sm">
                      <span className="inline-block py-0.5 px-2 md:py-1 md:px-3 rounded-full bg-wedding-sage/20 text-wedding-primary text-[10px] md:text-xs font-bold mb-2">
                        {event.time}
                      </span>
                      <h3 className="font-serif text-lg md:text-2xl text-wedding-primary mb-1 md:mb-2 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-wedding-primary/70 font-sans text-xs md:text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};