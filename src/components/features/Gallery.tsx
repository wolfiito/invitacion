import { motion } from "framer-motion";

const photos = [
  // Fotos de stock (Reemplázalas con las reales)
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    alt: "Pareja caminando",
    className: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1978&auto=format&fit=crop",
    alt: "El Anillo",
    className: "col-span-1 row-span-2", // Esta foto será alta
  },
  {
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
    alt: "Miradas",
    className: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop",
    alt: "Abrazo",
    className: "col-span-2 row-span-1", // Esta foto será ancha
  },
];

export const Gallery = () => {
  return (
    <section className="py-20 px-4 bg-wedding-paper overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Título */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-wedding-primary italic">
            Nuestra Historia
          </h2>
          <p className="text-wedding-primary/60 uppercase tracking-widest text-sm">
            Momentos que nos trajeron aquí
          </p>
        </motion.div>

        {/* Grid Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden shadow-md group ${photo.className}`}
            >
              <img 
                src={photo.url} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay sutil al pasar mouse */}
              <div className="absolute inset-0 bg-wedding-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};