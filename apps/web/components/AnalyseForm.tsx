'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { PRICING } from '@/lib/pricing';

type Errors = Partial<Record<'name' | 'email' | 'postalCode' | 'projectType', string>>;

const projectTypes = [
  { value: 'anwesen', label: 'Wohnhaus oder Anwesen' },
  { value: 'hof', label: 'Hof / landwirtschaftlicher Betrieb' },
  { value: 'gewerbe', label: 'Gewerbeobjekt' },
  { value: 'carport', label: 'Carport oder Überdachung' },
];

const budgets = [
  { value: 'unter-30', label: 'unter 30.000 €' },
  { value: '30-60', label: '30.000 – 60.000 €' },
  { value: '60-120', label: '60.000 – 120.000 €' },
  { value: 'ueber-120', label: 'über 120.000 €' },
  { value: 'offen', label: 'Noch offen' },
];

export function AnalyseForm() {
  const uid = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [projectId, setProjectId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const fid = (n: string) => `${uid}-${n}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? '').trim();

    const next: Errors = {};
    if (!get('name')) next.name = 'Bitte geben Sie Ihren Namen an.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(get('email')))
      next.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    if (!/^\d{5}$/.test(get('postalCode')))
      next.postalCode = 'Bitte geben Sie eine fünfstellige Postleitzahl an.';
    if (!get('projectType')) next.projectType = 'Bitte wählen Sie eine Objektart.';

    setErrors(next);
    if (Object.keys(next).length) {
      document.getElementById(fid(Object.keys(next)[0]))?.focus();
      return;
    }

    setState('sending');
    setServerError(null);
    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: get('name'),
          email: get('email'),
          phone: get('phone'),
          postalCode: get('postalCode'),
          projectType: get('projectType'),
          budgetRange: get('budgetRange'),
          sofortStart: fd.get('sofortStart') === 'on',
          notes: get('notes'),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error ?? 'Unbekannter Fehler.');
      setProjectId(json?.dossier?.projectId ?? null);
      setState('done');
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Unbekannter Fehler.');
      setState('error');
    }
  }

  if (state === 'done') {
    return (
      <div role="status" className="border border-rule bg-surface p-8">
        <p className="au-label text-copper-text">Eingegangen</p>
        <h2 className="mt-4 font-display text-title font-semibold">Ihre Anfrage liegt uns vor.</h2>
        <p className="mt-5 max-w-prose leading-relaxed text-ink-2">
          Wir prüfen Ihre Angaben und melden uns innerhalb eines Werktages mit einer Bestätigung und
          den nächsten Schritten. Sollten für die Analyse Angaben fehlen, fragen wir gezielt nach —
          es entsteht kein Termindruck.
        </p>
        {projectId ? (
          <p className="mt-6 border-t border-rule pt-5 text-sm text-ink-2">
            Ihre Vorgangsnummer: <span className="au-measure font-medium text-ink">{projectId}</span>
          </p>
        ) : null}
      </div>
    );
  }

  const field =
    'mt-2 block w-full min-h-[52px] border border-rule bg-surface px-4 text-base text-ink outline-none transition-colors duration-micro ease-au focus:border-ink';
  const label = 'block text-sm font-medium text-ink';
  const errCls = 'mt-2 text-sm text-copper-text';

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor={fid('name')} className={label}>
            Name
          </label>
          <input
            id={fid('name')}
            name="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? fid('name-err') : undefined}
            className={field}
          />
          {errors.name ? (
            <p id={fid('name-err')} className={errCls}>
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fid('email')} className={label}>
            E-Mail
          </label>
          <input
            id={fid('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? fid('email-err') : undefined}
            className={field}
          />
          {errors.email ? (
            <p id={fid('email-err')} className={errCls}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={fid('phone')} className={label}>
            Telefon <span className="font-normal text-ink-3">(optional)</span>
          </label>
          <input
            id={fid('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className={field}
          />
        </div>

        <div>
          <label htmlFor={fid('postalCode')} className={label}>
            Postleitzahl
          </label>
          <input
            id={fid('postalCode')}
            name="postalCode"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={5}
            aria-invalid={!!errors.postalCode}
            aria-describedby={errors.postalCode ? fid('postalCode-err') : undefined}
            className={field}
          />
          {errors.postalCode ? (
            <p id={fid('postalCode-err')} className={errCls}>
              {errors.postalCode}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset>
        <legend className={label}>Um welches Objekt geht es?</legend>
        <div className="mt-3 grid gap-px bg-rule-soft sm:grid-cols-2">
          {projectTypes.map((p) => (
            <label
              key={p.value}
              className="flex min-h-[52px] cursor-pointer items-center gap-3 bg-surface px-4 text-base text-ink has-[:checked]:bg-copper-soft"
            >
              <input
                type="radio"
                name="projectType"
                value={p.value}
                className="h-4 w-4 accent-[color:var(--au-copper)]"
              />
              {p.label}
            </label>
          ))}
        </div>
        {errors.projectType ? <p className={errCls}>{errors.projectType}</p> : null}
      </fieldset>

      <div>
        <label htmlFor={fid('budgetRange')} className={label}>
          Investitionsrahmen <span className="font-normal text-ink-3">(optional)</span>
        </label>
        <select id={fid('budgetRange')} name="budgetRange" className={field} defaultValue="">
          <option value="">Keine Angabe</option>
          {budgets.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={fid('notes')} className={label}>
          Was sollen wir wissen? <span className="font-normal text-ink-3">(optional)</span>
        </label>
        <textarea
          id={fid('notes')}
          name="notes"
          rows={4}
          className={`${field} min-h-[7rem] py-3 leading-relaxed`}
        />
      </div>

      {/*
        Deliberately unchecked by default. The Widerrufsbelehrung promises the customer
        decides this actively, and § 356 Abs. 4 BGB only lets the right lapse on express
        consent — a pre-ticked box would void both the promise and the legal basis.
      */}
      <label className="flex cursor-pointer items-start gap-3 border border-rule bg-surface p-5 text-[15px] leading-relaxed text-ink-2">
        <input type="checkbox" name="sofortStart" className="mt-1 h-4 w-4 shrink-0 accent-[color:var(--au-copper)]" />
        <span>
          Ich verlange ausdrücklich, dass Sie vor Ablauf der Widerrufsfrist mit der Analyse
          beginnen. Mir ist bekannt, dass ich mein{' '}
          <Link href="/widerruf" className="text-ink underline underline-offset-4">
            Widerrufsrecht
          </Link>{' '}
          mit vollständiger Erbringung verliere. Ohne dieses Häkchen beginnen wir nach Fristablauf.
        </span>
      </label>

      {state === 'error' ? (
        <p role="alert" className="border border-copper-text bg-copper-soft p-4 text-sm text-ink">
          Die Anfrage konnte nicht übermittelt werden: {serverError} Bitte versuchen Sie es erneut
          oder schreiben Sie uns direkt.
        </p>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-rule pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-2">
          <span className="au-measure font-medium text-ink">{PRICING.analyse.display}</span>{' '}
          — {PRICING.analyse.note}
        </p>
        <button
          type="submit"
          disabled={state === 'sending'}
          className="flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85 disabled:opacity-50"
        >
          {state === 'sending' ? 'Wird übermittelt …' : 'Analyse anfragen'}
        </button>
      </div>
    </form>
  );
}
