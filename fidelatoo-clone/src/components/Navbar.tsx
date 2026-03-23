"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-green flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Fidelatoo</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#fonctionnement" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors text-sm">
              Comment ça marche
            </a>
            <a href="#avantages" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors text-sm">
              Avantages
            </a>
            <a href="#tarifs" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors text-sm">
              Tarifs
            </a>
            <a href="#temoignages" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors text-sm">
              Témoignages
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Se connecter
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-full text-sm font-semibold text-white gradient-green hover:opacity-90 transition-opacity shadow-sm"
            >
              Essai gratuit 14 jours
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            <a href="#fonctionnement" className="text-gray-600 hover:text-emerald-600 font-medium py-2" onClick={() => setMenuOpen(false)}>
              Comment ça marche
            </a>
            <a href="#avantages" className="text-gray-600 hover:text-emerald-600 font-medium py-2" onClick={() => setMenuOpen(false)}>
              Avantages
            </a>
            <a href="#tarifs" className="text-gray-600 hover:text-emerald-600 font-medium py-2" onClick={() => setMenuOpen(false)}>
              Tarifs
            </a>
            <a href="#temoignages" className="text-gray-600 hover:text-emerald-600 font-medium py-2" onClick={() => setMenuOpen(false)}>
              Témoignages
            </a>
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <a href="#" className="text-center py-2 text-sm font-medium text-gray-700">
                Se connecter
              </a>
              <a href="#" className="text-center py-3 rounded-full text-sm font-semibold text-white gradient-green">
                Essai gratuit 14 jours
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
