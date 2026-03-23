import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Disponible dans 25+ pays
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              La carte de fidélité{" "}
              <span className="gradient-text">numérique</span>{" "}
              pour vos clients
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Créez votre programme de fidélité en 3 minutes. Récompensez vos clients avec des points, communiquez directement avec eux — aucune application requise de leur côté.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg gradient-green hover:opacity-90 transition-all shadow-lg shadow-emerald-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Créer ma carte gratuite
              </a>
              <a
                href="#fonctionnement"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-gray-700 font-semibold text-lg bg-white border border-gray-200 hover:border-emerald-300 hover:text-emerald-600 transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Voir la démo
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {["#10b981", "#059669", "#047857", "#065f46"].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: color }}
                  >
                    {["B", "C", "A", "M"][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">+5 000</span> commerces nous font confiance
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">4.8/5 • Essai gratuit 14 jours — sans CB</span>
            </div>
          </div>

          {/* Right - Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-full z-10" />
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* App UI */}
                  <div className="gradient-green p-6 pt-10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-white/80 text-xs">Bonjour, Sophie 👋</p>
                        <p className="text-white font-bold text-lg">Mes cartes</p>
                      </div>
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 -mt-4">
                    {/* Loyalty card 1 */}
                    <div className="loyalty-card mb-3 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-bold text-white text-sm">Café de la Paix</p>
                          <p className="text-white/70 text-xs">Boulangerie & Café</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                          CP
                        </div>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-white/70 text-xs mb-1">Points accumulés</p>
                          <p className="text-white font-bold text-2xl">247 pts</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/70 text-xs mb-1">Prochain café offert</p>
                          <div className="flex gap-1">
                            {[1,2,3,4,5].map((i) => (
                              <div key={i} className={`w-4 h-4 rounded-full ${i <= 3 ? 'bg-white' : 'bg-white/30'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Loyalty card 2 */}
                    <div className="rounded-2xl mb-3 p-4 shadow-md" style={{background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'}}>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-bold text-white text-sm">Librairie Lumière</p>
                          <p className="text-white/70 text-xs">Livres & Culture</p>
                        </div>
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                          LL
                        </div>
                      </div>
                      <p className="text-white font-bold text-xl">128 pts</p>
                    </div>

                    {/* QR Code section */}
                    <div className="bg-gray-50 rounded-2xl p-4 text-center">
                      <p className="text-gray-600 text-xs mb-2 font-medium">Mon QR Code de fidélité</p>
                      <div className="w-24 h-24 mx-auto bg-white rounded-xl shadow-inner flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-20 h-20">
                          <rect x="10" y="10" width="35" height="35" fill="none" stroke="#1f2937" strokeWidth="3"/>
                          <rect x="15" y="15" width="25" height="25" fill="#1f2937"/>
                          <rect x="55" y="10" width="35" height="35" fill="none" stroke="#1f2937" strokeWidth="3"/>
                          <rect x="60" y="15" width="25" height="25" fill="#1f2937"/>
                          <rect x="10" y="55" width="35" height="35" fill="none" stroke="#1f2937" strokeWidth="3"/>
                          <rect x="15" y="60" width="25" height="25" fill="#1f2937"/>
                          <rect x="55" y="55" width="8" height="8" fill="#1f2937"/>
                          <rect x="68" y="55" width="8" height="8" fill="#1f2937"/>
                          <rect x="81" y="55" width="9" height="8" fill="#1f2937"/>
                          <rect x="55" y="68" width="8" height="8" fill="#1f2937"/>
                          <rect x="68" y="68" width="8" height="8" fill="#1f2937"/>
                          <rect x="81" y="81" width="9" height="9" fill="#1f2937"/>
                          <rect x="55" y="81" width="8" height="9" fill="#1f2937"/>
                        </svg>
                      </div>
                      <p className="text-emerald-600 text-xs font-semibold mt-2">Scannez chez votre commerçant</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -left-16 top-24 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  🎉
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">+10 points</p>
                  <p className="text-xs text-gray-500">Café de la Paix</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -right-8 bottom-32 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Récompense offerte !</p>
                  <p className="text-xs text-gray-500">1 café gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store badges */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-500 text-sm">Téléchargez l&apos;app :</p>
          <div className="flex gap-3">
            <a href="#" className="flex items-center gap-2 px-5 py-3 bg-gray-900 rounded-xl text-white hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-400">Télécharger sur l&apos;</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 px-5 py-3 bg-gray-900 rounded-xl text-white hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.25.99.22l12.29-7.11L13.54 14l-10.36 9.76zm-1.14-2.39C2.01 21.08 2 20.77 2 20.43V3.57c0-.34.01-.65.04-.94L13.18 12 2.04 21.37zm19.11-9.82l-2.79-1.61-3.28 3.08 3.28 3.08 2.81-1.62c.8-.46.8-1.47-.02-1.93zM4.17.22C4.82-.15 5.59-.06 6.2.32l12.27 7.09L15.54 10 4.17.22z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-gray-400">Disponible sur</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
