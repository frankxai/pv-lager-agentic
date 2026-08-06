import Image from 'next/image';
import { img, caption } from '@/lib/media';

/**
 * One image primitive for the whole site. Space is always reserved from the real
 * intrinsic ratio (CLS stays at zero), and the caption sits on a hairline rather
 * than floating in a card — this brand is a document, not an app.
 */
export function Figure({
  slug,
  alt,
  priority = false,
  sizes = '(min-width: 1024px) 60rem, 100vw',
  className = '',
}: {
  slug: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  const m = img(slug);
  return (
    <figure className={className}>
      <div className="relative overflow-hidden bg-paper-2" style={{ aspectRatio: m.aspect }}>
        <Image
          src={m.src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 border-t border-rule-soft pt-3 text-sm text-ink-3">
        {caption(slug, alt)}
      </figcaption>
    </figure>
  );
}

/** Full-bleed variant for section openers — no caption, fixed cinematic ratio. */
export function Plate({
  slug,
  alt,
  priority = false,
  ratio = '16 / 9',
}: {
  slug: string;
  alt: string;
  priority?: boolean;
  ratio?: string;
}) {
  const m = img(slug);
  return (
    <div className="relative w-full overflow-hidden bg-paper-2" style={{ aspectRatio: ratio }}>
      <Image
        src={m.src}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
