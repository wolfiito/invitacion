import { MapPin } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export const Location = () => {
  // Coordenadas de ejemplo (Cámbialas por las reales de tu venue)
  // Tip: Busca el lugar en Google Maps, click derecho > "¿Qué hay aquí?" para sacar lat,long exactas
  return (
    <section className="py-20 px-4 bg-wedding-paper relative overflow-hidden">
      
      {/* TIP DE EXPERTO: Añade esta textura de "ruido" para que el fondo no sea plano */}
      <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LADO IZQUIERDO: Texto entra desde la Izquierda */}
        <FadeIn direction="left">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <h3 className="font-serif text-3xl text-wedding-primary flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-6 h-6 text-wedding-secondary" />
                Ceremonia & Recepción
              </h3>
              {/* ... resto del texto ... */}
            </div>
            
            {/* ... resto de botones ... */}
          </div>
        </FadeIn>

        {/* LADO DERECHO: Mapa entra desde la Derecha */}
        <FadeIn direction="right" delay={0.2}> {/* Delay para que entre un poquito después */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white/50">
             {/* ... tu iframe del mapa ... */}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};