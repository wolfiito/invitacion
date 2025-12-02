// src/data/wedding-data.ts

export const weddingData = {
    hero: {
        tagline: "¡Nos Casamos!",
        names: ["Cecilia", "Alejandro"],
        date: "25 . OCT . 2025",
        // Nota: Si la imagen está en public/assets, la ruta es directa:
        backgroundImage: "/assets/fondobosque.jpg"
      },

    config: {
        countdownStyle: "classic", // <--- CAMBIA ESTO entre "classic" y "minimal"
      },

      weddingDate: "2026-04-25T16:00:00",
    // Datos del Timeline
    timeline: [
      {
        time: "16:00",
        title: "La Ceremonia",
        description: "Intercambio de votos al aire libre.",
        iconName: "Heart", // OJO: Guardamos el nombre como texto, no el icono
      },
      {
        time: "17:30",
        title: "Cóctel",
        description: "Música acústica y bebidas.",
        iconName: "GlassWater",
      },
      {
        time: "19:00",
        title: "Cena",
        description: "Banquete de tres tiempos.",
        iconName: "Utensils",
      },
      {
        time: "21:00",
        title: "Fiesta",
        description: "¡A bailar toda la noche!",
        iconName: "Music",
      },
      {
        time: "02:00",
        title: "Tornaboda",
        description: "Chilaquiles para revivir.",
        iconName: "Sparkles",
      },
    ]
  };

