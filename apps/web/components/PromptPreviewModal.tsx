'use client';

import React, { useState } from 'react';
import { X, Copy, Check, Sparkles, Terminal, Code } from 'lucide-react';
import { DigitalProduct } from '@/lib/digital-products';

interface PromptPreviewModalProps {
  product: DigitalProduct;
  onClose: () => void;
}

export function PromptPreviewModal({ product, onClose }: PromptPreviewModalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (product.sampleContent) {
      navigator.clipboard.writeText(product.sampleContent.preview);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!product.sampleContent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#070A14] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500" />

        {/* Header */}
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interaktive Vorschau · {product.categoryLabel}</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {product.sampleContent.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Code / Prompt Terminal Box */}
        <div className="relative rounded-2xl bg-slate-950 border border-white/10 p-5 font-mono text-xs text-slate-200 leading-relaxed max-h-[380px] overflow-y-auto whitespace-pre-wrap selection:bg-amber-400 selection:text-slate-950">
          {product.sampleContent.preview}
        </div>

        {/* Deliverables & Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs font-mono">
          <div className="text-slate-400 text-center sm:text-left">
            <span>Enthalten im Download-Paket ({product.deliverables.length} Dateien)</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={copyToClipboard}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold border border-white/15 flex items-center justify-center gap-2 transition"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Kopiert!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Code / Prompt kopieren</span>
                </>
              )}
            </button>

            {product.instantDownloadUrl && (
              <a
                href={product.instantDownloadUrl}
                download
                className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold flex items-center justify-center gap-2 transition shadow-lg"
              >
                <span>Datei laden</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
