import { motion } from "framer-motion";
import { MapPin, Car, ExternalLink } from "lucide-react";

export const Location = () => {
  // Coordenadas de ejemplo (Cámbialas por las reales de tu venue)
  // Tip: Busca el lugar en Google Maps, click derecho > "¿Qué hay aquí?" para sacar lat,long exactas
  const venue = {
    name: "Hacienda del Bosque",
    address: "Carretera Nacional Km 25, El Barrial",
    googleMapsUrl: "https://goo.gl/maps/TuLinkDeGoogle", // Link corto de "Compartir"
    wazeUrl: "https://waze.com/ul?ll=25.568,-100.250&navigate=yes", // Reemplaza lat,long
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.6!2d-100.3!3d25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM0JzA4LjQiTiAxMDDCsDE1JzEwLjgiVw!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
  };

  return (
    <section className="py-20 px-4 bg-wedding-paper relative overflow-hidden">
      
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-wedding-sage/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo: Información y Botones */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="space-y-2">
            <h3 className="font-serif text-3xl text-wedding-primary flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-6 h-6 text-wedding-secondary" />
              Ceremonia & Recepción
            </h3>
            <p className="font-sans text-xl text-wedding-primary/80 font-bold">
              {venue.name}
            </p>
            <p className="font-sans text-wedding-primary/60">
              {venue.address}
            </p>
          </div>

          <p className="text-wedding-primary/70 leading-relaxed">
            Hemos elegido este rincón mágico en el bosque para celebrar nuestro amor. 
            Te recomendamos llegar 15 minutos antes para disfrutar del atardecer.
          </p>

          {/* Botonera Smart */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={venue.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-wedding-primary text-wedding-paper rounded-lg hover:bg-wedding-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver en Google Maps</span>
            </a>
            
            <a 
              href={venue.wazeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-6 py-3 bg-wedding-secondary text-white rounded-lg hover:bg-wedding-secondary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              <Car className="w-4 h-4" />
              <span>Ir con Waze</span>
            </a>
          </div>
        </motion.div>

        {/* Lado Derecho: Mapa Visual */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white/50"
        >
          {/* TRUCO PRO: Filtro Grayscale para desaturar el mapa y que combine con el diseño */}
          <iframe 
            src={venue.mapEmbedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.6) sepia(0.2)' }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Overlay interactivo (opcional, para indicar que es un mapa) */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-wedding-primary shadow-sm flex items-center gap-1">
            <ExternalLink className="w-3 h-3" />
            Mapa Interactivo
          </div>
        </motion.div>

      </div>
    </section>
  );
};