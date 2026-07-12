import { gsap } from 'gsap';

/**
 * One orchestrated entrance for the homepage hero: the dusk-wash
 * backdrop breathes in first, then the headline group rises.
 * Initial hidden states are set in CSS (html.js [data-hero-fade])
 * and only under prefers-reduced-motion: no-preference, so content
 * is never hidden for users who won't see the animation.
 */
export function playHeroEntrance() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const wash = document.querySelector('[data-hero-wash]');
  const faders = gsap.utils.toArray<HTMLElement>('[data-hero-fade]');
  if (!wash && faders.length === 0) return;

  const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  if (wash) {
    tl.from(wash, { opacity: 0, scale: 1.04, duration: 1.1, ease: 'power1.out' });
  }

  tl.to(
    faders,
    { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
    wash ? '-=0.7' : 0
  );
}
