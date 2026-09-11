export function img(slug: string) {
  return {
    src: '/images/luxury-carport.jpg',
    width: 1200,
    height: 800,
    aspect: '16/9',
    alt: slug
  };
}

export function caption(slug: string, alt?: string) {
  return alt ? `${alt}` : `Zentrallager Seesen Photovoltaik Originalaufnahme: ${slug}`;
}
