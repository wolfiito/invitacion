// src/data/events-db.ts
import { weddingData } from "./wedding-data"; // Importamos el que ya tenías para no reescribir

// Definimos la estructura básica de un evento (para TypeScript)
export interface EventProfile {
  id: string;
  type: "wedding" | "birthday";
  theme: "forest" | "beach" | "minimal" | "modern"; // Puedes agregar más
  animationStyle?: "classic" | "blur" | "pop" | "pan";
  hero: {
    tagline: string;
    names: string[];
    date: string;
    backgroundImage: string;
  };

  location: {
    title: string;
    address: string;
    mapUrl: string; // Link para el botón "Ver en Google Maps"
    googleMapsEmbed: string; // URL del iframe (la larga)
  };

  timeline: any[]; // Reutilizamos tu estructura de timeline
}

// SIMULACIÓN DE BASE DE DATOS
// La "llave" (key) será lo que el usuario escriba en la URL
export const eventsDatabase: Record<string, EventProfile> = {
  
  // URL: tudominio.com/boda-ana
  "boda-ana": {
    id: "boda-ana",
    type: "wedding",
    theme: "modern",
    animationStyle: "blur",
    // Reutilizamos los datos que ya tenías (¡no perdimos nada!)
    hero: weddingData.hero, 
    timeline: weddingData.timeline,
    location: {
      title: "Hacienda San Gabriel",
      address: "Carretera Federal Km 20, Valle de Bravo, Méx.",
      mapUrl: "https://goo.gl/maps/tudireccion",
      // Tip: En Google Maps > Compartir > Insertar Mapa > Copia solo lo que está dentro de src="..."
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661640243659!2d-99.16869368561763!3d19.4270249868875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1646123456789!5m2!1ses-419!2smx"
    }
  },

  // URL: tudominio.com/cumple-juan
  "cumple-juan": {
    id: "cumple-juan",
    type: "birthday",
    theme: "minimal",
    animationStyle: "pop",
    hero: {
      tagline: "¡Mis 30 Años!",
      names: ["Juan Pérez"], // Solo un nombre
      date: "10 . DIC . 2025",
      backgroundImage: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop" // Foto de fiesta
    },
    timeline: [
      { time: "20:00", title: "Recepción", description: "Bebidas de bienvenida", iconName: "GlassWater" },
      { time: "22:00", title: "Pastel", description: "Las mañanitas", iconName: "Sparkles" },
      { time: "23:00", title: "After", description: "Hasta que el cuerpo aguante", iconName: "Music" }
    ],
    location: {
      title: "Hacienda San Gabriel",
      address: "Carretera Federal Km 20, Valle de Bravo, Méx.",
      mapUrl: "https://goo.gl/maps/tudireccion",
      // Tip: En Google Maps > Compartir > Insertar Mapa > Copia solo lo que está dentro de src="..."
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661640243659!2d-99.16869368561763!3d19.4270249868875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sEl%20%C3%81ngel%20de%20la%20Independencia!5e0!3m2!1ses-419!2smx!4v1646123456789!5m2!1ses-419!2smx"
    }
  }
};