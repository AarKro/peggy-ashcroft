import { useEffect, useRef, useState } from 'react';

export const useInView = (threshold = 0.3, selector?: string) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = selector ? document.querySelector(selector) : ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, selector]);

  return { ref, isVisible };
};
