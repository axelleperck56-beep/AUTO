const steps = [
  {
    number: "01",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Créez votre programme",
    description: "Définissez votre carte de fidélité en 3 minutes : nom, logo, règles de points et récompenses. Tout se paramètre en quelques clics depuis votre tableau de bord.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    number: "02",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Enrôlez vos clients",
    description: "À la caisse, demandez simplement le numéro de téléphone de votre client. Il reçoit immédiatement son premier point et sa carte de fidélité numérique — sans télécharger d'application !",
    color: "bg-blue-50 text-blue-600",
  },
  {
    number: "03",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
    title: "Scannez le QR code",
    description: "À chaque passage en caisse, scannez le QR code unique de votre client avec votre smartphone pour lui attribuer des points. Rapide, simple, et sans aucun matériel supplémentaire.",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="fonctionnement" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Simple & Rapide
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Votre programme de fidélité en{" "}
            <span className="gradient-text">3 étapes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fidelatoo est conçu pour être ultra-simple, aussi bien pour vous que pour vos clients — même les moins à l&apos;aise avec la technologie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%-16px)] w-8 border-t-2 border-dashed border-emerald-200 z-0" />
              )}

              <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 card-hover z-10">
                <div className="absolute -top-3 -left-3 w-10 h-10 gradient-green rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  {step.number}
                </div>

                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Communication kit callout */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 gradient-green rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Kit Communication inclus</h3>
            <p className="text-gray-600">
              Recevez des affiches et supports visuels pour promouvoir votre programme en boutique et sur les réseaux sociaux. Partagez votre lien unique pour que vos clients s&apos;inscrivent depuis chez eux.
            </p>
          </div>
          <a href="#" className="flex-shrink-0 px-6 py-3 rounded-full text-white font-semibold gradient-green hover:opacity-90 transition-opacity">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
