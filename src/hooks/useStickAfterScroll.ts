import { useEffect, useRef, type RefObject } from 'react';

export const useStickAfterScroll = (): RefObject<HTMLElement | null> => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const height = el.getBoundingClientRect().height;
      const stickyTop = -(height - window.innerHeight);
      el.style.setProperty('--sticky-top', `${Math.min(stickyTop, 0)}px`);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return ref;
};
