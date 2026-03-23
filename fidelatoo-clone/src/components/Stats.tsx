const stats = [
  { value: "5 000+", label: "Commerces actifs" },
  { value: "25+", label: "Pays couverts" },
  { value: "∞", label: "Clients illimités" },
  { value: "3 min", label: "Pour démarrer" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-gray-600 mt-1 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
