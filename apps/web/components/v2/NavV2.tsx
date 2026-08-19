'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogoV2 } from './BrandLogoV2';
import { PhoneCall, Zap, Warehouse, Menu, X, Mic, Sparkles, Send, Volume2 } from 'lucide-react';

export function NavV2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [voiceAgentOpen, setVoiceAgentOpen] = useState(false);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Willkommen bei Aurevia Manor. Wie kann ich Ihr Anwesen bei der Planung von Solar-Carports und Alu-Bauwerken unterstützen?' },
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `Für Ihre Anfrage zu "${userMsg}" empfehlen wir den Zola Manor Executive Carport. Statisch geprüft für Harzer Schneelastzone 3, gefertigt aus massivem Aluminium 100x100mm. Gerne berechnen wir Ihre Stückliste im Konfigurator.`,
        },
      ]);
    }, 600);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#000000]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all">
        {/* Subtle Top Status Ticker */}
        <div className="bg-slate-950 border-b border-white/5 py-2 px-4 text-center text-xs font-sans text-slate-400 flex items-center justify-between sm:justify-center gap-4">
          <span className="inline-flex items-center gap-2 text-slate-300 font-normal truncate">
            <Warehouse className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            Zentrallager Seesen (Harz) · Sofort abrufbereite Solar-Kollektionen
          </span>
          <span className="hidden md:inline text-slate-700">•</span>
          <span className="hidden md:inline text-slate-400">
            Statisch zertifiziert nach DIN EN 1991-1-3 (Schneelast 3)
          </span>
          <span className="hidden md:inline text-slate-700">•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-normal text-[11px] border border-emerald-500/20 shrink-0">
            0% MwSt. § 12 Abs. 3 UStG
          </span>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/v2" className="hover:opacity-90 transition">
            <BrandLogoV2 />
          </Link>

          {/* Desktop Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-sans text-slate-300">
            <Link href="/v2#vision" className="hover:text-white transition font-normal">
              Architektur
            </Link>
            <Link href="/v2#configurator" className="hover:text-amber-300 transition text-amber-400 font-medium flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
              <span>Konfigurator</span>
            </Link>
            <Link href="/v2/analyse" className="hover:text-white transition font-normal">
              Autarkie
            </Link>
            <Link href="/v2/shop" className="hover:text-amber-300 transition text-amber-300 font-medium">
              Shop &amp; B2B
            </Link>
            <Link href="/v2/referenzen" className="hover:text-white transition font-normal">
              Referenzen
            </Link>
            <Link href="/v2/herkunft" className="hover:text-white transition font-normal">
              Zentrallager
            </Link>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setVoiceAgentOpen(true)}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition shadow-sm hidden sm:flex items-center gap-1.5 text-xs font-normal"
            >
              <Mic className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="hidden xl:inline">Sprach-Beratung</span>
            </button>

            <button
              onClick={() => setConciergeOpen(true)}
              className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition shadow-sm hidden sm:flex items-center gap-1.5 text-xs font-normal"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden xl:inline">KI-Concierge</span>
            </button>

            <a
              href="tel:+49538198000"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-normal text-xs border border-white/10 transition"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-xs">+49 5381 98000</span>
            </a>

            <Link
              href="/v2#configurator"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition shadow-lg shadow-amber-500/15 border border-amber-300/30 inline-flex items-center gap-1.5"
            >
              <span>Carport konfigurieren</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800 lg:hidden hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#000000] border-b border-white/10 p-6 space-y-4 font-sans text-sm">
            <Link
              href="/v2#vision"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Architektur
            </Link>
            <Link
              href="/v2#configurator"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-amber-400 font-medium py-2 border-b border-white/5"
            >
              Carport Konfigurator
            </Link>
            <Link
              href="/v2/analyse"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Autarkie-Analyse (€190)
            </Link>
            <Link
              href="/v2/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-amber-400 font-medium py-2 border-b border-white/5"
            >
              Shop &amp; B2B Großhandel
            </Link>
            <Link
              href="/v2/referenzen"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-amber-400 py-2 border-b border-white/5"
            >
              Estate Referenzen
            </Link>
            <Link
              href="/v2/herkunft"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-amber-400 py-2"
            >
              Zentrallager Seesen (Harz)
            </Link>
          </div>
        )}
      </header>

      {/* Voice Agent Modal */}
      {voiceAgentOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 max-w-md w-full space-y-6 shadow-2xl text-center relative">
            <button onClick={() => setVoiceAgentOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-2">
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <Mic className="w-8 h-8 animate-pulse" />
            </div>

            <div>
              <span className="text-xs font-sans text-emerald-400 font-normal block">Aurevia Sprach-Assistent</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">Interaktive Erstberatung</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Stellen Sie Ihre Fragen zu Statik, Schneelastzone 3, Aluminium-Profilen und Lieferzeiten aus dem Zentrallager Seesen.
              </p>
            </div>

            <div className="py-6 flex items-center justify-center gap-1.5 h-16">
              {[40, 70, 30, 90, 60, 100, 45, 80, 50, 95, 35].map((h, i) => (
                <div
                  key={i}
                  style={{ height: isSpeaking ? `${h}%` : '20%' }}
                  className="w-1.5 bg-emerald-400 rounded-full transition-all duration-200"
                />
              ))}
            </div>

            <button
              onClick={() => setIsSpeaking(!isSpeaking)}
              className={`w-full py-3.5 rounded-full font-sans text-xs font-semibold flex items-center justify-center gap-2 border transition ${
                isSpeaking ? 'bg-red-500/20 text-red-300 border-red-500/30' : 'bg-emerald-500 text-slate-950 border-emerald-400'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>{isSpeaking ? 'Sprache pausieren' : 'Sprachberater starten'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Concierge Modal */}
      {conciergeOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-white/10 rounded-3xl p-6 max-w-lg w-full space-y-4 shadow-2xl relative flex flex-col h-[520px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Aurevia KI-Concierge</h3>
                  <span className="text-[10px] text-slate-400 font-sans block">Architektur-Beratung Seesen</span>
                </div>
              </div>
              <button onClick={() => setConciergeOpen(false)} className="text-slate-400 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 p-2 text-xs font-sans">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-amber-500 text-slate-950 ml-auto font-medium'
                      : 'bg-slate-900 border border-white/10 text-slate-200 mr-auto'
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="flex items-center gap-2 pt-2 border-t border-white/10">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ihre Frage an den KI-Concierge..."
                className="flex-1 px-4 py-3 rounded-full bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
              />
              <button type="submit" className="p-3 rounded-full bg-amber-500 text-slate-950 hover:bg-amber-400 transition">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
