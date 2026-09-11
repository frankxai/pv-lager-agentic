'use client';

import React, { useState } from 'react';
import {
  ShoppingBag,
  Filter,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Zap,
  Info,
  ArrowRight,
  Plus,
  Minus,
  Trash2,
  X,
  FileText,
  Building2,
  UserCheck
} from 'lucide-react';
import { REAL_PRODUCT_CATALOG, ProductItem } from '@/lib/stock-data';
import { COMPANY } from '@/lib/company';

interface CartItem {
  product: ProductItem;
  quantity: number;
}

export function ShopCatalogV2() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isB2B, setIsB2B] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);
  const [postalCode, setPostalCode] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Alle Produkte' },
    { id: 'carports', label: 'Solar-Carport Bausätze' },
    { id: 'bifacial-modules', label: 'Bifaziale PV-Module' },
    { id: 'batteries', label: 'Batteriespeicher' },
    { id: 'inverters', label: 'Wechselrichter' },
    { id: 'climate', label: 'AC/DC Solar-Klima' },
    { id: 'heat-pumps', label: 'Wärmepumpen' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? REAL_PRODUCT_CATALOG
      : REAL_PRODUCT_CATALOG.filter((p) => p.category === selectedCategory);

  // Cart operations
  const addToCart = (product: ProductItem, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Price calculations
  const subtotalNet = cart.reduce((sum, item) => {
    const unitPrice = isB2B ? item.product.pricePvlager * 0.95 : item.product.pricePvlager;
    return sum + unitPrice * item.quantity;
  }, 0);

  const vatRate = isB2B ? 0.19 : 0.0;
  const vatAmount = subtotalNet * vatRate;
  const shippingCost = subtotalNet > 0 ? (subtotalNet > 5000 ? 0 : 189) : 0;
  const grandTotal = subtotalNet + vatAmount + shippingCost;

  return (
    <div className="space-y-12">
      {/* Shop Controls Header */}
      <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl backdrop-blur-2xl">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-sans transition ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* B2B / B2C Mode Switcher & Cart Trigger */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center bg-slate-900 border border-white/10 p-1 rounded-full text-xs font-sans">
            <button
              onClick={() => setIsB2B(false)}
              className={`px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 ${
                !isB2B
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>B2C (0% MwSt.)</span>
            </button>
            <button
              onClick={() => setIsB2B(true)}
              className={`px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 ${
                isB2B
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>B2B Großhandel (Netto)</span>
            </button>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-white/10 text-white transition flex items-center justify-center cursor-pointer shadow-lg"
            title="Warenkorb öffnen"
          >
            <ShoppingBag className="w-5 h-5 text-amber-400" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 text-slate-950 rounded-full font-mono text-[11px] font-bold flex items-center justify-center shadow">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const displayPrice = isB2B
            ? Math.round(product.pricePvlager * 0.95)
            : product.pricePvlager;

          return (
            <div
              key={product.id}
              className="bg-slate-950/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-500/30 transition flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden bg-black cursor-pointer" onClick={() => setSelectedProductModal(product)}>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur border border-white/10 text-[11px] font-sans text-slate-300">
                  {product.brand}
                </div>
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 text-[11px] font-sans font-semibold">
                  {product.stockSeesen} {product.unit} ab Lager Seesen
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono text-slate-500 block uppercase tracking-wider">
                    SKU: {product.sku}
                  </span>
                  <h3
                    className="font-serif font-bold text-lg text-white group-hover:text-amber-300 transition cursor-pointer"
                    onClick={() => setSelectedProductModal(product)}
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex justify-between items-baseline">
                    <div>
                      <span className="text-2xl font-bold font-mono text-amber-300">
                        {displayPrice.toLocaleString('de-DE')} €
                      </span>
                      <span className="text-[11px] text-slate-400 font-sans ml-1.5">
                        / {product.unit}
                      </span>
                    </div>
                    <span className="text-[11px] font-sans text-emerald-400">
                      {isB2B ? 'zzgl. 19% MwSt.' : '0% MwSt. § 12 (3)'}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedProductModal(product)}
                      className="flex-1 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition"
                    >
                      Details &amp; Statik
                    </button>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>In den Korb</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slide-over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#000000] border-l border-white/10 shadow-2xl p-6 sm:p-8 flex flex-col justify-between text-slate-100">
              <div className="space-y-6 overflow-y-auto pr-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <ShoppingBag className="w-5 h-5 text-amber-400" />
                    <h2 className="font-serif text-xl font-bold text-white">Ihr Warenkorb</h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-400 text-xs font-mono">
                      {totalItems} Artikel
                    </span>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-slate-900 text-slate-600 flex items-center justify-center mx-auto">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <p className="text-sm text-slate-400 font-sans">
                      Ihr Warenkorb ist derzeit leer.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => {
                      const unitPrice = isB2B
                        ? Math.round(item.product.pricePvlager * 0.95)
                        : item.product.pricePvlager;
                      return (
                        <div
                          key={item.product.id}
                          className="bg-slate-950 border border-white/10 rounded-2xl p-4 flex gap-4 items-center justify-between"
                        >
                          <img
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            className="w-16 h-16 rounded-xl object-cover border border-white/10 shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-xs text-white truncate">
                              {item.product.name}
                            </h4>
                            <span className="text-[11px] font-mono text-amber-300 block mt-0.5">
                              {unitPrice.toLocaleString('de-DE')} € / {item.product.unit}
                            </span>
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.product.id, -1)}
                                className="w-6 h-6 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white text-xs"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-mono text-xs font-bold text-white px-2">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, 1)}
                                className="w-6 h-6 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white text-xs"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-slate-500 hover:text-red-400 transition p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Speditions-Fracht-Kalkulator */}
                {cart.length > 0 && (
                  <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-4 space-y-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-300 font-medium">
                      <Truck className="w-4 h-4 text-amber-400" />
                      <span>Speditions-Versand ab Zentrallager Seesen:</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Ihre PLZ für Fracht..."
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="flex-1 px-4 py-2 rounded-full bg-slate-900 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-amber-500"
                      />
                      <button
                        onClick={() => alert(`Speditionstarif für PLZ ${postalCode || '38723'}: 189 € (ab 5.000 € versandkostenfrei)`)}
                        className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 font-medium text-xs"
                      >
                        Prüfen
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Checkout Calculation Footer */}
              {cart.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span>Zwischensumme (Netto):</span>
                      <span className="font-mono text-white">
                        {subtotalNet.toLocaleString('de-DE')} €
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>MwSt. ({isB2B ? '19%' : '0% § 12 (3) UStG'}):</span>
                      <span className="font-mono text-emerald-400">
                        {vatAmount.toLocaleString('de-DE')} €
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Speditionsfracht:</span>
                      <span className="font-mono text-white">
                        {shippingCost === 0 ? 'Kostenfrei' : `${shippingCost} €`}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-white/10">
                      <span>Gesamtsumme:</span>
                      <span className="font-mono text-amber-300">
                        {grandTotal.toLocaleString('de-DE')} €
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => alert('Weiterleitung zum sicheren Checkout (Stripe / SEPA-Lastschrift / Kauf auf Rechnung).')}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer"
                    >
                      <span>Zur Kasse gehen (Verbindlich anfragen)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => alert('Warenkorb für 48 Stunden im Zentrallager Seesen reserviert.')}
                      className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition"
                    >
                      48h unverbindlich reservieren
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProductModal(null)}
          />
          <div className="relative w-full max-w-2xl bg-[#000000] border border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-mono text-amber-400 block uppercase">
                  {selectedProductModal.brand} · SKU: {selectedProductModal.sku}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {selectedProductModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProductModal(null)}
                className="p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <img
              src={selectedProductModal.imageUrl}
              alt={selectedProductModal.name}
              className="w-full h-64 rounded-2xl object-cover border border-white/10"
            />

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedProductModal.description}
            </p>

            {/* Technical Specifications */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-white font-mono uppercase">
                Technische Daten &amp; Zertifikate:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(selectedProductModal.specs).map(([k, v]) => (
                  <div key={k} className="p-3 rounded-xl bg-slate-950 border border-white/10">
                    <span className="text-slate-400 block text-[11px]">{k}</span>
                    <strong className="text-white font-mono">{v}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold font-mono text-amber-300 block">
                  {(isB2B
                    ? Math.round(selectedProductModal.pricePvlager * 0.95)
                    : selectedProductModal.pricePvlager
                  ).toLocaleString('de-DE')}{' '}
                  €
                </span>
                <span className="text-[11px] text-slate-400">
                  {isB2B ? 'zzgl. 19% MwSt.' : '0% MwSt. § 12 (3) UStG'}
                </span>
              </div>
              <button
                onClick={() => {
                  addToCart(selectedProductModal, 1);
                  setSelectedProductModal(null);
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20"
              >
                In den Warenkorb
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
