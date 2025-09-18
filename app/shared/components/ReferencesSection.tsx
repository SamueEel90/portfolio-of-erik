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
      <h2 className="text-center text-2xl md:text-4xl text-primary mb-8 md:ml-20">
        Spokojní Klienti
      </h2>

      {references.map((ref, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row duration-500 items-center border border-gray-200 md:items-start max-w-7xl mx-auto  rounded-xl shadow-md p-8 md:p-12 gap-8 hover:shadow-lg hover:scale-105 transition-transform"
        >
          <div className="w-full md:w-2/3 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-semibold text-primary">{ref.name}</h3>
            <p className="text-medium-gray text-lg leading-relaxed">{ref.text}</p>
          </div>

          {ref.image && (
            <div className="hidden md:block w-full md:w-1/3">
              <img
                src={ref.image}
                alt={ref.name}
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ReferencesSection;
