import { Hero } from "./components/features/Hero";
import { Countdown } from "./components/features/Countdown";
import { Gallery } from "./components/features/Gallery";
import { Location } from "./components/features/Location";
import { Timeline } from "./components/features/Timeline";
import { DressCode } from "./components/features/DressCode";
import { GiftRegistry } from "./components/features/GiftRegistry";

function App() {
  const weddingDate = new Date('2026-04-25T16:00:00');
  return (
    <main className="w-full min-h-screen bg-wedding-paper selection:bg-wedding-rose selection:text-wedding-primary">
      <Hero />
      <Countdown date={weddingDate} />
      <Gallery />
      <Location />
      <Timeline />
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