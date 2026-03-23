const testimonials = [
  {
    quote: "Avant Fidelatoo, j'avais du mal à fidéliser mes clients. Depuis que je l'utilise, j'ai constaté un vrai changement dans les habitudes d'achat — le panier moyen a augmenté et les clients reviennent beaucoup plus souvent.",
    name: "Marie L.",
    business: "Boulangerie artisanale, Lyon",
    avatar: "M",
    avatarBg: "#10b981",
    stars: 5,
    stat: "+32% de retours clients",
  },
  {
    quote: "En quelques mois, j'ai constitué une base de plus de 1 450 clients avec Fidelatoo. Je peux leur envoyer des promotions en quelques clics. C'est bluffant pour un si petit restaurant.",
    name: "Karim B.",
    business: "Restaurant, Marseille",
    avatar: "K",
    avatarBg: "#6366f1",
    stars: 5,
    stat: "1 450 clients en 4 mois",
  },
  {
    quote: "La mise en place a été ultra-rapide. Même mes clients les plus âgés l'adoptent sans difficulté. L'interface est claire et mes équipes ont été formées en 10 minutes chrono.",
    name: "Sophie D.",
    business: "Salon de coiffure, Paris",
    avatar: "S",
    avatarBg: "#f59e0b",
    stars: 5,
    stat: "Prise en main en 10 min",
  },
  {
    quote: "Je gère 3 boutiques avec Fidelatoo. Le tableau de bord central m'économise un temps fou. Mes clients bénéficient d'un programme unifié et ça, c'est vraiment un plus pour l'image de marque.",
    name: "Thomas R.",
    business: "Chaîne de prêt-à-porter, Bordeaux",
    avatar: "T",
    avatarBg: "#ec4899",
    stars: 5,
    stat: "3 boutiques gérées facilement",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
            Témoignages
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ils ont choisi{" "}
            <span className="gradient-text">Fidelatoo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des milliers de commerçants dans 25+ pays font confiance à Fidelatoo pour fidéliser leurs clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 card-hover">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: testimonial.avatarBg }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.business}</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    {testimonial.stat}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media logos / trust signals */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm font-medium mb-8 uppercase tracking-wider">
            Application notée 4.8/5 sur les stores
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83"/>
              </svg>
              <div className="flex">
                {[1,2,3,4,5].map(s => <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <span className="font-medium text-gray-600">4.8 — App Store</span>
            </div>
            <div className="w-px h-6 bg-gray-200" />
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#34a853">
                <path d="M3.18 23.76c.3.17.64.25.99.22l12.29-7.11L13.54 14l-10.36 9.76zm-1.14-2.39C2.01 21.08 2 20.77 2 20.43V3.57c0-.34.01-.65.04-.94L13.18 12 2.04 21.37zm19.11-9.82l-2.79-1.61-3.28 3.08 3.28 3.08 2.81-1.62c.8-.46.8-1.47-.02-1.93zM4.17.22C4.82-.15 5.59-.06 6.2.32l12.27 7.09L15.54 10 4.17.22z"/>
              </svg>
              <div className="flex">
                {[1,2,3,4,5].map(s => <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              </div>
              <span className="font-medium text-gray-600">4.8 — Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
