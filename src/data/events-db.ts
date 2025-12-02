// src/data/events-db.ts
import { weddingData } from "./wedding-data"; // Importamos el que ya tenías para no reescribir

// Definimos la estructura básica de un evento (para TypeScript)
export interface EventProfile {
  id: string;
  type: "wedding" | "birthday";
  theme: "forest" | "beach" | "minimal" | "modern"; // Puedes agregar más
  hero: {
    tagline: string;
    names: string[];
    date: string;
    backgroundImage: string;
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
    // Reutilizamos los datos que ya tenías (¡no perdimos nada!)
    hero: weddingData.hero, 
    timeline: weddingData.timeline
  },

  // URL: tudominio.com/cumple-juan
  "cumple-juan": {
    id: "cumple-juan",
    type: "birthday",
    theme: "minimal",
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
    ]
  }
};