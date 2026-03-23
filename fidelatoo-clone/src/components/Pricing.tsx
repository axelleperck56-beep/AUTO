const plans = [
  {
    name: "Gratuit",
    subtitle: "Pour démarrer",
    price: "0€",
    period: "pour toujours",
    description: "Commencez à fidéliser vos clients sans frais. La formule gratuite est disponible à vie.",
    features: [
      "Clients illimités",
      "Points illimités",
      "QR code unique",
      "Tableau de bord basique",
      "Notifications par SMS",
      "Support communautaire",
    ],
    notIncluded: [
      "Page web dédiée",
      "Notifications push",
      "Analytics avancés",
      "Multi-établissements",
    ],
    cta: "Commencer gratuitement",
    ctaStyle: "border border-gray-300 text-gray-700 hover:border-emerald-400 hover:text-emerald-600",
    highlight: false,
  },
  {
    name: "Premium",
    subtitle: "Le plus populaire",
    price: "29€",
    period: "/ mois",
    description: "Toutes les fonctionnalités pour maximiser la fidélisation de vos clients et booster votre CA.",
    features: [
      "Tout le plan Gratuit",
      "Page web dédiée à votre marque",
      "Notifications push illimitées*",
      "Analytics complets & exports",
      "Multi-établissements",
      "Kit Communication premium",
      "Page produit personnalisable",
      "Support prioritaire",
      "Intégration Apple Maps",
    ],
    notIncluded: [],
    cta: "Essayer 14 jours gratuits",
    ctaStyle: "gradient-green text-white",
    highlight: true,
    badge: "14 jours gratuits • Sans CB",
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Tarifs transparents
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choisissez votre{" "}
            <span className="gradient-text">formule</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sans engagement. Résiliez à tout moment directement depuis l&apos;email Stripe mensuel, sans avoir à contacter quiconque.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 border-2 ${
                plan.highlight
                  ? "border-emerald-500 bg-white shadow-2xl shadow-emerald-100"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 gradient-green text-white text-sm font-semibold rounded-full shadow-lg">
                    ⭐ Recommandé
                  </span>
                </div>
              )}

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {plan.subtitle}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>

                <p className="text-gray-600 text-sm">{plan.description}</p>

                {plan.badge && (
                  <div className="mt-3 inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 text-xs font-medium px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    {plan.badge}
                  </div>
                )}
              </div>

              <a
                href="#"
                className={`block w-full text-center py-4 rounded-2xl font-semibold transition-all mb-8 ${plan.ctaStyle} ${
                  plan.highlight ? "hover:opacity-90 shadow-lg shadow-emerald-200" : ""
                }`}
              >
                {plan.cta}
              </a>

              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Inclus</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 opacity-40">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm text-gray-500 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.highlight && (
                <p className="text-xs text-gray-400 mt-6">
                  * 1 nouveau client = +3 crédits de notification. 1 notification push = –1 crédit.
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FAQ-like note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Des questions sur les tarifs ?{" "}
            <a href="mailto:contact@fidelatoo.fr" className="text-emerald-600 font-medium hover:underline">
              Contactez-nous
            </a>
            {" "}— nous répondons sous 24h.
          </p>
        </div>
      </div>
    </section>
  );
}
