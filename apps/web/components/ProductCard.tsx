'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Download,
  CheckCircle2,
  Code,
  FileText,
  ShieldCheck,
  Star,
  ExternalLink,
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';
import { DigitalProduct } from '@/lib/digital-products';
import { PromptPreviewModal } from './PromptPreviewModal';

interface ProductCardProps {
  product: DigitalProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const [showPreview, setShowPreview] = useState(false);
  const [purchased, setPurchased] = useState(false);

  const handleInstantAccess = () => {
    if (product.priceEur === 0 && product.instantDownloadUrl) {
      window.open(product.instantDownloadUrl, '_blank');
    } else {
      setPurchased(true);
    }
  };

  return (
    <>
      <div className="rounded-3xl bg-[#070A14] border border-white/15 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl hover:border-amber-400/40 transition-all duration-300 relative group overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute -right-20 -top-20 w-48 h-48 bg-amber-500/10 rounded-full blur-[90px] pointer-events-none group-hover:bg-amber-500/20 transition duration-500" />

        <div className="space-y-4 relative z-10">
          {/* Top Category & Badge */}
          <div className="flex justify-between items-center gap-2">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-400">
              {product.categoryLabel}
            </span>
            {product.badge && (
              <span className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-[10px] font-bold">
                {product.badge}
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-amber-300 transition">
              {product.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {product.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-400 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Capability Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.capabilities.map((cap, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/10 text-slate-300 text-[10px] font-mono"
              >
                {cap}
              </span>
            ))}
          </div>

          {/* Key Feature List */}
          <ul className="space-y-2 pt-2 border-t border-white/10 text-xs font-light text-slate-300">
            {product.features.slice(0, 3).map((feat, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Price & Action Suite */}
        <div className="space-y-4 pt-4 border-t border-white/10 relative z-10">
          <div className="flex justify-between items-baseline">
            <div>
              <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                {product.priceEur === 0 ? '0,00 €' : `${product.priceEur} €`}
              </span>
              <span className="text-[10px] text-slate-400 font-mono ml-2">
                {product.priceEur === 0 ? '(Open Access)' : `(inkl. 0% MwSt. § 12 UStG)`}
              </span>
            </div>

            <div className="flex items-center gap-1 text-xs font-mono text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold">{product.rating}</span>
              <span className="text-slate-500">({product.reviewCount})</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {product.sampleContent && (
              <button
                onClick={() => setShowPreview(true)}
                className="flex-1 py-3 px-3 rounded-2xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white font-mono text-xs font-bold border border-white/10 transition flex items-center justify-center gap-1.5"
              >
                <Code className="w-3.5 h-3.5 text-amber-400" />
                <span>Vorschau</span>
              </button>
            )}

            {purchased ? (
              <div className="flex-1 py-3 px-3 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-mono text-xs font-bold text-center flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Lizenz Aktiv!</span>
              </div>
            ) : (
              <button
                onClick={handleInstantAccess}
                className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-xl transition flex items-center justify-center gap-1.5"
              >
                {product.priceEur === 0 ? (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download (.md)</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Sofort-Zugang</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Preview Modal */}
      {showPreview && (
        <PromptPreviewModal
          product={product}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
}
