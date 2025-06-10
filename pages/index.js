import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Home() {
  return (
    <ParallaxProvider>
      <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white font-sans">
        <header className="backdrop-blur bg-black/70 sticky top-0 z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-xl font-semibold tracking-tight">Solara</h1>
            <nav className="space-x-6 text-sm font-medium">
              <a href="#hero" className="hover:text-gray-300">Start</a>
              <a href="#beratung" className="hover:text-gray-300">Beratung</a>
              <a href="#anlagen" className="hover:text-gray-300">PV-Anlagen</a>
              <a href="#akku" className="hover:text-gray-300">Stromspeicher</a>
              <a href="#kontakt" className="hover:text-gray-300">Kontakt</a>
            </nav>
          </div>
        </header>

        <section id="hero" className="h-screen flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-400">
              Energie neu gedacht.
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Ihre unabhängige Beratung rund um Photovoltaik und Stromspeicher – transparent, nachhaltig, zukunftssicher.
            </p>
            <a href="#beratung" className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
              Jetzt beraten lassen
            </a>
          </div>
        </section>

        <section id="beratung" className="py-20 px-6 max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Warum Solara?</h3>
          <p className="text-gray-400 text-lg mb-6">
            Als unabhängige Experten entwickeln wir maßgeschneiderte PV-Konzepte – basierend auf Wirtschaftlichkeit, Technik und Nachhaltigkeit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            <div>
              <h4 className="text-xl font-medium mb-2">Unabhängig</h4>
              <p className="text-sm text-gray-400">Wir verkaufen keine Anlagen – wir beraten objektiv und neutral.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Individuell</h4>
              <p className="text-sm text-gray-400">Jede Anlage wird auf Ihre Bedürfnisse und Ihr Gebäude optimiert.</p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-2">Zukunftssicher</h4>
              <p className="text-sm text-gray-400">Wir denken in Energiesystemen – mit Speicher, Wallbox und Smart Grid.</p>
            </div>
          </div>
        </section>

        <section id="anlagen" className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Photovoltaik neu gedacht</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Wir analysieren Dachflächen, Ausrichtung, Modultypen und Wechselrichter – mit Blick auf Ertrag, Amortisation und Versorgungssicherheit.
          </p>
          <img src="/pv-anlage.jpg" alt="PV-Anlage" className="mx-auto rounded-xl shadow-lg w-full max-w-3xl" />
        </section>

        <section id="akku" className="py-20 px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Intelligente Stromspeicher</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Nutzen Sie Ihre Energie dann, wenn Sie sie brauchen – mit modernen Lithiumspeichern, Victron-Systemen und Visualisierung via Home Assistant.
          </p>
          <div className="flex justify-center space-x-8 mt-10 flex-wrap">
            <div className="w-64 bg-gray-800 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold mb-2">AC-gekoppelt</h4>
              <p className="text-sm text-gray-400">Ideal für Nachrüstungen – flexibel erweiterbar.</p>
            </div>
            <div className="w-64 bg-gray-800 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold mb-2">DC-gekoppelt</h4>
              <p className="text-sm text-gray-400">Maximal effizient – direkt aus dem PV-String geladen.</p>
            </div>
            <div className="w-64 bg-gray-800 p-6 rounded-xl shadow-md">
              <h4 className="font-semibold mb-2">Notstromfähig</h4>
              <p className="text-sm text-gray-400">Versorgt Ihr Zuhause auch bei Stromausfall.</p>
            </div>
          </div>
        </section>

        <section className="relative h-[80vh] overflow-hidden flex items-center justify-center text-center bg-black">
          <Parallax translateY={[-40, 40]}>
            <img
              src="/sun-bg.jpg"
              alt="Sonnenenergie"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            />
          </Parallax>
          <div className="relative z-10 px-6 max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              Sonnenenergie erleben
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              Mit Solara holen Sie das Beste aus Ihrer PV-Anlage – Tag für Tag, Jahr für Jahr.
            </p>
          </div>
        </section>

        <section id="kontakt" className="py-20 px-6 bg-black text-center">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">Lust auf Sonnenenergie?</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Lassen Sie sich kostenlos beraten – wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
          </p>
          <form className="max-w-xl mx-auto space-y-4">
            <input type="text" placeholder="Ihr Name" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500" />
            <input type="email" placeholder="Ihre E-Mail" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500" />
            <textarea placeholder="Ihre Nachricht" className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-500" rows={4} />
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Nachricht senden
            </button>
          </form>
        </section>

        <footer className="bg-gray-900 py-10 text-sm text-gray-500 text-center">
          © 2025 Solara – Unabhängige PV-Beratung. Made with ☀️ in Deutschland.
        </footer>
      </main>
    </ParallaxProvider>
  );
}