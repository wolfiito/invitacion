import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export const DressCode = () => {
    return (
      <section className="py-20 px-4 bg-wedding-paper relative">
        {/* Textura de fondo (Importante para evitar el look "color sólido aburrido") */}
        <div className="absolute inset-0 opacity-[0.4] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-soft-light"></div>
  
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          
          {/* 1. Título sube suavemente */}
          <FadeIn direction="up">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl text-wedding-primary italic">
                Código de Vestimenta
              </h2>
              <p className="text-wedding-primary/60 uppercase tracking-widest text-sm">
                Formal Jardín
              </p>
            </div>
          </FadeIn>
  
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            
            {/* 2. Tarjeta Ellas (Entra desde abajo con un poco de retraso) */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-wedding-cream/80 backdrop-blur-sm p-8 rounded-2xl border border-wedding-sage/30 space-y-4 h-full">
                <h3 className="font-serif text-2xl text-wedding-primary mb-4">Ellas</h3>
                <p className="text-wedding-primary/80 font-sans leading-relaxed">
                  Vestido largo o midi en telas fluidas. 
                </p>
                {/* ... tip ... */}
              </div>
            </FadeIn>
  
            {/* 3. Tarjeta Ellos (Entra desde abajo con MÁS retraso) */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-wedding-cream/80 backdrop-blur-sm p-8 rounded-2xl border border-wedding-sage/30 space-y-4 h-full flex flex-col justify-center">
                <h3 className="font-serif text-2xl text-wedding-primary mb-4">Ellos</h3>
                <p className="text-wedding-primary/80 font-sans leading-relaxed">
                  Traje completo. <br/>
                  Colores sugeridos: Gris, Azul Marino, Negro.
                </p>
              </div>
            </FadeIn>
          </div>
  
          {/* 4. Colores (Entra al final) */}
          <FadeIn direction="up" delay={0.6}>
             {/* ... tu código de bolitas de colores ... */}
             <div className="bg-wedding-cream...">
                 <h3>Ellos</h3>
                 {/* ... */}
              </div>
          </FadeIn>
  
        </div>
      </section>
    );
  };