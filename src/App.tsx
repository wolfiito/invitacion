import { useParams } from "react-router-dom";
import { eventsDatabase } from "./data/events-db";

import { Hero } from "./components/features/Hero";
import { HeroModern } from "./components/features/HeroModern";

import { Countdown } from "./components/features/Countdown";
import { CountdownMinimal } from "./components/features/CountdownMinimal";
import { Gallery } from "./components/features/Gallery";
import { Location } from "./components/features/Location";
import { Timeline } from "./components/features/Timeline";
import { DressCode } from "./components/features/DressCode";
import { GiftRegistry } from "./components/features/GiftRegistry";
import { weddingData } from "./data/wedding-data";

function App() {

  const { eventId } = useParams();

  const data = eventId ? eventsDatabase[eventId] : null;

  const dateObj = new Date(weddingData.weddingDate);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-500">
        <p className="text-xl">🚫 Invitación no encontrada</p>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-wedding-paper selection:bg-wedding-rose selection:text-wedding-primary">
      {data.theme === 'modern' ? (
        <HeroModern 
          tagline={data.hero.tagline}
          names={data.hero.names}
          date={data.hero.date}
          backgroundImage={data.hero.backgroundImage}
        />
      ) : (
        <Hero 
          tagline={data.hero.tagline}
          names={data.hero.names}
          date={data.hero.date}
          backgroundImage={data.hero.backgroundImage}
        />
      )}
      {weddingData.config.countdownStyle === 'minimal' ? (
        <CountdownMinimal date={dateObj} />
      ) : (
        <Countdown date={dateObj} />
      )}
      <Gallery />
      <Location />
      <Timeline events={weddingData.timeline} />
      <DressCode />
      <GiftRegistry />
      {/* <RSVP /> */}

      {/* Espacio para lo que sigue */}
      <div className="py-20 text-center">
        <p className="text-wedding-primary/40">Aquí irá el Formulario RSVP</p>
      </div>
      {/* <div className="h-40 bg-wedding-primary/5"></div>  */}
      <footer className="py-10 text-center text-wedding-primary/40 text-sm">
        Hecho con ❤️ por los novios
      </footer>
    </main>
  );
}

export default App;