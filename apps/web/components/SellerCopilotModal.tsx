'use client';

import React, { useState } from 'react';
import { Sparkles, X, Send, Bot, ShieldCheck } from 'lucide-react';

interface SellerCopilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SellerCopilotModal({ isOpen, onClose }: SellerCopilotModalProps) {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; text: string }>>([
    {
      role: 'assistant',
      text: 'Guten Tag. Ich bin Ihr KI-Concierge für RIAL Energy & Aurevia Sovereign. Wie kann ich Ihre Autarkie-Planung oder Statikfragen unterstützen?'
    }
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: `Vielen Dank für Ihre Anfrage zu "${userText}". Alle Zola Pod Aluminium-Carports 100x100mm sind vollstatisch für Schneelastzone 3 im Harz zertifiziert. Unser Zentrallager Seesen liefert innerhalb von 3-5 Werktagen. Wünschen Sie einen Rückruf unserer Vertriebsleitung?`
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl">
      <div className="relative w-full max-w-lg bg-[#070B14] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 flex flex-col max-h-[85vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-2 border-b border-slate-800 pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Sales Concilot V2</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-white">Technischer KI-Berater</h3>
        </div>

        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                m.role === 'assistant'
                  ? 'bg-slate-900 text-slate-200 border border-slate-800'
                  : 'bg-cyan-500/20 text-cyan-200 ml-auto max-w-[85%] border border-cyan-500/30'
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="flex gap-2 pt-2 border-t border-slate-800">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Frage zu Schneelast, Ausrichtung oder Lieferzeit..."
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-cyan-400 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
