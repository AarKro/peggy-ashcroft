export const getSectionTop = (el: HTMLElement): number => {
  if (!el.parentElement) return 0;
  let top = 0;
  for (const child of Array.from(el.parentElement.children)) {
    if (child === el) break;
    top += (child as HTMLElement).offsetHeight;
  }
  return top;
};

// claude came up with this formula and it works nicely so i am not questioning it further :)
const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

export const scrollToSection = (id: string, scrollDuration = 600) => {
  const el = document.getElementById(id);
  if (!el) return;

  const target = getSectionTop(el);
  const start = window.scrollY;
  const distance = target - start;

  if (distance === 0) return;

  history.replaceState(null, '', `#${id}`);

  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / scrollDuration, 1);
    window.scrollTo({ top: start + distance * easeInOutCubic(progress) });
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.focus({ preventScroll: true }); // move focus to target for screen readers
    }
  };

  requestAnimationFrame(step);
};

export const scrollToHash = () => {
  const hash = window.location.hash.slice(1);
  if (!hash) return;
  const el = document.getElementById(hash);
  if (!el) return;
  window.scrollTo({ top: getSectionTop(el), behavior: 'instant' });
};
