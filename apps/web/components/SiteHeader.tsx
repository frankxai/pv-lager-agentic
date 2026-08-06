'use client';

import { useState } from 'react';
import Link from 'next/link';

const nav = [
  { href: '/autarkie', label: 'Autarkie' },
  { href: '/analyse', label: 'Analyse' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/herkunft', label: 'Herkunft' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur-sm supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink transition-opacity duration-micro ease-au hover:opacity-70"
        >
          Aurevia
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-2 underline-offset-[6px] transition-colors duration-micro ease-au hover:text-ink hover:underline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/analyse"
            className="border border-ink px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-micro ease-au hover:bg-ink hover:text-paper"
          >
            Autarkie-Analyse
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="sr-only">{open ? 'Menü schließen' : 'Menü öffnen'}</span>
          <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" fill="none">
            <path
              d={open ? 'M3 2l14 10M17 2L3 12' : 'M0 1h20M0 7h20M0 13h20'}
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Hauptnavigation"
          className="border-t border-rule-soft bg-paper md:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-5 pt-1 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="au-row flex min-h-[52px] items-center text-base text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/analyse"
              onClick={() => setOpen(false)}
              className="mt-5 flex min-h-[52px] items-center justify-center border border-ink text-base font-medium text-ink"
            >
              Autarkie-Analyse
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
