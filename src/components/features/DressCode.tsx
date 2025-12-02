import { motion } from "framer-motion";
import { Info } from "lucide-react";

export const DressCode = () => {
  return (
    <section className="py-20 px-4 bg-wedding-paper">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-primary italic">
            Código de Vestimenta
          </h2>
          <p className="text-wedding-primary/60 uppercase tracking-widest text-sm">
            Formal Jardín
          </p>
        </motion.div>

        {/* Tarjetas de Ellos/Ellas */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Ellas */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-wedding-cream p-8 rounded-2xl border border-wedding-sage/30 space-y-4"
          >
            <h3 className="font-serif text-2xl text-wedding-primary mb-4">Ellas</h3>
            <p className="text-wedding-primary/80 font-sans leading-relaxed">
              Vestido largo o midi en telas fluidas. 
            </p>
            
            {/* Tip Importante */}
            <div className="bg-wedding-sage/20 p-4 rounded-lg flex items-start gap-3 text-left mt-4">
              <Info className="w-5 h-5 text-wedding-primary shrink-0 mt-0.5" />
              <p className="text-sm text-wedding-primary/90">
                <strong>Tip:</strong> El evento es en jardín/bosque. Recomendamos usar <strong>tacón ancho</strong> o plataformas. Evita tacones de aguja.
              </p>
            </div>
          </motion.div>

          {/* Ellos */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-wedding-cream p-8 rounded-2xl border border-wedding-sage/30 space-y-4 flex flex-col justify-center"
          >
            <h3 className="font-serif text-2xl text-wedding-primary mb-4">Ellos</h3>
            <p className="text-wedding-primary/80 font-sans leading-relaxed">
              Traje completo (Corbata opcional). <br/>
              Colores sugeridos: Gris, Azul Marino, Negro.
            </p>
          </motion.div>
        </div>

        {/* Paleta de Colores */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="space-y-6 pt-8 border-t border-wedding-primary/10"
        >
          <p className="text-wedding-primary/70 font-sans">
            Reservamos el color <span className="font-bold">Blanco</span> exclusivamente para la novia.
            <br />
            Nos encantaría verte en tonos tierra o bosque:
          </p>
          
          {/* Bolitas de Colores (Inspiración) */}
          <div className="flex justify-center gap-4">
            {/* Verde Bosque */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#5D7052] shadow-sm ring-2 ring-offset-2 ring-transparent hover:ring-wedding-secondary transition-all cursor-pointer" title="Verde Bosque"></div>
            </div>
            {/* Terracota */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#C18C5D] shadow-sm ring-2 ring-offset-2 ring-transparent hover:ring-wedding-secondary transition-all cursor-pointer" title="Terracota"></div>
            </div>
            {/* Beige/Dorado */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#D4A373] shadow-sm ring-2 ring-offset-2 ring-transparent hover:ring-wedding-secondary transition-all cursor-pointer" title="Dorado"></div>
            </div>
            {/* Palo de Rosa */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#CE9898] shadow-sm ring-2 ring-offset-2 ring-transparent hover:ring-wedding-secondary transition-all cursor-pointer" title="Rosa Viejo"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};