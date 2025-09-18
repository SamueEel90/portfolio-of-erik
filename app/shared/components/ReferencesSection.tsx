'use client'
import React from "react";

const references = [
  {
    name: "Adam J.",
    text: `"Erik je skvelý fotograf! Jeho schopnosť zachytiť autentické momenty a emócie je úžasná. 
    Naša svadobná fotografia je nádherná a plná života. Odporúčam ho každému, kto hľadá profesionála s citom pre detail."`,
    image: "/pictures/car.jpeg",
  },
  {
    name: "Jana M.",
    text: `"Spolupráca s Erikom bola fantastická. Jeho prístup je profesionálny, ale zároveň priateľský, čo vytvára pohodovú atmosféru počas fotenia.
    Výsledné fotografie sú nádherné a zachytávajú podstatu nášho eventu perfektne."`,
    image: "/pictures/wedding.jpg",
  },
  {
    name: "Martin a Lýdia K.",
    text: `"Erik je nielen talentovaný fotograf, ale aj skvelý človek. Jeho kreativita a schopnosť pracovať s prirodzeným svetlom priniesli úžasné výsledky.
    Fotografie z nášho portrétneho fotenia sú nádherné a plné emócií. Určite ho odporúčam!"`,
    image: "/pictures/family.jpg",
  },
];

const ReferencesSection: React.FC = () => {
  return (
    <section className="w-full mt-10 px-6 md:px-24 space-y-16">
      <h2 className="text-center text-bronze text-2xl md:text-4xl text-secondary mb-8 ">
        Spokojní Klienti
      </h2>

      {references.map((ref, i) => (
        <div
          key={i}
          className="relative flex flex-col md:flex-row duration-500 items-center border border-gray-200 md:items-start max-w-7xl mx-auto rounded-xl shadow-md p-8 md:p-12 gap-8 hover:shadow-lg hover:scale-105 transition-transform group"
        >
          {/* Light border effect */}
          <span
            className="pointer-events-none absolute -inset-1 rounded-2xl z-10"
            aria-hidden="true"
          >
            <span className="w-full h-full block rounded-2xl border-1 border-transparent group-hover:border-pink-400/30 group-hover:opacity-100 opacity-80 transition" />
            {/* Light travel animation - always visible and slower */}
            <span className="absolute inset-0 rounded-2xl overflow-hidden z-20">
              <span className="absolute block w-2/5 h-1.5 bg-gradient-to-r from-pink-300/0 via-pink-400 to-pink-200/0 blur-lg opacity-90 animate-border-light-slow" />
            </span>
          </span>
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4 z-20">
            <h3 className="text-2xl font-semibold text-neon-light-blue">{ref.name}</h3>
            <p className=" text-neon-pink glow-pink text-lg leading-relaxed">{ref.text}</p>
          </div>

          {ref.image && (
            <div className="hidden md:block w-full md:w-1/3 z-20">
              <img
                src={ref.image}
                alt={ref.name}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          )}
          {/* Style for the traveling light effect */}
          <style jsx>{`
            .animate-border-light-slow {
              top: -6px;
              left: -35%;
              height: 8px;
              width: 50%;
              animation: lightTravelSlow 10s cubic-bezier(.64,.12,.36,1.07) infinite;
            }
            @keyframes lightTravelSlow {
              0% {
                left: -40%;
                opacity: 0;
                filter: blur(12px);
              }
              15% {
                opacity: 1;
                filter: blur(8px);
              }
              60% {
                left: 90%;
                opacity: 1;
                filter: blur(8px);
              }
              80% {
                opacity: 0.7;
                filter: blur(12px);
              }
              100% {
                left: 130%;
                opacity: 0;
                filter: blur(16px);
              }
            }
          `}</style>
        </div>
      ))}
    </section>
  );
};

export default ReferencesSection;