const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Sans application pour les clients",
    description: "Vos clients reçoivent leur carte de fidélité par SMS. Aucune installation requise — ils gardent juste leur numéro de téléphone.",
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Notifications push ciblées",
    description: "Envoyez des offres exclusives directement sur le téléphone de vos clients. Gagnez des crédits notifs en fidélisant de nouveaux clients (1 nouveau client = +3 crédits).",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Multi-établissements & franchises",
    description: "Gérez plusieurs points de vente depuis un seul tableau de bord. Chaque responsable a son accès, vos clients vivent une expérience unifiée.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Tableau de bord analytics",
    description: "Suivez vos performances en temps réel : nouveaux clients, points distribués, récompenses utilisées, taux de fidélisation et bien plus.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Présence dans 25+ pays",
    description: "Fidelatoo est actif dans plus de 25 pays. Parfait pour les enseignes internationales ou les commerçants qui veulent grandir au-delà des frontières.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Clients & points illimités",
    description: "Aucune limite sur le nombre de clients ou de points distribués. Votre programme de fidélité grandit avec votre activité sans frais cachés.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Page web dédiée Premium",
    description: "En Premium, obtenez une page web à votre image pour inviter vos clients, followers et prospects à rejoindre votre programme en ligne.",
    highlight: false,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "100% écologique",
    description: "Dites adieu aux cartes papier polluantes. 2 à 3 tonnes de bois pour 1 tonne de papier — Fidelatoo supprime totalement l'impression de cartes.",
    highlight: false,
  },
];

export default function Features() {
  return (
    <section id="avantages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Fonctionnalités
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tout ce dont vous avez besoin{" "}
            <span className="gradient-text">en une seule app</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une solution complète pour fidéliser vos clients, booster votre chiffre d&apos;affaires et communiquer efficacement — sans aucune complexité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl border card-hover ${
                feature.highlight
                  ? "gradient-green text-white border-emerald-500 col-span-1 md:col-span-2 lg:col-span-2"
                  : "bg-gray-50 border-gray-100 hover:border-emerald-200"
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
                feature.highlight ? "bg-white/20" : "bg-emerald-100 text-emerald-600"
              }`}>
                {feature.icon}
              </div>
              <h3 className={`text-lg font-bold mb-2 ${feature.highlight ? "text-white" : "text-gray-900"}`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${feature.highlight ? "text-white/85" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* iOS Maps integration highlight */}
        <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-4">
              iOS Exclusif
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Intégration Apple Maps & Widgets
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Ajoutez votre QR code à l&apos;application Plans d&apos;Apple et recevez des notifications de proximité quand vos clients passent devant votre commerce. Les widgets permettent d&apos;afficher le QR code directement sur l&apos;écran d&apos;accueil.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex flex-col items-center justify-center text-white gap-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83"/>
              </svg>
              <span className="text-xs">Maps</span>
            </div>
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex flex-col items-center justify-center text-white gap-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
              <span className="text-xs">Widgets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
